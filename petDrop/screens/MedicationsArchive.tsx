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
import {
	ADD_MEDICATION, CREATE_NOTIFS_FOR_MED, DELETE_MEDICATION, DELETE_NOTIFS_FROM_MED,
	EDIT_NOTIFS_FOR_MED, httpRequest, UPDATE_MED_AND_NOTIFS, UPDATE_MED_CREATE_NOTIFS,
	UPDATE_MED_DELETE_NOTIFS, UPDATE_MED_NOT_NOTIFS
} from '../data/endpoints';
import structuredClone from '@ungap/structured-clone';
import { useAccount } from '../context/AccountContext';

type MedicationsArchiveProps = {
	navigation: NavigationProp<any>;
	route: any;
}

const formatDates = (med: Medication) => {
	return {
		...med,
		notifications: med.notifications.map((notif) => {
			return {
				...notif,
				nextRuns: notif.nextRuns.map((nextRun) => nextRun.toISOString()),
				finalRuns: notif.finalRuns.map((finalRun) => finalRun.toISOString())
			}
		})
	};
}

const MedicationsArchive = ({ navigation, route }: MedicationsArchiveProps) => {
	const { account, setAccount, updatePetMedications } = useAccount();
	const [med, setMed] = useState<Medication>(emptyMed);
	const [medCopy, setMedCopy] = useState<Medication>(emptyMed);
	const [popupState, setPopupState] = useState(medState.NO_ACTION);
	const [selectedPetId, setSelectedPetId] = useState(account.pets[0]?.id || account.sharedPets[0]?.id || '');


	// derive the selected pet from account whenever it changes
	const selectedPet = React.useMemo(() => {
		return (
			account.pets.find((p) => p.id === selectedPetId) ||
			account.sharedPets.find((p) => p.id === selectedPetId) ||
			emptyPet
		);
	}, [account, selectedPetId]);

	const ObjectID = require('bson-objectid');

	const pushToken: string = route.params.pushToken;

	// only when med is updated should medCopy be reset
	useEffect(() => {
		const tempMed = structuredClone(med);
		setMedCopy({ ...tempMed, id: med.id || ObjectID(), color: med.color || `#${Math.round(Math.random() * 899998 + 100000)}` });
	}, [med]);

	useFocusEffect(
		useCallback(() => {
			setSelectedPetId(account.pets[0]?.id || account.sharedPets[0]?.id || '');
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
				console.log('notifications: ', medCopy.notifications);
				response = await httpRequest(CREATE_NOTIFS_FOR_MED + medCopy.id, 'POST', JSON.stringify({ notifications: medCopy.notifications }));
				break;
			case medState.MED_NOTHING_NOTIF_EDITED:
				response = await httpRequest(EDIT_NOTIFS_FOR_MED + medCopy.id, 'PUT', JSON.stringify({ notifications: medCopy.notifications }));
				break;
			case medState.MED_NOTHING_NOTIF_DELETED:
				response = await httpRequest(DELETE_NOTIFS_FROM_MED + medCopy.id, 'DELETE', '');
				break;
			case medState.MED_CREATED_NOTIF_NOTHING:
			case medState.MED_CREATED_NOTIF_CREATED:
				console.log(formatDates(medCopy));
				response = await httpRequest(ADD_MEDICATION, 'POST', JSON.stringify(formatDates(medCopy)));
				break;
			case medState.MED_EDITED_NOTIF_NOTHING:
				response = await httpRequest(UPDATE_MED_NOT_NOTIFS, 'PUT', JSON.stringify(formatDates(medCopy)));
				break;
			case medState.MED_EDITED_NOTIF_CREATED:
				response = await httpRequest(UPDATE_MED_CREATE_NOTIFS, 'PUT', JSON.stringify(formatDates(medCopy)));
				break;
			case medState.MED_EDITED_NOTIF_EDITED:
				response = await httpRequest(UPDATE_MED_AND_NOTIFS, 'PUT', JSON.stringify(formatDates(medCopy)));
				break;
			case medState.MED_EDITED_NOTIF_DELETED:
				response = await httpRequest(UPDATE_MED_DELETE_NOTIFS, 'PUT', JSON.stringify(formatDates(medCopy)));
				break;
			case medState.MED_DELETED:
				httpRequest(DELETE_MEDICATION + medCopy.id, 'DELETE', '');
				updatePetMedications(selectedPet.id, selectedPet.medications.filter((med) => med.id !== medCopy.id));
				setMed(emptyMed);
				return;
			default:
				break;
		}
		if (response?.ok) {
			const newMed = await response.json();
			const meds = selectedPet.medications.some((m) => m.id === newMed.id)
				? selectedPet.medications.map((m) => (m.id === newMed.id ? newMed : m))
				: [...selectedPet.medications, newMed];

			updatePetMedications(selectedPet.id, meds);
			setMed(newMed);
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
						data={[...(account.pets ?? []), ...(account.sharedPets ?? [])]}
						selectedItem={selectedPet}
						onSwitch={(item) => { setSelectedPetId(item.id) }}
						switchItem='Pet'
					/>
				</View>

				{medicationCards}

				{selectedPet.id !== '' && (
					<View style={styles.addMedicationButton}>
						<AddMedicationButton
							disabled={false}
							onPressFunction={() => {
								setMed({
									...emptyMed,
									color: `#${Math.round(Math.random() * 899998 + 100000)}`
								});
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
				setMedCopy={setMedCopy}
				readonly={false}
				navigation={navigation}
				account={account}
				pushToken={pushToken}
			/>
		</View>
	);
};
export default MedicationsArchive;