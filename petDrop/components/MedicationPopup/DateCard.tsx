import * as React from 'react';
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/DateCard.styles";
import { useState } from 'react';

type DateCardType = {
    date: Date;
    updateDates: Function;
    readonly: boolean;
}

const DateCard = ({ date, updateDates, readonly }: DateCardType) => {
    const [occurrances, setOccurrances] = useState(1);
    return (
        <View style={styles.container}>
            <View style={styles.dateCard}>
                <Text style={styles.dateText}>{date.toDateString()}</Text>
            </View>
            <View>
            <Text style={styles.occurrancesText}>Recurring for</Text>
            <View style={{flexDirection: 'row'}}>
            <TextInput
                style={styles.occurrancesInput}
                value={`${isNaN(occurrances) ? '' : occurrances}`}
                onChangeText={(e) => {
                    let num: number = Number.parseInt(e);
                    setOccurrances(num);
                    num = isNaN(num) ? 1 : num;
                    updateDates(date, num);
                }}
                editable={!readonly}
            />
            <Text style={styles.occurrancesText}>week(s)</Text>
            </View>
            </View>
        </View>
    )
};

export default DateCard;