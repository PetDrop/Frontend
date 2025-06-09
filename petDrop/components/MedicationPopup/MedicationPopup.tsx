import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../../assets/dropdown_arrow.svg";
import styles from '../../styles/MedicationPopup.styles';
import { DateObj, emptyReminder, Medication, Pet, Reminder } from "../../data/dataTypes";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import { Color } from "../../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DateCard from "./DateCard";
import ReminderPopup from "../ReminderPopup";
import DeleteButton from '../CustomButton';
import { medState } from "../../data/states";
import { remState } from "../../data/states";

type MedicationPopupType = {
  isActive: boolean;
  setPopupState: Function;
  setMedication: Function;
  setReminder: Function;
  pet: Pet;
  med: Medication;
  readonly: boolean;
};

const MedicationPopup = ({ isActive, setPopupState, setMedication, setReminder, pet, med, readonly }: MedicationPopupType) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dates, setDates] = useState<DateObj[]>([]);
  const [description, setDescription] = useState(med.description);
  const [medName, setMedName] = useState(med.name);
  const [color, setColor] = useState(med.color !== '' ? med.color : `#${Math.round(Math.random() * 899998 + 100000)}`);
  const [propsChanged, setPropsChanged] = useState(true);
  const [remPopupState, setRemPopupState] = useState(remState.NO_ACTION);
  const [rem, setRem] = useState(med.reminder ? med.reminder : emptyReminder);

  const ObjectID = require('bson-objectid');
  const id = med.id !== '' ? med.id : ObjectID();

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
  const updateDates = (startDate: Date | undefined, endDate: Date | undefined, recurring: number) => {
    if (startDate === undefined) {
      setDates([]);
    } else {
      let newDateObj: DateObj = {
        startDate: startDate.toISOString().slice(0, 10),
        endDate: endDate ? endDate.toISOString().slice(0, 10) : '',
        recurrances: recurring
      };
      setDates((prevState) => {
        let oldDateObj = prevState.find((dateObj => dateObj.startDate === startDate.toISOString().slice(0, 10)));
        oldDateObj ? oldDateObj.recurrances = recurring : prevState.push(newDateObj);
        return [...prevState];
      });
    }
  }

  if (isActive && propsChanged) {
    setPropsChanged(false);
    setDescription(med.description);
    setDates(med.dates);
    setMedName(med.name);
    setColor(med.color !== '' ? med.color : `#${Math.round(Math.random() * 899998 + 100000)}`);
    setRem(med.reminder ? med.reminder : emptyReminder);
  }

  const close = () => {
    setDescription('');
    updateDates(undefined, undefined, 0); // undefined clears the map
    setMedName('');
    setColor(`#${Math.round(Math.random() * 899998 + 100000)}`);
    setPropsChanged(true);
    setPopupState(medState.NO_ACTION);
    setRem(emptyReminder);
  }

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

  // # of milliseconds in a week used when adding recurring dates
  const MS_IN_WEEK: number = 604800000;

  const dateCards: Array<React.JSX.Element> = [];
  dates.forEach((dateObj: DateObj, index: number) => {
    dateCards.push(
      <DateCard dateObj={dateObj} updateDates={updateDates} readonly={readonly} key={index} />
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
            {!readonly ?
              <Selection
                data={['sponsor med 1', 'sponsor med 2', 'sponsor med 3']}
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
              <Button title="Add Date" onPress={() => { setDatePickerVisibility(true) }} />
            )}
            <DateTimePickerModal
              date={new Date(Date.now())}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={(date) => {
                if (!dates.some((dateObj: DateObj) => dateObj.startDate === date.toISOString().slice(0, 10))) {
                  updateDates(date, undefined, 1);
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
              editable={!readonly}
            />

          </ScrollView>

          {/* view/add reminder button */}
          {((readonly && rem.id !== '') || (!readonly)) && (
            <Pressable onPress={() => { setRemPopupState(remState.SHOW_POPUP) }}>
              <View style={styles.reminderButtonOval}>
                <Text style={[styles.reminderButtonText, styles.text]}>{`${rem.id !== '' ? 'VIEW' : 'ADD'} REMINDER`}</Text>
              </View>
            </Pressable>
          )}

          {/* save button */}
          {!readonly && (
            <Pressable onPress={() => { closeWithAction(false) }}>
              <View style={styles.saveButtonOval}>
                <Text style={[styles.saveButtonText, styles.text]}>SAVE</Text>
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