import * as React from "react";
import { StyleSheet, View, Text, Pressable, Button, TextInput, TouchableWithoutFeedback, Keyboard, SectionListComponent } from "react-native";
import { Image } from "expo-image";
import Polygon6 from "../assets/dropdown_arrow.svg";
import styles from '../styles/MedicationPopup.styles';
import { ADD_MEDICATION, httpRequest, UPDATE_PET } from "../data/endpoints";
import { Pet } from "../data/dataTypes";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useReducer, useState } from "react";
import { Color } from "../GlobalStyles";
import Selection from 'react-native-select-dropdown';

type MedicationPopupType = {
  isActive: boolean;
  showingFunction: Function;
  pet: Pet | undefined;
  updateMedications: Function | null;
};

const MedicationPopup = ({ isActive, showingFunction, pet, updateMedications }: MedicationPopupType) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dates, setDates] = useReducer(updateDates, []);
  const [description, setDescription] = useState('');
  const [medName, setMedName] = useState('');

  // function for updating dates state
  function updateDates(state: string[], action: { date: string }) {
    return state.concat([action.date]);
  }

  const close = () => {
    showingFunction(false);
    setDescription('');
  }

  const saveMedication = async () => {
    // random color for creating med - will be removed eventually
    const color = Math.round(Math.random() * 899998 + 100000);
    // create default med - will be removed eventually
    if (updateMedications !== null) {
      updateMedications({ med: { id: '', name: 'medname', color: `#${color}`, description: 'med description', dates: [], range: 4 } });
      close();
      return;
    }
    try {
      // create med from user input - to be done
      let response = await httpRequest(ADD_MEDICATION, 'POST', JSON.stringify({
        name: medName,
        color: `#${color}`,
        description: description,
        dates: dates,
        range: 4
      })
      );
      if (response.ok) {
        // if med created successfully and for an existent pet, add it to the pet
        if (pet !== undefined) {
          pet.medications.push(await response.json());
          response = await httpRequest(UPDATE_PET, 'PUT', JSON.stringify({
            id: pet.id,
            name: pet.name,
            image: pet.image,
            age: pet.age,
            breed: pet.breed,
            address: pet.address,
            vet: pet.vet,
            vetPhone: pet.vetPhone,
            medications: pet.medications
          })
          );
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

  if (isActive) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ position: 'absolute' }}>
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
                onSelect={(selectedItem: string) => {setMedName(selectedItem)}}
                renderButton={(selectedItem: string) => {return <View style={{flexDirection: 'row', width: 180}}><Text>{selectedItem ? selectedItem : 'Medifefefhefehdcation'}</Text><Polygon6 style={styles.downArrow} width={19} height={12} /></View>}}
                renderItem={(selectedItem: string) => {return <View><Text>{selectedItem}</Text></View>}}
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
            <View style={styles.popupBody}>

              {/* dates will be displayed here, with each one having another input option for how often it repeats */}

              <Button title="Add Date" onPress={() => { setDatePickerVisibility(true) }} />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(date) => {
                  if (!dates.includes(date.toDateString())) {
                    setDates({ date: date.toDateString() });
                  }
                  setDatePickerVisibility(false);
                }}
                onCancel={() => { setDatePickerVisibility(false) }}
              />

              <TextInput
                style={[styles.textInput]}
                placeholder="Enter any info you'll need later"
                placeholderTextColor={Color.colorCornflowerblue}
                value={description}
                onChangeText={setDescription}
                multiline={true}
              />

              {/* save button */}
              <Pressable onPress={saveMedication}>
                <View style={styles.saveButtonOval}>
                  <Text style={[styles.saveButtonText, styles.text]}>SAVE</Text>
                </View>
              </Pressable>

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

export default MedicationPopup;
