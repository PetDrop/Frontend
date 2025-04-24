import * as React from 'react';
import { Dimensions, Text, View, Pressable } from 'react-native';
import { styles } from '../../styles/Reminders.styles';
import EditIcon from '../../assets/edit_icon.svg';
import { Medication, Reminder } from '../../data/dataTypes';

type ReminderCardProps = {
	med: Medication;
}

const ReminderCard = ({ med }: ReminderCardProps) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.header}>
				<View style={styles.innerHeader}>
					<View style={[styles.reminderColor, { backgroundColor: med.color }]} />
					<Text style={styles.reminderTitle}>{med.name}</Text>
				</View>
				<Pressable>
					<EditIcon style={styles.editIcon} />
				</Pressable>
			</View>
			<View style={styles.body}>
				<Text style={styles.reminderDetails}>
					DATES: {med.dates.join(', ')}
				</Text>
				<Text style={styles.reminderDetails}>
					NOTIFICATIONS: {med.reminder.notifications}
				</Text>
				<Text style={styles.reminderDetails}>
					MESSAGE: "{med.description}"
				</Text>
			</View>
		</View>
	);
};

export default ReminderCard;