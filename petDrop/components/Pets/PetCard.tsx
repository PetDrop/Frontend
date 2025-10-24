import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import EditIcon from '../../assets/edit_icon.svg';
import styles from '../../styles/Pets.styles';
import AddMedicationButton from '../../components/CustomButton';
import { Account, Pet } from '../../data/dataTypes';
import { NavigationProp } from '@react-navigation/core';
import { Color } from '../../GlobalStyles';

type PetCardProps = {
	pet: Pet;
	account: Account;
	onPressFunction: () => void;
	navigation: NavigationProp<any>;
}

const PetCard = ({ pet, account, onPressFunction, navigation }: PetCardProps) => {
	return (
		<View style={styles.petCard}>
			<View style={styles.petHeader}>
				<Image src={pet.image} style={styles.petImage} />
				<View style={styles.imageOutline} />
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
				<Pressable onPress={() => { navigation.navigate('NewPet', { pet: pet }) }}>
					<EditIcon style={styles.editIcon} />
				</Pressable>
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
				<AddMedicationButton disabled={false} onPressFunction={onPressFunction} innerText={'+ ADD'} color={Color.colorCornflowerblue} />
			</View>
			<View style={styles.separatorBar} />
		</View>
	);
};

export default PetCard;
