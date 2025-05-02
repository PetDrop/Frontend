import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../../assets/dropdown_arrow.svg";
import styles from '../../styles/MedicationPopup.styles';
import { Medication, Pet } from "../../data/dataTypes";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import { Color } from "../../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DateCard from "./DateCard";
import ReminderPopup from "../ReminderPopup";
import DeleteButton from '../CustomButton';
import { medState } from "../../screens/MedicationsArchive";
import { remState } from "../../screens/Reminders";

type MedicationPopupType = {
  isActive: boolean;
  setPopupState: Function;
  setMedication: Function;
  setReminder: Function;
  pet: Pet;
  med: Medication;
};

const MedicationPopup = ({ isActive, setPopupState, setMedication, setReminder, pet, med }: MedicationPopupType) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateMap, setDateMap] = useState(new Map<Date, number>());
  const [description, setDescription] = useState(med.description);
  const [medName, setMedName] = useState(med.name);
  const [color, setColor] = useState(med.color !== '' ? med.color : `#${Math.round(Math.random() * 899998 + 100000)}`);
  const [propsChanged, setPropsChanged] = useState(true);
  const [remPopupState, setRemPopupState] = useState(remState.NO_ACTION);

  const ObjectID = require('bson-objectid');
  const id = med.id !== '' ? med.id : ObjectID();

  // function for updating dates state
  function updateDates(date: Date | undefined, recurring: number) {
    if (date === undefined) {
      setDateMap(new Map<Date, number>());
    } else {
      setDateMap((prevState) => new Map(prevState.set(date, recurring)));
    }
  }

  const createDateMap = (dates: string[]): Map<Date, number> => {
    let newDateMap: Map<Date, number> = new Map<Date, number>();
    dates.forEach((date: string) => {
      const newDate = new Date(Date.parse(date));
      if (newDateMap.has(newDate)) {
        // temp var recurring is needed because of 'possibly undefined' errors (redundant because has() being true means get() is defined)
        let recurring = newDateMap.get(newDate);
        recurring = recurring ? recurring : 0;
        newDateMap.set(newDate, recurring + 1);
      } else {
        newDateMap.set(newDate, 1);
      }
    });
    return newDateMap;
  }

  if (isActive && propsChanged) {
    setPropsChanged(false);
    setDescription(med.description);
    const medDateMap = createDateMap(med.dates);
    setDateMap(medDateMap);
    setMedName(med.name);
    setColor(med.color !== '' ? med.color : `#${Math.round(Math.random() * 899998 + 100000)}`);
  }

  const close = () => {
    setDescription('');
    updateDates(undefined, 0); // undefined clears the map
    setMedName('');
    setColor(`#${Math.round(Math.random() * 899998 + 100000)}`);
    setPropsChanged(true);
    setPopupState(medState.NO_ACTION);
  }

  const closeWithAction = (deleted: boolean) => {
    // TODO: ask for confirmation if deleted
    const newMed: Medication = { id: id, name: medName, color: color, description: description, dates: dates, reminder: med.reminder, range: 4 };
    // add medication to the list that will be created when the popup is closed
    setMedication(newMed);
    let newState;
    if (med.id === '') {
      newState = medState.MED_CREATED;
    } else if (deleted) {
      newState = medState.MED_DELETED;
    } else {
      // use the numbers behind states to avoid a switch statement
      newState = medState.MED_EDITED_REM_NOTHING + remPopupState;
    }
    close();
    setPopupState(newState);
  };

  // # of milliseconds in a week used when adding recurring dates
  const MS_IN_WEEK: number = 604800000;

  // create list of dates from dateMap
  const dates: string[] = [];
  dateMap.forEach((occurances: number, date: Date) => {
    let writableDate: Date = new Date(date); // make copy of the value so it doesn't update the dateMap
    for (let i = 0; i < occurances; i++) {
      dates.push(writableDate.toDateString());
      writableDate.setTime(writableDate.getTime() + MS_IN_WEEK);
    }
  });

  const dateCards: Array<React.JSX.Element> = [];
  Array.from(dateMap.keys()).forEach((date: Date, index: number) => {
    dateCards.push(
      <DateCard date={date} updateDates={updateDates} key={index} />
    )
  })

  if (isActive) {
    return (
      <KeyboardAvoidingView style={{ position: 'absolute' }} behavior="padding">
        {/* opaque layer to blur background */}
        <View style={styles.opaqueBackground} />

        {/* the popup itself */}
        <View style={styles.medicationPopup}>

          {/* blue top banner */}
          <View style={styles.topBanner}>

            {/* TODO: make this pressable to pick a color */}
            {/* color indicator */}
            <View style={[styles.colorIndicator, { backgroundColor: color }]} />

            {/* medication selection */}
            <Selection
              data={['med 1', 'med 2', 'med 3']}
              onSelect={(selectedItem: string) => { setMedName(selectedItem) }}
              renderButton={(selectedItem: string) => {
                return (
                  <View style={styles.dropdownDefault}>
                    <Text style={styles.text}>
                      {selectedItem ? selectedItem : med.name ? med.name : 'Select Medication'}
                    </Text>
                    <DropdownArrow style={styles.downArrow} width={19} height={12} />
                  </View>
                )
              }}
              renderItem={(selectedItem: string) => {
                return (
                  <View style={styles.dropdownItem}>
                    <Text style={styles.text}>{selectedItem}</Text>
                  </View>
                )
              }}
            />

            {/* close x button */}
            <Pressable onPress={() => { close() }} style={styles.closePopupContainer}>
              <Image
                style={styles.closePopup}
                contentFit="cover"
                source={require("../../assets/remove_x_white.png")}
              />
            </Pressable>

          </View>

          {/* white main area */}
          <ScrollView style={styles.popupBody}>

            <View style={styles.dateCardContainer}>
              {dateCards}
            </View>

            <Button title="Add Date" onPress={() => { setDatePickerVisibility(true) }} />
            <DateTimePickerModal
              date={new Date(Date.now())}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={(date) => {
                if (!Array.from(dateMap.keys()).includes(date)) {
                  updateDates(date, 1);
                }
                setDatePickerVisibility(false);
              }}
              onCancel={() => { setDatePickerVisibility(false) }}
            />

            <TextInput
              style={[styles.textInput]}
              placeholder="Enter any info you'll need later (time(s) to administer the medication, notes, instructions, etc.)"
              placeholderTextColor={Color.colorCornflowerblue}
              value={description}
              onChangeText={setDescription}
              multiline={true}
            />

          </ScrollView>

          {/* add reminder button */}
          <Pressable onPress={() => { setRemPopupState(remState.SHOW_POPUP) }}>
            <View style={styles.reminderButtonOval}>
              <Text style={[styles.reminderButtonText, styles.text]}>{`${med.reminder.notifications.length > 0 ? 'VIEW' : 'ADD'} REMINDER`}</Text>
            </View>
          </Pressable>

          {/* delete button */}
          {med.id !== '' && (
            <DeleteButton onPressFunction={() => { closeWithAction(true) }} innerText={'delete'} color={Color.colorFirebrick} />
          )}

          {/* save button */}
          <Pressable onPress={() => { closeWithAction(false) }}>
            <View style={styles.saveButtonOval}>
              <Text style={[styles.saveButtonText, styles.text]}>SAVE</Text>
            </View>
          </Pressable>

        </View>

        <ReminderPopup
          isActive={remPopupState === remState.SHOW_POPUP}
          setPopupState={setRemPopupState}
          setRem={setReminder}
          setMed={() => { }}
          pet={pet}
          med={{
            id: med.id,
            color: color,
            dates: dates,
            description: description,
            name: medName === '' ? 'MED BEING ADDED' : medName,
            range: med.range,
            reminder: med.reminder
          }} />
      </KeyboardAvoidingView>
    );
  }
};

export default MedicationPopup;