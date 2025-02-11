import { Image } from "expo-image";
import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/Reminders/AddReminderButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import mockData from "../data/mockData.json";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

interface Props {
  navigation: NavigationProp<any>;
}

const Reminders = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
        
        {/* Page Title */}
        <Text style={styles.pageTitle}>Reminders</Text>
        
        {/* Reminder Cards */}
        {mockData.reminders.map((reminder) => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}

        {/* Add Reminder Button */}
        <AddReminderButton />
      </ScrollView>
      
      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} />
    </View>
  );
};

export default Reminders;