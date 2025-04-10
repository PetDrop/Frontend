import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Polygon6 from "../assets/dropdown_arrow.svg";
import styles from '../styles/MedicationPopup.styles';
import { ADD_MEDICATION, httpRequest, UPDATE_PET } from "../data/endpoints";
import { Pet } from "../data/dataTypes";

type MedicationPopupType = {
  isActive: boolean;
  showingFunction: Function;
  pet: Pet | undefined;
  updateMedications: Function | null;
};

const MedicationPopup = ({ isActive, showingFunction, pet, updateMedications }: MedicationPopupType) => {
  const saveMedication = async () => {
    // random color for creating med - will be removed eventually
    const color = Math.round(Math.random() * 899998 + 100000);
    // create default med - will be removed eventually
    if (updateMedications !== null) {
      updateMedications({ med: { id: '', name: 'medname', color: `#${color}`, description: 'med description', dates: [], range: 4 } });
      showingFunction(false);
      return;
    }
    try {
      // create med from user input - to be done
      let response = await httpRequest(ADD_MEDICATION, 'POST', JSON.stringify({
        name: "medname",
        color: `#${color}`,
        description: "meddescription",
        dates: [],
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
            showingFunction(false);
            alert('Medication submitted successfully');
          } else {
            console.log('unable to add medication to pet: status code ' + response.status);
            alert('failed to add medication to pet');
          }
        } else {
          showingFunction(false);
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

            {/* TODO: turn this and the select down arrow into an actual selection field */}
            {/* medication name */}
            <Text style={[styles.medicationName, styles.text]}>Medication</Text>

            {/* select down arrow */}
            <Polygon6 style={styles.downArrow} width={19} height={12} />

            {/* close x button */}
            <Pressable onPress={() => { showingFunction(false) }}>
              <Image
                style={styles.closePopup}
                contentFit="cover"
                source={require("../assets/remove_x_white.png")}
              />
            </Pressable>

          </View>

          {/* white main area */}
          <View style={styles.popupBody}>

            {/* TODO: add inputs in the main part of the popup */}

            {/* save button */}
            <Pressable onPress={saveMedication}>
              <View style={styles.saveButtonOval}>
                <Text style={[styles.saveButtonText, styles.text]}>SAVE</Text>
              </View>
            </Pressable>

          </View>
        </View>
      </View>
    );
  }
};

export default MedicationPopup;
