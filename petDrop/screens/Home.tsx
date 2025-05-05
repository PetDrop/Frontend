import * as React from "react";
import { Dimensions, Text, View, ScrollView, Pressable } from "react-native";
import Header from "../components/Home/Header";
import { Calendar, DateData } from 'react-native-calendars';
import MedicationsList from "../components/Home/MedicationsList";
import UserGreeting from "../components/Home/UserGreeting";
import TopBottomBar from "../components/TopBottomBar";
import { Color, ScreenEnum } from "../GlobalStyles";
import { styles, calendarTheme } from "../styles/Home.styles";
import ReminderPopup from "../components/ReminderPopup";
import { Account, emptyMed, emptyPet, emptyReminder, Reminder } from "../data/dataTypes";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

type HomeProps = {
  navigation: any;
  route: any;
};

const Home = ({ navigation, route }: HomeProps) => {
  const [popupShowing, setPopupShowing] = useState(false);

  // store the user's account info to avoid typing "route.params.account" repeatedly
  let account: Account = route.params.account;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Header />

        {/* User Greeting */}
        <UserGreeting name={account.username} />

        {/* Calendar Section */}
        <View style={styles.calendarContainer}>
          <Calendar
            markingType='multi-period'
            style={styles.calendar}
            theme={calendarTheme}
            onDayPress={(day: DateData) => { console.log(day)}}
            markedDates={{
            }}
          />
        </View>

        {/* Medications List */}
        <MedicationsList pets={account.pets} />

      </ScrollView>
      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Home} account={account} />

    </View>
  );
};

export default Home;