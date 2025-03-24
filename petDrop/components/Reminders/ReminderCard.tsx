import * as React from 'react';
import { Dimensions, Text, View, Pressable } from 'react-native';
import { styles } from '../../styles/Reminders.styles';
import EditIcon from '../../assets/edit_icon.svg';
import { Reminder } from '../../data/dataTypes';

type ReminderCardProps = {
	reminder: Reminder;
}

const ReminderCard = ({ reminder }: ReminderCardProps) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.header}>
				<View style={styles.innerHeader}>
					<View style={[styles.reminderColor, { backgroundColor: reminder.medication.color }]} />
					<Text style={styles.reminderTitle}>{reminder.medication.name}</Text>
				</View>
				<Pressable>
					<EditIcon style={styles.editIcon} />
				</Pressable>
			</View>
			<View style={styles.body}>
				<Text style={styles.reminderDetails}>
					DATES: {reminder.medication.dates}
				</Text>
				<Text style={styles.reminderDetails}>
					NOTIFICATIONS: {reminder.notifications}
				</Text>
				<Text style={styles.reminderDetails}>
					MESSAGE: "{reminder.medication.description}"
				</Text>
			</View>
		</View>
	);
};

export default ReminderCard;