import * as React from "react";
import { View, Text, Pressable, TextInput, Button } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/ReminderPopup.styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useReducer, useState } from "react";
import { Medication, Pet } from "../data/dataTypes";
import Selection from './ItemSwitch';

type ReminderPopupType = {
  isActive: boolean;
  showingFunction: Function;
  pets: Pet[];
};

const updateNotifications = (state: string[], action: { notif: string }) => {
  if (action.notif === 'clear') {
    return [];
  }
  return state.concat(action.notif);
}

const ReminderPopup = ({ isActive, showingFunction, pets }: ReminderPopupType) => {
  const [notifications, setNotifications] = useReducer(updateNotifications, []);
  const [isTimePickerVisible, setTImePickerVisibility] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState<string | undefined>();
  const [selectedMedId, setSelectedMedId] = useState<string | undefined>();

  const pet: Pet | undefined = pets.find((pet) => pet.id === selectedPetId);
  const med: Medication | undefined = pet?.medications?.find((med) => med.id === selectedMedId);

  const close = () => {
    showingFunction(false);
    setNotifications({ notif: 'clear' });
    setSelectedPetId(undefined);
    setSelectedMedId(undefined);
  }

  const saveReminder = () => {
    close();
  }

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
            <Text style={styles.header}>CREATE REMINDER</Text>

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
              <Text style={[styles.text, styles.selectionText]}>{`FOR PET: ${pet ? pet.name : ''}`}</Text>
              <View style={styles.itemSwitchContainer}>
                <Selection
                  data={pets}
                  selectedItemId={selectedPetId ? selectedPetId : ''}
                  onSwitch={setSelectedPetId}
                  switchItem="Pet"
                />
              </View>
            </View>

            {pet ?
              <View style={styles.selectionContainer}>
                <Text style={[styles.text, styles.selectionText]}>{`FOR MEDICATION: ${med ? med.name : ''}`}</Text>
                <View style={styles.itemSwitchContainer}>
                  <Selection
                    data={pet.medications}
                    selectedItemId={selectedMedId ? selectedMedId : ''}
                    onSwitch={setSelectedMedId}
                    switchItem="Medication"
                  />
                </View>
              </View>
              : <></>}

            <View style={styles.timeCardContainer}>
              {timeCards}
            </View>

            <View style={styles.addNotifButton}>
              {notifications.length < 5 ?
                <Button title="Add Notification" onPress={() => { setTImePickerVisibility(true) }} />
                :
                <Text>Max Notifications Reached</Text>}
            </View>
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
          <Pressable onPress={saveReminder}>
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
