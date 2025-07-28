import * as React from 'react';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Header.styles';
import { logoImage } from '../GlobalStyles';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			{/* PetDrop Logo */}
			<Image
				source={require('../assets/petdrop_slogan.png')}
				style={logoImage}
			/>

			<HamburgerMenu />
		</View>
	);
};

export default Header;
