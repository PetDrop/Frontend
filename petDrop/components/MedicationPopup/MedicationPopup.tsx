import * as React from "react";
import { View, Text, Pressable, Button, TextInput, ScrollView, KeyboardAvoidingView, Platform, Keyboard, Modal, Dimensions } from "react-native";
import { Image } from "expo-image";
import DropdownArrow from "../../assets/dropdown_arrow.svg";
import styles from '../../styles/MedicationPopup.styles';
import { Notification, Medication, Pet, SponsorMedication, emptyNotification, emptyMed } from "../../data/dataTypes";
import { useEffect, useMemo, useState } from "react";
import { Color, FontSize, FontFamily } from "../../GlobalStyles";
import Selection from 'react-native-select-dropdown';
import DeleteButton from '../CustomButton';
import SaveButton from '../CustomButton';
import { medState } from "../../data/enums";
import { GET_ALL_SPONSOR_MEDICATIONS, httpRequest } from "../../data/endpoints";
import { NavigationProp } from "@react-navigation/core";
import NotifCard from "../NotifCard";
import CustomDateTimePicker from "./CustomDateTimePicker";
import * as Notifications from 'expo-notifications';
import { usePushToken } from '../../context/PushTokenContext';
import { useAccount } from '../../context/AccountContext';
import HelpButton from '../HelpButton';
import HelpPopup from '../HelpPopup';
import { helpText } from '../../data/helpText';

type MedicationPopupType = {
  isActive: boolean;
  setPopupState: Function;
  pet: Pet;
  med: Medication;
  medCopy: Medication;
  setMedCopy: React.Dispatch<React.SetStateAction<Medication>>;
  readonly: boolean;
  navigation: NavigationProp<any>;
};

const MedicationPopup = ({ isActive, setPopupState, pet, med, medCopy, setMedCopy, readonly, navigation }: MedicationPopupType) => {
	const { pushToken: currentPushToken } = usePushToken();
	const { account } = useAccount();
  const ObjectID = require('bson-objectid');
  const { width, height } = Dimensions.get('window');
  const [propsChanged, setPropsChanged] = useState(true);
  const [sponsorMeds, setSponsorMeds] = useState<SponsorMedication[]>([]);
  const [occurrencesMap, setOccurrencesMap] = useState<Record<string, number>>({});
  const [notifStates, setNotifStates] = useState<Record<string, { startDates: Date[], endDates: Date[], times: Date[], repeatInterval: string, occurrences: number }>>({});
  const [pickerVisible, setPickerVisible] = useState(false);
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');
  const [onPickerConfirm, setOnPickerConfirm] = useState<((date: Date) => void) | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  const openPicker = (mode: 'date' | 'time', onConfirm: (date: Date) => void) => {
    Keyboard.dismiss();
    setPickerMode(mode);
    setOnPickerConfirm(() => onConfirm);
    setPickerVisible(true);
  };

  const handleOccurrenceChange = (notifId: string, occ: number) => {
    setOccurrencesMap(prev => ({ ...prev, [notifId]: occ }));
  };

  const handleNotifStateChange = (notifId: string, state: { startDates: Date[], endDates: Date[], times: Date[], repeatInterval: string, occurrences: number }) => {
    setNotifStates(prev => ({ ...prev, [notifId]: state }));
  };

  // Generate all combinations of dates and times for a notification
  const generateNotificationRuns = (state: { startDates: Date[], endDates: Date[], times: Date[], repeatInterval: string, occurrences: number }) => {
    const { startDates, endDates, times, repeatInterval, occurrences } = state;
    const nextRuns: Date[] = [];
    const finalRuns: Date[] = [];

    if (startDates.length === 0 || times.length === 0) {
      return { nextRuns, finalRuns };
    }

    // For daily intervals: nextRuns = startDate x times, finalRuns = endDate x times
    if (repeatInterval === 'daily') {
      const startDate = startDates[0];
      const endDate = endDates[0] || startDate;

      // nextRuns: startDate x all times
      times.forEach(time => {
        const dateTime = new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
          time.getHours(),
          time.getMinutes(),
          time.getSeconds()
        );
        nextRuns.push(new Date(dateTime));
      });

      // finalRuns: endDate x all times
      times.forEach(time => {
        const dateTime = new Date(
          endDate.getFullYear(),
          endDate.getMonth(),
          endDate.getDate(),
          time.getHours(),
          time.getMinutes(),
          time.getSeconds()
        );
        finalRuns.push(new Date(dateTime));
      });
    } else {
      // For weekly/monthly intervals: nextRuns = startDates x times, finalRuns = endDates(determined from startDates + repeatInterval * occurrences) x times
      startDates.forEach(startDate => {
        times.forEach(time => {
          // nextRuns: startDate x time
          const startDateTime = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate(),
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
          );
          nextRuns.push(new Date(startDateTime));

          // finalRuns: endDate (startDate + repeatInterval * occurrences) x time
          const endDate = new Date(startDate);
          if (repeatInterval === 'weekly') {
            endDate.setDate(endDate.getDate() + (occurrences - 1) * 7);
          } else if (repeatInterval === 'monthly') {
            endDate.setMonth(endDate.getMonth() + (occurrences - 1));
          }

          const endDateTime = new Date(
            endDate.getFullYear(),
            endDate.getMonth(),
            endDate.getDate(),
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
          );
          finalRuns.push(new Date(endDateTime));
        });
      });
    }

    return { nextRuns, finalRuns };
  };

  // fetch all the sponsor meds to populate the dropdown with
  const getSponsorMedications = async () => {
    const response = await httpRequest(GET_ALL_SPONSOR_MEDICATIONS, 'GET', '', false);
    if (response.ok) {
      setSponsorMeds(await response.json());
    }
  }

  // fetch the sponsor meds upon rendering for the first time
  useEffect(() => {
    getSponsorMedications();
  }, []);

  // rerenders the popup when it's opened if it's possible something changed
  if (isActive && propsChanged) {
    setPropsChanged(false);
    // setMedCopy({...medCopy, id: medCopy.id || ObjectID()});
    // setMedCopy({...medCopy, description: medCopy.description});
    // setMedCopy({...medCopy, name: medCopy.name});
    // setMedCopy({...medCopy, notifications: medCopy.notifications});
    // setMedCopy({...medCopy, color: medCopy.color || `#${Math.round(Math.random() * 899998 + 100000)}`});
  }

  // resets all states - done if 'x' is hit
  const close = (state: medState) => {
    // Clear all notification states
    setNotifStates({});
    setOccurrencesMap({});
    setPropsChanged(true);
    setPopupState(state);
  }

  // Validation functions
  const validateMedicationName = () => {
    return medCopy.name && medCopy.name.trim() !== '';
  };

  const validateNotifications = () => {
    return medCopy.notifications.every(notif => {
      const state = notifStates[notif.id];
      if (!state) return false; // No state means notification hasn't been configured

      // Check if notification has at least one start date and one time
      const hasStartDate = state.startDates.length > 0;
      const hasTime = state.times.length > 0;

      // For daily intervals, also require an end date
      if (state.repeatInterval === 'daily') {
        const hasEndDate = state.endDates.length > 0;
        return hasStartDate && hasTime && hasEndDate;
      }

      // For weekly/monthly intervals, only need start date and time
      return hasStartDate && hasTime;
    });
  };

  const validateAndSave = () => {
    const errors: string[] = [];

    // Check medication name
    if (!validateMedicationName()) {
      errors.push('Please select a medication from the dropdown.');
    }

    // Check notifications
    if (medCopy.notifications.length > 0 && !validateNotifications()) {
      errors.push('Please ensure all notifications are properly configured. Daily notifications need start date, end date, and time. Weekly/monthly notifications need start date and time.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return false;
    }

    return true;
  };

  const closeWithAction = (deletePressed: boolean) => {
    if (deletePressed) {
      close(medState.MED_DELETED);
      return;
    }

    // Validation checks
    if (!validateAndSave()) {
      return; // Stop if validation fails
    }

    // Generate nextRuns and finalRuns from local state
    const updatedNotifs = medCopy.notifications.map(notif => {
      const state = notifStates[notif.id];
      if (state) {
        const { nextRuns, finalRuns } = generateNotificationRuns(state);
        // Use string repeatInterval directly for the notification object
        // Create data object with medName for navigation
        const notificationData = { medName: { value: medCopy.name } };
        
        return {
          ...notif,
          nextRuns,
          finalRuns,
          repeatInterval: state.repeatInterval,
          data: notificationData,
          body: `It's time to give ${pet.name} their ${medCopy.name}!`,
          ownerUsername: account.username
        };
      }
      // If no state found, return the notification as-is (might be an empty notification)
      // This prevents notifications with no user interaction from being lost
      return notif;
    });
    setMedCopy({
      ...medCopy,
      notifications: updatedNotifs,
    });

    // runningTotal will be used to determine the medState
    let runningTotal = 0;
    // check if the med was created or edited
    // medStates get the tens value from med and the ones value from notifs
    if (med.name === '' && medCopy.name !== '') { // med was created
      runningTotal = 10;
    } else {
      // check if any fields of med and medCopy differ, i.e. if med was edited
      const medFieldsToCheck: (keyof Medication)[] = ["name", "color", "description"];
      for (const field of medFieldsToCheck) {
        if (med[field] !== medCopy[field]) { // med was edited
          runningTotal = 20;
          break;
        }
      }
    }
    // check if notifs was created, edited, or deleted
    if (med.notifications.length === 0 && medCopy.notifications.length > 0) { // notifs created
      runningTotal += 1;
    } else if (med.notifications.length > 0 && medCopy.notifications.length === 0) { // notifs deleted
      runningTotal += 3;
    } else {
      if (med.notifications.length !== medCopy.notifications.length) { // efficient way to check if notifs edited
        runningTotal += 2;
      } else {
        // check each notif to see if any fields were changed
        const notifFieldsToCheck: (keyof Notification)[] = ["id", "title", "body", "data", "nextRuns", "finalRuns", "repeatInterval"];
        med.notifications.forEach((notif, index) => {
          for (const field of notifFieldsToCheck) {
            if (notif[field] !== medCopy.notifications[index][field]) { // a notif was edited
              runningTotal += 2;
              // early return to avoid unnecessary iterations over notifs array
              close(runningTotal);
              return;
            }
          }
        })
      }
    }
    // set popup state using runningTotal, which closes the popup
    close(runningTotal);
  }


  if (isActive) {
    return (
      <Pressable 
        style={styles.modalBackground}
        onPress={() => Keyboard.dismiss()}
      >
        {/* Background container */}
        <View style={styles.modalContainer}>

          {/* close button */}
          <Pressable 
            onPress={() => { close(medState.NO_ACTION) }} 
            style={styles.closeButton}
          >
            <Image
              style={styles.closeIcon}
              contentFit="cover"
              source={require("../../assets/remove_x_blue.png")}
            />
          </Pressable>

          {/* Help button */}
          <HelpButton onPress={() => setShowHelp(true)} inPopup={true} />

          {/* Header with color indicator and medication selection */}
          <View style={styles.headerContainer}>
            {/* Color indicator */}
            <View style={[styles.colorIndicatorNew, { backgroundColor: medCopy.color }]} />

            {/* Medication selection */}
            {!readonly ?
              <Selection
                data={
                  sponsorMeds
                    .map((sponsorMed) => {
                      if (!pet.medications.some((med) => med.name == sponsorMed.name)) {
                        return sponsorMed.name;
                      }
                      return null;
                    })
                    .filter((name): name is string => name !== null)
                }
                defaultValueByIndex={sponsorMeds.findIndex((sponsorMed) => sponsorMed.name === medCopy.name)}
                onSelect={(selectedItem: string) => { setMedCopy({ ...medCopy, name: selectedItem }) }}
                renderButton={(selectedItem: string, isOpened: boolean) => {
                  return (
                    <View style={styles.dropdownButton}>
                      <Text style={styles.dropdownText} numberOfLines={1}>
                        {selectedItem ? selectedItem : med.name ? med.name : 'Select Medication'}
                      </Text>
                      <DropdownArrow width={19} height={12} />
                    </View>
                  )
                }}
                renderItem={(selectedItem: string, index: number, isSelected: boolean) => {
                  return (
                    <View style={[styles.dropdownItemNew, isSelected && styles.dropdownItemSelected]}>
                      <Text style={[styles.dropdownText, isSelected && { color: Color.colorDarkslateblue, fontWeight: '600' }]}>
                        {selectedItem}
                      </Text>
                    </View>
                  )
                }}
                dropdownStyle={{
                  marginTop: height * -0.0125,
                  borderWidth: 2,
                  borderColor: Color.colorCornflowerblue,
                  maxHeight: height * 0.3,
                }}
              />
              :
              <View style={styles.readonlyDropdown}>
                <Text style={styles.dropdownText}>{medCopy.name}</Text>
              </View>
            }
          </View>

          {/* Scrollable content area */}
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

            {!readonly && (
              <Pressable
                style={styles.addReminderButton}
                onPress={() => {
                  setMedCopy((prev) => {
                    const newNotification = { ...emptyNotification, id: ObjectID(), expoPushToken: currentPushToken };
                    return { ...prev, notifications: [...prev.notifications, newNotification] }
                  })
                }}
              >
                <Text style={styles.addReminderText}>Add Reminder</Text>
              </Pressable>
            )}

            {/* Notification cards */}
            <View style={styles.notifCardsContainer}>
              {medCopy.notifications?.map((notif, index) => (
                <NotifCard
                  key={notif.id}
                  notification={{ ...notif, ownerUsername: account.username }}
                  onChange={(updatedNotif: Notification) => {
                    setMedCopy((prev) => {
                      return { ...prev, notifications: prev.notifications.map((n, i) => (i === index ? updatedNotif : n)) }
                    });
                  }}
                  onDelete={() => {
                    setMedCopy((prev) => {
                      return { ...prev, notifications: prev.notifications.filter(n => n.id !== notif.id) }
                    });
                  }}
                  onOccurrenceChange={(occ) => handleOccurrenceChange(notif.id, occ)}
                  onOpenPicker={(mode, handler) => openPicker(mode, handler)}
                  onStateChange={(state) => handleNotifStateChange(notif.id, state)}
                />
              ))}
            </View>

            {/* Description input */}
            <TextInput
              style={styles.descriptionInput}
              placeholder="Enter any info you'll need later (notes, instructions, etc.)"
              placeholderTextColor={Color.colorCornflowerblue}
              value={medCopy.description}
              onChangeText={(newText) => { setMedCopy((prev) => { return { ...prev, description: newText } }) }}
              multiline={true}
              editable={!readonly}
            />

          </ScrollView>

          {/* Action buttons */}
          <View style={styles.actionButtonsContainer}>
            {/* Instructions button */}
            {med.id !== '' && (
              <Pressable 
                onPress={() => { navigation.navigate('Instructions', { medName: medCopy.name }) }}
                style={styles.instructionsButton}
              >
                <Text style={styles.buttonText}>Instructions</Text>
              </Pressable>
            )}

            {/* Save button */}
            {!readonly && (
              <Pressable
                onPress={() => { closeWithAction(false) }}
                style={styles.saveButton}
              >
                <Text style={styles.buttonText}>Save</Text>
              </Pressable>
            )}

            {/* Delete button */}
            {(med.id !== '' && !readonly) && (
              <Pressable
                onPress={() => { closeWithAction(true) }}
                style={styles.deleteButton}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            )}
          </View>

        </View>

        <CustomDateTimePicker
          isVisible={pickerVisible}
          mode={pickerMode}
          onConfirm={(date) => {
            onPickerConfirm?.(date);
            setPickerVisible(false);
          }}
          onCancel={() => setPickerVisible(false)}
        />

        <HelpPopup
          isVisible={showHelp}
          helpText={helpText.MedicationPopup}
          onClose={() => setShowHelp(false)}
        />
      </Pressable>
    );
  }
};

export default MedicationPopup;