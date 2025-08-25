import * as React from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import HouseButtonRoof from '../assets/house_button_roof.svg';
import PetInfoButton from '../assets/pet_info_button.svg';
import RemindersButton from '../assets/reminders_button.svg';
import ShareButtonRightArrow from '../assets/share_button_right_arrow.svg';
import { ScreenEnum } from '../GlobalStyles';
import styles from '../styles/TopBottomBar.styles';
import { Account } from '../data/dataTypes';

const { width, height } = Dimensions.get('window');

type TopBottomBarProps = {
	navigation: any;
	currentScreen: number;
	account: Account;
};

// Reusable NavButton Component
const NavButton = ({ icon, label, isActive, onPress }: any) => {
	return (
		<Pressable
			onPress={onPress}
			style={[styles.navButton, isActive && styles.activeButton]}>
			<View style={styles.iconWrapper}>{icon}</View>
			<Text style={styles.buttonText}>{label}</Text>
		</Pressable>
	);
};

const TopBottomBar = ({ navigation, currentScreen, account }: TopBottomBarProps) => {
	return (
    <>
    <View style={styles.topBar}>
    </View>
		<View style={styles.bottomBar}>
			{/* HOME Button */}
			<NavButton
				icon={
					<View style={styles.iconContainer}>
						<HouseButtonRoof style={styles.polygonIcon} />
						<View style={styles.houseBase} />
					</View>
				}
				label="HOME"
				isActive={currentScreen === ScreenEnum.Home}
				onPress={() => navigation.navigate('Home', {account: account})}
			/>

			{/* PETS Button */}
			<NavButton
				icon={
					<PetInfoButton
						style={styles.navIcon}
						width={width * 0.08}
						height={height * 0.03}
					/>
				}
				label="PETS"
				isActive={
					currentScreen === ScreenEnum.PetInfo ||
					currentScreen === ScreenEnum.PetInfo1
				}
				onPress={() => navigation.navigate('PetInfo', {account: account})}
			/>

			{/* REMINDERS Button */}
			<NavButton
				icon={
					<RemindersButton
						style={styles.navIcon}
						width={width * 0.07}
						height={height * 0.03}
					/>
				}
				label="REMINDERS"
				isActive={currentScreen === ScreenEnum.Reminders}
				onPress={() => navigation.navigate('Reminders', {account: account})}
			/>

			{/* MEDS Button */}
			<NavButton
				icon={
					<Image
						source={require('../assets/medications_button.png')}
						style={styles.medIcon}
					/>
				}
				label="MEDS"
				isActive={currentScreen === ScreenEnum.MedicationsArchive}
				onPress={() => navigation.navigate('MedicationsArchive', {account: account})}
			/>

			{/* PROFILE Button */}
			<NavButton
				icon={
					<ShareButtonRightArrow
						style={styles.shareIcon}
						width={width * 0.05}
						height={height * 0.03}
					/>
				}
				label="PROFILE"
				isActive={false}
				onPress={() => navigation.navigate('Profile', {account: account})}
			/>
		</View>
    </>
	);
};

export default TopBottomBar;
