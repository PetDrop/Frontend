import * as React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import MedicationInfo from "../components/MedicationInfo2";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

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
        groupViewTop={(height * 0.4289)}
        rectangleViewBackgroundColor="#ffc635"
      />
      <MedicationInfo
        eyeDropsSPARKY="Heartgard: Blue"
        groupViewTop={(height * 0.5806)}
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
    width: (width * 0.1026),
    position: "absolute",
  },
  groupLayout: {
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  reminders1: {
    top: (height * 0.2322),
    left: (width * 0.0872),
    fontSize: FontSize.size_5xl,
  },
  datesSept1923: {
    top: (height * 1.0995),
    left: (width * 0.241),
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  datesSept2022: {
    top: (height * 1.2583),
    left: (width * 0.241),
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  datesSept25: {
    top: (height * 1.4656),
    left: (width * 0.241),
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  groupChild: {
    top: (height * 0.0012),
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.0249),
  },
  add: {
    left: (width * 0.0462),
    color: Color.colorFloralwhite,
  },
  groupItem: {
    top: (height * 0.0047),
  },
  groupInner: {
    top: (height * 0.0047),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleGroup: {
    top: (height * 0.0071),
    left: (width * 0.0077),
    height: (height * 0.0118),
    width: (width * 0.0256),
    position: "absolute",
  },
  rectangleParent: {
    top: (height * 0.7322),
    left: (width * 0.1641),
    height: (height * 0.0273),
  },
  petdrop: {
    top: (height * 0.0972),
    left: (width * 0.0487),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  neverMissA: {
    top: (height * 0.1694),
    left: (width * 0.1179),
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_smi,
  },
  reminders: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Reminders;
