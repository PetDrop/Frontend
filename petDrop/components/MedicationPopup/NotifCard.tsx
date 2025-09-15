import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import styles from '../../styles/NotifCard.styles';
import { useState } from 'react';
import { Notification, Reminder } from '../../data/dataTypes';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { enableExperimentalWebImplementation } from 'react-native-gesture-handler';

// ---------- helper sub-components ----------

// Switch between daily / weekly / monthly
const ItemSwitch = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (v: string) => void;
}) => {
    const options = ['daily', 'weekly', 'monthly'];
    return (
        <View style={local.row}>
            {options.map(opt => (
                <TouchableOpacity
                    key={opt}
                    style={[
                        local.option,
                        value === opt && { backgroundColor: '#87cefa' },
                    ]}
                    onPress={() => onChange(opt)}
                >
                    <Text>{opt}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

// Pick a single calendar date
const DateSelector = ({
    label,
    onPress,
    date,
}: {
    label: string;
    onPress: () => void;
    date?: Date;
}) => (
    <TouchableOpacity style={local.selector} onPress={onPress}>
        <Text>{label}: {date ? date.toDateString() : 'Select'}</Text>
    </TouchableOpacity>
);

// Choose which weekdays
const MultipleChoiceWeekdaySelection = ({
    value,
    onChange,
}: {
    value: string[];
    onChange: (days: string[]) => void;
}) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const toggle = (d: string) =>
        value.includes(d)
            ? onChange(value.filter(x => x !== d))
            : onChange([...value, d]);

    return (
        <View style={local.rowWrap}>
            {days.map(d => (
                <TouchableOpacity
                    key={d}
                    style={[
                        local.optionSmall,
                        value.includes(d) && { backgroundColor: '#87cefa' },
                    ]}
                    onPress={() => toggle(d)}
                >
                    <Text>{d}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

// Number input
const NumberOfOccurancesInput = ({
    value,
    onChange,
    label,
}: {
    value?: number;
    onChange: (n: number) => void;
    label: string;
}) => (
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

// List of notification times with “add time” button
const NotificationTimes = ({ times, onAddTime }: { times: Date[], onAddTime: () => void }) => (
    <View style={local.selector}>
        <Text>Notification Times:</Text>
        {times.map((time, index) => (
            <Text key={index}>{time.toLocaleTimeString()}</Text>
        ))}
        <TouchableOpacity onPress={onAddTime}>
            <Text style={{ color: 'blue' }}>+ Add Time</Text>
        </TouchableOpacity>
    </View>
);

// ---------- main component ----------
type NotifCardProps = {
    notification: Notification;
    setReminder: (rem: Reminder) => void;
}

const NotifCard = ({ notification, setReminder }: NotifCardProps) => {
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();
    const [occurances, setOccurances] = useState<number>();
    const [weekdays, setWeekdays] = useState<string[]>([]);
    const [notifTimes, setNotifTimes] = useState<Date[]>([]);
    const [interval, setInterval] = useState<'daily' | 'weekly' | 'monthly' | ''>('');
    const [dateTimePickerMode, setDateTimePickerMode] = useState<'date'|'time'>();
    const [dateTimePickerVisible, setDateTimePickerVisible] = useState(false);

    const addTime = () => {
        setDateTimePickerMode('time');
        setDateTimePickerVisible(true);
    };

    function renderBasedOnInterval(): React.JSX.Element {
        switch (interval) {
            case 'daily':
                return (
                    <View>
                        <DateSelector
                            label="Start Date"
                            date={startDate}
                            onPress={() => {
                                setDateTimePickerMode('date');
                                setDateTimePickerVisible(true);
                            }}
                        />
                        <DateSelector
                            label="End Date"
                            date={endDate}
                            onPress={() => {
                                setDateTimePickerMode('date');
                                setDateTimePickerVisible(true);
                            }}
                        />
                    </View>
                );
            case 'weekly':
                return (
                    <View>
                        <MultipleChoiceWeekdaySelection
                            value={weekdays}
                            onChange={setWeekdays}
                        />
                        <NumberOfOccurancesInput
                            label="Number of Weeks"
                            value={occurances}
                            onChange={setOccurances}
                        />
                    </View>
                );
            case 'monthly':
                return (
                    <View>
                        <DateSelector
                            label="Day of Month"
                            date={startDate}
                            onPress={() => {
                                setDateTimePickerMode('date');
                                setDateTimePickerVisible(true);
                            }}
                        />
                        <NumberOfOccurancesInput
                            label="Number of Months"
                            value={occurances}
                            onChange={setOccurances}
                        />
                    </View>
                );
            default:
                return <></>;
        }
    }

    return (
        <View style={styles.container}>
            <ItemSwitch value={interval} onChange={v => setInterval(v as any)} />
            {renderBasedOnInterval()}
            <NotificationTimes times={notifTimes} onAddTime={addTime} />

            <DateTimePickerModal
              date={new Date(Date.now())}
              isVisible={dateTimePickerVisible}
              mode={dateTimePickerMode}
              onConfirm={(date) => {}}
              onCancel={() => { setDateTimePickerVisible(false) }}
            />
        </View>
    );
};

export default NotifCard;

// local styling helpers
const local = StyleSheet.create({
    row: { flexDirection: 'row', marginVertical: 8 },
    rowWrap: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 },
    option: {
        padding: 8,
        marginHorizontal: 4,
        borderWidth: 1,
        borderRadius: 6,
    },
    optionSmall: {
        padding: 6,
        margin: 2,
        borderWidth: 1,
        borderRadius: 4,
    },
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
