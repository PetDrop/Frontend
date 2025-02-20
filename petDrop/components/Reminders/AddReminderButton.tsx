import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { styles } from '../../styles/Reminders.styles';

const AddReminderButton = () => {
	return (
		<Pressable style={styles.addButton}>
			<View style={styles.buttonContent}>
				<Text style={styles.buttonText}>+ ADD</Text>
			</View>
		</Pressable>
	);
};

export default AddReminderButton;