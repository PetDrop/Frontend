import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/AddButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp } from "@react-navigation/native";
import { Account, Reminder } from "../data/dataTypes";
import { ADD_REMINDER, httpRequest, UPDATE_ACCOUNT } from "../data/endpoints";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  const [popupShowing, setPopupShowing] = useState(false);

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  const addReminder = async () => {
    try {
      let response = await httpRequest(ADD_REMINDER, 'POST', JSON.stringify({
        medication: account.pets[0].medications[0],
        pet: account.pets[0],
        notifications: ['1AM', '11PM']
      }));
      if (response.ok) {
        account.reminders.push(await response.json());
        response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(account));
        if (response.ok) {
          alert('Reminder submitted successfully');
          setPopupShowing(!popupShowing);
        } else {
          console.log('unable to add reminder to account: status code ' + response.status);
          alert('failed to add reminder to account');
        }
      } else {
        console.log('unable to write reminder to database: status code ' + response.status);
        alert('submission failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />

        {/* Page Title */}
        <Text style={styles.pageTitle}>Reminders</Text>

        {/* Reminder Cards */}
        {account.reminders.map((reminder: Reminder) => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}

        {/* Add Reminder Button */}
        <View style={styles.addReminderButton}>
          <AddReminderButton onPressFunction={addReminder} />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} account={account} />
    </View>
  );
};

export default Reminders;