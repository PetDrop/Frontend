import * as React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import TopBottomBar from "../components/TopBottomBar";
import PetCard from "../components/Pets/PetCard";
import AddNewPetButton from "../components/Pets/AddNewPetButton";
import styles from "../styles/Pets.styles";
import { ScreenEnum, logoImage } from "../GlobalStyles";
import { NavigationProp, Route } from "@react-navigation/native";
import { Account, emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../data/dataTypes";
import { useEffect, useState } from "react";
import MedicationPopup from "../components/MedicationPopup/MedicationPopup";
import { ADD_MEDICATION, ADD_REMINDER, httpRequest, UPDATE_ACCOUNT, UPDATE_PET } from "../data/endpoints";
import { medState } from "../data/enums";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const PetInfo = ({ navigation, route }: Props) => {
  const [popupState, setPopupState] = useState(medState.NO_ACTION);
  const [petBeingEdited, setPetBeingEdited] = useState<Pet>(emptyPet); // the pet the user is adding a medication to
  const [med, setMed] = useState<Medication>();
  const [rem, setRem] = useState<Reminder>();

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  const WriteToDB = async () => {
    let response;
    let reminder = emptyReminder;
    // write rem to db if user decided to make one
    if (rem !== undefined) {
      reminder = rem;
      response = await httpRequest(ADD_REMINDER, 'POST', JSON.stringify(reminder));
      if (!response.ok) {
        console.log(`http POST request failed with error code: ${response.status}`);
        alert('Failed to create reminder - medication save aborted');
        return;
      }
    }
    // write med to db
    med!.reminder = reminder;
    response = await httpRequest(ADD_MEDICATION, 'POST', JSON.stringify(med));
    let medication: Medication;
    if (response.ok) {
      medication = await response.json();
      // update pet with new med in db
      petBeingEdited.medications.push(medication);
      response = await httpRequest(UPDATE_PET, 'PUT', JSON.stringify(petBeingEdited));
      if (response.ok) {
        alert('Medication submitted successfully');
      }
      else {
        console.log(`http PUT request failed with error code: ${response.status}`);
        alert('Medication failed to save');
      }
    } else {
      console.log(`http POST request failed with error code: ${response.status}`);
      alert('Failed to create medication');
    }
    setMed(undefined);
    setRem(undefined);
  }

  if (med !== undefined) {
    WriteToDB();
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
        <Text style={styles.pageTitle}>Pets</Text>
        {account.pets.map((pet: Pet) => (
          <View key={pet.id}>
            <PetCard
              key={pet.id}
              pet={pet}
              account={account}
              onPressFunction={() => {
                setPetBeingEdited(pet);
                setPopupState(medState.SHOW_POPUP);
              }}
              navigation={navigation} />
          </View>
        ))}
        {account.sharedPets.map((pet: Pet) => (
          <View key={pet.id}>
            <PetCard
              key={pet.id}
              pet={pet}
              account={account}
              onPressFunction={() => {
                // TODO: check if pet is editable
                // setPetBeingEdited(pet);
                // setPopupState(medState.SHOW_POPUP);
              }}
              navigation={navigation} />
          </View>
        ))}
        <AddNewPetButton navigation={navigation} account={account} />
      </ScrollView>
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.PetInfo} account={account} />
      <MedicationPopup
        isActive={popupState === medState.SHOW_POPUP}
        setPopupState={setPopupState}
        setMedication={setMed}
        setReminder={setRem}
        pet={petBeingEdited}
        med={emptyMed}
        readonly={false}
      />
    </View>
  );
};

export default PetInfo;