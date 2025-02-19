import React from 'react';
import { Dimensions, Text, View, Pressable } from 'react-native';
import { styles } from '../../styles/Reminders.styles';
import EditIcon from '../../assets/edit_icon.svg';

interface ReminderProps {
	reminder: {
		id: number;
		name: string;
		dates: string[];
		notifications: string[];
		message: string;
		color: string;
        medication: string;
        pet: string;
	};
}

const ReminderCard = ({ reminder }: ReminderProps) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.header}>
                <View style={[styles.reminderColor, { backgroundColor: reminder.color }]}>
                </View>
				<Text style={styles.reminderTitle}>{reminder.name}</Text>
				<Pressable>
					<EditIcon style={styles.editIcon} />
				</Pressable>
			</View>
			<View style={styles.body}>
				<Text style={styles.reminderDetails}>
					DATES: {reminder.dates}
				</Text>
				<Text style={styles.reminderDetails}>
					NOTIFICATIONS: {reminder.notifications}
				</Text>
				<Text style={styles.reminderDetails}>
					MESSAGE: "{reminder.message}"
				</Text>
			</View>
		</View>
	);
};

export default ReminderCard;