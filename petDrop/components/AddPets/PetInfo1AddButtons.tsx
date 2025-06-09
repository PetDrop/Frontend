import * as React from "react";
import { View } from "react-native";
import NewPetAddButton from "./NewPetAddButton";
import styles from '../../styles/PetInfo1AddButtons.styles';

type PetInfo1AddButtonsProps = {
  inputFields: Map<string, string>;
  inputFieldsSetter: Function;
}

const PetInfo1AddButtons = ({ inputFields, inputFieldsSetter }: PetInfo1AddButtonsProps) => {
  return (
    <View style={styles.newPetButtonGroupParent}>
      {Array.from(inputFields.keys()).map((key: string, index: number) => {
        return <NewPetAddButton innerText={key} inputFieldsSetter={inputFieldsSetter} key={index} />
      })}
    </View>
  );
};

export default PetInfo1AddButtons;