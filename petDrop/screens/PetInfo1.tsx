import * as React from "react";
import { Text, View, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import AddButtons from "../components/AddPets/PetInfo1AddButtons";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import { NavigationProp } from "@react-navigation/core";
import styles from '../styles/PetInfo1.styles';
import { Account, Pet } from "../data/dataTypes";
import { useState } from "react";
import AddPetImage from "../components/AddImage";
import SubmitButton from "../components/SubmitButton";
import { ADD_PET, httpRequest, UPDATE_ACCOUNT } from "../data/endpoints";
import * as ImagePicker from 'expo-image-picker';

type PetInfo1Type = {
  navigation: NavigationProp<any>;
  route: any;
}

const PetInfo1 = ({ navigation, route }: PetInfo1Type) => {
  const [image, setImage] = useState('');
  const [inputFields, setInputFields] = useState(new Map<string, string>([
    ['pet name', ''],
    ['pet age', ''],
    ['pet breed', ''],
    ['pet address', ''],
    ['pet vet', ''],
    ['vet phone', ''],
  ]));

  // function for updating inputfields state
  function updateInputFields(key: string, value: string) {
    setInputFields((prevState) => new Map(prevState.set(key, value)));
  }

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  const Submit = async () => {
    if (!Array.from(inputFields.values()).every((value: string) => value !== '')) {
      console.log('at least one input field has no entered value');
      alert('You must input all info for your pet. Tap the blue buttons along the right side of the screen to get text boxes to type in.');
    } else {
      try {
        let ageString: string | undefined = inputFields.get('pet age');
        let age: number = Number.parseInt(ageString ? ageString : '0');
        let response = await httpRequest(ADD_PET, 'POST', JSON.stringify({
          name: inputFields.get('pet name'),
          image: image,
          age: age,
          breed: inputFields.get('pet breed'),
          address: inputFields.get('pet address'),
          vet: inputFields.get('pet vet'),
          vetPhone: inputFields.get('vet phone'),
          medications: []
        }));
        if (response.ok) {
          const pet: Pet = await response.json();
          account.pets.push(pet);
          response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(account));
          if (response.ok) {
            alert('submission successful. You will now be redirected to the Pet Info page where you can add medications and reminders for this pet.');
            navigation.navigate('PetInfo', { account: account });
          } else {
            console.log('unable to add pet to account');
            alert('submission failed');
          }
        } else {
          console.log('unable to write pet to database: status code ' + response.status);
          alert('submission failed');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const addImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.outermostView}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Logo Image */}
        <View style={styles.logoImageContainer}>
          <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
        </View>

        {/* Page Title */}
        <Text style={[styles.petInfo1AddPet, styles.addPetTypo]}>Add Pet</Text>

        {/* Add Image Circle w/ Plus Sign */}
        <AddPetImage onPressFunction={addImage} containerStyle={styles.addImageContainer} uri={image}/>

        {/* Pet Info Input Section */}
        <Text style={[styles.petInfo1Name, styles.nameTypo]}>Pet Info</Text>
        <AddButtons inputFields={inputFields} inputFieldsSetter={updateInputFields} />

        {/* submit button */}
        <View style={styles.submitButtonContainer}>
          <SubmitButton onPressFunction={Submit} />
        </View>

      </ScrollView>

      {/* Top Banner and Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.PetInfo1} account={account} />

    </KeyboardAvoidingView>
  );
};

export default PetInfo1;