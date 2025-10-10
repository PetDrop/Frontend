import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../../assets/dropdown_arrow.svg";
import styles from '../../styles/MedicationPopup.styles';
import { Account, Notification, Medication, Pet, SponsorMedication, emptyNotification } from "../../data/dataTypes";
import { useEffect, useMemo, useState } from "react";
import { Color } from "../../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DeleteButton from '../CustomButton';
import { medState } from "../../data/enums";
import { GET_ALL_SPONSOR_MEDICATIONS, httpRequest } from "../../data/endpoints";
import { NavigationProp } from "@react-navigation/core";
import NotifCard from "../NotifCard";

type MedicationPopupType = {
  isActive: boolean;
  setPopupState: Function;
  pet: Pet;
  med: Medication;
  medCopy: Medication;
  setMedCopy: React.Dispatch<React.SetStateAction<Medication>>;
  readonly: boolean;
  navigation: NavigationProp<any>;
  account: Account;
  pushToken: string;
};

const MedicationPopup = ({ isActive, setPopupState, pet, med, medCopy, setMedCopy, readonly, navigation, account, pushToken }: MedicationPopupType) => {
  const ObjectID = require('bson-objectid');
  const [propsChanged, setPropsChanged] = useState(true);
  const [sponsorMeds, setSponsorMeds] = useState<SponsorMedication[]>([]);

  // fetch all the sponsor meds to populate the dropdown with
  const getSponsorMedications = async () => {
    const response = await httpRequest(GET_ALL_SPONSOR_MEDICATIONS, 'GET', '');
    if (response.ok) {
      setSponsorMeds(await response.json());
    }
  }

  // fetch the sponsor meds upon rendering for the first time
  useEffect(() => {
    getSponsorMedications();
  }, []);

  // rerenders the popup when it's opened if it's possible something changed
  if (isActive && propsChanged) {
    setPropsChanged(false);
    // setMedCopy({...medCopy, id: medCopy.id || ObjectID()});
    // setMedCopy({...medCopy, description: medCopy.description});
    // setMedCopy({...medCopy, name: medCopy.name});
    // setMedCopy({...medCopy, notifications: medCopy.notifications});
    // setMedCopy({...medCopy, color: medCopy.color || `#${Math.round(Math.random() * 899998 + 100000)}`});
  }

  // resets all states - done if 'x' is hit
  const close = () => {
    // setMedCopyId(med.id || ObjectID());
    // setMedCopyDescription(med.description);
    // setMedCopyName(med.name);
    // setMedCopyNotifs(med.notifications);
    // setMedCopyColor(med.color || `#${Math.round(Math.random() * 899998 + 100000)}`);
    setPropsChanged(true);
    setPopupState(medState.NO_ACTION);
  }

  const closeWithAction = (deletePressed: boolean) => {
    if (deletePressed) {
      setPopupState(medState.MED_DELETED);
      setPropsChanged(true);
      return;
    }
    // runningTotal will be used to determine the medState
    let runningTotal = 0;
    // check if the med was created or edited
    // medStates get the tens value from med and the ones value from notifs
    if (med.name === '' && medCopy.name !== '') { // med was created
      runningTotal = 10;
    } else {
      // check if any fields of med and medCopy differ, i.e. if med was edited
      const medFieldsToCheck: (keyof Medication)[] = ["name", "color", "description"];
      for (const field of medFieldsToCheck) {
        if (med[field] !== medCopy[field]) { // med was edited
          runningTotal = 20;
          break;
        }
      }
    }
    // check if notifs was created, edited, or deleted
    if (med.notifications.length === 0 && medCopy.notifications.length > 0) { // notifs created
      runningTotal += 1;
    } else if (med.notifications.length > 0 && medCopy.notifications.length === 0) { // notifs deleted
      runningTotal += 3;
    } else {
      if (med.notifications.length !== medCopy.notifications.length) { // efficient way to check if notifs edited
        runningTotal += 2;
      } else {
        // check each notif to see if any fields were changed
        const notifFieldsToCheck: (keyof Notification)[] = ["id", "title", "body", "data", "nextRuns", "finalRuns", "repeatInterval"];
        med.notifications.forEach((notif, index) => {
          for (const field of notifFieldsToCheck) {
            if (notif[field] !== medCopy.notifications[index][field]) { // a notif was edited
              runningTotal += 2;
              // early return to avoid unnecessary iterations over notifs array
              setPopupState(runningTotal);
              setPropsChanged(true);
              return;
            }
          }
        })
      }
    }
    // set popup state using runningTotal, which closes the popup
    setPopupState(runningTotal);
    setPropsChanged(true);
  }

  // these are the cards (one for each notif) that the user interacts with for notifs
  const notifCards: React.JSX.Element = useMemo(() => {
    return (
      <View>
        {medCopy.notifications?.map((notif, index) =>
          <NotifCard
            notification={{ ...notif, expoPushToken: pushToken }}
            onChange={(updatedNotif: Notification) => {
              setMedCopy((prev) => {
                return { ...prev, notifications: prev.notifications.map((n, i) => (i === index ? updatedNotif : n)) }
              });
            }}
            key={index}
            onDelete={() => {
              setMedCopy((prev) => {
                return { ...prev, notifications: prev.notifications.filter(n => n.id !== notif.id) }
              });
            }}
          />
        )}
      </View>
    )
  }, [medCopy]);

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
            <View style={[styles.colorIndicator, { backgroundColor: medCopy.color }]} />

            {/* medication selection */}
            {!readonly ?
              <Selection
                data={
                  sponsorMeds.map((sponsorMed) => {
                    if (!pet.medications.some((med) => med.name == sponsorMed.name)) {
                      return sponsorMed.name;
                    }
                  })
                }
                onSelect={(selectedItem: string) => { setMedCopy({ ...medCopy, name: selectedItem }) }}
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
              :
              <View style={styles.dropdownDefault}>
                <Text style={styles.text}>{medCopy.name}</Text>
              </View>
            }

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

            {!readonly && (
              <Button
                title="Add Reminder"
                onPress={() => {
                  setMedCopy((prev) => {
                    return { ...prev, notifications: [...prev.notifications, emptyNotification] }
                  })
                }}
              />
            )}

            <View style={styles.notifCardContainer}>
              {notifCards}
            </View>

            <TextInput
              style={[styles.textInput]}
              placeholder="Enter any info you'll need later (notes, instructions, etc.)"
              placeholderTextColor={Color.colorCornflowerblue}
              value={medCopy.description}
              onChangeText={(newText) => { setMedCopy((prev) => { return { ...prev, description: newText } }) }}
              multiline={true}
              editable={!readonly}
            />

          </ScrollView>

          {/* view instructions button */}
          {med.id !== '' && (
            <Pressable onPress={() => { navigation.navigate('Instructions', { account: account, medName: medCopy.name, pushToken: pushToken }) }}>
              <View style={styles.instructionButtonOval}>
                <Text style={[styles.buttonText, styles.text]}>Instructions</Text>
              </View>
            </Pressable>
          )}

          {/* save button */}
          {!readonly && (
            <Pressable onPress={() => { closeWithAction(false) }}>
              <View style={styles.saveButtonOval}>
                <Text style={[styles.buttonText, styles.text]}>SAVE</Text>
              </View>
            </Pressable>
          )}

          {/* delete button */}
          {(med.id !== '' && !readonly) && (
            <View style={styles.deleteButtonContainer}>
              <DeleteButton onPressFunction={() => { closeWithAction(true) }} innerText={'delete'} color={Color.colorFirebrick} />
            </View>
          )}

        </View>
      </KeyboardAvoidingView>
    );
  }
};

export default MedicationPopup;