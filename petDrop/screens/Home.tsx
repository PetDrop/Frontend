import * as React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Home/Header";
import { Calendar, DateData } from 'react-native-calendars';
import MedicationsList from "../components/Home/MedicationsList";
import UserGreeting from "../components/Home/UserGreeting";
import TopBottomBar from "../components/TopBottomBar";
import { ScreenEnum } from "../GlobalStyles";
import { styles, calendarTheme } from "../styles/Home.styles";
import { Account, emptyMed, emptyPet, Medication, Pet } from "../data/dataTypes";
import { useCallback, useState } from "react";
import { MarkedDates } from "react-native-calendars/src/types";
import { useFocusEffect } from "@react-navigation/native";
import MedSwitch from '../components/ItemSwitch';
import MedicationPopup from "../components/MedicationPopup/MedicationPopup";
import { medState } from "../data/enums";
import SelectMedPopup from "../components/SelectMedPopup";

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

  // populates a map of all meds to their pet and dates
  const populateAllDatesMap = (pet: Pet, allDatesMap: Map<Medication, { pet: Pet, dates: string[] }>) => {
    pet.medications.forEach(med => {
      med.dates.forEach(dateObj => {
        const dates: string[] = [];
        if (dateObj.endDate.length > 0) {
          let numDays = (new Date(dateObj.endDate).getTime() - new Date(dateObj.startDate).getTime()) / 86400000;
          dates.push(dateObj.startDate);
          for (let i = 0; i < numDays; i++) {
            let dayToAdd = new Date(dateObj.startDate);
            dayToAdd.setTime(dayToAdd.getTime() + 86400000 * (i + 1));
            dates.push(dayToAdd.toISOString().slice(0, 10));
          }
        } else {
          dates.push(dateObj.startDate);
          for (let i = 1; i < dateObj.recurrances; i++) {
            let dayToAdd = new Date(dateObj.startDate);
            dayToAdd.setTime(dayToAdd.getTime() + 604800000 * i)
            dates.push(dayToAdd.toISOString().slice(0, 10));
          }
        }
        if (allDatesMap.has(med)) {
          const newDates = allDatesMap.get(med)!.dates.concat(dates);
          allDatesMap.set(med, { pet, dates: newDates });
        } else {
          allDatesMap.set(med, { pet, dates });
        }
      })
    })
  }

  let markedDatesMap: Map<string, Array<{ color: string, startingDay?: boolean, endingDay?: boolean }>> = new Map();
  useFocusEffect(
    useCallback(() => {
      // maps all meds to an object containing their pets and a list of all their dates
      const allDatesMap = new Map<Medication, { pet: Pet, dates: string[] }>();

      [...account.pets, ...account.sharedPets].forEach(pet => {
        populateAllDatesMap(pet, allDatesMap);
      });

      // maps all dates of meds to the meds on those dates
      const tempMedMap = new Map<string, { pet: Pet, med: Medication }[]>();

      allDatesMap.forEach((value, med) => {
        value.dates.forEach(date => {
          tempMedMap.has(date) ?
            tempMedMap.set(date, tempMedMap.get(date)!.concat([{ pet: value.pet, med }])) :
            tempMedMap.set(date, [{ pet: value.pet, med }]);
        })
      });
      setMedMap(tempMedMap);

      // keeps track of which row each med's periods will be in
      const medRowMap = new Map<string, number>();

      // assign row number to each med while also counting the total number of them
      let rowIndex = 0;
      [...account.pets, ...account.sharedPets].forEach(pet => {
        pet.medications.forEach(med => {
          if (!medRowMap.has(med.name)) {
            medRowMap.set(med.name, rowIndex++);
          }
        });
      });
      const totalRows = rowIndex;

      // add a period for each date to the markedDatesMap
      allDatesMap.forEach((value, med) => {
        value.dates.forEach(date => {
          // find out what the day before and after the date in question are
          const dateObject = new Date(date);
          const dayBefore = new Date(dateObject.getTime() - 86400000).toISOString().slice(0, 10);
          const dayAfter = new Date(dateObject.getTime() + 86400000).toISOString().slice(0, 10);

          // use days before and after to test if this date is the start of
          // a period, the end of it, or neither
          const period: any = {
            color: med.color,
            startingDay: !value.dates.includes(dayBefore),
            endingDay: !value.dates.includes(dayAfter)
          };

          // padding of transparent periods is used to properly line up the ones being shown
          const existingPeriods = markedDatesMap.get(date) || Array(totalRows).fill({ color: 'transparent' });
          // put the period in the right row to line it up
          existingPeriods[medRowMap.get(med.name)!] = period; // non-null assertion used to avoid possibly undefined error
          markedDatesMap.set(date, existingPeriods);
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

  // find the pet that has med
  const findPet = (med: Medication) => {
    // check current user's pets first
    let pet = account.pets.find((pet) =>
      pet.medications.some((medication) => medication.id === med.id)
    );
    // if pet not found, check sharedPets
    if (!pet) {
      pet = account.sharedPets.find((pet) =>
        pet.medications.some((medication) => medication.id === med.id)
      )!;
    }
    showMed({ pet, med });
    setSwitchDisplay(undefined);
  }

  const showMed = (info: { pet: Pet, med: Medication }) => {
    setInfoToDisplay(info);
    setPopupState(medState.SHOW_POPUP);
  }

  if (popupState === medState.NO_ACTION && infoToDisplay) {
    setInfoToDisplay(undefined);
    setSwitchDisplay(undefined);
  }

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

        {/* Medications List */}
        <MedicationsList petMedObjects={medMap} onPress={showMed} />

      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Home} account={account} />

      {/* popup that displays all meds on a certain date */}
      {switchDisplay && (
        <View style={{ position: 'absolute' }}>
          <SelectMedPopup close={() => { setSwitchDisplay(undefined) }} />
          <View style={styles.medSwitchContainer}>
            <MedSwitch
              text={'select medication'}
              data={switchDisplay ? switchDisplay : []}
              switchItem={'Medication'}
              selectedItem={infoToDisplay ? infoToDisplay.med : emptyMed}
              onSwitch={findPet}
            />
          </View>
        </View>
      )}

      <MedicationPopup
        isActive={infoToDisplay ? true : false}
        setPopupState={setPopupState}
        med={infoToDisplay ? infoToDisplay.med : emptyMed}
        pet={infoToDisplay ? infoToDisplay.pet : emptyPet}
        setMedication={() => { }}
        setReminder={() => { }}
        readonly={true}
        navigation={navigation}
        account={account}
      />

    </View>
  );
};

export default Home;