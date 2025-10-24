import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import EditIcon from '../../assets/edit_icon.svg';
import styles from '../../styles/Medications.styles';
import { DateObj, Medication, Pet } from '../../data/dataTypes';

interface MedicationCardProps {
	medication: Medication;
	pet: Pet;
	showingFunction: Function;
}

const MedicationCard = ({ medication, pet, showingFunction }: MedicationCardProps) => {

	// Format notifications as a string, e.g., "6AM, 6PM"
	const remindersText: string = medication.notifications?.join(', ') || 'No reminders';

	// turn DateObjs into strings that are then joined to be displayed
	// let dates: string[] = medication.dates.map((date: DateObj) => {
	// 	if (date.endDate.length === 0) { // recurring single date
	// 		if (date.recurrances > 1) {
	// 			// say how many times it recurs
	// 			return `${date.startDate} x${date.recurrances}`;
	// 		} else {
	// 			return date.startDate;
	// 		}
	// 	} else { // date range
	// 		return `${date.startDate} to ${date.endDate}`;
	// 	}
	// });
	// const datesText: string = dates.join(', ');

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
				<Text style={styles.medicationText}>PET: {pet.name}</Text>
				<Text style={styles.medicationText}>
					DATES: {/* datesText */}
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
