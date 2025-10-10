import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { styles } from '../styles/HamburgerMenu.styles';
import { Color } from '../GlobalStyles';
import { NavigationProp } from '@react-navigation/native';
import { Account } from '../data/dataTypes';

const { width } = Dimensions.get('window');

type HambugerMenuProps = {
    navigation: NavigationProp<any>;
    account: Account;
    pushToken: string;
}

const HamburgerMenu = ({ navigation, account, pushToken }: HambugerMenuProps) => {
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
        { label: 'Sponsors', onPress: () => { navigation.navigate('Sponsors', { pushToken: pushToken }) } },
        { label: 'Credits', onPress: () => { navigation.navigate('Credits', { pushToken: pushToken }) } }
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
                <Icon name="menu" size={width * 0.1} color={Color.colorCornflowerblue} />
            </TouchableOpacity>

            {/* Side Menu */}
            <Animated.View style={[styles.menuContainer, { transform: [{ translateX }] }]}>
                <View style={styles.menuHeader}>
                    <Text style={styles.menuTitle}>Pages</Text>
                    <TouchableOpacity onPress={toggleMenu}>
                        <Icon name="x" size={width * 0.0718} color="#333" />
                    </TouchableOpacity>
                </View>
                {menuItems}
            </Animated.View>
        </>
    );
};

export default HamburgerMenu;