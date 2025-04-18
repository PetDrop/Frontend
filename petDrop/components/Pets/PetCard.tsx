import * as React from 'react';
import { View, Text, Image } from 'react-native';
import EditIcon from '../../assets/edit_icon.svg';
import styles from '../../styles/Pets.styles';
import AddMedicationButton from '../../components/AddButton';
import { Pet } from '../../data/dataTypes';

type PetCardProps = {
	pet: Pet,
	onPressFunction: () => void
}

const PetCard = ({ pet, onPressFunction }: PetCardProps) => {
	return (
		<View style={styles.petCard}>
			<View style={styles.petHeader}>
				<Image src={pet.image} style={styles.petImage} />
                <Image source={require("../../assets/blue_circle_big.png")} style={styles.circleBackground} />
				<View style={styles.petInfo}>
					<Text style={styles.petName}>{pet.name}</Text>
					<Text style={styles.petDetails}>Age: {pet.age}</Text>
					<Text style={styles.petDetails}>Breed: {pet.breed}</Text>
					<Text style={styles.petDetails}>
						Address: {pet.address}
					</Text>
					<Text style={styles.petDetails}>Vet: {pet.vet}</Text>
					<Text style={styles.petDetails}>{pet.vetPhone}</Text>
				</View>
				<EditIcon style={styles.editIcon} />
			</View>
			<Text style={styles.medicationsTitle}>Medications:</Text>
			<View style={styles.medicationsContainer}>
				{pet.medications.map((med, index) => (
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
			<View style={styles.addMedicationButton}>
				<AddMedicationButton onPressFunction={onPressFunction}/>
			</View>
            <View style={styles.separatorBar} />
		</View>
	);
};

export default PetCard;
