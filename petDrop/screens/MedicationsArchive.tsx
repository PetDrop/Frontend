import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import MedicationCard from '../components/Medications/MedicationCard';
import PetSwitch from '../components/ItemSwitch';
import styles from '../styles/Medications.styles';
import { ScreenEnum, logoImage } from '../GlobalStyles';
import { Image } from 'expo-image';
import AddMedicationButton from '../components/CustomButton';
import MedicationPopup from '../components/MedicationPopup/MedicationPopup';
import { Account, emptyMed, emptyPet, Medication, Pet, Reminder } from '../data/dataTypes';

type MedicationsArchiveProps = {
	navigation: any;
	route: any;
}

const MedicationsArchive = ({ navigation, route }: MedicationsArchiveProps) => {
	const [selectedPetId, setSelectedPetId] = useState('');
	const [popupShowing, setPopupShowing] = useState<Medication>();

	// store the user's account info to avoid typing "route.params.account" repeatedly
	const account: Account = route.params.account;

	let selectedPet: Pet | undefined = account.pets.find((pet) => pet.id === selectedPetId);
	selectedPet = selectedPet ? selectedPet : emptyPet; // if no selected pet, put it as emptypet to avoid undefined errors
	let selectedReminders: Reminder[] = [];
	selectedPet.medications.forEach((med: Medication) => {
		selectedReminders.push(med.reminder);
	});

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				showsVerticalScrollIndicator={false}>
				<Image
					source={require('../assets/petdrop_slogan.png')}
					style={logoImage}
				/>
				<View style={styles.headerContainer}>
					<Text style={styles.pageTitle}>Medications</Text>
					<PetSwitch
						data={account.pets}
						selectedItemId={selectedPetId}
						onSwitch={setSelectedPetId}
						switchItem='Pet'
					/>
				</View>

				{selectedPet.medications.map((medication: Medication, index: any) => (
					<MedicationCard
						key={index}
						reminderProp={medication.reminder}
						medProp={medication}
						petProp={selectedPet}
					/>
				))}

				<View style={styles.addMedicationButton}>
					<AddMedicationButton onPressFunction={() => { setPopupShowing(emptyMed) }} innerText={'+ ADD'} />
				</View>
			</ScrollView>
			<TopBottomBar
				navigation={navigation}
				currentScreen={ScreenEnum.MedicationsArchive}
				account={account}
			/>
			<MedicationPopup isActive={popupShowing} showingFunction={setPopupShowing} pet={selectedPet} />
		</View>
	);
};
export default MedicationsArchive;
