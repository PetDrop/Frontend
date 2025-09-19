import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../../assets/dropdown_arrow.svg";
import styles from '../../styles/MedicationPopup.styles';
import { Account, Notification, Medication, Pet, SponsorMedication } from "../../data/dataTypes";
import { useEffect, useState } from "react";
import { Color } from "../../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DeleteButton from '../CustomButton';
import { medState } from "../../data/enums";
import { GET_ALL_SPONSOR_MEDICATIONS, httpRequest } from "../../data/endpoints";
import { NavigationProp } from "@react-navigation/core";
import NotifCard from "./NotifCard";

type MedicationPopupType = {
  isActive: boolean;
  setPopupState: Function;
  setMedication: Function;
  pet: Pet;
  med: Medication;
  notifsCopy: Notification[];
  readonly: boolean;
  navigation: NavigationProp<any>;
  account: Account;
  pushToken: string;
};

const MedicationPopup = ({ isActive, setPopupState, setMedication, pet, med, readonly, navigation, account, pushToken }: MedicationPopupType) => {
  const [description, setDescription] = useState(med.description);
  const [medName, setMedName] = useState(med.name);
  const [color, setColor] = useState(med.color !== '' ? med.color : `#${Math.round(Math.random() * 899998 + 100000)}`);
  const [propsChanged, setPropsChanged] = useState(true);
  const [sponsorMeds, setSponsorMeds] = useState<SponsorMedication[]>([]);
  const [dateTimePickerMode, setDateTimePickerMode] = useState<'date'|'time'>('date');
  const [dateTimePickerVisible, setDateTimePickerVisible] = useState(false);

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

  // this is the id that will be used for a med if changes are made by the popup
  const ObjectID = require('bson-objectid');
  const id = med.id !== '' ? med.id : ObjectID();

  // rerenders the popup when it's opened if it's possible something changed
  if (isActive && propsChanged) {
    setPropsChanged(false);
    setDescription(med.description);
    setMedName(med.name);
    setColor(med.color !== '' ? med.color : `#${Math.round(Math.random() * 899998 + 100000)}`);
  }

  // resets all states - done if 'x' is hit or after saving the changes if closed with action
  const close = () => {
    setDescription('');
    setMedName('');
    setColor(`#${Math.round(Math.random() * 899998 + 100000)}`);
    setPropsChanged(true);
    setPopupState(medState.NO_ACTION);
  }

  const closeWithAction = () => {
    // TODO
  }

  // these are the cards (one for each notif) that the user interacts with for notifs
  // const notifCards: React.JSX.Element = 
  // <View>
  //  {notifsCopy.map => <NotifCard />}
  // </View>;

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
            {!readonly ?
              <Selection
                data={
                  sponsorMeds.map((sponsorMed) => {
                    if (!pet.medications.some((med) => med.name == sponsorMed.name)) {
                      return sponsorMed.name;
                    }
                  })
                }
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
              :
              <View style={styles.dropdownDefault}>
                <Text style={styles.text}>{medName}</Text>
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
              <Button title="Add Daily Reminder" onPress={() => {}} />
            )}

            {!readonly && (
              <Button title="Add Custom Reminder" onPress={() => {}} />
            )}

            <View style={styles.notifCardContainer}>
              {/* {notifCards} */}
            </View>

            <TextInput
              style={[styles.textInput]}
              placeholder="Enter any info you'll need later (notes, instructions, etc.)"
              placeholderTextColor={Color.colorCornflowerblue}
              value={description}
              onChangeText={setDescription}
              multiline={true}
              editable={!readonly}
            />

          </ScrollView>

          {/* view instructions button */}
          {med.id !== '' && (
            <Pressable onPress={() => { navigation.navigate('Instructions', { account: account, medName: medName, pushToken: pushToken }) }}>
              <View style={styles.instructionButtonOval}>
                <Text style={[styles.buttonText, styles.text]}>Instructions</Text>
              </View>
            </Pressable>
          )}

          {/* save button */}
          {!readonly && (
            <Pressable onPress={() => { //closeWithAction(false)
            }}>
              <View style={styles.saveButtonOval}>
                <Text style={[styles.buttonText, styles.text]}>SAVE</Text>
              </View>
            </Pressable>
          )}

          {/* delete button */}
          {(med.id !== '' && !readonly) && (
            <View style={styles.deleteButtonContainer}>
              <DeleteButton onPressFunction={() => { //closeWithAction(true)
              }} innerText={'delete'} color={Color.colorFirebrick} />
            </View>
          )}

        </View>
      </KeyboardAvoidingView>
    );
  }
};

export default MedicationPopup;