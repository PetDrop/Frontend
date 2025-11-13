import * as React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles/HelpButton.styles';

type HelpButtonProps = {
    onPress: () => void;
    inPopup?: boolean;
};

const HelpButton = ({ onPress, inPopup = false }: HelpButtonProps) => {
    return (
        <Pressable 
            style={inPopup ? styles.helpButtonInPopup : styles.helpButton} 
            onPress={onPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
            <Text style={styles.helpButtonText}>?</Text>
        </Pressable>
    );
};

export default HelpButton;

