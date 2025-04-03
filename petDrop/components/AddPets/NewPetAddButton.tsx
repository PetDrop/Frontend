import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import styles from '../../styles/NewPetAddButton.styles';

const { width, height } = Dimensions.get('window');

export type NewPetAddButtonType = {
    innerText: string;
  };

const NewPetAddButton = ({innerText}: NewPetAddButtonType) => {
  return (
    <View style={{width: ((width * 0.065) + innerText.length * (width * 0.015)), paddingBottom: height * 0.02}}>
        <View style={styles.newPetAddButtonBlueOval}>
            <Text style={styles.newPetAddButtonText}>{innerText}</Text>
            <View style={styles.newPetAddButtonPlusContainer}>
                <View style={styles.newPetAddButtonGroupItem} />
                <View style={[styles.newPetAddButtonGroupInner, styles.newPetAddButtonGroupLayout]} />
            </View>
        </View>
    </View>
  );
};

export default NewPetAddButton;