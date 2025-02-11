import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Color, FontFamily, FontSize, Border } from '../../GlobalStyles';
import { styles } from '../../styles/Reminders.styles';

const { width, height } = Dimensions.get('window');

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