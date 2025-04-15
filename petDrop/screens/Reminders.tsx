import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/AddButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp } from "@react-navigation/native";
import { Account, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../data/dataTypes";
import { useEffect, useState } from "react";
import ReminderPopup from "../components/ReminderPopup";
import PetSwitch from '../components/ItemSwitch';
import { httpRequest, ADD_REMINDER, UPDATE_ACCOUNT } from "../data/endpoints";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  const [selectedPetId, setSelectedPetId] = useState('');
  const [popupShowing, setPopupShowing] = useState<Reminder>();
  const [rem, setRem] = useState<Reminder>();

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  const WriteToDB = async () => {
    // write rem to db
    let response = await httpRequest(ADD_REMINDER, 'POST', JSON.stringify(rem));
    if (response.ok) {
      console.log('rem created');
      // add rem to account and update it in the db
      const reminder = await response.json();
      account.reminders.push(reminder);
      response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(account));
      if (response.ok) {
        console.log('rem added to account');
        alert('Reminder submitted successfully');
      }
    }
    setRem(undefined);
  }

  if (rem !== undefined) {
    WriteToDB();
  }

  useEffect(() => {
    setSelectedPetId(account.pets[0].id);
  }, []);

  // create reminderCards here to avoid errors with undefined values if user has no pets and/or reminders
  let reminderCards: React.JSX.Element[] = [];
  let selectedPet: Pet | undefined = account.pets.find((pet) => pet.id === selectedPetId);
  let selectedReminders: Reminder[] = account.reminders.filter((reminder) => reminder.pet.id === selectedPetId);

  if (selectedPet !== undefined) { // should always be true once the user registers a pet
    reminderCards = selectedReminders.map((reminder: Reminder, index: any) => (
      <ReminderCard
        key={index}
        reminder={reminder}
      />
    ))
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />

        {/* Page Title */}
        <Text style={styles.pageTitle}>Reminders</Text>
        <PetSwitch
          data={account.pets}
          selectedItemId={selectedPetId}
          onSwitch={setSelectedPetId}
          switchItem="Pet"
        />

        {/* Reminder Cards */}
        {/* {account.reminders.map((reminder: Reminder) => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))} */}
        {reminderCards}

        {/* Add Reminder Button */}
        <View style={styles.addReminderButton}>
          <AddReminderButton
            onPressFunction={() => {
              let reminder = emptyReminder;
              reminder.pet = selectedPet ? selectedPet : emptyPet;
              setPopupShowing(reminder);
            }}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} account={account} />

      {/* popup for adding reminder */}
      <ReminderPopup isActive={popupShowing} showingFunction={setPopupShowing} setReminder={setRem} pets={account.pets} />
    </View>
  );
};

export default Reminders;