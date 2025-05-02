import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import MedicationCard from '../components/Medications/MedicationCard';
import PetSwitch from '../components/ItemSwitch';
import styles from '../styles/Medications.styles';
import { Color, ScreenEnum, logoImage } from '../GlobalStyles';
import { Image } from 'expo-image';
import AddMedicationButton from '../components/CustomButton';
import MedicationPopup from '../components/MedicationPopup/MedicationPopup';
import { Account, emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from '../data/dataTypes';
import { httpRequest, ADD_MEDICATION, UPDATE_PET, ADD_REMINDER, UPDATE_REMINDER, UPDATE_MEDICATION, DELETE_REMINDER_BY_ID, DELETE_MEDICATION_BY_ID } from '../data/endpoints';

export enum medState {
	'NO_ACTION' = 0, // no popups showing and no action needing to be done
	'MED_CREATED' = 1, // med was created, so rem was either created or not (check if undefined)
	'MED_EDITED_REM_NOTHING' = 2, // med was edited but no action done with rem
	'MED_EDITED_REM_CREATED' = 3, // med was edited and rem was created
	'MED_EDITED_REM_EDITED' = 4, // med was edited and rem was edited
	'MED_EDITED_REM_DELETED' = 5, // med was edited and rem was deleted
	'MED_DELETED' = 6, // med was deleted, so rem will be too if it exists
	'SHOW_POPUP' = 7, // popup(s) showing and no actions performed yet
};

type MedicationsArchiveProps = {
	navigation: any;
	route: any;
}

const MedicationsArchive = ({ navigation, route }: MedicationsArchiveProps) => {
	const [selectedPetId, setSelectedPetId] = useState('');
	const [med, setMed] = useState<Medication>(emptyMed);
	const [rem, setRem] = useState<Reminder>();
	const [popupState, setPopupState] = useState(medState.NO_ACTION);

	// store the user's account info to avoid typing "route.params.account" repeatedly
	const account: Account = route.params.account;

	const ObjectID = require('bson-objectid');

	useEffect(() => {
		setSelectedPetId(account.pets[0].id);
	}, []);

	const editMedication = (med: Medication) => {
		setMed(med);
		setPopupState(medState.SHOW_POPUP);
	}

	const WriteToDB = async () => {
		let medUrl: string = '', medMethod: string = '', medBody: string = '', remUrl: string = '', remMethod: string = '', remBody: string = '';
		switch (popupState) {
			case medState.MED_CREATED:
				if (rem) {
					remUrl = ADD_REMINDER;
					remMethod = 'POST';
					remBody = JSON.stringify(rem);
					med.reminder = rem;
				}
				medUrl = ADD_MEDICATION;
				medMethod = 'POST';
				medBody = JSON.stringify(med);
				break;
			case medState.MED_EDITED_REM_NOTHING:
				medUrl = UPDATE_MEDICATION;
				medMethod = 'PUT';
				medBody = JSON.stringify(med);
				break;
			case medState.MED_EDITED_REM_CREATED:
				if (rem) { // redundant
					remUrl = ADD_REMINDER;
					remMethod = 'POST';
					remBody = JSON.stringify(rem);
					med.reminder = rem;
				}
				medUrl = UPDATE_MEDICATION;
				medMethod = 'PUT';
				medBody = JSON.stringify(med);
				break;
			case medState.MED_EDITED_REM_EDITED:
				if (rem) { // redundant
					remUrl = UPDATE_REMINDER;
					remMethod = 'PUT';
					remBody = JSON.stringify(rem);
					med.reminder = rem;
				}
				medUrl = UPDATE_MEDICATION;
				medMethod = 'PUT';
				medBody = JSON.stringify(med);
				break;
			case medState.MED_EDITED_REM_DELETED:
				if (rem) { // redundant
					remUrl = DELETE_REMINDER_BY_ID + rem.id;
					remMethod = 'DELETE';
					med.reminder = emptyReminder;
				}
				medUrl = UPDATE_MEDICATION;
				medMethod = 'PUT';
				medBody = JSON.stringify(med);
				break;
			case medState.MED_DELETED:
				medUrl = DELETE_MEDICATION_BY_ID + med.id;
				medMethod = 'DELETE';
				break;
		}
		let response;
		if (remUrl === '') {
			response = await handleMed(medUrl, medMethod, medBody);
			if (response.ok) {
				alert('the deed is done');
			}
		} else {
			response = await httpRequest(remUrl, remMethod, remBody);
			if (response.ok) {
				response = await handleMed(medUrl, medMethod, medBody);
				if (response.ok) {
					alert('the deed is done.');
				}
			}
		}
		setRem(undefined);
		setPopupState(medState.NO_ACTION);
	}

	const handleMed = async (medUrl: string, medMethod: string, medBody: string): Promise<Response> => {
		let response = await httpRequest(medUrl, medMethod, medBody);
		if (response.ok) {
			if (popupState === medState.MED_CREATED && selectedPet) {
				selectedPet.medications.push(med);
				response = await httpRequest(UPDATE_PET, 'PUT', JSON.stringify(selectedPet));
			} else if (popupState >= medState.MED_EDITED_REM_NOTHING && popupState <= medState.MED_EDITED_REM_DELETED && selectedPet) {
				selectedPet.medications[selectedPet.medications.findIndex((medication: Medication) => medication.id === med.id)] = med;
			} else if (selectedPet) {
				selectedPet.medications.splice(selectedPet.medications.findIndex((medication: Medication) => medication.id === med.id), 1);
				response = await httpRequest(UPDATE_PET, 'PUT', JSON.stringify(selectedPet));
			}
		}
		return response;
	}

	if (popupState !== medState.SHOW_POPUP && popupState !== medState.NO_ACTION) {
		WriteToDB();
	}

	let medicationCards: React.JSX.Element[];
	let selectedPet: Pet | undefined = account.pets.find((pet) => pet.id === selectedPetId);
	selectedPet = selectedPet ? selectedPet : emptyPet;
	let selectedReminders: Reminder[] = [];
	selectedPet.medications.forEach((med: Medication) => {
		selectedReminders.push(med.reminder);
	});
	medicationCards = selectedPet.medications.map((medication: Medication, index: number) => (
		<MedicationCard
			key={index}
			medProp={medication}
			petProp={selectedPet}
			showingFunction={editMedication}
		/>
	));

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
					<AddMedicationButton
						onPressFunction={() => {
							setMed(emptyMed);
							setPopupState(medState.SHOW_POPUP);
						}}
						innerText={'+ ADD'}
						color={Color.colorCornflowerblue}
					/>
				</View>
			</ScrollView>

			<TopBottomBar
				navigation={navigation}
				currentScreen={ScreenEnum.MedicationsArchive}
				account={account}
			/>

			<MedicationPopup
				isActive={popupState === medState.SHOW_POPUP}
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