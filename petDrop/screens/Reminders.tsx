import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import MedicationInfo from "../components/MedicationInfo2";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

type RemindersType = {
  navigation: any;
}

const Reminders = (props: RemindersType) => {
  return (
    <View style={styles.reminders}>
      <Text
        style={[styles.reminders1, styles.petdropTypo]}
      >{`Reminders `}</Text>
      <Text style={[styles.datesSept1923, styles.datesTypo]}>{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
      <Text style={[styles.datesSept2022, styles.datesTypo]}>{`Dates: Sept 20-22
Notifications: 6am
Message: “1 pill”`}</Text>
      <Text style={[styles.datesSept25, styles.datesTypo]}>{`Dates: Sept 2-5
Notifications: 6PM
Message: “1 pill”`}</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.add, styles.datesTypo]}>ADD</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <MedicationInfo eyeDropsSPARKY="Eye drops: SPARKY " />
      <MedicationInfo
        eyeDropsSPARKY="Antibiotics: Blue "
        groupViewTop={362}
        rectangleViewBackgroundColor="#ffc635"
      />
      <MedicationInfo
        eyeDropsSPARKY="Heartgard: Blue"
        groupViewTop={490}
        rectangleViewBackgroundColor="#a0c66f"
      />
      <Text style={[styles.petdrop, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.datesTypo]}>
        NEVER MISS A DROP.
      </Text>
      <TopBottomBar navigation = {props.navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  petdropTypo: {
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    color: Color.colorCornflowerblue,
  },
  datesTypo: {
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 40,
    position: "absolute",
  },
  groupLayout: {
    height: 2,
    borderRadius: Border.br_10xs,
    width: 10,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  reminders1: {
    top: 196,
    left: 34,
    fontSize: FontSize.size_5xl,
  },
  datesSept1923: {
    top: 928,
    left: 94,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  datesSept2022: {
    top: 1062,
    left: 94,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  datesSept25: {
    top: 1237,
    left: 94,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  groupChild: {
    top: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightskyblue,
    height: 21,
    left: 0,
  },
  add: {
    top: 0,
    left: 18,
    color: Color.colorFloralwhite,
  },
  groupItem: {
    top: 4,
    left: 0,
  },
  groupInner: {
    top: 10,
    left: 4,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleGroup: {
    top: 6,
    left: 3,
    height: 10,
    width: 10,
    position: "absolute",
  },
  rectangleParent: {
    top: 618,
    left: 64,
    height: 23,
  },
  petdrop: {
    top: 82,
    left: 19,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
  },
  neverMissA: {
    top: 133,
    left: 46,
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_smi,
  },
  reminders: {
    flex: 1,
    width: "100%",
    height: 1464,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Reminders;
