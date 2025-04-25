import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/CustomButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp } from "@react-navigation/native";
import { Account, emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../data/dataTypes";
import { useEffect, useState } from "react";
import ReminderPopup from "../components/ReminderPopup";
import PetSwitch from '../components/ItemSwitch';
import { httpRequest, ADD_REMINDER, UPDATE_ACCOUNT, UPDATE_MEDICATION } from "../data/endpoints";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  const [selectedPetId, setSelectedPetId] = useState('');
  const [createPopupShowing, setCreatePopupShowing] = useState(false);
  const [editPopupShowing, setEditPopupShowing] = useState(false);
  const [rem, setRem] = useState<Reminder>();
  const [med, setMed] = useState<Medication>(emptyMed);

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  const WriteToDB = async () => {
    // write rem to db
    let response = await httpRequest(ADD_REMINDER, 'POST', JSON.stringify(rem));
    if (response.ok) {
      if (med.name !== '') {
        med.reminder = await response.json();
        response = await httpRequest(UPDATE_MEDICATION, 'PUT', JSON.stringify(med));
        if (response.ok) {
          alert('Reminder created successfully');
        } else {
          console.log(`http PUT request failed with error code: ${response.status}`);
        }
      } else {
        alert('A medication must be selected to add the reminder to. If none exist')
      }
    } else {
      console.log(`http POST request failed with error code: ${response.status}`);
    }
    setRem(undefined);
    setMed(emptyMed);
  }

  if (rem !== undefined) {
    WriteToDB();
  }

  useEffect(() => {
    setSelectedPetId(account.pets[0].id);
  }, []);

  const editReminder = (med: Medication) => {
    setMed(med);
    setEditPopupShowing(true);
  }

  const medToPass: Medication = createPopupShowing ? emptyMed : med;
  const funcToPass: Function = createPopupShowing ? setCreatePopupShowing : setEditPopupShowing;

  // create reminderCards here to avoid errors with undefined values if user has no pets and/or reminders
  let selectedPet: Pet | undefined = account.pets.find((pet) => pet.id === selectedPetId);
  selectedPet = selectedPet ? selectedPet : emptyPet;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />

        {/* Page Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>Reminders</Text>
          <PetSwitch
            data={account.pets}
            selectedItemId={selectedPetId}
            onSwitch={setSelectedPetId}
            switchItem="Pet"
          />
        </View>

        {/* Reminder Cards */}
        {selectedPet.medications.map((med: Medication, index: number) =>
          med.reminder.id !== '' ?
            <ReminderCard
              key={index}
              med={med}
              showingFunction={editReminder}
            />
            :
            <></>
        )}

        {/* Add Reminder Button */}
        <View style={styles.addReminderButton}>
          <AddReminderButton
            onPressFunction={() => {
              setCreatePopupShowing(true);
            }}
            innerText={'+ ADD'}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} account={account} />

      {/* popup for adding/editing reminder */}
      <ReminderPopup
        isActive={createPopupShowing || editPopupShowing}
        showingFunction={funcToPass}
        setRem={setRem}
        setMed={setMed}
        pet={selectedPet}
        med={medToPass}
      />
    </View>
  );
};

export default Reminders;