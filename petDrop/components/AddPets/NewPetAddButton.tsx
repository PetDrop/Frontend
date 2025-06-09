import * as React from "react";
import { Dimensions, Pressable, Text, TextInput, View } from "react-native";
import styles from '../../styles/NewPetAddButton.styles';
import { useState } from "react";
import { Color } from "../../GlobalStyles";

const { width, height } = Dimensions.get('window');

export type NewPetAddButtonType = {
  innerText: string;
  inputFieldsSetter: Function;
};

const NewPetAddButton = ({ innerText, inputFieldsSetter }: NewPetAddButtonType) => {
  const [pressed, setPressed] = useState(false);
  const [input, setInput] = useState('');

  if (!pressed) {
    return (
      <Pressable onPress={() => { setPressed(true) }}>
        <View style={{ width: ((width * 0.1) + innerText.length * (width * 0.035)), paddingBottom: height * 0.02 }}>
          <View style={styles.newPetAddButtonBlueOval}>
            <Text style={styles.newPetAddButtonText}>{innerText}</Text>
            <View style={styles.newPetAddButtonPlusContainer}>
              <View style={styles.newPetAddButtonGroupItem} />
              <View style={[styles.newPetAddButtonGroupInner, styles.newPetAddButtonGroupItem]} />
            </View>
          </View>
        </View>
      </Pressable>
    );
  } else {
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
  }
};

export default NewPetAddButton;