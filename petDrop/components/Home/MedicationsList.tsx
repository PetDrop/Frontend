import * as React from 'react';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../styles/Home.styles';
import { Medication, Pet } from '../../data/dataTypes';

type MedicationsListProps = {
	petMedObjects: Map<string, { pet: Pet, med: Medication }[]>;
	onPress: Function;
}

const MedicationsList = ({ petMedObjects, onPress }: MedicationsListProps) => {
	// take the unique objects containing a pet and med from the map
	// so that you can map them to items in the medications list 
	const petMeds: {pet: Pet, med: Medication}[] = [];
	Array.from(petMedObjects.values()).forEach((petMedArray) => {
		petMedArray.forEach((petMed) => {
			if (!petMeds.some((existingPetMed) => existingPetMed.med.id === petMed.med.id)) {
				petMeds.push(petMed);
			}
		})
	});

	return (
		<View style={styles.medicationsContainer}>
			{/* Header */}
			<View style={styles.medicationsHeader}>
				<Text style={styles.medicationsHeaderText}>Medications</Text>
			</View>

			{/* Medications List */}
			{petMeds.map(({ pet, med }, index) => (
				<Pressable onPress={() => {onPress({ pet, med })}} key={`${pet.name}-${index}`}>
					<View
						style={styles.medicationItem}>
						<View
							style={[
								styles.medicationIndicator,
								{ backgroundColor: med.color },
							]}
						/>
						<Text style={styles.medicationText}>
							{med.name.toUpperCase()}
						</Text>
					</View>
				</Pressable>
			))}
		</View>
	);
};

export default MedicationsList;
