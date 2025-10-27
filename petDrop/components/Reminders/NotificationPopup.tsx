import React, { useState } from "react"
import { Pressable, View, Keyboard } from "react-native"
import { Image } from "expo-image";
import { emptyNotification, Notification } from "../../data/dataTypes";
import NotifCard from "../NotifCard";
import { notifState } from "../../data/enums";
import { Color } from "../../GlobalStyles";
import DeleteButton from "../CustomButton";
import SaveButton from "../CustomButton";
import CustomDateTimePicker from "../MedicationPopup/CustomDateTimePicker";
import styles from "../../styles/NotificationPopup.styles";

type NotificationPopupProps = {
    isActive: boolean;
    setPopupState: (s: notifState) => void;
    notif: Notification;
    notifCopy: Notification;
    setNotifCopy: (n: Notification) => void;
};

const NotificationPopup = ({ isActive, setPopupState, notif, notifCopy, setNotifCopy }: NotificationPopupProps) => {
    const [pickerVisible, setPickerVisible] = useState(false);
    const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');
    const [onPickerConfirm, setOnPickerConfirm] = useState<((date: Date) => void) | null>(null);
    const [localNotifState, setLocalNotifState] = useState<{ startDates: Date[], endDates: Date[], times: Date[], repeatInterval: string, occurrences: number }>({
        startDates: [],
        endDates: [],
        times: [],
        repeatInterval: notifCopy.repeatInterval || 'daily',
        occurrences: 1
    });

    const openPicker = (mode: 'date' | 'time', onConfirm: (date: Date) => void) => {
        setPickerMode(mode);
        setOnPickerConfirm(() => onConfirm);
        setPickerVisible(true);
    };

    const decideState = () => {
        const { startDates, endDates, times, repeatInterval, occurrences } = localNotifState;
        
        // Validation
        if (repeatInterval === '') {
            alert('Please select a repeat interval');
            return;
        }
        if (startDates.length === 0) {
            alert('Please select a start date');
            return;
        }
        if (times.length === 0) {
            alert('Please select at least one time');
            return;
        }
        if (repeatInterval === 'daily' && endDates.length === 0) {
            alert('Please select an end date for daily notifications');
            return;
        }

        // Generate nextRuns and finalRuns from local state
        const nextRuns: Date[] = [];
        const finalRuns: Date[] = [];

        if (repeatInterval === 'daily') {
            const startDate = startDates[0];
            const endDate = endDates[0] || startDate;

            // nextRuns: startDate x all times
            times.forEach(time => {
                const dateTime = new Date(
                    startDate.getFullYear(),
                    startDate.getMonth(),
                    startDate.getDate(),
                    time.getHours(),
                    time.getMinutes(),
                    time.getSeconds()
                );
                nextRuns.push(new Date(dateTime));
            });

            // finalRuns: endDate x all times
            times.forEach(time => {
                const dateTime = new Date(
                    endDate.getFullYear(),
                    endDate.getMonth(),
                    endDate.getDate(),
                    time.getHours(),
                    time.getMinutes(),
                    time.getSeconds()
                );
                finalRuns.push(new Date(dateTime));
            });
        } else {
            // For weekly/monthly intervals: nextRuns = startDates x times, finalRuns = endDates(determined from startDates + repeatInterval * occurrences) x times
            startDates.forEach(startDate => {
                times.forEach(time => {
                    // nextRuns: startDate x time
                    const startDateTime = new Date(
                        startDate.getFullYear(),
                        startDate.getMonth(),
                        startDate.getDate(),
                        time.getHours(),
                        time.getMinutes(),
                        time.getSeconds()
                    );
                    nextRuns.push(new Date(startDateTime));

                    // finalRuns: endDate (startDate + repeatInterval * occurrences) x time
                    const endDate = new Date(startDate);
                    if (repeatInterval === 'weekly') {
                        endDate.setDate(endDate.getDate() + (occurrences - 1) * 7);
                    } else if (repeatInterval === 'monthly') {
                        endDate.setMonth(endDate.getMonth() + (occurrences - 1));
                    }

                    const endDateTime = new Date(
                        endDate.getFullYear(),
                        endDate.getMonth(),
                        endDate.getDate(),
                        time.getHours(),
                        time.getMinutes(),
                        time.getSeconds()
                    );
                    finalRuns.push(new Date(endDateTime));
                });
            });
        }

        setNotifCopy({
            ...notifCopy,
            nextRuns,
            finalRuns,
            repeatInterval: repeatInterval
        });

        // check if new notif was being created
        if (notif.id === '') {
            setPopupState(notifState.NOTIF_CREATED);
            return;
        }
        const notifFieldsToCheck: (keyof Notification)[] = ["id", "title", "body", "data", "nextRuns", "finalRuns", "repeatInterval"];
        for (const field of notifFieldsToCheck) {
            if (notif[field] !== notifCopy[field]) { // notifCopy was edited
                setPopupState(notifState.NOTIF_EDITED);
                return;
            }
        }
        // no change was found
        setPopupState(notifState.NO_ACTION);
    }

    if (isActive) {
        return (
            <Pressable 
                style={styles.modalBackground}
                onPress={() => Keyboard.dismiss()}
            >
                {/* Background container */}
                <View style={styles.modalContainer}>
                    {/* close button */}
                    <Pressable 
                        onPress={() => { setPopupState(notifState.NO_ACTION) }} 
                        style={styles.closeButton}
                    >
                        <Image
                            style={styles.closeIcon}
                            contentFit="cover"
                            source={require("../../assets/remove_x_blue.png")}
                        />
                    </Pressable>

                    {/* card where user edits the notif */}
                    <NotifCard
                        notification={notifCopy}
                        onChange={updatedNotif => setNotifCopy(updatedNotif)}
                        onDelete={() => { setNotifCopy(emptyNotification) }}
                        onOpenPicker={(mode, handler) => openPicker(mode, handler)}
                        onStateChange={(state) => setLocalNotifState(state)}
                    />

                    {/* save button */}
                    <View style={styles.buttonContainer}>
                        <SaveButton
                            onPressFunction={() => decideState()}
                            innerText={'save'}
                            color={Color.colorCornflowerblue}
                            disabled={false}
                        />
                    </View>

                    {/* delete button */}
                    {notif.id !== '' && (
                        <View style={styles.buttonContainer}>
                            <DeleteButton
                                onPressFunction={() => { setPopupState(notifState.NOTIF_DELETED) }}
                                innerText={'delete'}
                                color={Color.colorFirebrick}
                                disabled={false}
                            />
                        </View>
                    )}
                </View>

                <CustomDateTimePicker
                    isVisible={pickerVisible}
                    mode={pickerMode}
                    onConfirm={(date: Date) => {
                        onPickerConfirm?.(date);
                        setPickerVisible(false);
                    }}
                    onCancel={() => setPickerVisible(false)}
                />
            </Pressable>
        );
    }
};

export default NotificationPopup;