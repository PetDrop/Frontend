import * as React from "react";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, styles } from "../GlobalStyles";
import NewPetAddButton from "./NewPetAddButton";

const { width, height } = Dimensions.get('window');

const PetInfo1AddButtons = () => {
  return (
    <View style={styles.newPetButtonGroupParent}>
      <NewPetAddButton innerText={"species"} ></NewPetAddButton>
      <NewPetAddButton innerText={"sex"}></NewPetAddButton>
      <NewPetAddButton innerText={"age"}></NewPetAddButton>
      <NewPetAddButton innerText={"breed"}></NewPetAddButton>
      <NewPetAddButton innerText={"weight"}></NewPetAddButton>
      <NewPetAddButton innerText={"address"}></NewPetAddButton>
      <NewPetAddButton innerText={"vet"}></NewPetAddButton>
      <NewPetAddButton innerText={"diagnosis"}></NewPetAddButton>
    </View>
  );
};

export default PetInfo1AddButtons;
