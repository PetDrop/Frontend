import * as React from 'react';
import { Pressable, View, Text, ScrollView, Keyboard, Modal } from 'react-native';
import { Image } from 'expo-image';
import styles from '../styles/HelpPopup.styles';

type HelpPopupProps = {
    isVisible: boolean;
    helpText: string;
    onClose: () => void;
};

const HelpPopup = ({ isVisible, helpText, onClose }: HelpPopupProps) => {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    {/* Close button */}
                    <Pressable
                        onPress={onClose}
                        style={styles.closeButton}
                    >
                        <Image
                            style={styles.closeIcon}
                            contentFit="cover"
                            source={require("../assets/remove_x_blue.png")}
                        />
                    </Pressable>

                    {/* Title */}
                    <Text style={styles.titleText}>Help</Text>

                    {/* Scrollable content */}
                    <ScrollView
                        style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                    >
                        <Text style={styles.helpText}>{helpText}</Text>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default HelpPopup;

