import * as React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../../styles/Pets.styles";

import { NavigationProp } from '@react-navigation/native';
import { Account } from "../../data/dataTypes";

type AddNewPetButtonProps = {
  navigation: NavigationProp<any>,
  account: Account
}

const AddNewPetButton = ({ navigation, account }: AddNewPetButtonProps) => {
  return (
    <Pressable style={styles.addPetButton} onPress={() => navigation.navigate("PetInfo1", {account: account})}>
      <Text style={styles.addPetText}>+ ADD NEW PET</Text>
    </Pressable>
  );
};

export default AddNewPetButton;
