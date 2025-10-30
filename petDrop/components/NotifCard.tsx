import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Keyboard, Platform } from 'react-native';
import { Notification } from '../data/dataTypes';
import styles from '../styles/NotifCard.styles';
import IntervalSwitch from './ItemSwitch';

type NumberInputProps = {
    value?: number;
    label: string;
    onChange: (n: number) => void;
}
const NumberInput = ({ value, label, onChange }: NumberInputProps) => (
    <View style={styles.numberInputContainer}>
        <Text style={styles.numberInputLabel}>{label}</Text>
        <TextInput
            style={styles.numberInput}
            keyboardType="numeric"
            value={value?.toString() ?? ''}
            onChangeText={t => onChange(Number(t))}
        />
    </View>
);

type NotificationTimesProps = {
    times: Date[];
    onAddTime: () => void;
    onRemoveTime: (index: number) => void;
};

const NotificationTimes = ({ times, onAddTime, onRemoveTime }: NotificationTimesProps) => (
    <View style={styles.selectorContainer}>
        <Text style={styles.selectorText}>Notification Times:</Text>
        {times.map((t, i) => (
            <View style={styles.row} key={i}>
                <Text style={styles.rowText}>{t.toLocaleTimeString()}</Text>
                <TouchableOpacity onPress={() => onRemoveTime(i)}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        ))}
        <TouchableOpacity onPress={onAddTime} style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add Time</Text>
        </TouchableOpacity>
    </View>
);

type MultiDateSelectorProps = {
    dates: Date[];
    onAddDate: () => void;
    onRemoveDate: (index: number) => void;
};

const MultiDateSelector = ({ dates, onAddDate, onRemoveDate }: MultiDateSelectorProps) => (
    <View style={styles.selectorContainer}>
        <Text style={styles.selectorText}>Selected Start Dates:</Text>
        {dates.map((item, index) => (
            <View style={styles.row} key={index}>
                <Text style={styles.rowText}>{item.toDateString()}</Text>
                <TouchableOpacity onPress={() => onRemoveDate(index)}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        ))}
        <TouchableOpacity onPress={onAddDate} style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add Start Date</Text>
        </TouchableOpacity>
    </View>
);

// ----------- Main component -------------
type NotifCardProps = {
    notification: Notification;
    onChange: (n: Notification) => void;
    onDelete?: () => void;
    onOccurrenceChange?: (n: number) => void;
    onOpenPicker?: (mode: 'date' | 'time', onConfirm: (date: Date) => void) => void;
    onStateChange?: (state: { startDates: Date[], endDates: Date[], times: Date[], repeatInterval: string, occurrences: number }) => void;
};

export default function NotifCard({ notification, onChange, onDelete, onOccurrenceChange, onOpenPicker, onStateChange }: NotifCardProps) {
    const [currentAction, setCurrentAction] = React.useState<'addStart' | 'addEnd' | 'addTime'>();
    const [occurrences, setOccurrences] = useState<number>(1);
    const [localRepeatInterval, setLocalRepeatInterval] = useState<string>(notification.repeatInterval || 'daily');
    
    // Local state to track user inputs
    const [localStartDates, setLocalStartDates] = useState<Date[]>(() => {
        // Extract unique start dates from existing notification
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
    });
    const [localEndDates, setLocalEndDates] = useState<Date[]>(() => {
        // Extract unique end dates from existing notification
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
    });
    const [localTimes, setLocalTimes] = useState<Date[]>(() => {
        // Extract unique times from existing notification
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
    });

    // Update parent with local state changes
    useEffect(() => {
        onStateChange?.({
            startDates: localStartDates,
            endDates: localEndDates,
            times: localTimes,
            repeatInterval: localRepeatInterval,
            occurrences: occurrences
        });
    }, [localStartDates, localEndDates, localTimes, localRepeatInterval, occurrences]);

    // Validate end date when interval changes to daily
    useEffect(() => {
        if (localRepeatInterval === 'daily' && localStartDates.length > 0 && localEndDates.length > 0) {
            const startDate = localStartDates[0];
            const endDate = localEndDates[0];
            const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            
            if (endDateOnly < startDateOnly) {
                setLocalEndDates([]);
            }
        }
    }, [localRepeatInterval]);

    // ----- update helpers -----
    const addStartDate = (date: Date) => {
        // For daily, replace the start date instead of adding to array
        if (localRepeatInterval === 'daily') {
            setLocalStartDates([date]);
            
            // If we have an end date that's now invalid, clear it
            if (localEndDates.length > 0) {
                const endDate = localEndDates[0];
                const startDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
                
                if (endDateOnly < startDateOnly) {
                    setLocalEndDates([]);
                }
            }
        } else {
            // For weekly/monthly, add to the array
            setLocalStartDates(prev => [...prev, date]);
        }
    };

    const addEndDate = (date: Date) => {
        // validate that end date is not before start date
        if (localRepeatInterval === 'daily' && localStartDates.length > 0) {
            const startDate = localStartDates[0];
            const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            const endDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            
            if (endDateOnly < startDateOnly) {
                // Show error or prevent adding - for now, we'll just not add it
                return;
            }
            // For daily, replace the end date instead of adding to array
            setLocalEndDates([date]);
        }
    };

    const removeStartDate = (i: number) => {
        setLocalStartDates(prev => prev.filter((_, index) => index !== i));
    };

    const addTime = (time: Date) => {
        setLocalTimes(prev => [...prev, time]);
    };

    const removeTime = (index: number) => {
        setLocalTimes(prev => prev.filter((_, i) => i !== index));
    };

    // ----- date/time picker -----
    const showPicker = (action: typeof currentAction, mode: 'date' | 'time' = 'date') => {
        Keyboard.dismiss();
        setCurrentAction(action);
        
        // Create a handler that captures the action at the time of creation
        const handleConfirmWithAction = (date: Date) => {
            if (action === 'addStart') addStartDate(date);
            else if (action === 'addEnd') addEndDate(date);
            else if (action === 'addTime') addTime(date);
        };
        
        onOpenPicker?.(mode, handleConfirmWithAction);
    };

    // ----- render -----
    function renderIntervalSection() {
        if (localRepeatInterval === 'daily') {
            const firstStart = localStartDates[0] ?? null;
            const firstEnd = localEndDates[0] ?? null;
            return (
                <View style={styles.selectorContainer}>
                    <Text style={styles.selectorText}>Start Date: {firstStart ? firstStart.toDateString() : 'Select'}</Text>
                    <TouchableOpacity style={styles.selectorButton} onPress={() => showPicker('addStart')}>
                        <Text style={styles.selectorButtonText}>Select Start Date</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.selectorText}>End Date: {firstEnd ? firstEnd.toDateString() : 'Select'}</Text>
                    <TouchableOpacity style={styles.selectorButton} onPress={() => showPicker('addEnd')}>
                        <Text style={styles.selectorButtonText}>Select End Date</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        if (localRepeatInterval === 'weekly' || localRepeatInterval === 'monthly') {
            return (
                <View>
                    <MultiDateSelector
                        dates={localStartDates}
                        onAddDate={() => showPicker('addStart')}
                        onRemoveDate={removeStartDate}
                    />
                    <NumberInput
                        label={localRepeatInterval === 'weekly' ? 'Number of Weeks' : 'Number of Months'}
                        value={occurrences}
                        onChange={n => {
                            setOccurrences(n);
                            onOccurrenceChange?.(n);
                        }}
                    />
                </View>
            );
        }
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.intervalSwitchContainer}>
                <IntervalSwitch
                    data={[{ name: 'daily' }, { name: 'weekly' }, { name: 'monthly' }]}
                    onSwitch={item => {
                        const name = item.name;
                        setLocalRepeatInterval(name);
                    }}
                    selectedItem={{ name: localRepeatInterval }}
                    switchItem={'Interval'}
                    text={localRepeatInterval}
                />
            </View>
            {renderIntervalSection()}
            <NotificationTimes times={localTimes} onAddTime={() => showPicker('addTime', 'time')} onRemoveTime={removeTime} />
            {onDelete && (
                <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>Delete Notification</Text>
                </TouchableOpacity>
            )}

            {/* Picker rendered in parent MedicationPopup */}
        </View>
    );
}