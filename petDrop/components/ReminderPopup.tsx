import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ReminderPopup = () => {
  return (
    <View style={styles.reminderPopup}>
      <View style={[styles.reminderPopupChild, styles.reminderPosition]} />
      <View style={[styles.reminderPopupItem, styles.reminderPosition]} />
      <Image
        style={styles.reminderPopupInner}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.reminderChildLayout]}
        contentFit="cover"
        source={require("../assets/group-391.png")}
      />
      <Image
        style={[styles.reminderPopupChild1, styles.reminderChildLayout]}
        contentFit="cover"
        source={require("../assets/group-391.png")}
      />
      <Image
        style={[styles.reminderPopupChild2, styles.reminderChildLayout]}
        contentFit="cover"
        source={require("../assets/group-391.png")}
      />
      <Image
        style={[styles.reminderPopupChild3, styles.reminderChildLayout]}
        contentFit="cover"
        source={require("../assets/group-391.png")}
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
  );
};

const styles = StyleSheet.create({
  reminderPosition: {
    left: 0,
    position: "absolute",
    width: 390,
  },
  reminderChildLayout: {
    height: 14,
    width: 14,
    left: 13,
    position: "absolute",
  },
  containerTypo: {
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_xl,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  amTypo: {
    width: 159,
    left: 231,
    height: 155,
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  reminderPopupChild: {
    top: 424,
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorCornflowerblue,
    height: 420,
  },
  reminderPopupItem: {
    top: 498,
    backgroundColor: Color.colorFloralwhite,
    height: 346,
  },
  reminderPopupInner: {
    top: 450,
    left: 348,
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupIcon: {
    top: 656,
  },
  reminderPopupChild1: {
    top: 584,
  },
  reminderPopupChild2: {
    top: 694,
  },
  reminderPopupChild3: {
    top: 767,
  },
  eyeDrops: {
    top: 440,
    left: 52,
    fontSize: FontSize.size_5xl,
    color: Color.colorFloralwhite,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  rectangleView: {
    top: 448,
    left: 18,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorFirebrick,
    width: 26,
    height: 26,
    position: "absolute",
  },
  datesNotifications6am: {
    top: 511,
    width: 223,
    height: 155,
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_xl,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  start0919Container: {
    top: 548,
  },
  end0923Container: {
    top: 584,
  },
  am: {
    top: 589,
  },
  pm: {
    top: 625,
  },
  reminderPopup: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    width: 390,
  },
});

export default ReminderPopup;
