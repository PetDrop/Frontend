import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/CustomButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import { Color, logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import { Account, emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../data/dataTypes";
import { useCallback, useEffect, useState } from "react";
import ReminderPopup from "../components/ReminderPopup";
import PetSwitch from '../components/ItemSwitch';
import { httpRequest, ADD_REMINDER, UPDATE_ACCOUNT, UPDATE_MEDICATION, UPDATE_REMINDER, DELETE_REMINDER_BY_ID } from "../data/endpoints";
import { remState } from "../data/enums";
import Header from "../components/Header";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  const [selectedPet, setSelectedPet] = useState(emptyPet);
  const [popupState, setPopupState] = useState(remState.NO_ACTION);
  const [rem, setRem] = useState<Reminder>(emptyReminder);
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
    setPopupState(remState.SHOW_POPUP);
  }

  const WriteToDB = async () => {
    let url: string = '', method: string = '', body: string = '';
    switch (popupState) {
      case remState.REM_CREATED:
        url = ADD_REMINDER;
        method = 'POST';
        body = JSON.stringify(rem);
        break;
      case remState.REM_EDITED:
        url = UPDATE_REMINDER;
        method = 'PUT';
        body = JSON.stringify(rem);
        break;
      case remState.REM_DELETED:
        url = DELETE_REMINDER_BY_ID + rem.id;
        method = 'DELETE';
        body = '';
        break;
    }
    let response = await httpRequest(url, method, body);
    if (response.ok) {
      const reminder = popupState === remState.REM_DELETED ? emptyReminder : rem;
      med.reminder = reminder;
      if (popupState !== remState.REM_EDITED) {
        response = await httpRequest(UPDATE_MEDICATION, 'PUT', JSON.stringify(med));
        if (response.ok) {
          alert(`Successfully ${popupState === remState.REM_DELETED ? 'deleted' : 'submitted'} reminder`);
        } else {
          console.log(`http PUT request failed with error code: ${response.status}`);
          alert('Failed to update medication');
        }
      }
    } else {
      console.log(`http ${method} request failed with error code: ${response.status}`);
      alert(`Failed to ${popupState === remState.REM_DELETED ? 'delete' : 'submit'} reminder`);
    }
    setPopupState(remState.NO_ACTION);
  }

  if (popupState !== remState.NO_ACTION && popupState !== remState.SHOW_POPUP) {
    WriteToDB();
  }

  let reminderCards: React.JSX.Element[];
  reminderCards = selectedPet.medications.map((med: Medication, index: number) =>
    med.reminder?.notifications.length > 0 ?
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
                setPopupState(remState.SHOW_POPUP);
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
      <ReminderPopup
        isActive={popupState === remState.SHOW_POPUP}
        setPopupState={setPopupState}
        setRem={setRem}
        setMed={setMed}
        pet={selectedPet}
        med={med}
        readonly={false}
      />
    </View>
  );
};

export default Reminders;