import * as React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../styles/Header.styles';
import { logoImage } from '../GlobalStyles';
import HamburgerMenu from './HamburgerMenu';
import { NavigationProp } from '@react-navigation/native';
import { Account } from '../data/dataTypes';

type HeaderProps = {
	navigation: NavigationProp<any>;
	account: Account;
}

const Header = ({ navigation, account }: HeaderProps) => {
	return (
		<View style={styles.headerContainer}>
			{/* PetDrop Logo */}
			<Image
				source={require('../assets/petdrop_slogan.png')}
				style={logoImage}
			/>

			<HamburgerMenu navigation={navigation} account={account} />
		</View>
	);
};

export default Header;
