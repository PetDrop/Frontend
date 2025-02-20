import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/Medications.styles';

const AddButton = () => {
	return (
		<Pressable style={styles.addButton}>
			<View style={styles.buttonContent}>
				<Text style={styles.buttonText}>+ ADD</Text>
			</View>
		</Pressable>
	);
};

export default AddButton;