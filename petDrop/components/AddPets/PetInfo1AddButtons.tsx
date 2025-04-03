import * as React from "react";
import { View } from "react-native";
import NewPetAddButton from "./NewPetAddButton";
import styles from '../../styles/PetInfo1AddButtons.styles';

type PetInfo1AddButtonsProps = {
  inputFields: string[];
}

const PetInfo1AddButtons = ({ inputFields }: PetInfo1AddButtonsProps) => {
  return (
    <View style={styles.newPetButtonGroupParent}>
      {inputFields.map((fieldName: string, index: number) => {
        return <NewPetAddButton innerText={fieldName} key={index}/>
      })}
    </View>
  );
};

export default PetInfo1AddButtons;