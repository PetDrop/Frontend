import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../assets/dropdown_arrow.svg";
import styles from '../styles/MedicationPopup.styles';
import { emptyMed, emptyPet, Pet, Reminder } from "../data/dataTypes";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import { Color } from "../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DateCard from "./DateCard";
import ReminderPopup from "./ReminderPopup";

type MedicationPopupType = {
  isActive: boolean;
  showingFunction: Function;
  setMedication: Function;
  setReminder: Function;
  pet: Pet | undefined;
  pets: Pet[];
};

const MedicationPopup = ({ isActive, showingFunction, setMedication, setReminder, pet, pets }: MedicationPopupType) => {
  const [popupShowing, setPopupShowing] = useState<Reminder>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dates, setDates] = useState(new Map<string, boolean>());
  const [description, setDescription] = useState('');
  const [medName, setMedName] = useState('');
  const [color, setColor] = useState(Math.round(Math.random() * 899998 + 100000));

const ObjectID = require('bson-objectid');
const id = ObjectID();

// function for updating dates state
function updateDates(date: string, recurring: boolean) {
  if (date === 'clear') {
    setDates(new Map<string, boolean>());
  } else {
    setDates((prevState) => new Map(prevState.set(date, recurring)));
  }
}

const close = () => {
  showingFunction(false);
  setDescription('');
  updateDates('clear', false);
}

const saveMedication = async () => {
  // random color for creating med - will be removed eventually
  // add medication to the list that will be created when the pet is submitted
  setMedication({ id: id, name: medName, color: `#${color}`, description: description, dates: Array.from(dates.keys()), range: 4 });
  close();
};

const dateCards: Array<React.JSX.Element> = [];
Array.from(dates.keys()).forEach((date: string, index: number) => {
  dateCards.push(
    <DateCard date={date} key={index} />
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
              source={require("../assets/remove_x_white.png")}
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
              if (!Array.from(dates.keys()).includes(date.toDateString())) {
                updateDates(date.toDateString(), false);
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
        <Pressable onPress={() => { setPopupShowing({ id: '', medication: emptyMed, pet: pet ? pet : emptyPet, notifications: [] }) }}>
          <View style={styles.reminderButtonOval}>
            <Text style={[styles.reminderButtonText, styles.text]}>ADD REMINDER</Text>
          </View>
        </Pressable>


        {/* save button */}
        <Pressable onPress={saveMedication}>
          <View style={styles.saveButtonOval}>
            <Text style={[styles.saveButtonText, styles.text]}>SAVE</Text>
          </View>
        </Pressable>

      </View>

      <ReminderPopup isActive={popupShowing} showingFunction={setPopupShowing} pets={pets} setReminder={setReminder} />
    </KeyboardAvoidingView>
  );
}
};

export default MedicationPopup;
