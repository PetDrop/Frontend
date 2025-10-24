import React, { useState } from "react"
import { Platform, Pressable, View } from "react-native"
import { Image } from "expo-image";
import { emptyNotification, Notification } from "../../data/dataTypes";
import NotifCard from "../NotifCard";
import { notifState } from "../../data/enums";
import { Color } from "../../GlobalStyles";
import DeleteButton from "../CustomButton";
import SaveButton from "../CustomButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
    const [occurences, setOccurences] = useState<number>(1);

    const openPicker = (mode: 'date' | 'time', onConfirm: (date: Date) => void) => {
        setPickerMode(mode);
        setOnPickerConfirm(() => onConfirm);
        setPickerVisible(true);
    };

    const handleOccurrenceChange = (occ: number) => {
        setOccurences(occ);
    };

    const decideState = () => {
        // update the final runs of the notif
        const newFinalRuns = notifCopy.nextRuns.map(start => {
            const end = new Date(start);
            end.setTime(start.getTime() + notifCopy.repeatInterval * (occurences - 1));
            return end;
        });
        setNotifCopy({
            ...notifCopy,
            finalRuns: newFinalRuns,
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
            <View style={{ position: 'absolute', top: 400, left: 50 }}>
                {/* close button */}
                <Pressable onPress={() => { setPopupState(notifState.NO_ACTION) }} style={{}}>
                    <Image
                        style={{}}
                        contentFit="cover"
                        source={require("../../assets/remove_x_white.png")}
                    />
                </Pressable>

                {/* card where user edits the notif */}
                <NotifCard
                    notification={notifCopy}
                    onChange={updatedNotif => setNotifCopy(updatedNotif)}
                    onDelete={() => { setNotifCopy(emptyNotification) }}
                    onOpenPicker={(mode, handler) => openPicker(mode, handler)}
                    onOccurrenceChange={handleOccurrenceChange}
                />

                {/* save button */}
                <View style={{}}>
                    <SaveButton
                        onPressFunction={() => decideState()}
                        innerText={'save'}
                        color={Color.colorCornflowerblue}
                    />
                </View>

                {/* delete button */}
                {notif.id !== '' && (
                    <View style={{}}>
                        <DeleteButton
                            onPressFunction={() => { setPopupState(notifState.NOTIF_DELETED) }}
                            innerText={'delete'}
                            color={Color.colorFirebrick}
                        />
                    </View>
                )}

                <DateTimePickerModal
                    isVisible={pickerVisible}
                    mode={pickerMode}
                    onConfirm={(date) => {
                        onPickerConfirm?.(date);
                        setPickerVisible(false);
                    }}
                    onCancel={() => setPickerVisible(false)}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    modalPropsIOS={{ presentationStyle: 'overFullScreen' }}
                />
            </View>
        );
    }
};

export default NotificationPopup;