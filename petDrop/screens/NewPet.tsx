import * as React from "react";
import { Text, View, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import AddButtons from "../components/AddPets/NewPetAddButtons";
import TopBottomBar from "../components/TopBottomBar";
import { Color, logoImage, ScreenEnum } from "../GlobalStyles";
import { NavigationProp } from "@react-navigation/native";
import styles from '../styles/NewPet.styles';
import { Account, emptyPet, Pet } from "../data/dataTypes";
import { useEffect, useState } from "react";
import AddPetImage from "../components/AddImage";
import SubmitButton from "../components/CustomButton";
import DeleteButton from "../components/CustomButton";
import { ADD_PET, DELETE_PET_BY_ID, httpRequest, UPDATE_ACCOUNT, UPDATE_PET } from "../data/endpoints";
import * as ImagePicker from 'expo-image-picker';
import { useAccount } from "../context/AccountContext";

type NewPetType = {
  navigation: NavigationProp<any>;
  route: any;
}

const NewPet = ({ navigation, route }: NewPetType) => {
  const { account, setAccount } = useAccount();
  const [image, setImage] = useState('');
  const [inputFields, setInputFields] = useState(new Map<string, string>([
    ['pet name', ''],
    ['pet age', ''],
    ['pet breed', ''],
    ['pet address', ''],
    ['pet vet', ''],
    ['vet phone', ''],
  ]));

  const ObjectID = require('bson-objectid');

  // function for updating inputfields state
  function updateInputFields(key: string, value: string) {
    setInputFields((prevState) => new Map(prevState.set(key, value)));
  }

  // get pet from param in case one is being edited (if undefined then creating new pet)
  const petBeingEdited: Pet = route.params.pet;

  useEffect(() => {
    // pet being defined means it was passed as a param -> it's being edited, not creating a new one
    if (petBeingEdited) {
      setImage(petBeingEdited.image);
      updateInputFields('pet name', petBeingEdited.name);
      updateInputFields('pet age', `${petBeingEdited.age}`);
      updateInputFields('pet breed', petBeingEdited.breed);
      updateInputFields('pet address', petBeingEdited.address);
      updateInputFields('pet vet', petBeingEdited.vet);
      updateInputFields('vet phone', petBeingEdited.vetPhone);
    }
  }, []);

  const Submit = async () => {
    if (!Array.from(inputFields.values()).every((value: string) => value !== '')) {
      console.log('at least one input field has no entered value');
      alert('You must input all info for your pet. Tap the blue buttons along the right side of the screen to get text boxes to type in.');
    } else {
      try {
        let ageString: string | undefined = inputFields.get('pet age');
        let age: number = Number.parseInt(ageString ? ageString : '0');
        let id: string = petBeingEdited ? petBeingEdited.id : ObjectID();
        const url: string = petBeingEdited ? UPDATE_PET : ADD_PET;
        const method: string = petBeingEdited ? 'PUT' : 'POST';
        let response = await httpRequest(url, method, JSON.stringify({
          id: id,
          name: inputFields.get('pet name'),
          image: image,
          age: age,
          breed: inputFields.get('pet breed'),
          address: inputFields.get('pet address'),
          vet: inputFields.get('pet vet'),
          vetPhone: inputFields.get('vet phone'),
          medications: petBeingEdited ? petBeingEdited.medications : []
        }));
        if (response.ok) {
          // TODO: allow for editing of shared pets
          let updatedAccountState: Account;
          if (petBeingEdited) {
            const updatedPet: Pet = await response.json();
            updatedAccountState = { ...account, pets: account.pets.map((pet) => pet.id === updatedPet.id ? updatedPet : pet) };
            setAccount(updatedAccountState);
          } else {
            const newPet: Pet = await response.json();
            updatedAccountState = { ...account, pets: account.pets.concat([newPet]) };
            setAccount(updatedAccountState);
          }
          response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(updatedAccountState));
          if (response.ok) {
            alert('Submission successful. You have now been redirected to the Pet Info page where you can view it, as well as add medications and reminders for it.');
            navigation.navigate('PetInfo');
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

  const Delete = async () => {
    // TODO: ask for confirmation
    let response = await httpRequest(DELETE_PET_BY_ID + petBeingEdited.id, 'DELETE', '');
    if (response.ok) {
      const updatedAccountState = { ...account, pets: account.pets.filter((pet) => pet.id !== petBeingEdited.id) };
      setAccount(updatedAccountState);
      response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(updatedAccountState));
      if (response.ok) {
        alert(`Pet: ${petBeingEdited.name} has been successfully deleted.`);
        navigation.navigate('PetInfo');
      } else {
        console.log(`http PUT request failed with error code: ${response.status}`);
        alert(`Failed to update account after deleting pet: ${petBeingEdited.id}`);
      }
    } else {
      console.log(`http DELETE request failed with error code: ${response.status}`);
      alert(`Failed to delete pet: ${petBeingEdited.id}`);
    }
  }

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
        <Text style={[styles.newPetAddPet, styles.addPetTypo]}>Add Pet</Text>

        {/* Add Image Circle w/ Plus Sign */}
        <AddPetImage onPressFunction={addImage} containerStyle={styles.addImageContainer} uri={image} />

        {/* Pet Info Input Section */}
        <Text style={[styles.newPetName, styles.nameTypo]}>Pet Info</Text>
        <AddButtons inputFields={inputFields} inputFieldsSetter={updateInputFields} />

        {/* delete button */}
        {petBeingEdited && (
          <View style={styles.deleteButtonContainer}>
            <DeleteButton disabled={false} onPressFunction={Delete} innerText={'Delete'} color={Color.colorFirebrick} />
          </View>
        )}

        {/* submit button */}
        <View style={styles.submitButtonContainer}>
          <SubmitButton disabled={false} onPressFunction={Submit} innerText={'Submit'} color={Color.colorCornflowerblue} />
        </View>

      </ScrollView>

      {/* Top Banner and Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.NewPet} />

    </KeyboardAvoidingView>
  );
};

export default NewPet;