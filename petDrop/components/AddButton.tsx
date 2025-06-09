import * as React from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import styles from '../styles/AddButton.styles';

type AddButtonType = {
	onPressFunction: () => void;
}

const AddButton = ({onPressFunction}: AddButtonType) => {
	return (
		<Pressable style={styles.addButton} onPress={onPressFunction}>
			<View style={styles.buttonContent}>
				<Text style={styles.buttonText}>+ ADD</Text>
			</View>
		</Pressable>
	);
};

export default AddButton;