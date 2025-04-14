import * as React from 'react';
import { View, Pressable, Text } from "react-native";
import styles from "../styles/DateCard.styles";
import { useState } from 'react';
import { Color } from '../GlobalStyles';

type DateCardType = {
    date: string;
}

const DateCard = ({ date }: DateCardType) => {
    const [recurring, setRecurring] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.dateCard}>
                <Text style={styles.dateText}>{date}</Text>
            </View>
            <Text style={styles.checkboxText}>Recurring?</Text>
            <Pressable onPress={() => { setRecurring(!recurring) }}>
                <View style={[styles.checkbox, recurring && { backgroundColor: Color.colorCornflowerblue }]} />
            </Pressable>
        </View>
    )
};

export default DateCard;