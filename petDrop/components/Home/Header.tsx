import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
// import MenuIcon from '../../assets/menu_icon.svg';
import { styles } from '../../styles/Home.styles';
import { logoImage } from '../../GlobalStyles';

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			{/* PetDrop Logo */}
			<Image
				source={require('../../assets/petdrop_slogan.png')}
				style={logoImage}
			/>

			{/* Menu Button */}
			<TouchableOpacity>
				{/* <MenuIcon style={styles.menuIcon} /> */}
			</TouchableOpacity>
		</View>
	);
};

export default Header;
