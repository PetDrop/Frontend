import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
// import MenuIcon from '../../assets/menu_icon.svg';
import { styles } from '../../styles/Home.styles';

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			{/* PetDrop Logo */}
			<Image
				source={require('../../assets/petdrop_slogan.png')}
				style={styles.logoImage}
			/>

			{/* Menu Button */}
			<TouchableOpacity>
				{/* <MenuIcon style={styles.menuIcon} /> */}
			</TouchableOpacity>
		</View>
	);
};

export default Header;
