import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/CustomButton";
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

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  useEffect(() => {
    setSelectedPetId(account.pets[0].id);
  }, []);

  let selectedPet: Pet | undefined = account.pets.find((pet) => pet.id === selectedPetId);
  selectedPet = selectedPet ? selectedPet : emptyPet; // if no selected pet, use emptypet to avoid undefined errors

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
        {selectedPet.medications.map((med: Medication, index: any) =>
          med.reminder.id !== '' ?
            <ReminderCard
              key={index}
              med={med}
            />
            :
            <View></View>
        )}

        {/* Add Reminder Button */}
        <View style={styles.addReminderButton}>
          <AddReminderButton
            onPressFunction={() => {
              setPopupShowing(emptyReminder);
            }}
            innerText={'+ ADD'}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} account={account} />

      {/* popup for adding reminder */}
      <ReminderPopup isActive={popupShowing} showingFunction={setPopupShowing} pet={selectedPet} />
    </View>
  );
};

export default Reminders;