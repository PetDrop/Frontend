import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/Pets.styles';

interface Medication {
	name: string;
	color: string;
}

interface MedicationListProps {
	medications: Medication[];
}

const MedicationList: React.FC<MedicationListProps> = ({ medications }) => {
	return (
		<View style={styles.medicationsContainer}>
			{medications.map((med, index) => (
				<View key={index} style={styles.medicationItem}>
					<View
						style={[
							styles.medicationIndicator,
							{ backgroundColor: med.color },
						]}
					/>
					<Text style={styles.medicationText}>{med.name}</Text>
				</View>
			))}
		</View>
	);
};

export default MedicationList;
