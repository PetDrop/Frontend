import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import MedicationCard from '../components/Medications/MedicationCard';
import PetSwitch from '../components/ItemSwitch';
import styles from '../styles/Medications.styles';
import { Color, ScreenEnum } from '../GlobalStyles';
import AddMedicationButton from '../components/CustomButton';
import MedicationPopup from '../components/MedicationPopup/MedicationPopup';
import { Account, emptyMed, emptyPet, Medication, Pet } from '../data/dataTypes';
import { medState } from '../data/enums';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import Header from '../components/Header';
import { httpRequest } from '../data/endpoints';

type MedicationsArchiveProps = {
	navigation: NavigationProp<any>;
	route: any;
}

const MedicationsArchive = ({ navigation, route }: MedicationsArchiveProps) => {
	const [selectedPet, setSelectedPet] = useState<Pet>(emptyPet);
	const [med, setMed] = useState<Medication>(emptyMed);
	const [medCopy, setMedCopy] = useState<Medication>(emptyMed);
	const [popupState, setPopupState] = useState(medState.NO_ACTION);

	const pushToken: string = route.params.pushToken;

	// store the user's account info to avoid typing "route.params.account" repeatedly
	const account: Account = route.params.account;

	// only when med is updated should medCopy be reset
	useEffect(() => {
		setMedCopy(structuredClone(med));
	}, [med]);

	useFocusEffect(
		useCallback(() => {
			setSelectedPet(account.pets[0] || account.sharedPets[0] || emptyPet);
		}, [])
	);

	const editMedication = (med: Medication) => {
		setMed(med);
		setPopupState(medState.SHOW_POPUP);
	}

	const WriteToDB = async () => {
		let response;
		switch (popupState) {
			case medState.MED_NOTHING_NOTIF_CREATED:
				response = await httpRequest('create notifs and add to med', 'POST', JSON.stringify({ id: medCopy.id, notifs: medCopy.notifications }));
				break;
			case medState.MED_NOTHING_NOTIF_EDITED:
				response = await httpRequest('edit notifs', 'PUT', JSON.stringify({ id: medCopy.id, notifs: medCopy.notifications }));
				break;
			case medState.MED_NOTHING_NOTIF_DELETED:
				response = await httpRequest('delete all notifs from med', 'DELETE', JSON.stringify({ id: medCopy.id }));
				break;
			case medState.MED_CREATED_NOTIF_NOTHING:
			case medState.MED_CREATED_NOTIF_CREATED:
				response = await httpRequest('add med (possibly with notifs)', 'POST', JSON.stringify({ med: medCopy }));
				setSelectedPet(prev => {return {...prev, medications: prev.medications.concat([medCopy])}});
				break;
			case medState.MED_EDITED_NOTIF_NOTHING:
			case medState.MED_EDITED_NOTIF_CREATED:
			case medState.MED_EDITED_NOTIF_EDITED:
			case medState.MED_EDITED_NOTIF_DELETED:
				response = await httpRequest('edit med (possibly notifs too)', 'PUT', JSON.stringify({ med: medCopy }));
				break;
			case medState.MED_DELETED:
				httpRequest('delete med and any notifs', 'DELETE', JSON.stringify({ id: medCopy.id }));
				setSelectedPet(prev => {return {...prev, medications: prev.medications.filter((med) => med.id !== medCopy.id)}});
				setMed(emptyMed);
				return;
			default:
				break;
		}
		if (response?.ok) {
			setMed(await response.json());
		} else {
			console.error(`http request failed with error code ${response?.status}`);
		}
	}

	if (popupState !== medState.SHOW_POPUP && popupState !== medState.NO_ACTION) {
		WriteToDB();
		setPopupState(medState.NO_ACTION);
	}

	let medicationCards: React.JSX.Element[];
	medicationCards = selectedPet.medications.map((medication: Medication, index: number) => (
		<MedicationCard
			key={index}
			medication={medication}
			pet={selectedPet}
			showingFunction={editMedication}
		/>
	));

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				showsVerticalScrollIndicator={false}>

				<Header navigation={navigation} account={account} />

				<View style={styles.headerContainer}>
					<Text style={styles.pageTitle}>Medications</Text>
					<PetSwitch
						text={'switch'}
						data={[...account.pets, ...account.sharedPets]}
						selectedItem={selectedPet}
						onSwitch={setSelectedPet}
						switchItem='Pet'
					/>
				</View>

				{medicationCards}

				{selectedPet.id !== '' && (
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
				)}
			</ScrollView>

			<TopBottomBar
				navigation={navigation}
				currentScreen={ScreenEnum.MedicationsArchive}
				account={account}
				pushToken={pushToken}
			/>

			<MedicationPopup
				isActive={popupState === medState.SHOW_POPUP}
				setPopupState={setPopupState}
				pet={selectedPet}
				med={med}
				medCopy={medCopy}
				readonly={false}
				navigation={navigation}
				account={account}
				pushToken={pushToken}
			/>
		</View>
	);
};
export default MedicationsArchive;