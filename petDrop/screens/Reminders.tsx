import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/CustomButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import { Color, logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import { Account, emptyMed, emptyPet, Medication, Pet } from "../data/dataTypes";
import { useCallback, useEffect, useState } from "react";
import PetSwitch from '../components/ItemSwitch';
import { medState } from "../data/enums";
import Header from "../components/Header";
import MedicationPopup from "../components/MedicationPopup/MedicationPopup";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  const [selectedPet, setSelectedPet] = useState(emptyPet);
  const [popupState, setPopupState] = useState(medState.NO_ACTION);
  const [med, setMed] = useState<Medication>(emptyMed);

  const pushToken: string = route.params.pushToken;

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  useFocusEffect(
    useCallback(() => {
      setSelectedPet(account.pets[0] || account.sharedPets[0] || emptyPet);
    }, [])
  );

  const editReminder = (med: Medication) => {
    setMed(med);
    setPopupState(medState.SHOW_POPUP);
  }

  const WriteToDB = async () => {
    // TODO
    setPopupState(medState.NO_ACTION);
  }

  if (popupState !== medState.NO_ACTION && popupState !== medState.SHOW_POPUP) {
    WriteToDB();
  }

  let reminderCards: React.JSX.Element[];
  reminderCards = selectedPet.medications.map((med: Medication, index: number) =>
    med.notifications.length > 0 ?
      <ReminderCard
        key={index}
        med={med}
        showingFunction={editReminder}
      />
      :
      <View key={index}></View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Header navigation={navigation} account={account} />

        {/* Page Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>Reminders</Text>
          <PetSwitch
            text={'switch'}
            data={[...account.pets, ...account.sharedPets]}
            selectedItem={selectedPet}
            onSwitch={setSelectedPet}
            switchItem="Pet"
          />
        </View>

        {/* Reminder Cards */}
        {reminderCards}

        {/* Add Reminder Button */}
        {selectedPet.id !== '' && (
          <View style={styles.addReminderButton}>
            <AddReminderButton
              onPressFunction={() => {
                setPopupState(medState.SHOW_POPUP);
              }}
              innerText={'+ ADD'}
              color={Color.colorCornflowerblue}
            />
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} account={account} pushToken={pushToken} />

      {/* popup for adding/editing reminder */}
      {/* <MedicationPopup
        isActive={popupState === medState.SHOW_POPUP}
        setPopupState={setPopupState}
        setMedication={setMed}
        pet={selectedPet}
        med={med}
        readonly={false}
        pushToken={pushToken}
        navigation={navigation}
        account={account}
      /> */}
    </View>
  );
};

export default Reminders;