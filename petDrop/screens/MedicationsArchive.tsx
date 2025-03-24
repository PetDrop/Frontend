import * as React from 'react';
import { useState } from 'react';
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
import { GET_ACCOUNT_BY_USERNAME } from '../data/endpoints';
import { useEffect } from 'react';

type MedicationsArchiveProps = {
	navigation: any;
	route: any;
}

const MedicationsArchive = ({ navigation, route }: MedicationsArchiveProps) => {
	const [account, setAccount] = useState<Account>({id: "", username: "", email: "", password: "", address: "", phone: "", emergencyContacts: [""], pets: [], reminders: []});
	const [selectedPetId, setSelectedPetId] = useState("");
	const [popupShowing, setPopupShowing] = useState(false);

	// fetch account from db
	useEffect(() => {
		try {
			// get the account of the user
			fetch(GET_ACCOUNT_BY_USERNAME + `${route.params.username}`)
				.then((response) => {
					if (response.ok) {
						// if account found, update the state
						response.json()
							.then((value) => {
								const account: Account = value;
								setAccount(account);
								setSelectedPetId(account.pets[0].id);
							})
					} else {
						console.log('unable to find account of user');
					}
				})
		} catch (error) {
			console.error(error);
		}
	}, []);

	// create MedicationCards here to avoid errors with undefined values when the useEffect is executing
	let medicationCards: React.JSX.Element[] = [];
	let selectedPet: Pet | undefined = account.pets.find((pet) => pet.id === selectedPetId);
	let selectedReminders: Reminder[] = account.reminders.filter((reminder) => reminder.pet.id === selectedPetId);

	if (selectedPet !== undefined) { // should always be true once the useEffect returns
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
				username={route.params.username}
			/>
			<MedicationPopup isActive={popupShowing} showingFunction={setPopupShowing} />
		</View>
	);
};
export default MedicationsArchive;
