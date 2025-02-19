import React from 'react';
import { Pressable, Text, View } from 'react-native';
import EditIcon from '../../assets/edit_icon.svg';
import styles from '../../styles/Medications.styles';
import mockData from '../../data/mockData.json'; // Import mockData for reminders lookup

interface MedicationCardProps {
	medication: {
		name: string;
		dates: string[];
		description: string;
		color: string;
		range: number;
	};
	petName: string;
}

const MedicationCard = ({ medication, petName }: MedicationCardProps) => {
	// Find the reminder for this medication and pet
	const reminder = mockData.reminders.find(
		(rem) => rem.medication === medication.name && rem.pet === petName
	);

	// Format notifications as a string, e.g., "6AM, 6PM"
	const remindersText = reminder?.notifications?.join(' ') || 'No reminders';

	return (
		<View style={styles.medicationCardContainer}>
			{/* Medication Header */}
			<View
				style={
					styles.medicationHeader
				}>
				<View style={[styles.medicationColor, { backgroundColor: medication.color }]}></View>
				<View style={styles.medIndicator} />
				<Text style={styles.medicationTitle}>{medication.name}</Text>
				<Pressable>
					<EditIcon style={styles.editIcon} />
				</Pressable>
			</View>

			{/* Medication Body */}
			<View style={styles.medicationBody}>
				<Text style={styles.medicationText}>PET: {petName}</Text>
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
