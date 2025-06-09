import * as React from 'react';
import { Text, Pressable, Dimensions } from 'react-native';
import styles from '../styles/CustomButton.styles';

const { width } = Dimensions.get('window');

type CustomButtonType = {
    onPressFunction: () => void;
    innerText: string;
    color: string;
}

const CustomButton = ({ onPressFunction, innerText, color }: CustomButtonType) => {
    return (
        <Pressable style={[styles.customButton, {width: ((width * 0.1) + innerText.length * (width * 0.03))}, {backgroundColor: color}]} onPress={onPressFunction}>
            <Text style={styles.customText}>{innerText}</Text>
        </Pressable>
    );
};

export default CustomButton;