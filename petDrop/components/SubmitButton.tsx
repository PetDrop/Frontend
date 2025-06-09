import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/SubmitButton.styles';

type SubmitButtonType = {
	onPressFunction: () => void;
}

const SubmitButton = ({onPressFunction}: SubmitButtonType) => {
    return (
		<Pressable style={styles.submitButton} onPress={onPressFunction}>
            <Text style={styles.submitText}>SUBMIT</Text>
        </Pressable>
    );
};

export default SubmitButton;