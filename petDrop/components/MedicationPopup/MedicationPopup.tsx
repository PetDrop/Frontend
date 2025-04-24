import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../../assets/dropdown_arrow.svg";
import styles from '../../styles/MedicationPopup.styles';
import { emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../../data/dataTypes";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import { Color } from "../../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DateCard from "./DateCard";
import ReminderPopup from "../ReminderPopup";
import { ADD_MEDICATION, httpRequest, UPDATE_MEDICATION } from "../../data/endpoints";

type MedicationPopupType = {
  isActive: Medication | undefined;
  showingFunction: Function;
  pet: Pet;
};

const MedicationPopup = ({ isActive, showingFunction, pet }: MedicationPopupType) => {
  const [popupShowing, setPopupShowing] = useState<Reminder>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateMap, setDateMap] = useState(new Map<Date, number>());
  const [description, setDescription] = useState('');
  const [medName, setMedName] = useState('');
  const [color, setColor] = useState(Math.round(Math.random() * 899998 + 100000));

const ObjectID = require('bson-objectid');
const id = ObjectID();

// # of milliseconds in a week used when adding recurring dates
const MS_IN_WEEK: number = 604800000;

// function for updating dates state
function updateDates(date: Date | undefined, recurring: number) {
  if (date === undefined) {
    setDateMap(new Map<Date, number>());
  } else {
    setDateMap((prevState) => new Map(prevState.set(date, recurring)));
  }
}

const close = () => {
  showingFunction(false);
  setDescription('');
  updateDates(undefined, 0); // undefined clears the map
}

const saveMedication = async (method: 'POST' | 'PUT') => {
  // create list of dates from dateMap
  const dates: string[] = [];
  dateMap.forEach((occurances: number, date: Date) => {
    let writableDate: Date = date; // make copy of the read-only value
    for (let i = 0; i < occurances; i++) {
      dates.push(writableDate.toDateString());
      writableDate.setTime(writableDate.getTime() + MS_IN_WEEK);
    }
  });
  // set the url based on fetch method
  const url: string = method === 'POST' ? ADD_MEDICATION : UPDATE_MEDICATION;
  // create new med object
  const newMed: Medication = { id: id, name: medName, color: `#${color}`, description: description, dates: dates, reminder: emptyReminder, range: 4 };
  // make request based on previous parameters
  const response = await httpRequest(url, method, JSON.stringify(newMed));
  if (response.ok) {
    close();
    alert('Medication saved');
  } else {
    console.log(`http ${method} request failed with error code: ${response.status}`);
    alert('Failed to save medication');
  }
};

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
          <View style={[styles.colorIndicator, { backgroundColor: `#${color}` }]} />

          {/* medication selection */}
          <Selection
            data={['med 1', 'med 2', 'med 3']}
            onSelect={(selectedItem: string) => { setMedName(selectedItem) }}
            renderButton={(selectedItem: string) => {
              return (
                <View style={styles.dropdownDefault}>
                  <Text style={styles.text}>
                    {selectedItem ? selectedItem : 'Select Medication'}
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
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={(date) => {
              if (!Array.from(dateMap.keys()).includes(date)) {
                updateDates(date, 0);
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
        <Pressable onPress={() => { setPopupShowing(emptyReminder) }}>
          <View style={styles.reminderButtonOval}>
            <Text style={[styles.reminderButtonText, styles.text]}>ADD REMINDER</Text>
          </View>
        </Pressable>


        {/* save button */}
        <Pressable onPress={() => {isActive.id === '' ? saveMedication('POST') : saveMedication('PUT')}}>
          <View style={styles.saveButtonOval}>
            <Text style={[styles.saveButtonText, styles.text]}>SAVE</Text>
          </View>
        </Pressable>

      </View>

      <ReminderPopup isActive={popupShowing} showingFunction={setPopupShowing} pet={pet} />
    </KeyboardAvoidingView>
  );
}
};

export default MedicationPopup;
