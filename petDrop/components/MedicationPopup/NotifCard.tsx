import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Notification } from '../../data/dataTypes';
import styles from '../../styles/NotifCard.styles';
import IntervalSwitch from '../ItemSwitch';

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
        <FlatList
            data={dates}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item, index }) => (
                <View style={local.row}>
                    <Text>{item.toDateString()}</Text>
                    <TouchableOpacity onPress={() => onRemoveDate(index)}>
                        <Text style={{ color: 'red', marginLeft: 8 }}>Remove</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
        <TouchableOpacity onPress={onAddDate}>
            <Text style={{ color: 'blue' }}>+ Add Start Date</Text>
        </TouchableOpacity>
    </View>
);

// ----------- Main component -------------
type NotifCardProps = { notification: Notification };

export default function NotifCard({ notification }: NotifCardProps) {
    const [id, setId] = useState<string>('');
    const [interval, setInterval] = useState<{ name: string }>({ name: '' });
    const [notifTimes, setNotifTimes] = useState<Date[]>([]);
    const [occurances, setOccurances] = useState<number>();
    const [startDates, setStartDates] = useState<Date[]>([]);
    const [endDates, setEndDates] = useState<Date[]>([]);
    const [pickerVisible, setPickerVisible] = useState(false);
    const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');
    const [currentAction, setCurrentAction] = useState<'addStart' | 'addEnd' | 'addTime'>();

    // populate states using fields from notification
    useEffect(() => {
        if (!notification) return;

        setId(notification.id);

        // interval from repeatInterval
        const mins = notification.repeatInterval;
        if (mins === 1440) setInterval({ name: 'daily' });
        else if (mins === 10080) setInterval({ name: 'weekly' });
        else if (mins >= 40320) setInterval({ name: 'monthly' });
        else setInterval({ name: '' });

        // unique calendar dates from nextRuns
        const uniqueStartDates: Date[] = [];
        const seenStartDays = new Set<string>();
        notification.nextRuns.forEach(d => {
            const dt = new Date(d);
            const key = dt.toISOString().slice(0, 10);
            if (!seenStartDays.has(key)) {
                seenStartDays.add(key);
                uniqueStartDates.push(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
            }
        });
        setStartDates(uniqueStartDates);

        // unique calendar dates from finalRuns
        // only first index needed for a daily interval
        if (interval.name === 'Daily') {
            const dt = new Date(notification.finalRuns[0]);
            setEndDates([new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())]);
        } else {
            const uniqueEndDates: Date[] = [];
            const seenEndDays = new Set<string>();
            notification.finalRuns.forEach(d => {
                const dt = new Date(d);
                const key = dt.toISOString().slice(0, 10);
                if (!seenEndDays.has(key)) {
                    seenEndDays.add(key);
                    uniqueEndDates.push(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
                }
            });
            setEndDates(uniqueEndDates);
        }

        // occurances done by dividing time difference between first and last run by the interval
        if (notification.nextRuns.length && notification.finalRuns.length) {
            const first = new Date(notification.nextRuns[0]).getTime();
            const last = new Date(notification.finalRuns[0]).getTime();
            const diffMinutes = (last - first) / (1000 * 60);
            setOccurances(Math.floor(diffMinutes / mins) + 1);
        } else {
            setOccurances(undefined);
        }

        // unique times of day from nextRuns
        const seenTimes = new Set<string>();
        const times: Date[] = [];
        notification.nextRuns.forEach(d => {
            const t = new Date(d);
            const key = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
            if (!seenTimes.has(key)) {
                seenTimes.add(key);
                times.push(
                    new Date(1970, 0, 1, t.getHours(), t.getMinutes(), t.getSeconds())
                );
            }
        });
        setNotifTimes(times);
    }, [notification]);


    const showPicker = (action: typeof currentAction, mode: 'date' | 'time' = 'date') => {
        setCurrentAction(action);
        setPickerMode(mode);
        setPickerVisible(true);
    };

    const handleConfirm = (date: Date) => {
        switch (currentAction) {
            case 'addStart':
                setStartDates(prev => [...prev, date]);
                setEndDates(prev => [...prev, date]); // keep arrays aligned
                break;
            case 'addEnd':
                // TODO - not sure if this works
                setEndDates(prev => {
                    const copy = [...prev];
                    // update last or create parallel index
                    copy[copy.length - 1] = date;
                    return copy;
                });
                break;
            case 'addTime':
                setNotifTimes(prev => [...prev, date]);
                break;
        }
        setPickerVisible(false);
    };

    // Render logic
    function renderIntervalSection() {
        if (interval.name === 'daily') {
            // Show only the first start/end from arrays
            const firstStart = startDates[0] ?? null;
            const firstEnd = endDates[0] ?? null;
            return (
                <View>
                    <TouchableOpacity
                        style={local.selector}
                        onPress={() => showPicker('addStart')}
                    >
                        <Text>
                            Start Date:{' '}
                            {firstStart ? firstStart.toDateString() : 'Select'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={local.selector}
                        onPress={() => showPicker('addEnd')}
                    >
                        <Text>
                            End Date: {firstEnd ? firstEnd.toDateString() : 'Select'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }

        if (interval.name === 'weekly' || interval.name === 'monthly') {
            return (
                <View>
                    <MultiDateSelector
                        dates={startDates}
                        onAddDate={() => showPicker('addStart')}
                        onRemoveDate={index => {
                            setStartDates(s => s.filter((_, i) => i !== index));
                            setEndDates(e => e.filter((_, i) => i !== index));
                        }}
                    />
                    <NumberInput
                        label={interval.name === 'weekly' ? 'Number of Weeks' : 'Number of Months'}
                        value={occurances}
                        onChange={setOccurances}
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
                onSwitch={setInterval}
                selectedItem={interval}
                switchItem={'Interval'}
                text={'Select Interval'}
            />
            {renderIntervalSection()}
            <NotificationTimes
                times={notifTimes}
                onAddTime={() => showPicker('addTime', 'time')}
            />

            <DateTimePickerModal
                isVisible={pickerVisible}
                mode={pickerMode}
                onConfirm={handleConfirm}
                onCancel={() => setPickerVisible(false)}
            />
        </View>
    );
}

// --------- Local styles ----------
const local = StyleSheet.create({
    row: { flexDirection: 'row', marginVertical: 8 },
    option: { padding: 8, marginHorizontal: 4, borderWidth: 1, borderRadius: 6 },
    optionSelected: { backgroundColor: '#87cefa' },
    selector: { marginVertical: 8 },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        width: 80,
        marginTop: 4,
    },
});
