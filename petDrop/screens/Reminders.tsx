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
import { useAccount } from "../context/AccountContext";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  const { account, setAccount, updateNotifications } = useAccount();
  const [selectedPetId, setSelectedPetId] = useState(account.pets[0]?.id || account.sharedPets[0]?.id || '');
  const [popupState, setPopupState] = useState(notifState.NO_ACTION);
  const [med, setMed] = useState<Medication>(emptyMed);
  const [notification, setNotification] = useState<Notification>(emptyNotification);
  const [notificationCopy, setNotificationCopy] = useState<Notification>(emptyNotification);

  // derive the selected pet from account whenever it changes
  const selectedPet = React.useMemo(() => {
    return (
      account.pets.find((p) => p.id === selectedPetId) ||
      account.sharedPets.find((p) => p.id === selectedPetId) ||
      emptyPet
    );
  }, [account, selectedPetId]);

  // only when notification is updated should notificationCopy be reset
  useEffect(() => {
    setNotificationCopy(structuredClone(notification));
  }, [notification]);

  const ObjectID = require('bson-objectid');

  useFocusEffect(
    useCallback(() => {
      setSelectedPetId(account.pets[0]?.id || account.sharedPets[0]?.id || '');
    }, [])
  );

  const editNotification = (notif: Notification, med: Medication) => {
    setNotification(notif);
    setMed(med);
    setPopupState(notifState.SHOW_POPUP);
  }

  const formatDates = (notif: Notification) => {
    return {
      ...notif,
      nextRuns: notif.nextRuns.map((nextRun) => nextRun.toISOString()),
      finalRuns: notif.finalRuns.map((finalRun) => finalRun.toISOString())
    }
  }

  const WriteToDB = async () => {
    let response;
    switch (popupState) {
      case notifState.NOTIF_CREATED:
        response = await httpRequest(CREATE_NOTIFS_FOR_MED + med.id, 'PUT', JSON.stringify(formatDates(notificationCopy)));
        updateNotifications(selectedPet.id, med.id, med.notifications.concat([notificationCopy]));
        setMed((prev) => {
          return { ...prev, notifications: prev.notifications.concat([notificationCopy]) }
        });
      case notifState.NOTIF_DELETED:
        response = await httpRequest(DELETE_NOTIF + notificationCopy.id, 'DELETE', '');
        updateNotifications(selectedPet.id, med.id, med.notifications.filter((notif) => notif.id !== notificationCopy.id));
        setMed((prev) => {
          return { ...prev, notifications: prev.notifications.filter((notif) => notif.id !== notificationCopy.id) }
        });
        break;
      default: // to avoid response possibly undefined
      case notifState.NOTIF_EDITED:
        response = await httpRequest(UPDATE_NOTIF, 'PUT', JSON.stringify(formatDates(notificationCopy)));
        updateNotifications(selectedPet.id, med.id, med.notifications.map((notif) => notif.id === notificationCopy.id ? notificationCopy : notif));
        break;
    }

    if (!response.ok) {
      console.error(`http request failed with status code ${response.status}`);
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
          notif={notif}
          showingFunction={editNotification}
        />
      ))
    );
  }, [selectedPet.medications, editNotification]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Header navigation={navigation} />

        {/* Page Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>Reminders</Text>
          <PetSwitch
            text={'switch'}
            data={[...(account.pets ?? []), ...(account.sharedPets ?? [])]}
            selectedItem={selectedPet}
            onSwitch={(item) => { setSelectedPetId(item.id) }}
            switchItem="Pet"
          />
        </View>

        {/* Reminder Cards */}
        {reminderCards}

        {/* Add Reminder Button */}
        {selectedPet.id !== '' && (
          <View style={styles.addReminderButton}>
            <AddReminderButton
              disabled={false}
              onPressFunction={() => {
                setNotificationCopy({ ...emptyNotification, id: ObjectID() });
                setPopupState(notifState.SHOW_POPUP);
              }}
              innerText={'+ ADD'}
              color={Color.colorCornflowerblue}
            />
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} />

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