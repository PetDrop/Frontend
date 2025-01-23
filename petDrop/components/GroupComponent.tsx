import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Group8 from "../assets/group-8.svg";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

export type GroupComponentType = {
  eyeDropsSPARKY?: string;

  /** Style props */
  groupViewTop?: number | string;
  rectangleViewBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  eyeDropsSPARKY,
  groupViewTop,
  rectangleViewBackgroundColor,
}: GroupComponentType) => {
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
    <View style={[styles.rectangleParent, groupView1Style]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={[styles.groupItem, styles.groupPosition]} />
      <Text style={[styles.eyeDropsSparky, styles.datesSept1923Typo]}>
        {eyeDropsSPARKY}
      </Text>
      <Text
        style={[styles.datesSept1923, styles.datesSept1923Typo]}
      >{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
      <View style={[styles.groupInner, rectangleViewStyle]} />
      <Group8 style={styles.groupIcon} width={29} height={29} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    width: 281,
    position: "absolute",
  },
  datesSept1923Typo: {
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
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
    height: 79,
  },
  eyeDropsSparky: {
    left: 39,
    fontSize: FontSize.size_base,
    top: 3,
  },
  datesSept1923: {
    top: 35,
    left: 14,
    fontSize: FontSize.size_smi,
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
    top: 3,
    position: "absolute",
  },
  rectangleParent: {
    top: 234,
    left: 55,
    height: 111,
    width: 281,
    position: "absolute",
  },
});

export default GroupComponent;
