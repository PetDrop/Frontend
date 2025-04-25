import * as React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/ReminderPopup.styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useReducer, useState } from "react";
import { emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../data/dataTypes";
import Selection from './ItemSwitch';

type ReminderPopupType = {
  isActive: boolean;
  showingFunction: Function;
  setRem: Function;
  setMed: Function;
  pet: Pet;
  med: Medication;
};

const updateNotifications = (state: string[], action: { notif: string, notifProp: string[] }) => {
  switch (action.notif) {
    case 'clear':
      return [];
    case 'reset':
      return action.notifProp.slice();
    default:
      return state.concat(action.notif);
  }
}

const ReminderPopup = ({ isActive, showingFunction, setRem, setMed, pet, med }: ReminderPopupType) => {
  const [notifications, setNotifications] = useReducer(updateNotifications, med.reminder.notifications);
  const [isTimePickerVisible, setTImePickerVisibility] = useState(false);
  const [selectedMedId, setSelectedMedId] = useState(med.id);
  const [notifChanged, setNotifChanged] = useState(true);

  const ObjectID = require('bson-objectid');
  const id: string = med.reminder.id !== '' ? med.reminder.id : ObjectID();

  let temp = pet.medications.find((med: Medication) => med.id === selectedMedId);
  const medication = temp ? temp : med;

  if (isActive && notifChanged) {
    setNotifChanged(false);
    setNotifications({ notif: 'reset', notifProp: med.reminder.notifications });
  }

  const close = () => {
    showingFunction(false);
    setNotifications({ notif: 'clear', notifProp: [] });
    setSelectedMedId('');
    setNotifChanged(true);
  }

  const saveReminder = async () => {
    let rem: Reminder = { id: id, notifications: notifications };
    // set medication for reminder to be added to (if the screen this popup is on is unable to do so)
    setMed(medication);
    // set reminder to be created/edited when the popup is closed
    setRem(rem);
    close();
  };

  const timeCards: Array<React.JSX.Element> = [];
  notifications.forEach((time: string, index: number) => {
    timeCards.push(
      <View style={styles.timeCard} key={index}>
        <Text style={styles.text}>{time}</Text>
      </View>
    );
  });

  if (isActive) {
    return (
      <View style={{ position: "absolute" }}>

        {/* opaque layer to blur background */}
        <View style={styles.opaqueBackground} />

        {/* the popup itself */}
        <View style={styles.reminderPopup}>

          {/* top blue banner */}
          <View style={styles.topBanner}>

            {/* popup header */}
            <Text style={styles.header}>
              {med.reminder.id !== '' ? 'REMINDER INFO' : 'CREATE REMINDER'}
            </Text>

            {/* close popup button */}
            <Pressable onPress={close}>
              <Image
                style={styles.closePopup}
                contentFit="cover"
                source={require("../assets/remove_x_white.png")}
              />
            </Pressable>

          </View>

          {/* main popup body */}
          <View style={styles.popupBody}>

            <View style={styles.selectionContainer}>
              <Text style={[styles.text, styles.selectionText]}>{`FOR PET: ${pet.name}`}</Text>
            </View>

            <View style={styles.selectionContainer}>
              <Text style={[styles.text, styles.selectionText]}>{`FOR MEDICATION: ${medication.name !== '' ? medication.name : 'NONE SELECTED'}`}</Text>
              <View style={styles.itemSwitchContainer}>
                {medication.name === '' ?
                  <Selection
                    data={pet.medications.filter((med: Medication) => med.reminder.id === '')} // only show meds with no reminder
                    selectedItemId={selectedMedId}
                    onSwitch={setSelectedMedId}
                    switchItem="Medication"
                  />
                  :
                  <></>
                }
              </View>
            </View>

            <View style={styles.timeCardContainer}>
              {timeCards}
            </View>

            <View style={styles.addNotifButton}>
              {notifications.length < 5 ?
                <Button title="Add Notification" onPress={() => { setTImePickerVisibility(true) }} />
                :
                <Text>Max Notifications Reached</Text>
              }
            </View>

            <DateTimePickerModal
              date={new Date(Date.now())}
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={(time) => {
                if (!notifications.includes(time.toTimeString().split(' ')[0])) {
                  setNotifications({ notif: time.toTimeString().split(' ')[0], notifProp: [] });
                }
                setTImePickerVisibility(false);
              }}
              onCancel={() => { setTImePickerVisibility(false) }}
            />
          </View>

          {/* save button */}
          <Pressable onPress={() => {
            if (medication.name !== '') {
              saveReminder();
            } else {
              alert('Must select a medication to add the reminder to.');
            }
          }}>
            <View style={styles.saveButtonOval}>
              <Text style={styles.saveButtonText}>SAVE</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }
};


export default ReminderPopup;