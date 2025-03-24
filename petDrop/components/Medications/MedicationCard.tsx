import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import EditIcon from '../../assets/edit_icon.svg';
import styles from '../../styles/Medications.styles';
import { Medication, Reminder } from '../../data/dataTypes';

interface MedicationCardProps {
	reminderProp: Reminder[]
}

const MedicationCard = ({ reminderProp }: MedicationCardProps) => {
	const reminder: Reminder = reminderProp[0];
	const medication: Medication = reminder.medication;

	// Format notifications as a string, e.g., "6AM, 6PM"
	const remindersText: string = reminder?.notifications?.join(' ') || 'No reminders';

	return (
		<View style={styles.medicationCardContainer}>
			{/* Medication Header */}
			<View style={styles.medicationHeader}>
				<View style={styles.medicationInnerHeader}>
					<View style={[styles.medicationColor, { backgroundColor: medication.color }]}></View>
					<Text style={styles.medicationTitle}>{medication.name}</Text>
				</View>
				<Pressable>
					<EditIcon style={styles.editIcon} />
				</Pressable>
			</View>

			{/* Medication Body */}
			<View style={styles.medicationBody}>
				<Text style={styles.medicationText}>PET: {reminder.pet.name}</Text>
				<Text style={styles.medicationText}>
					DATES: {medication.dates.join(', ')}
				</Text>
				<Text style={styles.medicationText}>
					NOTIFICATIONS: {remindersText}
				</Text>
				<Text style={styles.medicationText}>
					MESSAGE: {medication.description}
				</Text>
			</View>
		</View>
	);
};

export default MedicationCard;
