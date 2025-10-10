import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Notification } from '../data/dataTypes';
import styles from '../styles/NotifCard.styles';
import IntervalSwitch from './ItemSwitch';

type NumberInputProps = {
    value?: number;
    label: string;
    onChange: (n: number) => void;
}
const NumberInput = ({ value, label, onChange }: NumberInputProps) => (
    <View style={local.selector}>
        <Text>{label}</Text>
        <TextInput
            style={local.input}
            keyboardType="numeric"
            value={value?.toString() ?? ''}
            onChangeText={t => onChange(Number(t))}
        />
    </View>
);

type NotificationTimesProps = {
    times: Date[];
    onAddTime: () => void;
};

const NotificationTimes = ({ times, onAddTime }: NotificationTimesProps) => (
    <View style={local.selector}>
        <Text>Notification Times:</Text>
        {times.map((t, i) => (
            <Text key={i}>{t.toLocaleTimeString()}</Text>
        ))}
        <TouchableOpacity onPress={onAddTime}>
            <Text style={{ color: 'blue' }}>+ Add Time</Text>
        </TouchableOpacity>
    </View>
);

type MultiDateSelectorProps = {
    dates: Date[];
    onAddDate: () => void;
    onRemoveDate: (index: number) => void;
};

const MultiDateSelector = ({ dates, onAddDate, onRemoveDate }: MultiDateSelectorProps) => (
    <View style={local.selector}>
        <Text>Selected Start Dates:</Text>
        {dates.map((item, index) => (
            <View style={local.row} key={index}>
                <Text>{item.toDateString()}</Text>
                <TouchableOpacity onPress={() => onRemoveDate(index)}>
                    <Text style={{ color: 'red', marginLeft: 8 }}>Remove</Text>
                </TouchableOpacity>
            </View>
        ))}
        <TouchableOpacity onPress={onAddDate}>
            <Text style={{ color: 'blue' }}>+ Add Start Date</Text>
        </TouchableOpacity>
    </View>
);

// ----------- Main component -------------
type NotifCardProps = {
    notification: Notification;
    onChange: (n: Notification) => void;
    onDelete?: () => void;
};

export default function NotifCard({ notification, onChange, onDelete }: NotifCardProps) {
    const [pickerVisible, setPickerVisible] = React.useState(false);
    const [pickerMode, setPickerMode] = React.useState<'date' | 'time'>('date');
    const [currentAction, setCurrentAction] =
        React.useState<'addStart' | 'addEnd' | 'addTime'>();

    // ----- derived values from notification -----
    const repeatMinutes = notification.repeatInterval;

    const intervalName =
        repeatMinutes === 1440
            ? 'Daily'
            : repeatMinutes === 10080
                ? 'Weekly'
                : repeatMinutes >= 40320
                    ? 'Monthly'
                    : '';

    // unique start/end dates (date part only)
    const startDates = React.useMemo(() => {
        const seen = new Set<string>();
        const result: Date[] = [];
        notification.nextRuns.forEach(d => {
            const dt = new Date(d);
            const key = dt.toISOString().slice(0, 10);
            if (!seen.has(key)) {
                seen.add(key);
                result.push(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
            }
        });
        return result;
    }, [notification.nextRuns]);

    const endDates = React.useMemo(() => {
        const seen = new Set<string>();
        const result: Date[] = [];
        notification.finalRuns.forEach(d => {
            const dt = new Date(d);
            const key = dt.toISOString().slice(0, 10);
            if (!seen.has(key)) {
                seen.add(key);
                result.push(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
            }
        });
        return result;
    }, [notification.finalRuns]);

    // unique times of day
    const notifTimes = React.useMemo(() => {
        const seen = new Set<string>();
        const times: Date[] = [];
        notification.nextRuns.forEach(d => {
            const t = new Date(d);
            const key = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
            if (!seen.has(key)) {
                seen.add(key);
                times.push(new Date(1970, 0, 1, t.getHours(), t.getMinutes(), t.getSeconds()));
            }
        });
        return times;
    }, [notification.nextRuns]);

    // occurrences estimate
    const occurances = React.useMemo(() => {
        if (!notification.nextRuns.length || !notification.finalRuns.length) return undefined;
        const first = new Date(notification.nextRuns[0]).getTime();
        const last = new Date(notification.finalRuns[0]).getTime();
        return Math.floor((last - first) / (1000 * 60 * repeatMinutes)) + 1;
    }, [notification.nextRuns, notification.finalRuns, repeatMinutes]);

    // ----- update helpers -----
    const updateNotification = (patch: Partial<Notification>) =>
        onChange({ ...notification, ...patch });

    const addStartDate = (date: Date) => {
        updateNotification({
            nextRuns: [...notification.nextRuns, date],
            finalRuns: [...notification.finalRuns, date],
        });
    };

    const removeStartDate = (i: number) => {
        const removeKey = startDates[i].toISOString().slice(0, 10);
        updateNotification({
            nextRuns: notification.nextRuns.filter(
                d => d.toISOString().slice(0, 10) !== removeKey
            ),
            finalRuns: notification.finalRuns.filter(
                d => d.toISOString().slice(0, 10) !== removeKey
            ),
        });
    };

    const addTime = (time: Date) => {
        // replicate this time for all start dates
        const withTime = startDates.flatMap(sd =>
            new Date(
                sd.getFullYear(),
                sd.getMonth(),
                sd.getDate(),
                time.getHours(),
                time.getMinutes(),
                time.getSeconds()
            )
        );
        updateNotification({
            nextRuns: [...notification.nextRuns, ...withTime],
            finalRuns: [...notification.finalRuns, ...withTime],
        });
    };

    // ----- date/time picker -----
    const showPicker = (action: typeof currentAction, mode: 'date' | 'time' = 'date') => {
        setCurrentAction(action);
        setPickerMode(mode);
        setPickerVisible(true);
    };

    const handleConfirm = (date: Date) => {
        if (currentAction === 'addStart') addStartDate(date);
        else if (currentAction === 'addTime') addTime(date);
        setPickerVisible(false);
    };

    // ----- render -----
    function renderIntervalSection() {
        if (intervalName === 'Daily') {
            const firstStart = startDates[0] ?? null;
            const firstEnd = endDates[0] ?? null;
            return (
                <View>
                    <TouchableOpacity style={local.selector} onPress={() => showPicker('addStart')}>
                        <Text>Start Date: {firstStart ? firstStart.toDateString() : 'Select'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={local.selector} onPress={() => showPicker('addStart')}>
                        <Text>End Date: {firstEnd ? firstEnd.toDateString() : 'Select'}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        if (intervalName === 'Weekly' || intervalName === 'Monthly') {
            return (
                <View>
                    <MultiDateSelector
                        dates={startDates}
                        onAddDate={() => showPicker('addStart')}
                        onRemoveDate={removeStartDate}
                    />
                    <NumberInput
                        label={intervalName === 'Weekly' ? 'Number of Weeks' : 'Number of Months'}
                        value={occurances}
                        onChange={n =>
                            updateNotification({ repeatInterval: notification.repeatInterval })
                        }
                    />
                </View>
            );
        }
        return null;
    }

    return (
        <View style={styles.container}>
            <IntervalSwitch
                data={[{ name: 'Daily' }, { name: 'Weekly' }, { name: 'Monthly' }]}
                onSwitch={item => {
                    const name = item.name.toLowerCase();
                    const minutes =
                        name === 'Daily' ? 1440 : name === 'Weekly' ? 10080 : 40320;
                    updateNotification({ repeatInterval: minutes });
                }}
                selectedItem={{ name: intervalName }}
                switchItem={'Interval'}
                text={'Select Interval'}
            />
            {renderIntervalSection()}
            <NotificationTimes times={notifTimes} onAddTime={() => showPicker('addTime', 'time')} />
            {onDelete && (
                <TouchableOpacity onPress={onDelete}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            )}

            <DateTimePickerModal
                isVisible={pickerVisible}
                mode={pickerMode}
                onConfirm={handleConfirm}
                onCancel={() => setPickerVisible(false)}
            />
        </View>
    );
}

// ---- local styles ----
const local = StyleSheet.create({
    row: { flexDirection: 'row', marginVertical: 8 },
    selector: { marginVertical: 8 },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        width: 80,
        marginTop: 4,
    },
    option: { padding: 8, marginHorizontal: 4, borderWidth: 1, borderRadius: 6 },
});