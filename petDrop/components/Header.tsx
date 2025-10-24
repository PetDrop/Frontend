import * as React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../styles/Header.styles';
import { logoImage } from '../GlobalStyles';
import HamburgerMenu from './HamburgerMenu';
import { NavigationProp } from '@react-navigation/native';

type HeaderProps = {
	navigation: NavigationProp<any>;
}

const Header = ({ navigation }: HeaderProps) => {
	return (
		<View style={styles.headerContainer}>
			{/* PetDrop Logo */}
			<Image
				source={require('../assets/petdrop_slogan.png')}
				style={logoImage}
			/>

			<HamburgerMenu navigation={navigation} />
		</View>
	);
};

export default Header;
