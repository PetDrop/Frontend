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

// const styles = StyleSheet.create({
//   groupPosition: {
//     width: (width * 0.7205),
//     position: "absolute",
//   },
//   datesSept1923Typo: {
//     textAlign: "left",
//     color: Color.colorFloralwhite,
//     fontFamily: FontFamily.koulenRegular,
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
//     height: (height * 0.0936),
//   },
//   eyeDropsSparky: {
//     left: (width * 0.1),
//     fontSize: FontSize.size_base,
//   },
//   datesSept1923: {
//     top: (height * 0.0415),
//     left: (width * 0.0359),
//     fontSize: FontSize.size_smi,
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
//     top: (height * 0.0036),
//     position: "absolute",
//   },
//   rectangleParent: {
//     top: (height * 0.2773),
//     left: (width * 0.141),
//     height: (height * 0.1315),
//     width: (width * 0.7205),
//     position: "absolute",
//   },
// });

export default MedicationInfo2;
