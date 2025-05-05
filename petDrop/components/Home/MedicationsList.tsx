import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles/Home.styles';
import { Pet } from '../../data/dataTypes';

type MedicationsListProps = {
	pets: Pet[];
}

const MedicationsList = (props: MedicationsListProps) => {

	return (
		<View style={styles.medicationsContainer}>
			{/* Header */}
			<View style={styles.medicationsHeader}>
				<Text style={styles.medicationsHeaderText}>Medications</Text>
			</View>

			{/* Medications List */}
			{props.pets.map((pet) =>
				pet.medications.map((med, index) => (
					<View
						key={`${pet.name}-${index}`}
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
				))
			)}
		</View>
	);
};

export default MedicationsList;
