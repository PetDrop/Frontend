import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "../GlobalStyles";

export type NewPetAddButtonType = {
    innerText: string;
  };

const NewPetAddButton = ({innerText}: NewPetAddButtonType) => {
  return (
    <View style={{width: (30 + innerText.length * 5)}}>
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
