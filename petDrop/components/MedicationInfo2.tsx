import React, { useMemo } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Image } from "expo-image";
import EditIcon from "../assets/edit_icon.svg";
import { Color, FontFamily, Border, FontSize, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

export type MedicationInfo2Type = {
  eyeDropsSPARKY?: string;

  /** Style props */
  groupViewTop?: number | string;
  rectangleViewBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MedicationInfo2 = ({
  eyeDropsSPARKY,
  groupViewTop,
  rectangleViewBackgroundColor,
}: MedicationInfo2Type) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
    };
  }, [groupViewTop]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBackgroundColor]);

  return (
    <View style={[styles.medsInfo2RectangleParent, groupView1Style]}>
      <View style={[styles.medsInfoGroupChild, styles.medsInfoGroupPosition]} />
      <View style={[styles.medsInfo2GroupItem, styles.medsInfoGroupPosition]} />
      <Text style={[styles.medsInfoEyeDropsSparky, styles.datesSept1923Typo]}>
        {eyeDropsSPARKY}
      </Text>
      <Text
        style={[styles.medsInfo2DatesSept1923, styles.datesSept1923Typo]}
      >{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
      <View style={[styles.medsInfoGroupInner, rectangleViewStyle]} />
      <EditIcon style={styles.medsInfoGroupIcon} width={(width * 0.0744)} height={(height * 0.0344)} />
    </View>
  );
};

export default MedicationInfo2;
