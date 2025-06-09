import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/AddButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp } from "@react-navigation/native";
import { Account, Pet, Reminder } from "../data/dataTypes";

const { width, height } = Dimensions.get("window");

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

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
        <AddReminderButton onPressFunction={() => {}}/>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} account={account}/>
    </View>
  );
};

export default Reminders;