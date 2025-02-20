import * as React from 'react';
import  { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TopBottomBar from '../components/TopBottomBar';
import MedicationCard from '../components/Medications/MedicationCard';
import MedicationSwitch from '../components/Medications/PetSwtich';
import mockData from '../data/mockData.json';
import styles from '../styles/Medications.styles';
import { ScreenEnum, logoImage } from '../GlobalStyles';
import { Image } from 'expo-image';
import AddMedicationButton from '../components/Medications/AddMedicationButton';

import { NavigationProp } from '@react-navigation/native';

const MedicationsArchive = ({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) => {
	const [selectedPet, setSelectedPet] = useState(mockData.pets[0]);

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
						pets={mockData.pets}
						selectedPet={selectedPet}
						onSwitch={setSelectedPet}
					/>
				</View>
				{selectedPet.medications.map((medication: any, index: any) => (
					<MedicationCard
						key={index}
						medication={medication}
						petName={selectedPet.name}
					/>
				))}
				<AddMedicationButton/>
			</ScrollView>
			<TopBottomBar
				navigation={navigation}
				currentScreen={ScreenEnum.MedicationsArchive}
			/>
		</View>
	);
};
export default MedicationsArchive;
