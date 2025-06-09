import * as React from "react";
import { Text, View, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import AddButtons from "../components/AddPets/PetInfo1AddButtons";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import { NavigationProp } from "@react-navigation/core";
import styles from '../styles/PetInfo1.styles';
import { Account, Medication } from "../data/dataTypes";
import { useReducer, useState } from "react";
import MedicationPopup from "../components/MedicationPopup";
import AddMedicationButton from "../components/AddButton";
import AddPetImage from "../components/AddImage";
import SubmitButton from "../components/SubmitButton";
import { ADD_PET, httpRequest } from "../data/endpoints";

type PetInfo1Type = {
  navigation: NavigationProp<any>;
  route: any;
}

const PetInfo1 = ({ navigation, route }: PetInfo1Type) => {
  const [popupShowing, setPopupShowing] = useState(false);
  const [medications, setMedications] = useReducer(updateMedications, []);
  const [inputFields, setInputFields] = useState(new Map<string, string>([
    ['pet name', ''],
    ['pet age', ''],
    ['pet breed', ''],
    ['pet address', ''],
    ['pet vet', ''],
    ['vet phone', ''],
  ]));

  // function for updating medications state
  function updateMedications(state: Medication[], action: { med: Medication }) {
    return state.concat([action.med]);
  }

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
        const response = await httpRequest(ADD_PET, 'POST', JSON.stringify({
          name: inputFields.get('pet name'),
          image: '',
          age: 0,
          breed: inputFields.get('pet breed'),
          address: inputFields.get('pet address'),
          vet: inputFields.get('pet vet'),
          vetPhone: inputFields.get('vet phone'),
          medications: medications
        }));
        if (response.ok) {
          alert('submission successful');
          navigation.navigate('PetInfo', { account: account });
        } else {
          console.log('unable to write pet to database: status code ' + response.status);
          alert('submission failed');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

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
        <AddPetImage onPressFunction={() => { }} containerStyle={styles.addImageContainer} />

        {/* Add Medications Section */}
        <Text style={[styles.petInfo1Medications, styles.addPetTypo]}>Medications</Text>
        <View style={styles.medicationList}>
          {medications.map((med, index) => (
            <View key={index} style={styles.medicationItem}>
              <View style={[styles.medicationIndicator, { backgroundColor: med.color }]} />
              <Text style={styles.medicationText}>{med.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.addMedicationButton}>
          <AddMedicationButton onPressFunction={() => { setPopupShowing(true) }} />
        </View>

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

      {/* Pop-up for Adding Medications */}
      <MedicationPopup isActive={popupShowing} showingFunction={setPopupShowing} pet={undefined} updateMedications={setMedications} />
    </KeyboardAvoidingView>
  );
};

export default PetInfo1;