import * as React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import TopBottomBar from "../components/TopBottomBar";
import PetCard from "../components/Pets/PetCard";
import AddNewPetButton from "../components/Pets/AddNewPetButton";
import styles from "../styles/Pets.styles";
import { ScreenEnum, logoImage } from "../GlobalStyles";
import { NavigationProp, Route } from "@react-navigation/native";
import { Account, emptyMed, emptyPet, Medication, Pet } from "../data/dataTypes";
import { useEffect, useState } from "react";
import MedicationPopup from "../components/MedicationPopup/MedicationPopup";
import { ADD_MEDICATION, CREATE_NOTIFS_FOR_MED, DELETE_MEDICATION, DELETE_NOTIFS_FROM_MED, EDIT_NOTIFS_FOR_MED, httpRequest, UPDATE_ACCOUNT, UPDATE_MED_AND_NOTIFS, UPDATE_MED_CREATE_NOTIFS, UPDATE_MED_DELETE_NOTIFS, UPDATE_MED_NOT_NOTIFS, UPDATE_PET } from "../data/endpoints";
import { medState } from "../data/enums";
import Header from "../components/Header";
import structuredClone from '@ungap/structured-clone';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const PetInfo = ({ navigation, route }: Props) => {
  const [popupState, setPopupState] = useState(medState.NO_ACTION);
  const [petBeingEdited, setPetBeingEdited] = useState<Pet>(emptyPet); // the pet the user is adding a medication to
  const [med, setMed] = useState<Medication>(emptyMed);
  const [medCopy, setMedCopy] = useState<Medication>(emptyMed);

  // only when med is updated should medCopy be reset
  useEffect(() => {
    setMedCopy(structuredClone(med));
  }, [med]);

  const pushToken: string = route.params.pushToken;

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  const WriteToDB = async () => {
    let response = await httpRequest(ADD_MEDICATION, 'POST', JSON.stringify({ med: medCopy }));
    setPetBeingEdited(prev => { return { ...prev, medications: prev.medications.concat([medCopy]) } });
    if (!response.ok) {
      console.error(`http request failed with error code ${response.status}`);
    }
    setPopupState(medState.NO_ACTION);
  }

  if (popupState !== medState.NO_ACTION && popupState !== medState.SHOW_POPUP) {
    WriteToDB();
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header navigation={navigation} account={account} />
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
              navigation={navigation}
              pushToken={pushToken} />
          </View>
        ))}
        {account.sharedPets?.map((pet: Pet) => (
          <View key={pet.id}>
            <PetCard
              key={pet.id}
              pet={pet}
              account={account}
              onPressFunction={() => { }}
              navigation={navigation}
              pushToken={pushToken} />
          </View>
        ))}
        <AddNewPetButton navigation={navigation} account={account} pushToken={pushToken} />
      </ScrollView>
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.PetInfo} account={account} pushToken={pushToken} />
      <MedicationPopup
        isActive={popupState === medState.SHOW_POPUP}
        setPopupState={setPopupState}
        pet={petBeingEdited}
        med={med}
        medCopy={medCopy}
        readonly={false}
        navigation={navigation}
        account={account}
        pushToken={pushToken}
      />
    </View>
  );
};

export default PetInfo;