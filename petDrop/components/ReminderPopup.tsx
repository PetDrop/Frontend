import * as React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/ReminderPopup.styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useReducer, useState } from "react";
import { emptyMed, emptyPet, Medication, Pet, Reminder } from "../data/dataTypes";
import Selection from './ItemSwitch';

type ReminderPopupType = {
  isActive: Reminder | undefined; // use reminder as a boolean to require one less prop
  showingFunction: Function;
  setReminder: Function;
  pets: Pet[];
};

const updateNotifications = (state: string[], action: { notif: string }) => {
  if (action.notif === 'clear') {
    return [];
  }
  return state.concat(action.notif);
}

const ReminderPopup = ({ isActive, showingFunction, setReminder, pets }: ReminderPopupType) => {
  const [notifications, setNotifications] = useReducer(updateNotifications, []);
  const [isTimePickerVisible, setTImePickerVisibility] = useState(false);
  const [selectedMedId, setSelectedMedId] = useState<string | undefined>();

  const ObjectID = require('bson-objectid');
  const id: string = ObjectID();

  const med: Medication | undefined = isActive?.pet?.medications?.find((med) => med.id === selectedMedId);

  const close = () => {
    showingFunction(undefined);     
    setNotifications({ notif: 'clear' });
    setSelectedMedId(undefined);
  }

  const saveReminder = async () => {
    // create reminder with the intended info from this popup, depending on conditions
    let rem: Reminder = { id: id, medication: emptyMed, pet: emptyPet, notifications: [] };
    // ternary operator spaghetti equates to 'set it as value passed as prop, else value chosen by user, else nothing'
    // either value passed or value chosen will be defined, so the last option is to avoid getting errors
    rem.medication = isActive && isActive.medication.name !== '' ? isActive.medication : med ? med : emptyMed;
    rem.pet = isActive ? isActive.pet : emptyPet; // no chosen value
    rem.notifications = isActive && isActive.notifications.length > 0 ? isActive.notifications : notifications ? notifications : [];
    // set reminder to be created when the popup is closed
    setReminder(rem);
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
              <Text style={[styles.text, styles.selectionText]}>{`FOR PET: ${isActive.pet.name ? isActive.pet.name : 'NONE SELECTED'}`}</Text>
            </View>

            <View style={styles.selectionContainer}>
              <Text style={[styles.text, styles.selectionText]}>{`FOR MEDICATION: ${isActive.medication.name !== '' ? isActive.medication.name : med ? med.name : 'NONE SELECTED'}`}</Text>
              {isActive.medication.name === '' ?
                <View style={styles.itemSwitchContainer}>
                  {isActive.medication.name === '' ?
                    <Selection
                      data={isActive.pet.medications}
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
            <Pressable onPress={saveReminder}>
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
