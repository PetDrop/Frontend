import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from '../../styles/Reminders.styles';
import EditIcon from '../../assets/edit_icon.svg';
import { Medication, Notification } from '../../data/dataTypes';

type ReminderCardProps = {
	med: Medication;
	notif: Notification;
	showingFunction: Function;
}

const ReminderCard = ({ med, notif, showingFunction }: ReminderCardProps) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.header}>
				<View style={styles.innerHeader}>
					<View style={[styles.reminderColor, { backgroundColor: med.color }]} />
					<Text style={styles.reminderTitle}>{med.name}</Text>
				</View>
				<Pressable onPress={() => {showingFunction(notif, med)}}>
					<EditIcon style={styles.editIcon} />
				</Pressable>
			</View>
			<View style={styles.body}>
				<Text style={styles.reminderDetails}>
					DATES: {/* TODO */}
				</Text>
				<Text style={styles.reminderDetails}>
					NOTIFICATIONS: {/* TODO */}
				</Text>
				<Text style={styles.reminderDetails}>
					MESSAGE: "{med.description}"
				</Text>
			</View>
		</View>
	);
};

export default ReminderCard;