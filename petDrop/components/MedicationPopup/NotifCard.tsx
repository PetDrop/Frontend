import * as React from 'react';
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/NotifCard.styles";
import { useState } from 'react';

type NotifCardProps = {
    setDatePickerVisible: Function;
}

const NotifCard = ({ }: NotifCardProps) => {
    return (
        <View style={styles.container}>
            {/* <Card style={row}>
                {dailyNotif ??
                (   <startDate />
                )
                :
                    <weekdaySelection />
                }
                <interval />
                <occurances />

            </Card> */}
        </View>
    );
};

export default NotifCard;