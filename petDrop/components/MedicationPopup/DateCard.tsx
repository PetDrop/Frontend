import * as React from 'react';
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/DateCard.styles";
import { useState } from 'react';
import { DateObj } from '../../data/dataTypes';

type DateCardType = {
    dateObj: DateObj;
    updateDates: Function;
    readonly: boolean;
}

const DateCard = ({ dateObj, updateDates, readonly }: DateCardType) => {
    const [occurrances, setOccurrances] = useState(dateObj.recurrances);
    
    if (dateObj.endDate.length > 0) {
        return (
            <View style={styles.container}>
                <View style={styles.dateCard}>
                    <Text style={styles.dateText}>{`${dateObj.startDate} to ${dateObj.endDate}`}</Text>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.dateCard}>
                    <Text style={styles.dateText}>{dateObj.startDate}</Text>
                </View>
                <View>
                    <Text style={styles.occurrancesText}>Recurring for</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.occurrancesInput}
                            value={`${isNaN(occurrances) ? '' : occurrances}`}
                            onChangeText={(e) => {
                                let num: number = Number.parseInt(e);
                                setOccurrances(num);
                                num = isNaN(num) ? 1 : num;
                                updateDates(dateObj.startDate, undefined, num);
                            }}
                            editable={!readonly}
                        />
                        <Text style={styles.occurrancesText}>week(s)</Text>
                    </View>
                </View>
            </View>
        )
    }
};

export default DateCard;