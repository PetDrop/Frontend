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
import { Account, emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../data/dataTypes";
import { useCallback, useEffect, useState } from "react";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { MarkedDates } from "react-native-calendars/src/types";
import { useFocusEffect } from "@react-navigation/native";
import MedSwitch from '../components/ItemSwitch';
import MedicationPopup from "../components/MedicationPopup/MedicationPopup";
import { medState } from "../data/states";

const { width, height } = Dimensions.get("window");

type HomeProps = {
  navigation: any;
  route: any;
};

const Home = ({ navigation, route }: HomeProps) => {
  const [switchDisplay, setSwitchDisplay] = useState<Medication[]>();
  const [infoToDisplay, setInfoToDisplay] = useState<{ pet: Pet, med: Medication }>();
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [popupState, setPopupState] = useState<medState>(medState.NO_ACTION);
  const [medMap, setMedMap] = useState<Map<string, { pet: Pet, med: Medication }[]>>(new Map());

  // store the user's account info to avoid typing "route.params.account" repeatedly
  let account: Account = route.params.account;

  let markedDatesMap: Map<string, Array<{ color: string, startingDay?: boolean, endingDay?: boolean }>> = new Map();
  useFocusEffect(
    useCallback(() => {
      // maps all dates of meds to the meds on those dates
      const tempMedMap = new Map<string, { pet: Pet, med: Medication }[]>();

      // keeps track of which row each med's periods will be in
      const medRowMap = new Map<string, number>();

      // assign row number to each med while also counting the total number of them
      let rowIndex = 0;
      account.pets.forEach(pet => {
        pet.medications.forEach(med => {
          if (!medRowMap.has(med.name)) {
            medRowMap.set(med.name, rowIndex++);
          }
          med.dates.forEach((date => {
            tempMedMap.has(date) ?
              tempMedMap.set(date, tempMedMap.get(date)!.concat([{ pet, med }])) :
              tempMedMap.set(date, [{ pet, med }]);
          }));
        });
      });
      setMedMap(tempMedMap);
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

  const findPet = (med: Medication) => {
    let pet = account.pets.find((pet) =>
      pet.medications.some((medication) => medication.id === med.id)
    )!;
    showMed({ pet, med });
  }

  const showMed = (info: { pet: Pet, med: Medication }) => {
    setInfoToDisplay(info);
    setPopupState(medState.SHOW_POPUP);
  }

  if (popupState === medState.NO_ACTION && infoToDisplay) {
    setInfoToDisplay(undefined);
    setSwitchDisplay(undefined);
  }

  console.log(infoToDisplay);

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
            onDayPress={(day: DateData) => {
              const medsThatDay = medMap.get(day.dateString);
              if (medsThatDay) {
                if (medsThatDay.length == 1) {
                  showMed(medsThatDay[0]);
                } else {
                  const meds: Medication[] = [];
                  medsThatDay.forEach((obj) => {
                    meds.push(obj.med);
                  })
                  setSwitchDisplay(meds);
                }
              }
            }}
            markedDates={markedDates}
          />
        </View>

        {switchDisplay && (
          <MedSwitch
            data={switchDisplay}
            switchItem={'Medication'}
            selectedItem={infoToDisplay ? infoToDisplay.med : emptyMed}
            onSwitch={findPet}
          />
        )}

        {/* Medications List */}
        <MedicationsList pets={account.pets} />

        <MedicationPopup
          isActive={infoToDisplay ? true : false}
          setPopupState={setPopupState}
          med={infoToDisplay ? infoToDisplay.med : emptyMed}
          pet={infoToDisplay ? infoToDisplay.pet : emptyPet}
          setMedication={() => { }}
          setReminder={() => { }}
          readonly={true}
        />

      </ScrollView>
      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Home} account={account} />

    </View>
  );
};

export default Home;