import * as React from 'react';
import { Text, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../styles/CustomButton.styles';

const { width } = Dimensions.get('window');

type CustomButtonType = {
    onPressFunction: () => void;
    innerText: string;
    color: string;
    disabled: boolean;
}

const CustomButton = ({ onPressFunction, innerText, color, disabled }: CustomButtonType) => {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.customButton, {width: ((width * 0.1) + innerText.length * (width * 0.03))}, {backgroundColor: color}]} onPress={onPressFunction}>
            <Text style={styles.customText}>{innerText}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;