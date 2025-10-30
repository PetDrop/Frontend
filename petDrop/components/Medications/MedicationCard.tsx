import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import EditIcon from '../../assets/edit_icon.svg';
import styles from '../../styles/Medications.styles';
import { DateObj, Medication, Pet } from '../../data/dataTypes';
import { useMemo } from 'react';

interface MedicationCardProps {
	medication: Medication;
	pet: Pet;
	showingFunction: Function;
}

const MedicationCard = ({ medication, pet, showingFunction }: MedicationCardProps) => {
	const remindersText = useMemo(() => {
		if (medication.notifications.length > 0) {
			// Get unique times from nextRuns
			const uniqueTimes = [...new Set(medication.notifications.flatMap(notification => notification.nextRuns.map(date => new Date(date).toLocaleTimeString())))];
			return `REMINDERS: ${uniqueTimes.join(', ')}`;
		}
		return 'NO REMINDERS';
	}, [medication]);

	const datesText = useMemo(() => {
		if (medication.notifications.length > 0) {
			// Get unique dates from nextRuns
			const uniqueDates = [...new Set(medication.notifications.flatMap(notification => notification.nextRuns.map(date => new Date(date).toDateString())))];
			return `DATES: ${uniqueDates.join(', ')}`;
		}
		return 'NO DATES';
	}, [medication]);

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
					{datesText}
				</Text>
				<Text style={styles.medicationText}>
					{remindersText}
				</Text>
				<Text style={styles.medicationText}>
					MESSAGE: {medication.description}
				</Text>
			</View>
		</View>
	);
};

export default MedicationCard;
