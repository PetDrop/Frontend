import * as React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/ReminderPopup.styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useReducer, useState } from "react";
import { emptyMed, emptyPet, emptyReminder, Medication, Pet, Reminder } from "../data/dataTypes";
import Selection from './ItemSwitch';
import { ADD_REMINDER, httpRequest, UPDATE_REMINDER } from "../data/endpoints";

type ReminderPopupType = {
  isActive: Reminder | undefined; // use reminder as a boolean to require one less prop
  pet: Pet;
  showingFunction: Function;
};

const updateNotifications = (state: string[], action: { notif: string }) => {
  if (action.notif === 'clear') {
    return [];
  }
  return state.concat(action.notif);
}

const ReminderPopup = ({ isActive, showingFunction, pet }: ReminderPopupType) => {
  const [notifications, setNotifications] = useReducer(updateNotifications, []);
  const [isTimePickerVisible, setTImePickerVisibility] = useState(false);
  const [selectedMedId, setSelectedMedId] = useState<string | undefined>();

  const ObjectID = require('bson-objectid');
  const id: string = ObjectID();

  const med: Medication | undefined = pet.medications?.find((med) => med.id === selectedMedId);

  const close = () => {
    showingFunction(undefined);     
    setNotifications({ notif: 'clear' });
    setSelectedMedId(undefined);
  }

  const saveReminder = async (method: 'POST' | 'PUT') => {
    // create reminder with the intended info from this popup, depending on conditions
    let rem: Reminder = emptyReminder;
    // ternary operator spaghetti equates to 'set it as value passed as prop, else value chosen by user, else nothing'
    // either value passed or value chosen will be defined, so the last option is to avoid getting errors
    // rem.medication = isActive && isActive.medication.name !== '' ? isActive.medication : med ? med : emptyMed;
    // rem.pet = isActive ? isActive.pet : emptyPet; // no chosen value
    rem.notifications = isActive && isActive.notifications.length > 0 ? isActive.notifications : notifications ? notifications : [];
    // create the reminder
    const url: string = method === 'POST' ? ADD_REMINDER : UPDATE_REMINDER;
    const response = await httpRequest(url, method, JSON.stringify(rem));
    if (response.ok) {
      close();
      alert('Reminder saved');
    } else {
      console.log(`http ${method} request failed with error code: ${response.status}`);
      alert('Failed to save reminder');
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
              {isActive.notifications.length > 0 ? 'REMINDER INFO' : 'CREATE REMINDER'}
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
              <Text style={[styles.text, styles.selectionText]}>{`FOR PET: ${pet.name ? pet.name : 'NONE SELECTED'}`}</Text>
            </View>

            <View style={styles.selectionContainer}>
              <Text style={[styles.text, styles.selectionText]}>{`FOR MEDICATION: ${med ? med.name : 'NONE SELECTED'}`}</Text>
              {med ?
                <View style={styles.itemSwitchContainer}>
                  {med.name === '' ?
                    <Selection
                      data={pet.medications}
                      selectedItemId={selectedMedId ? selectedMedId : ''}
                      onSwitch={setSelectedMedId}
                      switchItem="Medication"
                    />
                    :
                    <></>
                  }
                </View>
                : <></>}
            </View>

            <View style={styles.timeCardContainer}>
              {timeCards}
            </View>

            {isActive.notifications.length === 0 ?
              <View style={styles.addNotifButton}>
                {notifications.length < 5 ?
                  <Button title="Add Notification" onPress={() => { setTImePickerVisibility(true) }} />
                  :
                  <Text>Max Notifications Reached</Text>
                }
              </View>
              :
              <></>
            }
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={(time) => {
                if (!notifications.includes(time.toTimeString().split(' ')[0])) {
                  setNotifications({ notif: time.toTimeString().split(' ')[0] });
                }
                setTImePickerVisibility(false);
              }}
              onCancel={() => { setTImePickerVisibility(false) }}
            />
          </View>

          {/* save button */}
          {isActive.id === '' ?
            <Pressable onPress={() => {isActive.id === '' ? saveReminder("POST") : saveReminder("PUT")}}>
              <View style={styles.saveButtonOval}>
                <Text style={styles.saveButtonText}>SAVE</Text>
              </View>
            </Pressable>
            :
            <></>
          }
        </View>
      </View>
    );
  }
};


export default ReminderPopup;
