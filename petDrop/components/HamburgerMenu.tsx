import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, Pressable, Modal } from 'react-native';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import { styles } from '../styles/HamburgerMenu.styles';
import { Color } from '../GlobalStyles';
import { NavigationProp } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type HambugerMenuProps = {
    navigation: NavigationProp<any>;
}

const HamburgerMenu = ({ navigation }: HambugerMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpenRef = useRef(isOpen);
    
    const translateX = useState(new Animated.Value(width))[0];
    const backdropOpacity = useState(new Animated.Value(0))[0];

    // Update ref when state changes
    useEffect(() => {
        isOpenRef.current = isOpen;
    }, [isOpen]);

    const closeMenu = () => {
        if (!isOpenRef.current) return;
        
        Animated.parallel([
            Animated.timing(translateX, {
                toValue: width,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(backdropOpacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            })
        ]).start(() => {
            setIsOpen(false);
        });
    };

    const openMenu = () => {
        if (isOpen) return;
        
        setIsOpen(true);
        Animated.parallel([
            Animated.timing(translateX, {
                toValue: width * 0.5,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(backdropOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            })
        ]).start();
    };

    const toggleMenu = () => {
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    // Close menu when navigation occurs
    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
            if (isOpenRef.current) {
                Animated.parallel([
                    Animated.timing(translateX, {
                        toValue: width,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(backdropOpacity, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    })
                ]).start(() => {
                    setIsOpen(false);
                });
            }
        });

        return unsubscribe;
    }, [navigation, translateX, backdropOpacity]);

    const menuItems = [
        { label: 'Sponsors', onPress: () => { navigation.navigate('Sponsors') } },
        { label: 'Credits', onPress: () => { navigation.navigate('Credits') } },
        { label: 'IOP Measurement', onPress: () => { navigation.navigate('IOPMeasurement') } }
    ].map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem} onPress={() => {
            item.onPress();
            closeMenu();
        }}>
            <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
    ));

    return (
        <>
            {/* Hamburger Icon - hide when menu is open */}
            {!isOpen && (
                <TouchableOpacity 
                    style={styles.iconContainer} 
                    onPress={toggleMenu}
                >
                    <MenuIcon size={width * 0.1} color={Color.colorCornflowerblue} />
                </TouchableOpacity>
            )}

            {/* Modal for backdrop and menu - ensures it covers entire screen */}
            <Modal
                visible={isOpen}
                transparent={true}
                animationType="none"
                onRequestClose={closeMenu}
            >
                <View style={styles.modalContainer}>
                    {/* Backdrop - covers entire screen */}
                    <Pressable 
                        style={styles.backdrop}
                        onPress={closeMenu}
                    >
                        <Animated.View 
                            style={[
                                styles.backdropOverlay,
                                { opacity: backdropOpacity }
                            ]} 
                        />
                    </Pressable>
                    
                    {/* Side Menu */}
                    <Animated.View 
                        style={[styles.menuContainer, { transform: [{ translateX }] }]}
                        pointerEvents="box-none"
                    >
                        <View pointerEvents="auto">
                            <View style={styles.menuHeader}>
                                <Text style={styles.menuTitle}>Pages</Text>
                                <TouchableOpacity 
                                    onPress={closeMenu}
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                >
                                    <CloseIcon size={width * 0.0718} color="#333" />
                                </TouchableOpacity>
                            </View>
                            {menuItems}
                        </View>
                    </Animated.View>
                </View>
            </Modal>
        </>
    );
};

export default HamburgerMenu;