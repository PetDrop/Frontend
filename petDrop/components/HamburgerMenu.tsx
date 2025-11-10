import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, } from 'react-native';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import { styles } from '../styles/HamburgerMenu.styles';
import { Color } from '../GlobalStyles';
import { NavigationProp } from '@react-navigation/native';

const { width } = Dimensions.get('window');

type HambugerMenuProps = {
    navigation: NavigationProp<any>;
}

const HamburgerMenu = ({ navigation }: HambugerMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const translateX = useState(new Animated.Value(width))[0];

    const toggleMenu = () => {
        const toValue = isOpen ? width : (width * 0.5);
        Animated.timing(translateX, {
            toValue,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: 'Sponsors', onPress: () => { navigation.navigate('Sponsors') } },
        { label: 'Credits', onPress: () => { navigation.navigate('Credits') } },
        { label: 'IOP Measurement', onPress: () => { navigation.navigate('IOPMeasurement') } }
    ].map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem} onPress={() => {
            item.onPress();
            toggleMenu();
        }}>
            <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
    ));

    return (
        <>
            {/* Hamburger Icon */}
            <TouchableOpacity style={styles.iconContainer} onPress={toggleMenu}>
                <MenuIcon size={width * 0.1} color={Color.colorCornflowerblue} />
            </TouchableOpacity>

            {/* Side Menu */}
            <Animated.View style={[styles.menuContainer, { transform: [{ translateX }] }]}>
                <View style={styles.menuHeader}>
                    <Text style={styles.menuTitle}>Pages</Text>
                    <TouchableOpacity onPress={toggleMenu}>
                        <CloseIcon size={width * 0.0718} color="#333" />
                    </TouchableOpacity>
                </View>
                {menuItems}
            </Animated.View>
        </>
    );
};

export default HamburgerMenu;