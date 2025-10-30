import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from '../../styles/Reminders.styles';
import EditIcon from '../../assets/edit_icon.svg';
import { Medication, Notification } from '../../data/dataTypes';
import { useMemo } from 'react';

type ReminderCardProps = {
	med: Medication;
	notif: Notification;
	showingFunction: Function;
}

const ReminderCard = ({ med, notif, showingFunction }: ReminderCardProps) => {
	const notificationsString = useMemo(() => {
		if (notif.nextRuns.length > 0) {
			// Get unique times from nextRuns
			const uniqueTimes = [...new Set(notif.nextRuns.map(date => new Date(date).toLocaleTimeString()))];
			return `NOTIFICATIONS: ${uniqueTimes.join(', ')}`;
		}
		return 'NO NOTIFICATIONS';
	}, [notif]);
	const datesString = useMemo(() => {
		if (notif.nextRuns.length > 0) {
			// Get unique dates from nextRuns
			const uniqueDates = [...new Set(notif.nextRuns.map(date => new Date(date).toDateString()))];
			return `DATES: ${uniqueDates.join(', ')}`;
		}
		return 'NO DATES';
	}, [notif]);

	return (
		<View style={styles.cardContainer}>
			<View style={styles.header}>
				<View style={styles.innerHeader}>
					<View style={[styles.reminderColor, { backgroundColor: med.color }]} />
					<Text style={styles.reminderTitle}>{med.name}</Text>
				</View>
				<Pressable onPress={() => { showingFunction(notif, med) }}>
					<EditIcon style={styles.editIcon} />
				</Pressable>
			</View>
			<View style={styles.body}>
				<Text style={styles.reminderDetails}>
					{datesString}
				</Text>
				<Text style={styles.reminderDetails}>
					{notificationsString}
				</Text>
				<Text style={styles.reminderDetails}>
					MESSAGE: {med.description}
				</Text>
			</View>
		</View>
	);
};

export default ReminderCard;