import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Polygon6 from "../assets/polygon-6.svg";
import Ellipse17 from "../assets/ellipse-17.svg";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MedicationPopup = () => {
  return (
    <View style={styles.medicationPopup}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
        <Text style={styles.exDosageTake}>
          ex. dosage, take with food, etc...
        </Text>
        <View style={styles.groupInner} />
        <View style={styles.rectangleGroup}>
          <View style={styles.rectangleView} />
          <Text style={[styles.save, styles.saveTypo]}>{`SAVE
`}</Text>
        </View>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <Text style={[styles.medication, styles.saveTypo]}>Medication</Text>
        <View style={styles.groupChild1} />
        <Text style={[styles.datesSeptember19, styles.textTypo]}>{`Dates:
September 19

Notifications: 

Message: 
`}</Text>
        <Text style={[styles.text, styles.textTypo]}>
          {`09 `}/{`19 `}/25
        </Text>
        <Polygon6 style={styles.polygonIcon} width={19} height={12} />
        <View style={[styles.ellipseParent, styles.ellipseLayout]}>
          <Ellipse17
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            width={22}
            height={22}
          />
          <View style={styles.rectangleContainer}>
            <View style={styles.groupChild2} />
            <View style={styles.groupChildPosition} />
          </View>
        </View>
        <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
          <Ellipse17
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            width={22}
            height={22}
          />
          <View style={styles.rectangleContainer}>
            <View style={styles.groupChild2} />
            <View style={styles.groupChildPosition} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saveTypo: {
    color: Color.colorFloralwhite,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  textTypo: {
    height: 155,
    width: 159,
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  ellipseLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorCornflowerblue,
    top: 0,
    height: 432,
    left: 0,
    position: "absolute",
    width: 390,
  },
  groupItem: {
    top: 67,
    height: 365,
    backgroundColor: Color.colorFloralwhite,
    left: 0,
    position: "absolute",
    width: 390,
  },
  exDosageTake: {
    top: 319,
    left: 48,
    fontSize: FontSize.size_mini,
    color: Color.colorLightskyblue,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  groupInner: {
    top: 305,
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue,
    borderWidth: 4,
    width: 289,
    height: 50,
    left: 31,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: 17,
    height: 34,
    top: 4,
    width: 74,
    backgroundColor: Color.colorCornflowerblue,
    left: 0,
    position: "absolute",
  },
  save: {
    left: 16,
    width: 41,
    height: 33,
    top: 0,
  },
  rectangleGroup: {
    top: 374,
    left: 293,
    height: 38,
    width: 74,
    position: "absolute",
  },
  groupIcon: {
    top: 22,
    left: 348,
    width: 24,
    height: 24,
    position: "absolute",
  },
  medication: {
    top: 12,
    left: 52,
  },
  groupChild1: {
    top: 20,
    left: 18,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorFirebrick,
    width: 26,
    height: 26,
    position: "absolute",
  },
  datesSeptember19: {
    top: 83,
    left: 31,
  },
  text: {
    top: 119,
    left: 231,
  },
  polygonIcon: {
    top: 27,
    left: 158,
    borderRadius: Border.br_12xs,
    position: "absolute",
  },
  ellipseIcon: {
    top: 0,
    left: 0,
  },
  groupChild2: {
    top: 6,
    height: 3,
    borderRadius: Border.br_10xs,
    width: 14,
    backgroundColor: Color.colorFloralwhite,
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: 6,
    top: 14,
    height: 3,
    borderRadius: Border.br_10xs,
    width: 14,
    backgroundColor: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleContainer: {
    left: 4,
    height: 14,
    width: 14,
    top: 4,
    position: "absolute",
  },
  ellipseParent: {
    top: 157,
    left: 30,
    width: 22,
  },
  ellipseGroup: {
    top: 232,
    left: 30,
    width: 22,
  },
  rectangleParent: {
    top: 422,
    height: 432,
    left: 0,
    position: "absolute",
    width: 390,
  },
  medicationPopup: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    width: 390,
  },
});

export default MedicationPopup;
