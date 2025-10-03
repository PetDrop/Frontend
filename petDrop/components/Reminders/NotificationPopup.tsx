import React from "react"
import { Pressable, View } from "react-native"
import { Image } from "expo-image";
import { emptyNotification, Notification } from "../../data/dataTypes";
import NotifCard from "../NotifCard";
import { notifState } from "../../data/enums";
import { Color } from "../../GlobalStyles";
import DeleteButton from "../CustomButton";
import SaveButton from "../CustomButton";

type NotificationPopupProps = {
    isActive: boolean;
    setPopupState: (s: notifState) => void;
    notif: Notification;
    notifCopy: Notification;
    setNotifCopy: (n: Notification) => void;
};

const NotificationPopup = ({ isActive, setPopupState, notif, notifCopy, setNotifCopy }: NotificationPopupProps) => {

    const decideState = () => {
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
            <View>
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
            </View>
        );
    }
};

export default NotificationPopup;