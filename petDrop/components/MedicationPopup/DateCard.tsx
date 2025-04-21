import * as React from 'react';
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/DateCard.styles";
import { useState } from 'react';

type DateCardType = {
    date: Date;
    updateDates: Function;
}

const DateCard = ({ date, updateDates }: DateCardType) => {
    const [occurrances, setOccurrances] = useState(0);
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
                value={`${occurrances === 0 ? '' : occurrances}`}
                onChangeText={(e) => {
                    let num: number = Number.parseInt(e);
                    num = isNaN(num) ? 0 : num;
                    setOccurrances(num);
                    updateDates(date, num);
                }}
            />
            <Text style={styles.occurrancesText}>weeks</Text>
            </View>
            </View>
        </View>
    )
};

export default DateCard;