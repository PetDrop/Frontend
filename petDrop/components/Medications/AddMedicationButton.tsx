import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import styles from '../../styles/Medications.styles';

const AddMedicationButton = () => {
	return (
		<Pressable style={styles.addButton}>
			<View style={styles.buttonContent}>
				<Text style={styles.buttonText}>+ ADD</Text>
			</View>
		</Pressable>
	);
};

export default AddMedicationButton;