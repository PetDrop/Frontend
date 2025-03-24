import * as React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../../styles/Pets.styles";

import { NavigationProp } from '@react-navigation/native';

type AddNewPetButtonProps = {
  navigation: NavigationProp<any>,
  username: string
}

const AddNewPetButton = ({ navigation, username }: AddNewPetButtonProps) => {
  return (
    <Pressable style={styles.addPetButton} onPress={() => navigation.navigate("PetInfo1", {username: username})}>
      <Text style={styles.addPetText}>+ ADD NEW PET</Text>
    </Pressable>
  );
};

export default AddNewPetButton;
