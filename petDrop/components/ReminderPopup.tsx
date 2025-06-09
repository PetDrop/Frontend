import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/ReminderPopup.styles';

type ReminderPopupType = {
  isActive: boolean;
  showingFunction: Function;
};

const ReminderPopup = ({ isActive, showingFunction }: ReminderPopupType) => {
  if (isActive) {
    return (
      <View style={{ position: "absolute" }}>

        {/* opaque layer to blur background */}
        <View style={styles.opaqueBackground} />

        {/* the popup itself */}
        <View style={styles.reminderPopup}>

          {/* top blue banner */}
          <View style={styles.topBanner}>

            {/* TODO: make this display the med's color */}
            {/* color indicator */}
            <View style={styles.colorIndicator} />

            {/* TODO: make this actually display the med name */}
            {/* medication name */}
            <Text style={styles.medicationName}>{`MED NAME HERE`}</Text>

            {/* close popup button */}
            <Pressable onPress={() => { showingFunction(false) }}>
              <Image
                style={styles.closePopup}
                contentFit="cover"
                source={require("../assets/remove_x_white.png")}
              />
            </Pressable>

          </View>

          {/* main popup body */}
          <View style={styles.popupBody}>

            {/* TODO: add info about medication selected here */}

          </View>


        </View>
      </View>
    );
  }
};


export default ReminderPopup;
