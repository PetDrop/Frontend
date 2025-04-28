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
import { Account, emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from '../data/dataTypes';
import { httpRequest, ADD_MEDICATION, UPDATE_PET, ADD_REMINDER, UPDATE_ACCOUNT, UPDATE_REMINDER, UPDATE_MEDICATION } from '../data/endpoints';

export enum state {
	'NO_ACTION' = 0,
	'SHOW_POPUP' = 1, // med popup showing
	'MED_CREATED' = 2, // med popup saved when creating med
	'MED_EDITED' = 3, // med popup saved when editing med (reminder either created or untouched)
	'MED_AND_REM_EDITED' = 4, // med popup saved when editing med and its reminder
};

type MedicationsArchiveProps = {
	navigation: any;
	route: any;
}

const MedicationsArchive = ({ navigation, route }: MedicationsArchiveProps) => {
	const [selectedPetId, setSelectedPetId] = useState('');
	const [med, setMed] = useState<Medication>(emptyMed);
	const [rem, setRem] = useState<Reminder>();
	const [popupState, setPopupState] = useState(state.NO_ACTION);

	// store the user's account info to avoid typing "route.params.account" repeatedly
	const account: Account = route.params.account;

	const ObjectID = require('bson-objectid');

	useEffect(() => {
		setSelectedPetId(account.pets[0].id);
	}, []);

	const WriteToDB = async () => {
		let response;
		let reminder: Reminder = { id: ObjectID(), notifications: [] };
		// write rem to db if user created/edited it
		reminder = rem ? rem : reminder;
		if (rem || med.reminder.id === '') {
			const url: string = popupState === state.MED_AND_REM_EDITED ? UPDATE_REMINDER : ADD_REMINDER;
			const method: string = popupState === state.MED_AND_REM_EDITED ? 'PUT' : 'POST'; // only way rem can be edited is if med was too
			response = await httpRequest(url, method, JSON.stringify(reminder));
			if (!response.ok) {
				console.log(`http ${method} request failed with error code: ${response.status}`);
				if (rem !== undefined) {
					alert('Failed to save reminder - medication save aborted');
				} else {
					alert('Failed to save medication');
				}
				return;
			}
		}
		if (med.name !== '') {
			// write med to db
			if (rem || med.reminder.id === '') {
				med.reminder = reminder;
			}
			const url: string = popupState === state.MED_CREATED ? ADD_MEDICATION : UPDATE_MEDICATION;
			const method: string = popupState === state.MED_CREATED ? 'POST' : 'PUT'; // if med wasn't created then it needs to be updated
			response = await httpRequest(url, method, JSON.stringify(med));
			let medication: Medication;
			if (response.ok) {
				if (popupState === state.MED_CREATED) {
					// update pet with new med in db
					medication = await response.json();
					const pet = account.pets.find((pet) => pet.id === selectedPetId);
					pet?.medications.push(medication);
					response = await httpRequest(UPDATE_PET, 'PUT', JSON.stringify(pet));
					if (response.ok) {
						alert('Medication saved successfully');
					}
					else {
						console.log(`http PUT request failed with error code: ${response.status}`);
						alert('Medication failed to save');
					}
				} else {
					// update pet on frontend with updated med
					const pet = account.pets.find((pet) => pet.id === selectedPetId);
					pet?.medications.forEach((medication: Medication) => {
						if (medication.id === med.id) {
							// doing "medication = med;" wasn't working for some reason
							medication.name = med.name;
							medication.dates = med.dates;
							medication.description = med.description;
							medication.reminder = med.reminder;
							medication.color = med.color;
						}
					})
					alert('Medication saved successfully');
				}
			} else {
				console.log(`http ${method} request failed with error code: ${response.status}`);
				alert('Failed to create medication');
			}
		}
		setMed(emptyMed);
		setRem(undefined);
		setPopupState(state.NO_ACTION);
	}

	if (popupState !== state.SHOW_POPUP && popupState !== state.NO_ACTION) {
		WriteToDB();
	}

	const editMedication = (med: Medication) => {
		setMed(med);
		setPopupState(state.SHOW_POPUP);
	}

	let selectedPet: Pet | undefined = account.pets.find((pet) => pet.id === selectedPetId);
	selectedPet = selectedPet ? selectedPet : emptyPet;
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
				{selectedPet.medications.map((medication: Medication, index: number) => (
					<MedicationCard
						key={index}
						medProp={medication}
						petProp={selectedPet}
						showingFunction={editMedication}
					/>
				))}

				<View style={styles.addMedicationButton}>
					<AddMedicationButton
						onPressFunction={() => {
							setMed(emptyMed);
							setPopupState(state.SHOW_POPUP);
						}}
						innerText={'+ ADD'}
					/>
				</View>
			</ScrollView>
			<TopBottomBar
				navigation={navigation}
				currentScreen={ScreenEnum.MedicationsArchive}
				account={account}
			/>
			<MedicationPopup
				isActive={popupState === state.SHOW_POPUP}
				setPopupState={setPopupState}
				setMedication={setMed}
				setReminder={setRem}
				pet={selectedPet}
				med={med}
			/>
		</View>
	);
};
export default MedicationsArchive;