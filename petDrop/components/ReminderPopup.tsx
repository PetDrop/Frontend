import * as React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/ReminderPopup.styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useReducer, useState } from "react";
import { emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../data/dataTypes";
import Selection from './ItemSwitch';
import { remState } from "../data/states";
import DeleteButton from '../components/CustomButton';
import { Color } from "../GlobalStyles";

type ReminderPopupType = {
  isActive: boolean;
  setPopupState: Function;
  setRem: Function;
  setMed: Function;
  pet: Pet;
  med: Medication;
  readonly: boolean;
};


const ReminderPopup = ({ isActive, setPopupState, setRem, setMed, pet, med, readonly }: ReminderPopupType) => {
  const [notifications, setNotifications] = useState(med.reminder.notifications);
  const [isTimePickerVisible, setTImePickerVisibility] = useState(false);
  const [selectedMed, setSelectedMed] = useState(med);
  const [notifChanged, setNotifChanged] = useState(true);

  const ObjectID = require('bson-objectid');
  const id: string = med.reminder.id !== '' ? med.reminder.id : ObjectID();

  const medication = selectedMed ? selectedMed : med;

  // method for setting notifications state
  const updateNotifications = (notif: string) => {
    switch (notif) {
      case 'clear':
        setNotifications(new Array<string>());
        break;
      case 'reset':
        setNotifications(med.reminder.notifications);
        break;
      default:
        setNotifications(notifications.concat(notif));
    }
  }

  if (isActive && notifChanged) {
    setNotifChanged(false);
    updateNotifications('reset');
  }

  const close = () => {
    updateNotifications('clear');
    setPopupState(remState.NO_ACTION);
    setNotifChanged(true);
  }

  const closeWithAction = (deleted: boolean) => {
    // TODO: ask for confirmation if deleted
    let rem: Reminder = { id: id, notifications: notifications };
    // set medication for reminder to be added to (if the screen this popup is on is unable to do so)
    setMed(medication);
    // set reminder to be created/edited when the popup is closed
    setRem(rem, deleted);
    close();
    if (deleted) {
      setPopupState(remState.REM_DELETED);
    } else {
      setPopupState(med.reminder.id === '' ? remState.REM_CREATED : remState.REM_EDITED);
    }
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
                {(medication.name === '' && setPopupState) &&
                  <Selection
                    data={pet.medications.filter((med: Medication) => med.reminder.id === '')} // only show meds with no reminder
                    selectedItem={selectedMed}
                    onSwitch={setSelectedMed}
                    switchItem="Medication"
                  />
                }
              </View>
            </View>

            <View style={styles.timeCardContainer}>
              {timeCards}
            </View>

            {!readonly && (
              <View style={styles.addNotifButton}>
                {notifications.length < 5 ?
                  <Button title="Add Notification" onPress={() => { setTImePickerVisibility(true) }} />
                  :
                  <Text>Max Notifications Reached</Text>
                }
              </View>
            )}

            <DateTimePickerModal
              date={new Date(Date.now())}
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={(time) => {
                if (!notifications.includes(time.toTimeString().split(' ')[0])) {
                  updateNotifications(time.toTimeString().split(' ')[0]);
                }
                setTImePickerVisibility(false);
              }}
              onCancel={() => { setTImePickerVisibility(false) }}
            />
          </View>

          {!readonly && (
            <View style={{ flexDirection: 'row' }}>
              {/* delete button */}
              <View style={styles.deleteButtonContainer}>
                {(med.reminder.id !== '' && setPopupState) && (
                  <DeleteButton onPressFunction={() => { closeWithAction(true) }} innerText={'delete'} color={Color.colorFirebrick} />
                )}
              </View>

              {/* save button */}
              <Pressable onPress={() => {
                if (medication.name !== '') {
                  closeWithAction(false);
                } else {
                  alert('Must select a medication to add the reminder to.');
                }
              }}>
                <View style={styles.saveButtonOval}>
                  <Text style={styles.saveButtonText}>SAVE</Text>
                </View>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    );
  }
};


export default ReminderPopup;