import * as React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import MedicationInfo from "../components/MedicationInfo2";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border, ScreenEnum, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

type RemindersType = {
  navigation: any;
}

const Reminders = (props: RemindersType) => {
  return (
    <View style={styles.outermostView}>
      <Text
        style={[styles.reminders1, styles.petdropTypo]}
      >{`Reminders `}</Text>
      <Text style={[styles.remindersDatesSept1923, styles.datesTypo]}>{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
      <Text style={[styles.datesSept2022, styles.datesTypo]}>{`Dates: Sept 20-22
Notifications: 6am
Message: “1 pill”`}</Text>
      <Text style={[styles.datesSept25, styles.datesTypo]}>{`Dates: Sept 2-5
Notifications: 6PM
Message: “1 pill”`}</Text>
      <View style={[styles.remindersRectangleParent, styles.remindersGroupChildLayout]}>
        <View style={styles.petInfoGroupChild} />
        <Text style={[styles.add, styles.datesTypo]}>ADD</Text>
        <View style={styles.petInfoRectangleGroup}>
          <View style={[styles.petInfoGroupItem, styles.homeGroupLayout]} />
          <View style={[styles.remindersGroupInner, styles.homeGroupLayout]} />
        </View>
      </View>
      <MedicationInfo eyeDropsSPARKY="Eye drops: SPARKY " />
      <MedicationInfo
        eyeDropsSPARKY="Antibiotics: Blue "
        groupViewTop={(height * 0.4289)}
        rectangleViewBackgroundColor="#ffc635"
      />
      <MedicationInfo
        eyeDropsSPARKY="Heartgard: Blue"
        groupViewTop={(height * 0.5806)}
        rectangleViewBackgroundColor="#a0c66f"
      />
      <Text style={[styles.remindersLogoText, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.remindersLogoSubtext, styles.datesTypo]}>
        NEVER MISS A DROP.
      </Text>
      <TopBottomBar navigation = {props.navigation} currentScreen={ScreenEnum.Reminders}/>
    </View>
  );
};

export default Reminders;