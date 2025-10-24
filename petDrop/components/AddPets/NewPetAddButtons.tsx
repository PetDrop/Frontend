import * as React from "react";
import { View } from "react-native";
import NewPetAddButton from "./NewPetAddButton";
import styles from '../../styles/NewPetAddButtons.styles';

type NewPetAddButtonsProps = {
  inputFields: Map<string, string>;
  inputFieldsSetter: Function;
}

const NewPetAddButtons = ({ inputFields, inputFieldsSetter }: NewPetAddButtonsProps) => {
  return (
    <View style={styles.newPetButtonGroupParent}>
      {Array.from(inputFields.keys()).map((key: string, index: number) => {
        let initialValue = inputFields.get(key);
        // console.log(initialValue);
        if (initialValue === undefined) {
          initialValue = '';
        }
        return <NewPetAddButton innerText={key} initialValue={initialValue} inputFieldsSetter={inputFieldsSetter} key={index} />
      })}
    </View>
  );
};

export default NewPetAddButtons;