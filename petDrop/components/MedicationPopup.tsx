import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../assets/dropdown_arrow.svg";
import styles from '../styles/MedicationPopup.styles';
import { ADD_MEDICATION, httpRequest, UPDATE_PET } from "../data/endpoints";
import { Pet } from "../data/dataTypes";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import { Color } from "../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DateCard from "./DateCard";

type MedicationPopupType = {
  isActive: boolean;
  showingFunction: Function;
  pet: Pet | undefined;
  updateMedications: Function | null;
};

const MedicationPopup = ({ isActive, showingFunction, pet, updateMedications }: MedicationPopupType) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dates, setDates] = useState(new Map<string, boolean>());
  const [description, setDescription] = useState('');
  const [medName, setMedName] = useState('');

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
    const color = Math.round(Math.random() * 899998 + 100000);
    // if on new pet page, add medication to the list that will be created when the pet is submitted
    if (updateMedications !== null) {
      updateMedications({ med: { id: '', name: medName, color: `#${color}`, description: description, dates: Array.from(dates.keys()), range: 4 } });
      close();
      return;
    }
    try {
      // create med from user input - to be done
      let response = await httpRequest(ADD_MEDICATION, 'POST', JSON.stringify({
        name: medName,
        color: `#${color}`,
        description: description,
        dates: Array.from(dates.keys()),
        range: 4
      })
      );
      if (response.ok) {
        // if med created successfully and for an existent pet, add it to the pet
        if (pet !== undefined) {
          pet.medications.push(await response.json());
          response = await httpRequest(UPDATE_PET, 'PUT', JSON.stringify(pet));
          if (response.ok) {
            close();
            alert('Medication submitted successfully');
          } else {
            console.log('unable to add medication to pet: status code ' + response.status);
            alert('failed to add medication to pet');
          }
        } else {
          close();
          alert('Unable to add medication to pet');
        }
      } else {
        console.log('unable to write medication to database: status code ' + response.status);
        alert('submission failed');
      }
    } catch (error) {
      console.error(error);
    }
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
            <View style={styles.colorIndicator} />

            {/* medication selection */}
            <Selection
              data={['med 1', 'med 2', 'med 3']}
              onSelect={(selectedItem: string) => { setMedName(selectedItem) }}
              renderButton={(selectedItem: string) => {
                return (
                  <View style={styles.dropdownDefault}>
                    <Text style={styles.text}>
                      {selectedItem ? selectedItem : 'Medication'}
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
              placeholder="Enter any info you'll need later (notes, instructions, etc.)"
              placeholderTextColor={Color.colorCornflowerblue}
              value={description}
              onChangeText={setDescription}
              multiline={true}
            />

          </ScrollView>

          {/* save button */}
          <Pressable onPress={saveMedication}>
            <View style={styles.saveButtonOval}>
              <Text style={[styles.saveButtonText, styles.text]}>SAVE</Text>
            </View>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    );
  }
};

export default MedicationPopup;
