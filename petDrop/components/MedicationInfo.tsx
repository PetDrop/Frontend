/* This file and MedicationInfo2.tsx will be combined into one at some point */

import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import EditIcon from "../assets/edit_icon.svg";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const MedicationInfo = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={[styles.groupItem, styles.groupPosition]} />
      <Text
        style={[styles.eyeDropsSparky, styles.groupIconPosition]}
      >{`Eye drops: SPARKY `}</Text>
      <View style={styles.groupInner} />
      <EditIcon
        style={[styles.groupIcon, styles.groupIconPosition]}
        width={29}
        height={29}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    width: 281,
    position: "absolute",
  },
  groupIconPosition: {
    top: 3,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorCornflowerblue,
    height: 111,
  },
  groupItem: {
    top: 32,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorLightskyblue,
    height: 358,
  },
  eyeDropsSparky: {
    left: 39,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorFloralwhite,
    textAlign: "left",
  },
  groupInner: {
    top: 7,
    left: 12,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorFirebrick,
    width: 19,
    height: 19,
    position: "absolute",
  },
  groupIcon: {
    left: 245,
  },
  rectangleParent: {
    top: 265,
    left: 52,
    height: 390,
    width: 281,
    position: "absolute",
  },
});

export default MedicationInfo;
