import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/CustomButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import { Color, logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import { Account, emptyMed, emptyPet, Medication, Pet, Notification, emptyNotification } from "../data/dataTypes";
import { useCallback, useEffect, useMemo, useState } from "react";
import PetSwitch from '../components/ItemSwitch';
import { notifState } from "../data/enums";
import Header from "../components/Header";
import NotificationPopup from "../components/Reminders/NotificationPopup";
import { CREATE_NOTIFS_FOR_MED, DELETE_NOTIF, DELETE_NOTIFS_FROM_MED, httpRequest, UPDATE_NOTIF } from "../data/endpoints";
import structuredClone from '@ungap/structured-clone';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  const [selectedPet, setSelectedPet] = useState(emptyPet);
  const [popupState, setPopupState] = useState(notifState.NO_ACTION);
  const [med, setMed] = useState<Medication>(emptyMed);
  const [notification, setNotification] = useState<Notification>(emptyNotification);
  const [notificationCopy, setNotificationCopy] = useState<Notification>(emptyNotification);

  // only when notification is updated should notificationCopy be reset
  useEffect(() => {
    setNotificationCopy(structuredClone(notification));
  }, [notification]);

  const ObjectID = require('bson-objectid');

  const pushToken: string = route.params.pushToken;

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  useFocusEffect(
    useCallback(() => {
      setSelectedPet(account.pets[0] || account.sharedPets[0] || emptyPet);
    }, [])
  );

  const editNotification = (notif: Notification, med: Medication) => {
    setNotification(notif);
    setMed(med);
    setPopupState(notifState.SHOW_POPUP);
  }

  const WriteToDB = async () => {
    let response;
    switch (popupState) {
      case notifState.NOTIF_CREATED:
        response = await httpRequest(CREATE_NOTIFS_FOR_MED + med.id, 'PUT', JSON.stringify([notificationCopy]));
        setMed((prev) => {
          return { ...prev, notifications: prev.notifications.concat([notificationCopy]) }
        });
      case notifState.NOTIF_DELETED:
        response = await httpRequest(DELETE_NOTIF + notificationCopy.id, 'DELETE', '');
        setMed((prev) => {
          return { ...prev, notifications: prev.notifications.filter((notif) => notif.id !== notificationCopy.id) }
        });
        break;
      case notifState.NOTIF_EDITED:
        response = await httpRequest(UPDATE_NOTIF, 'PUT', JSON.stringify(notificationCopy));
        break;
    }

    if (!response?.ok) {
      console.error(`http request failed with status code ${response?.status}`);
    }

    setMed(emptyMed);
    setNotification(emptyNotification);
    setPopupState(notifState.NO_ACTION);
  }

  if (popupState !== notifState.NO_ACTION && popupState !== notifState.SHOW_POPUP) {
    WriteToDB();
  }

  const reminderCards = useMemo(() => {
    return selectedPet.medications.flatMap((med: Medication, index1: number) =>
      med.notifications.map((notif: Notification, index2: number) => (
        <ReminderCard
          key={`${index1}-${index2}`}
          med={med}
          notif={{
            ...notif,
            zoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
          }}
          showingFunction={editNotification}
        />
      ))
    );
  }, [selectedPet.medications, editNotification]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Header navigation={navigation} account={account} />

        {/* Page Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>Reminders</Text>
          <PetSwitch
            text={'switch'}
            data={[...account.pets, ...account.sharedPets]}
            selectedItem={selectedPet}
            onSwitch={setSelectedPet}
            switchItem="Pet"
          />
        </View>

        {/* Reminder Cards */}
        {reminderCards}

        {/* Add Reminder Button */}
        {selectedPet.id !== '' && (
          <View style={styles.addReminderButton}>
            <AddReminderButton
              onPressFunction={() => {
                setNotificationCopy({ ...emptyNotification, id: ObjectID(), zoneId: Intl.DateTimeFormat().resolvedOptions().timeZone });
                setPopupState(notifState.SHOW_POPUP);
              }}
              innerText={'+ ADD'}
              color={Color.colorCornflowerblue}
            />
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} account={account} pushToken={pushToken} />

      {/* popup for adding/editing reminder */}
      <NotificationPopup
        isActive={popupState == notifState.SHOW_POPUP}
        setPopupState={setPopupState}
        notif={notification}
        notifCopy={notificationCopy}
        setNotifCopy={setNotificationCopy}
      />
    </View>
  );
};

export default Reminders;