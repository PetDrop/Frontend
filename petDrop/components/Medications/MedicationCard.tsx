import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import EditIcon from '../../assets/edit_icon.svg';
import styles from '../../styles/Medications.styles';
import { Medication, Pet, Reminder } from '../../data/dataTypes';

interface MedicationCardProps {
	medProp: Medication;
	petProp: Pet;
	showingFunction: Function;
}

const MedicationCard = ({ medProp, petProp, showingFunction }: MedicationCardProps) => {
	const medication: Medication = medProp;

	// Format notifications as a string, e.g., "6AM, 6PM"
	const remindersText: string = medProp.reminder?.notifications?.join(', ') || 'No reminders';

	return (
		<View style={styles.medicationCardContainer}>
			{/* Medication Header */}
			<View style={styles.medicationHeader}>
				<View style={styles.medicationInnerHeader}>
					<View style={[styles.medicationColor, { backgroundColor: medication.color }]}></View>
					<Text style={styles.medicationTitle}>{medication.name}</Text>
				</View>
				<Pressable onPress={() => {showingFunction(medication)}}>
					<EditIcon style={styles.editIcon} />
				</Pressable>
			</View>

			{/* Medication Body */}
			<View style={styles.medicationBody}>
				<Text style={styles.medicationText}>PET: {petProp?.name}</Text>
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
