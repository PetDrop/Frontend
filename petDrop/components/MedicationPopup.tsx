import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Polygon6 from "../assets/dropdown_arrow.svg";
import Ellipse17 from "../assets/blue_circle_small.svg";
import styles from '../styles/MedicationPopup.styles';
import { ADD_MEDICATION, UPDATE_PET } from "../data/endpoints";
import { Medication, Pet } from "../data/dataTypes";

type MedicationPopupProps = {
  isActive: boolean;
  showingFunction: Function;
  pet: Pet | undefined;
  updateMedications: Function | null;
};

const MedicationPopup = ({ isActive, showingFunction, pet, updateMedications }: MedicationPopupProps) => {
  const saveMedication = async () => {
    const color = Math.round(Math.random() * 899998 + 100000);
    if (updateMedications !== null) {
      updateMedications({med: { id: '', name: 'medname', color: `#${color}`, description: 'med description', dates: [], range: 4 }});
      showingFunction(false);
      return;
    }
    try {
      
      let response = await fetch(ADD_MEDICATION, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "medname",
          color: `#${color}`,
          description: "meddescription",
          dates: [],
          range: 4
        }),
      });
      if (response.ok) {
        if (pet !== undefined) {
          pet.medications.push(await response.json());
          response = await fetch(UPDATE_PET, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: pet.id,
              name: pet.name,
              image: pet.image,
              age: pet.age,
              breed: pet.breed,
              address: pet.address,
              vet: pet.vet,
              vetPhone: pet.vetPhone,
              medications: pet.medications
            }),
          });
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
      <View style={{ position: "absolute" }}>
        <View style={styles.opaqueBackground} />
        <View style={styles.medPopupContainer}>
          <View style={styles.medicationPopup}>
            <View style={styles.rectangleParent}>
              <View style={styles.groupChild} />
              <View style={styles.groupItem} />
              <Text style={styles.exDosageTake}>
                ex. dosage, take with food, etc...
              </Text>
              <View style={styles.groupInner} />
              <Pressable onPress={saveMedication}>
                <View style={styles.rectangleGroup}>
                  <View style={styles.rectangleView} />
                  <Text style={[styles.save, styles.saveTypo]}>SAVE</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => { showingFunction(false) }} style={styles.closePopupContainer}>
                <Image
                  style={styles.closePopup}
                  contentFit="cover"
                  source={require("../assets/remove_x_white.png")}
                />
              </Pressable>
              <Text style={[styles.medication, styles.saveTypo]}>Medication</Text>
              <View style={styles.groupChild1} />
              <Text style={[styles.datesSeptember19, styles.textTypo]}>{`Dates:
    September 19

    Notifications: 

    Message: 
    `}</Text>
              <Text style={[styles.text, styles.textTypo]}>
                {`09 `}/{`19 `}/25
              </Text>
              <Polygon6 style={styles.polygonIcon} width={19} height={12} />
              <View style={[styles.ellipseParent, styles.ellipseLayout]}>
                <Ellipse17
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  width={22}
                  height={22}
                />
                <View style={styles.rectangleContainer}>
                  <View style={styles.groupChild2} />
                  <View style={styles.groupChildPosition} />
                </View>
              </View>
              <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
                <Ellipse17
                  style={[styles.ellipseIcon, styles.ellipseLayout]}
                  width={22}
                  height={22}
                />
                <View style={styles.rectangleContainer}>
                  <View style={styles.groupChild2} />
                  <View style={styles.groupChildPosition} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default MedicationPopup;
