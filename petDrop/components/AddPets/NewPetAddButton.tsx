import * as React from "react";
import { Dimensions, Pressable, Text, TextInput, View } from "react-native";
import styles from '../../styles/NewPetAddButton.styles';
import { useEffect, useState } from "react";

export type NewPetAddButtonType = {
  innerText: string;
  initialValue: string;
  inputFieldsSetter: Function;
};

const NewPetAddButton = ({ innerText, initialValue, inputFieldsSetter }: NewPetAddButtonType) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(initialValue);
  }, [initialValue])

  return (
    <TextInput
      style={[styles.textInput]}
      placeholder={`Enter ${innerText}`}
      placeholderTextColor='#A9A9A9'
      value={input}
      onChangeText={(input) => {
        setInput(input);
        inputFieldsSetter(innerText, input);
      }}
    />
  );
};

export default NewPetAddButton;