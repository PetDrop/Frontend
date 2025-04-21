import * as React from 'react';
import { Text, Pressable, Dimensions } from 'react-native';
import styles from '../styles/CustomButton.styles';

const { width } = Dimensions.get('window');

type CustomButtonType = {
    onPressFunction: () => void;
    innerText: string;
}

const CustomButton = ({ onPressFunction, innerText }: CustomButtonType) => {
    return (
        <Pressable style={[styles.customButton, {width: ((width * 0.1) + innerText.length * (width * 0.035))}]} onPress={onPressFunction}>
            <Text style={styles.customText}>{innerText}</Text>
        </Pressable>
    );
};

export default CustomButton;