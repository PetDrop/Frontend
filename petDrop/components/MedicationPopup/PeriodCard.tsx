import * as React from 'react';
import { View, Text, TextInput, Button } from "react-native";
import styles from "../../styles/PeriodCard.styles";
import { datePicker } from '../../data/enums';;

type PeriodCardType = {
    startDate: Date | undefined;
    endDate: Date | undefined;
    modalFunction: Function;
}

const PeriodCard = ({ startDate, endDate, modalFunction }: PeriodCardType) => {
    return (
        <View style={styles.periodCard}>
            {startDate ?
                <Text style={styles.dateText}>{`${startDate.toISOString().slice(0, 10)}`}</Text>
                : <Button title='Choose Date' onPress={() => { modalFunction(datePicker.START_DATE) }}></Button>
            }
            <Text style={styles.dateText}>{` to `}</Text>
            {endDate ?
                <Text style={styles.dateText}>{`${endDate.toISOString().slice(0, 10)}`}</Text>
                : <Button title='Choose Date' onPress={() => { modalFunction(datePicker.END_DATE) }}></Button>
            }
        </View>
    )
};

export default PeriodCard;