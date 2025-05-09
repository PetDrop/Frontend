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
import { useCallback, useEffect, useState } from "react";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { MarkedDates } from "react-native-calendars/src/types";
import { useFocusEffect } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

type HomeProps = {
  navigation: any;
  route: any;
};

const Home = ({ navigation, route }: HomeProps) => {
  const [popupShowing, setPopupShowing] = useState(false);
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  // store the user's account info to avoid typing "route.params.account" repeatedly
  let account: Account = route.params.account;

  let markedDatesMap: Map<string, Array<{ color: string, startingDay?: boolean, endingDay?: boolean }>> = new Map();
  useFocusEffect(
    useCallback(() => {
      // keeps track of which row each med's periods will be in
      const medRowMap = new Map<string, number>();

      // assign row number to each med while also counting the total number of them
      let rowIndex = 0;
      account.pets.forEach(pet => {
        pet.medications.forEach(med => {
          if (!medRowMap.has(med.name)) {
            medRowMap.set(med.name, rowIndex++);
          }
        });
      });
      const totalRows = rowIndex;

      // add a period for each date to the markedDatesMap
      account.pets.forEach(pet => {
        pet.medications.forEach(med => {
          med.dates.forEach(date => {
            // find out what the day before and after the date in question are
            const dateObject = new Date(date);
            const dayBefore = new Date(dateObject.getTime() - 86400000).toISOString().slice(0, 10);
            const dayAfter = new Date(dateObject.getTime() + 86400000).toISOString().slice(0, 10);

            // use days before and after to test if this date is the start of
            // a period, the end of it, or neither
            const period: any = {
              color: med.color,
              startingDay: !med.dates.includes(dayBefore),
              endingDay: !med.dates.includes(dayAfter)
            };

            // padding of transparent periods is used to properly line up the ones being shown
            const existingPeriods = markedDatesMap.get(date) || Array(totalRows).fill({ color: 'transparent' });
            // put the period in the right row to line it up
            existingPeriods[medRowMap.get(med.name)!] = period; // non-null assertion used to avoid possibly undefined error
            markedDatesMap.set(date, existingPeriods);
          });
        });
      });

      // construct MarkedDates prop for calendar by creating a field for each unique date 
      // containing a period for each med to be administered on said date
      const newMarkedDates: MarkedDates = {};
      markedDatesMap.forEach((periods, date) => {
        newMarkedDates[date] = { periods };
      });

      // update state and re-render
      setMarkedDates(newMarkedDates);
    }, [])
  );


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