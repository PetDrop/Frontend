import * as React from "react";
import { Text, Pressable } from "react-native";
import styles from "../../styles/Pets.styles";

import { NavigationProp } from '@react-navigation/native';

const AddNewPetButton = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <Pressable style={styles.addPetButton} onPress={() => navigation.navigate("NewPet")}>
      <Text style={styles.addPetText}>+ ADD NEW PET</Text>
    </Pressable>
  );
};

export default AddNewPetButton;
