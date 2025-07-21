import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../../assets/dropdown_arrow.svg";
import styles from '../../styles/MedicationPopup.styles';
import { Account, DateObj, emptyReminder, Medication, Pet, Reminder, SponsorMedication } from "../../data/dataTypes";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useEffect, useState } from "react";
import { Color } from "../../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DateCard from "./DateCard";
import PeriodCard from "./PeriodCard";
import ReminderPopup from "../ReminderPopup";
import DeleteButton from '../CustomButton';
import { medState, remState, datePicker } from "../../data/enums";
import { GET_ALL_SPONSOR_MEDICATIONS, httpRequest } from "../../data/endpoints";
import { NavigationProp } from "@react-navigation/core";

type MedicationPopupType = {
  isActive: boolean;
  setPopupState: Function;
  setMedication: Function;
  setReminder: Function;
  pet: Pet;
  med: Medication;
  readonly: boolean;
  navigation: NavigationProp<any>;
  account: Account;
};

const MedicationPopup = ({ isActive, setPopupState, setMedication, setReminder, pet, med, readonly, navigation, account }: MedicationPopupType) => {
  const [datePickerMode, setDatePickerMode] = useState(datePicker.DISABLED);
  const [dates, setDates] = useState<DateObj[]>([]);
  const [description, setDescription] = useState(med.description);
  const [medName, setMedName] = useState(med.name);
  const [color, setColor] = useState(med.color !== '' ? med.color : `#${Math.round(Math.random() * 899998 + 100000)}`);
  const [propsChanged, setPropsChanged] = useState(true);
  const [remPopupState, setRemPopupState] = useState(remState.NO_ACTION);
  const [rem, setRem] = useState(med.reminder ? med.reminder : emptyReminder);
  const [creatingPeriod, setCreatingPeriod] = useState(false);
  const [curPeriod, setCurPeriod] = useState<{ start: Date | undefined, end: Date | undefined }>({ start: undefined, end: undefined });
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

  // this is the id that will be used for a med if changes are made by the popup
  const ObjectID = require('bson-objectid');
  const id = med.id !== '' ? med.id : ObjectID();

  // handles changes to the rem for the current med
  const updateRem = (rem: Reminder, deleted: boolean) => {
    if (deleted) {
      setRem(emptyReminder);
      setReminder({ id: ObjectID(), notifications: [] })
    } else {
      setRem(rem);
      setReminder(rem);
    }
  }

  // function for updating dates state
  const updateDates = (startDate: string | undefined, endDate: string | undefined, recurring: number) => {
    if (startDate === undefined) {
      setDates(new Array<DateObj>());
    } else {
      let newDateObj: DateObj = {
        startDate: startDate,
        endDate: endDate ? endDate : '',
        recurrances: recurring
      };
      setDates((prevState) => {
        if (startDate && endDate) {
          prevState.push(newDateObj);
          setCurPeriod({ start: undefined, end: undefined });
          setCreatingPeriod(false);
        } else {
          let oldDateObj = prevState.find((dateObj => dateObj.startDate === startDate));
          oldDateObj ? oldDateObj.recurrances = recurring : prevState.push(newDateObj);
        }
        return [...prevState];
      });
    }
  }

  // intermediate function to handle whether a single date is added, or the start/end of a period
  const addDate = (date: Date) => {
    switch (datePickerMode) {
      case datePicker.SINGLE:
        if (!dates.some((dateObj: DateObj) => dateObj.startDate === date.toISOString().slice(0, 10))) {
          updateDates(date.toISOString().slice(0, 10), undefined, 1);
        }
        break;
      case datePicker.START_DATE:
        if (!dates.some((dateObj: DateObj) => dateObj.startDate === date.toISOString().slice(0, 10) && dateObj.recurrances === 0)) {
          curPeriod.start = date;
          if (curPeriod.end) {
            updateDates(date.toISOString().slice(0, 10), curPeriod.end.toISOString().slice(0, 10), 0);
          }
        }
        break;
      case datePicker.END_DATE:
        if (!dates.some((dateObj: DateObj) => dateObj.endDate === date.toISOString().slice(0, 10) && dateObj.recurrances === 0)) {
          curPeriod.end = date;
          if (curPeriod.start) {
            updateDates(curPeriod.start.toISOString().slice(0, 10), date.toISOString().slice(0, 10), 0);
          }
        }
        break;
    }
    setDatePickerMode(datePicker.DISABLED);
  }

  // rerenders the popup when it's opened if it's possible something changed
  if (isActive && propsChanged) {
    setPropsChanged(false);
    setDescription(med.description);
    setDates(med.dates.map(date => ({ ...date }))); // deep copy med.dates so you don't mutate med when calling setDates elsewhere
    setMedName(med.name);
    setColor(med.color !== '' ? med.color : `#${Math.round(Math.random() * 899998 + 100000)}`);
    setRem(med.reminder ? med.reminder : emptyReminder);
  }

  // resets all states - done if 'x' is hit or after saving the changes if closed with action
  const close = () => {
    setDescription('');
    updateDates(undefined, undefined, 0); // undefined clears the array
    setMedName('');
    setColor(`#${Math.round(Math.random() * 899998 + 100000)}`);
    setPropsChanged(true);
    setPopupState(medState.NO_ACTION);
    setRem(emptyReminder);
  }

  // this is called if there are any changes made via the popup that need to be saved
  const closeWithAction = (deleted: boolean) => {
    // TODO: ask for confirmation if deleted
    const newMed: Medication = { id: id, name: medName, color: color, description: description, dates: dates, reminder: rem, range: 4 };
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

  // these are the date (and period) cards that will be rendered in the popup
  const dateCards: Array<React.JSX.Element> = [];
  dates.forEach((dateObj: DateObj, index: number) => {
    dateCards.push(
      <DateCard dateObj={dateObj} updateDates={updateDates} readonly={readonly} key={index} />
    )
  });
  if (creatingPeriod) {
    dateCards.push(
      <PeriodCard startDate={curPeriod.start} endDate={curPeriod.end} modalFunction={setDatePickerMode} key={'creatingPeriodCard'} />
    )
  }

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

            <View style={styles.dateCardContainer}>
              {dateCards}
            </View>

            {!readonly && (
              <Button title="Add Date" onPress={() => { setDatePickerMode(datePicker.SINGLE) }} />
            )}

            {(!creatingPeriod && !readonly) && (
              <Button title="Add Date Period" onPress={() => { setCreatingPeriod(true) }} />
            )}

            <DateTimePickerModal
              date={new Date(Date.now())}
              isVisible={datePickerMode !== datePicker.DISABLED}
              mode="date"
              onConfirm={(date) => addDate(date)}
              onCancel={() => { setDatePickerMode(datePicker.DISABLED) }}
            />

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
            <Pressable onPress={() => {navigation.navigate('Instructions', {account: account, medName: medName})}}>
              <View style={styles.instructionButtonOval}>
                <Text style={[styles.buttonText, styles.text]}>Instructions</Text>
              </View>
            </Pressable>
          )}

          {/* view/add reminder button */}
          {((readonly && rem.id !== '') || (!readonly)) && (
            <Pressable onPress={() => { setRemPopupState(remState.SHOW_POPUP) }}>
              <View style={styles.reminderButtonOval}>
                <Text style={[styles.buttonText, styles.text]}>{`${rem.id !== '' ? 'VIEW' : 'ADD'} REMINDER`}</Text>
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

        <ReminderPopup
          isActive={remPopupState === remState.SHOW_POPUP}
          setPopupState={setRemPopupState}
          setRem={updateRem}
          setMed={() => { }}
          pet={pet}
          med={{
            id: med.id,
            color: color,
            dates: dates,
            description: description,
            name: medName === '' ? 'MED BEING ADDED' : medName,
            range: med.range,
            reminder: rem
          }}
          readonly={readonly}
        />
      </KeyboardAvoidingView>
    );
  }
};

export default MedicationPopup;