import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import MedicationCard from '../components/Medications/MedicationCard';
import PetSwitch from '../components/ItemSwitch';
import styles from '../styles/Medications.styles';
import { ScreenEnum, logoImage } from '../GlobalStyles';
import { Image } from 'expo-image';
import AddMedicationButton from '../components/AddButton';
import MedicationPopup from '../components/MedicationPopup/MedicationPopup';
import { Account, Medication, Pet, Reminder } from '../data/dataTypes';
import { httpRequest, ADD_MEDICATION, UPDATE_PET, ADD_REMINDER, UPDATE_ACCOUNT } from '../data/endpoints';

type MedicationsArchiveProps = {
	navigation: any;
	route: any;
}

const MedicationsArchive = ({ navigation, route }: MedicationsArchiveProps) => {
	const [selectedPetId, setSelectedPetId] = useState('');
	const [popupShowing, setPopupShowing] = useState(false);
	const [med, setMed] = useState<Medication>();
	const [rem, setRem] = useState<Reminder>();

	// store the user's account info to avoid typing "route.params.account" repeatedly
	const account: Account = route.params.account;

	const WriteToDB = async () => {
		// write med to db
		let response = await httpRequest(ADD_MEDICATION, 'POST', JSON.stringify(med));
		let medication: Medication;
		if (response.ok) {
		  console.log('med created');
		  medication = await response.json();
		  // update pet with new med in db
		  const pet = account.pets.find((pet) => pet.id === selectedPetId);
		  pet?.medications.push(medication);
		  response = await httpRequest(UPDATE_PET, 'PUT', JSON.stringify(pet));
		  if (response.ok) {
			console.log('med added to pet');
		  }
		  // write rem to db if user decided to make one
		  if (rem !== undefined) {
			let reminder: Reminder = rem;
			reminder.medication = medication;
			response = await httpRequest(ADD_REMINDER, 'POST', JSON.stringify(reminder));
			if (response.ok) {
			  console.log('rem created');
			}
			// add rem to account
			reminder = await response.json();
			account.reminders.push(reminder);
			response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(account));
			if (response.ok) {
			  console.log('rem added to account');
			  alert('Medication and reminder submitted successfully');
			}
		  }
		  else {
			alert('Medication submitted successfully');
		  }
		}
		setMed(undefined);
		setRem(undefined);
	  }
	
	  if (med !== undefined) {
		WriteToDB();
	  }

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
				reminderProp={selectedReminders.filter((reminder) => reminder.medication?.id === medication.id)[0]}
				medProp={medication}
				petProp={selectedPet}
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
					<PetSwitch
						data={account.pets}
						selectedItemId={selectedPetId}
						onSwitch={setSelectedPetId}
						switchItem='Pet'
					/>
				</View>
				{medicationCards}

				<View style={styles.addMedicationButton}>
					<AddMedicationButton onPressFunction={() => { setPopupShowing(true) }} />
				</View>
			</ScrollView>
			<TopBottomBar
				navigation={navigation}
				currentScreen={ScreenEnum.MedicationsArchive}
				account={account}
			/>
			<MedicationPopup isActive={popupShowing} showingFunction={setPopupShowing} setMedication={setMed} setReminder={setRem} pet={selectedPet} pets={account.pets}/>
		</View>
	);
};
export default MedicationsArchive;
