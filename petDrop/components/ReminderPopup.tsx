import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/ReminderPopup.styles';

type ReminderPopupProps = {
  isActive: boolean;
};

const ReminderPopup = ({isActive}: ReminderPopupProps) => {
  if (isActive) { 
    return (
    <View style={{position: "absolute"}}>
      <View style={styles.opaqueBackground} />
			<View style={styles.reminderPopupContainer}>
        <View style={styles.reminderPopup}>
          <View style={[styles.reminderPopupChild, styles.reminderPosition]} />
          <View style={[styles.reminderPopupItem, styles.reminderPosition]} />
          <Image
            style={styles.reminderPopupInner}
            contentFit="cover"
            source={require("../assets/remove_x_white.png")}
          />
          <Image
            style={[styles.groupIcon, styles.reminderChildLayout]}
            contentFit="cover"
            source={require("../assets/remove_x_blue.png")}
          />
          <Image
            style={[styles.reminderPopupChild1, styles.reminderChildLayout]}
            contentFit="cover"
            source={require("../assets/remove_x_blue.png")}
          />
          <Image
            style={[styles.reminderPopupChild2, styles.reminderChildLayout]}
            contentFit="cover"
            source={require("../assets/remove_x_blue.png")}
          />
          <Image
            style={[styles.reminderPopupChild3, styles.reminderChildLayout]}
            contentFit="cover"
            source={require("../assets/remove_x_blue.png")}
          />
          <Text style={styles.eyeDrops}>{`Eye drops `}</Text>
          <View style={styles.rectangleView} />
          <Text style={styles.datesNotifications6am}>{`Dates: 


    Notifications: 
    6am - 6pm
    Eye
    Message: 
    “2 drops”`}</Text>
          <Text style={[styles.start0919Container, styles.containerTypo]}>
            {`Start: 09 `}/{`19 `}/25
          </Text>
          <Text style={[styles.end0923Container, styles.containerTypo]}>
            {`End: 09 `}/{`23 `}/25
          </Text>
          <Text style={[styles.am, styles.amTypo]}>6 : 00 AM</Text>
          <Text style={[styles.pm, styles.amTypo]}>6 : 00 PM</Text>
        </View>
      </View>
    </View>
    );
  }
};


export default ReminderPopup;
