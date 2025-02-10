/* This file and MedicationInfo2.tsx will be combined into one at some point */

import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Image } from "expo-image";
import EditIcon from "../assets/edit_icon.svg";
import { Border, Color, FontSize, FontFamily, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const MedicationInfo = () => {
  return (
    <View style={styles.medsInfoRectangleParent}>
      <View style={[styles.medsInfoGroupChild, styles.medsInfoGroupPosition]} />
      <View style={[styles.medsInfoGroupItem, styles.medsInfoGroupPosition]} />
      <Text
        style={[styles.medsInfoEyeDropsSparky, styles.groupIconPosition]}
      >{`Eye drops: SPARKY `}</Text>
      <View style={styles.medsInfoGroupInner} />
      <EditIcon
        style={[styles.medsInfoGroupIcon, styles.groupIconPosition]}
        width={(width * 0.0744)}
        height={(height * 0.0344)}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   groupPosition: {
//     width: (width * 0.7205),
//     position: "absolute",
//   },
//   groupIconPosition: {
//     top: (height * 0.0036),
//     position: "absolute",
//   },
//   groupChild: {
//     borderRadius: Border.br_xl,
//     backgroundColor: Color.colorCornflowerblue,
//     height: (height * 0.1315),
//   },
//   groupItem: {
//     top: (height * 0.0379),
//     borderBottomRightRadius: Border.br_xl,
//     borderBottomLeftRadius: Border.br_xl,
//     backgroundColor: Color.colorLightskyblue,
//     height: (height * 0.4242),
//   },
//   eyeDropsSparky: {
//     left: (width * 0.1),
//     fontSize: FontSize.size_base,
//     fontFamily: FontFamily.koulenRegular,
//     color: Color.colorFloralwhite,
//     textAlign: "left",
//   },
//   groupInner: {
//     top: (height * 0.0083),
//     left: (width * 0.0308),
//     borderRadius: Border.br_7xs,
//     backgroundColor: Color.colorFirebrick,
//     width: (width * 0.0487),
//     height: (height * 0.0225),
//     position: "absolute",
//   },
//   groupIcon: {
//     left: (width * 0.6282),
//   },
//   rectangleParent: {
//     top: (height * 0.314),
//     left: (width * 0.1333),
//     height: (height * 0.4621),
//     width: (width * 0.7205),
//     position: "absolute",
//   },
// });

export default MedicationInfo;
