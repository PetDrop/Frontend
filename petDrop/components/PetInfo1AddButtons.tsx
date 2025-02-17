import * as React from "react";
import { Dimensions, View } from "react-native";
import { styles } from "../GlobalStyles";
import NewPetAddButton from "./NewPetAddButton";

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
