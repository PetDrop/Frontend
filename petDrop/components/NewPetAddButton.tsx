import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { styles } from "../GlobalStyles";

const screenWidth = Dimensions.get('window').width;

export type NewPetAddButtonType = {
    innerText: string;
  };

const NewPetAddButton = ({innerText}: NewPetAddButtonType) => {
  return (
    <View style={{width: ((screenWidth * 0.08) + innerText.length * (screenWidth * 0.015))}}>
        <View style={styles.newPetAddButtonBlueOval}>
            <Text style={styles.newPetAddButtonText}>{innerText}</Text>
            <View style={styles.newPetAddButtonPlusContainer}>
                <View style={styles.petInfoGroupItem} />
                <View style={[styles.remindersGroupInner, styles.homeGroupLayout]} />
            </View>
        </View>
    </View>
  );
};

export default NewPetAddButton;
