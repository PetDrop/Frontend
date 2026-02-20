import * as React from "react";
import { Text, View, Image, KeyboardAvoidingView, ScrollView, Alert } from "react-native";
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
import HelpButton from "../components/HelpButton";
import HelpPopup from "../components/HelpPopup";
import { helpText } from "../data/helpText";
import { isValidImageUri } from "../utils/imageUtils";
import { formatPhoneDisplay, isValidAge, isValidEmail, isValidPhone, normalizePhoneInput } from "../utils/validationUtils";

const DEFAULT_IMAGES: Record<string, number> = {
  dog: require("../assets/default_dog.png"),
  cat: require("../assets/default_cat.png"),
  horse: require("../assets/default_horse.png"),
  rabbit: require("../assets/default_rabbit.png"),
};

type NewPetType = {
  navigation: NavigationProp<any>;
  route: any;
}

const VALID_SPECIES = ['dog', 'cat', 'horse', 'rabbit'];
const INPUT_KEYS = {
  PET_NAME: 'pet name',
  PET_AGE: 'pet age (years)',
  PET_SPECIES: 'pet species',
  PET_BREED: 'pet breed',
  PET_ADDRESS: 'pet address',
  VET_EMAIL: 'vet email',
  VET_PHONE: 'vet phone',
} as const;

const NewPet = ({ navigation, route }: NewPetType) => {
  const { account, setAccount } = useAccount();
  const [image, setImage] = useState<string | number>('');
  const [inputFields, setInputFields] = useState(new Map<string, string>([
    [INPUT_KEYS.PET_NAME, ''],
    [INPUT_KEYS.PET_AGE, ''],
    [INPUT_KEYS.PET_SPECIES, ''],
    [INPUT_KEYS.PET_BREED, ''],
    [INPUT_KEYS.PET_ADDRESS, ''],
    [INPUT_KEYS.VET_EMAIL, ''],
    [INPUT_KEYS.VET_PHONE, ''],
  ]));
  const [showHelp, setShowHelp] = useState(false);

  const ObjectID = require('bson-objectid');

  // function for updating inputfields state
  function updateInputFields(key: string, value: string) {
    setInputFields((prevState) => new Map(prevState.set(key, value)));
  }

  // function for determining the image to use for the pet
  // if the image is not provided or invalid (e.g. "1.png"), use a placeholder based on species
  function determineImage(image: string, species: string): string | number {
    if (isValidImageUri(image)) {
      return image;
    }
    return DEFAULT_IMAGES[species] ?? DEFAULT_IMAGES.dog;
  }

  // get pet from param in case one is being edited (if undefined then creating new pet)
  const petBeingEdited: Pet = route.params?.pet;
  const isSharedPet = petBeingEdited ? (account.sharedPets?.some((p) => p.id === petBeingEdited.id) ?? false) : false;

  useEffect(() => {
    // shared pets are readonly - redirect back
    if (isSharedPet) {
      navigation.navigate('PetInfo');
      return;
    }
  }, [isSharedPet, navigation]);

  useEffect(() => {
    // pet being defined means it was passed as a param -> it's being edited, not creating a new one
    if (petBeingEdited && !isSharedPet) {
      setImage(determineImage(petBeingEdited.image, petBeingEdited.species));
      updateInputFields(INPUT_KEYS.PET_NAME, petBeingEdited.name);
      updateInputFields(INPUT_KEYS.PET_AGE, `${petBeingEdited.age}`);
      updateInputFields(INPUT_KEYS.PET_SPECIES, petBeingEdited.species);
      updateInputFields(INPUT_KEYS.PET_BREED, petBeingEdited.breed);
      updateInputFields(INPUT_KEYS.PET_ADDRESS, petBeingEdited.address);
      updateInputFields(INPUT_KEYS.VET_EMAIL, petBeingEdited.vet);
      updateInputFields(INPUT_KEYS.VET_PHONE, normalizePhoneInput(petBeingEdited.vetPhone));
    }
  }, []);

  const Submit = async () => {
    if (isSharedPet) return;
    if (!Array.from(inputFields.values()).every((value: string) => value !== '')) {
      console.log('at least one input field has no entered value');
      alert('You must input all info for your pet. Tap the blue buttons along the right side of the screen to get text boxes to type in.');
      return;
    }

    const ageResult = isValidAge(inputFields.get(INPUT_KEYS.PET_AGE) ?? '');
    if (!ageResult.valid) {
      alert(ageResult.error);
      return;
    }

    const emailResult = isValidEmail(inputFields.get(INPUT_KEYS.VET_EMAIL) ?? '');
    if (!emailResult.valid) {
      alert(emailResult.error);
      return;
    }

    const phoneDigits = normalizePhoneInput(inputFields.get(INPUT_KEYS.VET_PHONE) ?? '');
    const phoneResult = isValidPhone(phoneDigits);
    if (!phoneResult.valid) {
      alert(phoneResult.error);
      return;
    }

    const species = inputFields.get(INPUT_KEYS.PET_SPECIES)?.trim().toLowerCase();
    if (!species || !VALID_SPECIES.includes(species)) {
      alert(`Species must be one of: ${VALID_SPECIES.join(', ')}`);
      return;
    }

    try {
      const ageString: string | undefined = inputFields.get(INPUT_KEYS.PET_AGE);
      const age: number = Number.parseInt(ageString ? ageString : '0');
      const id: string = petBeingEdited ? petBeingEdited.id : ObjectID();
      const url: string = petBeingEdited ? UPDATE_PET : ADD_PET;
      const method: string = petBeingEdited ? 'PUT' : 'POST';
      let response = await httpRequest(url, method, JSON.stringify({
        id: id,
        name: inputFields.get(INPUT_KEYS.PET_NAME),
        image: typeof image === 'string' ? image : '',
        age: age,
        species: species!,
        breed: inputFields.get(INPUT_KEYS.PET_BREED),
        address: inputFields.get(INPUT_KEYS.PET_ADDRESS),
        vet: inputFields.get(INPUT_KEYS.VET_EMAIL)?.trim(),
        vetPhone: phoneDigits,
        medications: petBeingEdited ? petBeingEdited.medications : []
      }), false);
      if (response.ok) {
        // TODO: allow for editing of shared pets
        let updatedAccountState: Account;
        if (petBeingEdited) {
          const updatedPet: Pet = await response.json();
          updatedAccountState = { ...account, pets: account.pets.map((pet: Pet) => pet.id === updatedPet.id ? updatedPet : pet) };
          setAccount(updatedAccountState);
        } else {
          const newPet: Pet = await response.json();
          updatedAccountState = { ...account, pets: account.pets.concat([newPet]) };
          setAccount(updatedAccountState);
        }
        response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(updatedAccountState), false);
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
  };

  const Delete = async () => {
    if (isSharedPet) return;
    Alert.alert(
      'Delete Pet',
      `Are you sure you want to delete ${petBeingEdited.name}? This cannot be undone.`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: performDelete },
      ]
    );
  };

  const performDelete = async () => {
    if (isSharedPet) return;
    let response = await httpRequest(DELETE_PET_BY_ID + petBeingEdited.id, 'DELETE', '', false);
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

  if (isSharedPet) {
    return null;
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
        <AddPetImage
          onPressFunction={addImage}
          containerStyle={styles.addImageContainer}
          source={image}
          onClearImage={() => {
            const species = inputFields.get(INPUT_KEYS.PET_SPECIES)?.trim().toLowerCase();
            setImage(DEFAULT_IMAGES[species || 'dog'] ?? DEFAULT_IMAGES.dog);
          }}
        />

        {/* Pet Info Input Section */}
        <Text style={[styles.newPetName, styles.nameTypo]}>Pet Info</Text>
        <View style={[
          styles.inputFieldsWrapper,
          petBeingEdited && styles.inputFieldsWrapperWithLabels,
        ]}>
          <AddButtons
          inputFields={inputFields}
          inputFieldsSetter={updateInputFields}
          optionsForField={{ [INPUT_KEYS.PET_SPECIES]: VALID_SPECIES }}
          fieldConfig={{
            [INPUT_KEYS.PET_AGE]: { keyboardType: 'number-pad', multiline: false },
            [INPUT_KEYS.VET_EMAIL]: { keyboardType: 'email-address', multiline: false },
            [INPUT_KEYS.VET_PHONE]: { keyboardType: 'phone-pad', multiline: false, isPhone: true },
          }}
          showLabels={!!petBeingEdited}
          labelExcludeKey={INPUT_KEYS.PET_NAME}
          />
        </View>

        {/* submit button */}
        <View style={styles.submitButtonContainer}>
          <SubmitButton disabled={false} onPressFunction={Submit} innerText={'Submit'} color={Color.colorCornflowerblue} />
        </View>

        {/* delete button */}
        {petBeingEdited && (
          <View style={styles.deleteButtonContainer}>
            <DeleteButton disabled={false} onPressFunction={Delete} innerText={'Delete'} color={Color.colorFirebrick} />
          </View>
        )}

      </ScrollView>

      {/* Top Banner and Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.NewPet} />

      <HelpButton onPress={() => setShowHelp(true)} />
      <HelpPopup
        isVisible={showHelp}
        helpText={helpText.NewPet}
        onClose={() => setShowHelp(false)}
      />

    </KeyboardAvoidingView>
  );
};

export default NewPet;