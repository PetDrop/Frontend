import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import mockData from '../../data/mockData.json';
import { styles } from '../../styles/Home.styles';

// Define the structure for medications
interface Medication {
	name: string;
	color: string;
}

interface Pet {
	name: string;
	medications: Medication[];
}

const MedicationsList = () => {
	const [medications, setMedications] = useState<Pet[]>([]);

	useEffect(() => {
		setMedications(mockData.pets);
	}, []);

	return (
		<View style={styles.medicationsContainer}>
			{/* Header */}
			<View style={styles.medicationsHeader}>
				<Text style={styles.medicationsHeaderText}>MEDICATIONS</Text>
			</View>

			{/* Medications List */}
			{medications.map((pet) =>
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
