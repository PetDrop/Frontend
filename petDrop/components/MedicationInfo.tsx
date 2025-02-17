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

export default MedicationInfo;
