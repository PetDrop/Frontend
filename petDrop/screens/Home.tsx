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
import { useEffect, useState } from "react";

const { width, height } = Dimensions.get("window");

type HomeProps = {
  navigation: any;
  route: any;
};

const Home = ({ navigation, route }: HomeProps) => {
  const [popupShowing, setPopupShowing] = useState(false);

  // store the user's account info to avoid typing "route.params.account" repeatedly
  let account: Account = route.params.account;

  let markedDatesMap: Map<string, Array<{ color: string, startingDay?: boolean, endingDay?: boolean }>> = new Map();
  let markedDates: any = {};
  useEffect(() => {
    account.pets.forEach(pet => {
      pet.medications.forEach(med => {
        med.dates.forEach(date => {
          const periods = markedDatesMap.get(date);
          let newPeriod: { color: string, startingDay?: boolean, endingDay?: boolean } = { color: med.color };
          let dayBefore: string, dayAfter: string;
          let dateObject: Date = new Date(date);
          dateObject.setTime(dateObject.getTime() - 86400000);
          dayBefore = dateObject.toISOString();
          dateObject.setTime(dateObject.getTime() + (86400000 * 2));
          dayAfter = dateObject.toISOString();
          if (!med.dates.includes(dayBefore)) {
            newPeriod.startingDay = true;
          }
          if (!med.dates.includes(dayAfter)) {
            newPeriod.endingDay = true;
          }
          periods ? markedDatesMap.set(date, periods.concat([newPeriod])) : markedDatesMap.set(date, [newPeriod]);
        })
      });
    });

    markedDatesMap.forEach((periods, date) => {
      markedDates[`${date}`] = { periods: periods }
    });
  }, []);

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
            onDayPress={(day: DateData) => { console.log(day) }}
            markedDates={markedDates}
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