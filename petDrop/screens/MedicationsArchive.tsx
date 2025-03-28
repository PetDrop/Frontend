import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import MedicationCard from '../components/Medications/MedicationCard';
import MedicationSwitch from '../components/Medications/PetSwtich';
import styles from '../styles/Medications.styles';
import { ScreenEnum, logoImage } from '../GlobalStyles';
import { Image } from 'expo-image';
import AddMedicationButton from '../components/AddButton';
import MedicationPopup from '../components/MedicationPopup';
import { Account, Medication, Pet, Reminder } from '../data/dataTypes';

type MedicationsArchiveProps = {
	navigation: any;
	route: any;
}

const MedicationsArchive = ({ navigation, route }: MedicationsArchiveProps) => {
	const [selectedPetId, setSelectedPetId] = useState("");
	const [popupShowing, setPopupShowing] = useState(false);

	// store the user's account info to avoid typing "route.params.account" repeatedly
	const account: Account = route.params.account;

	useEffect(() => {
		setSelectedPetId(account.pets[0].id);
	}, []);

	// create MedicationCards here to avoid errors with undefined values if user has no pets and/or reminders
	let medicationCards: React.JSX.Element[] = [];
	let selectedPet: Pet | undefined = account.pets.find((pet) => pet.id === selectedPetId);
	let selectedReminders: Reminder[] = account.reminders.filter((reminder) => reminder.pet.id === selectedPetId);

	if (selectedPet !== undefined) { // should always be true once the user registers a pet
		medicationCards = selectedPet.medications.map((medication: Medication, index: any) => (
			<MedicationCard
				key={index}
				// even though a single element is desired, filter is used to avoid a "possibly undefined" error
				reminderProp={selectedReminders.filter((reminder) => reminder.medication.id === medication.id)}
			/>
		))
	}

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
					<MedicationSwitch
						pets={account.pets}
						selectedPetId={selectedPetId}
						onSwitch={setSelectedPetId}
					/>
				</View>
				{medicationCards}

				<AddMedicationButton onPressFunction={() => { setPopupShowing(true) }} />
			</ScrollView>
			<TopBottomBar
				navigation={navigation}
				currentScreen={ScreenEnum.MedicationsArchive}
				account={account}
			/>
			<MedicationPopup isActive={popupShowing} showingFunction={setPopupShowing} />
		</View>
	);
};
export default MedicationsArchive;
