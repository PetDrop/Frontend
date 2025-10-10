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
		notif.nextLocalRuns.length > 0
			?
			`NOTIFICATIONS: ${notif.nextLocalRuns.filter((date) => date.toDateString() === notif.nextLocalRuns[0].toDateString())
				.map((date) => date.toTimeString()).join(', ')}`
			:
			'NO NOTIFICATIONS';
	}, [notif]);
	const datesString = useMemo(() => {
		notif.nextLocalRuns.length > 0
			?
			`DATES: ${notif.nextLocalRuns.filter((date, index) => {
				let shouldInclude: boolean = true;
				if (index > 0) {
					shouldInclude = date.toDateString() !== notif.nextLocalRuns[index - 1].toDateString();
				}
				if (shouldInclude && index < notif.nextLocalRuns.length) {
					shouldInclude = date.toDateString() !== notif.nextLocalRuns[index + 1].toDateString();
				}
				if (shouldInclude) {
					return date;
				}
			}).map((date) => date.toDateString()).join(', ')}`
			:
			'NO DATES';
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
					{`${datesString}`}
				</Text>
				<Text style={styles.reminderDetails}>
					{`${notificationsString}`}
				</Text>
				<Text style={styles.reminderDetails}>
					MESSAGE: "{med.description}"
				</Text>
			</View>
		</View>
	);
};

export default ReminderCard;