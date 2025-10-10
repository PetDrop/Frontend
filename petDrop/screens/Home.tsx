import * as React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import { Calendar, DateData } from 'react-native-calendars';
import MedicationsList from "../components/Home/MedicationsList";
import UserGreeting from "../components/Home/UserGreeting";
import TopBottomBar from "../components/TopBottomBar";
import { ScreenEnum } from "../GlobalStyles";
import { styles, calendarTheme } from "../styles/Home.styles";
import { Account, emptyMed, emptyPet, Medication, Pet, Notification } from "../data/dataTypes";
import { useEffect, useState } from "react";
import { MarkedDates } from "react-native-calendars/src/types";
import { NavigationProp } from "@react-navigation/native";
import MedSwitch from '../components/ItemSwitch';
import MedicationPopup from "../components/MedicationPopup/MedicationPopup";
import { medState } from "../data/enums";
import SelectMedPopup from "../components/SelectMedPopup";
import { useAccount } from "../context/AccountContext";

type HomeProps = {
  navigation: NavigationProp<any>;
  route: any;
};

const Home = ({ navigation, route }: HomeProps) => {
  const { account, setAccount } = useAccount();
  const [switchDisplay, setSwitchDisplay] = useState<Medication[]>();
  const [infoToDisplay, setInfoToDisplay] = useState<{ pet: Pet, med: Medication }>();
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [popupState, setPopupState] = useState<medState>(medState.NO_ACTION);
  const [medMap, setMedMap] = useState<Map<string, { pet: Pet, med: Medication }[]>>(new Map());

  const pushToken: string = route.params.pushToken;


  useEffect(() => {
    const newMarkedDates: MarkedDates = {};
    const newMedMap = new Map<string, { pet: Pet, med: Medication }[]>();

    const formatDate = (d: Date) => d.toISOString().slice(0, 10); // YYYY-MM-DD formatting

    account.pets.forEach(pet => {
      pet.medications.forEach((med: Medication) => {

        med.notifications.forEach((notif: Notification) => {
          const intervalMs = notif.repeatInterval * 60000; // convert minutes to ms
          if (intervalMs <= 0) return; // should never be negative, but 0 might happen from emptyNotif

          // Walk from nextRuns through finalRuns, stepping by repeatInterval
          for (let i = 0; i < notif.nextRuns.length; i++) {
            let cursor = new Date(notif.nextRuns[i]);
            const finalDate = new Date(notif.finalRuns[i]);

            // Add every date in [nextRun, finalRun], stepping by repeatInterval
            while (cursor <= finalDate) {
              const dayKey = formatDate(cursor);

              // add new key if needed, and update key with period for this notif
              if (!newMarkedDates[dayKey]) newMarkedDates[dayKey] = { periods: [] };
              newMarkedDates[dayKey].periods!.push({ color: med.color });

              // add new key if needed, and update key with {pet, med} for this date
              if (!newMedMap.has(dayKey)) newMedMap.set(dayKey, []);
              newMedMap.get(dayKey)!.push({ pet, med });

              cursor = new Date(cursor.getTime() + intervalMs);
            }
          }
        });
      });
    });

    // function for taking YYYY-MM-DD and returning another day
    const addDays = (d: string, n: number) => {
      const newDate = new Date(d + 'T00:00:00');
      newDate.setDate(newDate.getDate() + n);
      return formatDate(newDate);
    };

    // Add startingDay/endingDay flags so multi-period bars link correctly
    Object.keys(newMarkedDates).forEach(date => {
      // get the prev and next days to check if this med is administered then
      const prevDay = addDays(date, -1);
      const nextDay = addDays(date, 1);

      // iterate through each period and add startingDay and endingDay to them
      newMarkedDates[date].periods = newMarkedDates[date].periods!.map(period => {
        // same color means same med
        const prevSameColor = prevDay && newMarkedDates[prevDay]?.periods?.some(p => p.color === period.color);
        const nextSameColor = nextDay && newMarkedDates[nextDay]?.periods?.some(p => p.color === period.color);

        // add the new valus
        return {
          ...period,
          startingDay: !prevSameColor,
          endingDay: !nextSameColor,
        };
      });
    });

    setMarkedDates(newMarkedDates);
    setMedMap(newMedMap);
  }, [account]);

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
        <Header navigation={navigation} account={account} />

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
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Home} account={account} pushToken={pushToken} />

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
        medCopy={emptyMed}
        setMedCopy={() => { }}
        pet={infoToDisplay ? infoToDisplay.pet : emptyPet}
        readonly={true}
        navigation={navigation}
        account={account}
        pushToken={pushToken}
      />

    </View>
  );
};

export default Home;