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
import { usePushToken } from "../context/PushTokenContext";
import HelpButton from "../components/HelpButton";
import HelpPopup from "../components/HelpPopup";
import { helpText } from "../data/helpText";

type HomeProps = {
  navigation: NavigationProp<any>;
  route: any;
};

const Home = ({ navigation, route }: HomeProps) => {
  const { account, setAccount } = useAccount();
  const { pushToken } = usePushToken();
  const [switchDisplay, setSwitchDisplay] = useState<Medication[]>();
  const [infoToDisplay, setInfoToDisplay] = useState<{ pet: Pet, med: Medication }>();
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [popupState, setPopupState] = useState<medState>(medState.NO_ACTION);
  const [medMap, setMedMap] = useState<Map<string, { pet: Pet, med: Medication }[]>>(new Map());
  const [showHelp, setShowHelp] = useState(false);



  useEffect(() => {
    const newMarkedDates: MarkedDates = {};
    const newMedMap = new Map<string, { pet: Pet, med: Medication }[]>();

    const formatDate = (d: Date) => d.toISOString().slice(0, 10); // YYYY-MM-DD formatting

    account.pets.forEach(pet => {
      pet.medications.forEach((med: Medication) => {
        // aggregate all dates for this medication across all its notifications
        const medDates = new Set<string>();

        med.notifications.forEach((notif: Notification) => {
          if (notif.repeatInterval === '') return;
          // Walk from nextRuns through finalRuns, stepping by repeatInterval
          for (let i = 0; i < notif.nextRuns.length; i++) {
            let cursor = new Date(notif.nextRuns[i]);
            const finalDate = new Date(notif.finalRuns[i]);

            while (cursor <= finalDate) {
              medDates.add(formatDate(cursor));

              switch (notif.repeatInterval) {
                case 'daily':
                  cursor.setDate(cursor.getDate() + 1);
                  break;
                case 'weekly':
                  cursor.setDate(cursor.getDate() + 7);
                  break;
                case 'monthly':
                  cursor.setMonth(cursor.getMonth() + 1);
                  break;
              }
            }
          }
        });

        // now mark each date only once per medication
        medDates.forEach((dayKey) => {
          if (!newMarkedDates[dayKey]) newMarkedDates[dayKey] = { periods: [] };
          const periods = newMarkedDates[dayKey].periods!;
          // avoid duplicate period for same medication/color
          const alreadyHasColor = periods.some(p => p.color === med.color);
          if (!alreadyHasColor) periods.push({ color: med.color });

          if (!newMedMap.has(dayKey)) newMedMap.set(dayKey, []);
          const arr = newMedMap.get(dayKey)!;
          // avoid duplicate {pet, med} entries for this date
          const alreadyHasMed = arr.some(entry => entry.med.id === med.id);
          if (!alreadyHasMed) arr.push({ pet, med });
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
        <Header navigation={navigation} />

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
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Home} />

      {/* popup that displays all meds on a certain date */}
      {switchDisplay && (
        <View style={{ position: 'absolute', zIndex: 1000, elevation: 1000 }}>
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
        medCopy={infoToDisplay ? infoToDisplay.med : emptyMed}
        setMedCopy={() => { }}
        pet={infoToDisplay ? infoToDisplay.pet : emptyPet}
        readonly={true}
        navigation={navigation}
      />

      <HelpButton onPress={() => setShowHelp(true)} />
      <HelpPopup
        isVisible={showHelp}
        helpText={helpText.Home}
        onClose={() => setShowHelp(false)}
      />

    </View>
  );
};

export default Home;