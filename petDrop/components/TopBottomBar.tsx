import { Image } from "expo-image";
import React, { useMemo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import PetInfoButton from "../assets/pet_info_button.svg";
import RemindersButton from "../assets/reminders_button.svg";
import HouseButtonRoof from "../assets/house_button_roof.svg";
import ShareButtonRightArrow from "../assets/share_button_right_arrow.svg";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

export type TopBottomBarType = {
  /** Style props */
  groupViewLeft?: number | string;
  navigation: any;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TopBottomBar = (props: TopBottomBarType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", props.groupViewLeft),
    };
  }, [props.groupViewLeft]);

  return (
    <View style={[styles.groupParent, groupViewStyle]}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
      </View>
      <View style={styles.instanceChild} />
      <Pressable onPress={() => {props.navigation.navigate("Home")}} style={styles.pressable}>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <HouseButtonRoof style={styles.polygonIcon} width={20} height={15} />
          <View style={styles.groupChild4} />
        </View>
      </Pressable>
      <View style={[styles.rectangleParent1, styles.groupViewPosition]}>
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
        <View style={[styles.groupChild7, styles.groupChildLayout]} />
      </View>
      
      <Pressable onPress={() => {props.navigation.navigate("PetInfo")}}>
        <PetInfoButton style={styles.instanceItem} width={27} height={21} />
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("Reminders")}}>
        <RemindersButton
          style={[styles.instanceInner, styles.groupChild10Layout]}
          width={21}
          height={20}
        />
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("MedicationsArchive")}}>
        <Image
          style={[styles.instanceChild1, styles.instanceChild1Position]}
          contentFit="cover"
          source={require("../assets/medications_button.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent2, styles.instanceChild1Position]}>
        <View style={[styles.groupChild8, styles.groupChildPosition]} />
        <View style={[styles.groupChild9, styles.groupChildPosition]} />
        <ShareButtonRightArrow
          style={[styles.groupChild10, styles.groupChild10Layout]}
          width={15}
          height={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    left: 5,
    height: 50,
    width: 390,
    position: "absolute",
  },
  groupChild1Position: {
    width: 22,
    top: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 2,
    borderRadius: Border.br_9xs,
  },
  groupLayout: {
    width: 10,
    position: "absolute",
  },
  groupViewPosition: {
    bottom: "61.7%",
    top: "-8.51%",
    height: "46.81%",
    position: "absolute",
  },
  groupChildLayout: {
    backgroundColor: Color.colorFloralwhite,
    borderRadius: Border.br_mini,
    height: "18.18%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  groupChild10Layout: {
    height: 20,
    position: "absolute",
  },
  instanceChild1Position: {
    top: -2,
    position: "absolute",
  },
  groupChildPosition: {
    top: 8,
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorLightskyblue,
    top: 0,
    height: 62,
    width: 390,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 19,
    left: 36,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 77,
    height: 23,
    position: "absolute",
  },
  groupItem: {
    top: 2,
    left: 2,
    width: 14,
    height: 8,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  groupInner: {
    top: 4,
    left: 20,
    borderWidth: 0.5,
    width: 1,
    height: 4,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  rectangleView: {
    borderWidth: 1,
    width: 20,
    borderRadius: Border.br_9xs,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: 12,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleGroup: {
    left: 52,
    width: 21,
    height: 12,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorGainsboro_200,
    width: 22,
    top: 0,
    position: "absolute",
    left: 0,
  },
  groupChild2: {
    top: 5,
    width: 17,
    left: 3,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChild3: {
    top: 10,
    left: 6,
    height: 2,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
  },
  rectangleContainer: {
    left: 23,
    height: 12,
  },
  groupIcon: {
    height: 12,
    top: 0,
    left: 0,
  },
  groupContainer: {
    top: 23,
    left: 292,
    width: 73,
    height: 12,
    position: "absolute",
  },
  rectangleParent: {
    top: -797,
    height: 62,
    width: 390,
    left: 0,
    position: "absolute",
  },
  instanceChild: {
    height: "146.81%",
    top: "-46.81%",
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  groupChild4: {
    width: "65.52%",
    top: "31.82%",
    right: "17.24%",
    left: "17.24%",
    backgroundColor: Color.colorCornflowerblue,
    height: "68.18%",
    bottom: "0%",
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  polygonIcon: {
    bottom: "31.82%",
    borderRadius: Border.br_11xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "-10%",
    left: "15%",
    right: "0%",
    position: "absolute",
  },
  groupView: {
    width: "7.44%",
    right: "87.44%",
    left: "5.13%",
  },
  groupChild5: {
    bottom: "81.82%",
    top: "0%",
  },
  groupChild6: {
    top: "40.91%",
    bottom: "40.91%",
  },
  groupChild7: {
    top: "81.82%",
    bottom: "0%",
    backgroundColor: Color.colorFloralwhite,
    borderRadius: Border.br_mini,
    height: "18.18%",
  },
  rectangleParent1: {
    width: "5.64%",
    right: "5.59%",
    left: "88.77%",
  },
  instanceItem: {
    left: 90,
    top: -1,
    position: "absolute",
  },
  instanceInner: {
    left: 158,
    top: -1,
  },
  instanceChild1: {
    left: 220,
    width: 26,
    height: 26,
  },
  groupChild8: {
    borderRadius: Border.br_10xs_5,
    width: 3,
    height: 17,
    left: 0,
  },
  groupChild9: {
    left: 1,
    width: 10,
    height: 3,
    borderRadius: Border.br_10xs,
  },
  groupChild10: {
    borderRadius: Border.br_12xs,
    left: 8,
    top: 0,
  },
  rectangleParent2: {
    left: 287,
    width: 18,
    height: 25,
  },
  groupParent: {
    top: 797,
    height: 47,
    width: 390,
    left: 0,
    position: "absolute",
  },
});

export default TopBottomBar;