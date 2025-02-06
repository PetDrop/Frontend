import { Image } from "expo-image";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, View, Text, Dimensions } from "react-native";
import PetInfoButton from "../assets/pet_info_button.svg";
import RemindersButton from "../assets/reminders_button.svg";
import HouseButtonRoof from "../assets/house_button_roof.svg";
import ShareButtonRightArrow from "../assets/share_button_right_arrow.svg";
import { Border, Color, FontFamily, FontSize, ScreenEnum } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

export type TopBottomBarType = {
  /** Style props */
  groupViewLeft?: number | string;
  navigation: any;
  currentScreen: number;
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
      <Pressable onPress={() => {props.navigation.navigate("Home")}} style={styles.homePressable}>
        {/* this conditional is for putting a background on whichever
            button corresponds to the current screen showing.
            there is one for each of the 4 screens on the nav bar */}
        {props.currentScreen == ScreenEnum.Home ? (
          <View style={styles.darkBackground}/>
        ) : null}
        <View style={styles.homeButton}>
          <HouseButtonRoof style={styles.polygonIcon}/>
          <View style={styles.groupChild4}/>
          <Text style={styles.buttonText}>HOME</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("PetInfo")}} style={styles.petInfoPressable}>
        {props.currentScreen == ScreenEnum.PetInfo ? (
          <View style={styles.darkBackground}/>
        ) : null}
        <View style={styles.petInfoButton}>
          <PetInfoButton 
            style={styles.instanceItem} 
            width={(width * 0.0808)} 
            height={(height * 0.029)} />
          <Text style={styles.buttonText}>PETS</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("Reminders")}} style={styles.remindersPressable}>
        {props.currentScreen == ScreenEnum.Reminders ? (
          <View style={styles.darkBackground}/>
        ) : null}
        <View style={styles.remindersButton}>
          <RemindersButton
            style={[styles.instanceInner, styles.groupChild10Layout]}
            width={(width * 0.0672)}
            height={(height * 0.0296)}
          />
          <Text style={styles.buttonText}>REMINDERS</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("MedicationsArchive")}} style={styles.medsPressable}>
        {props.currentScreen == ScreenEnum.MedicationsArchive ||
          props.currentScreen == ScreenEnum.MedicationsArchive1 ? ( //this second condition is temporary
          <View style={styles.darkBackground}/>
        ) : null}
        <View style={styles.medsButton}>
          <Image
            style={[styles.instanceChild1, styles.instanceChild1Position]}
            contentFit="cover"
            source={require("../assets/medications_button.png")}
          />
          <Text style={styles.buttonText}>MEDS</Text>
        </View>
      </Pressable>
      <Pressable style={styles.sharePressable}>
        <View style={styles.shareButton}>
          <View style={[styles.groupChild8, styles.groupChildPosition]} />
          <View style={[styles.groupChild9, styles.groupChildPosition]} />
          <ShareButtonRightArrow
            style={[styles.groupChild10, styles.groupChild10Layout]}
            width={(width * 0.0385)}
            height={(height * 0.0237)}
          />
          <Text style={styles.buttonText}>SHARE</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    top: (height * 0.032),
    left: (width * 0.005),
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    position: "absolute"
  },
  homePressable: {
    left: (width * 0.06),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  petInfoPressable: {
    left: (width * 0.24),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  remindersPressable: {
    left: (width * 0.42),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  medsPressable: {
    left: (width * 0.6),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  sharePressable: {
    left: (width * 0.78),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  groupChild1Position: {
    width: (width * 0.0564),
    position: "absolute",
  },
  groupChildLayout1: {
    height: (height * 0.0024),
    borderRadius: Border.br_9xs,
  },
  groupLayout: {
    width: (width * 0.0256),
    position: "absolute",
  },
  groupChild10Layout: {
    height: (height * 0.0237),
    position: "absolute",
  },
  instanceChild1Position: {
    position: "absolute",
  },
  groupChildPosition: {
    top: (height * 0.0095),
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorLightskyblue,
    height: (height * 0.0735),
    width: width,
    position: "absolute",
  },
  text: {
    top: (height * 0.0225),
    left: (width * 0.0923),
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: (width * 0.1974),
    height: (height * 0.0273),
    position: "absolute",
  },
  groupItem: {
    top: (height * 0.0024),
    left: (width * 0.0051),
    width: (width * 0.0359),
    height: (height * 0.0095),
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  groupInner: {
    top: (height * 0.0047),
    left: (width * 0.0513),
    borderWidth: 0.5,
    width: (width * 0.0026),
    height: (height * 0.0047),
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  rectangleView: {
    borderWidth: 1,
    width: (width * 0.0513),
    borderRadius: Border.br_9xs,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: (height * 0.0142),
    position: "absolute",
  },
  rectangleGroup: {
    left: (width * 0.1333),
    width: (width * 0.0538),
    height: (height * 0.0142),
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorGainsboro_200,
    width: (width * 0.0564),
    position: "absolute",
  },
  groupChild2: {
    top: (height * 0.0059),
    width: (width * 0.0436),
    left: (width * 0.0077),
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChild3: {
    top: (height * 0.0118),
    left: (width * 0.0154),
    height: (height * 0.0024),
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
  },
  rectangleContainer: {
    left: (width * 0.059),
    height: (height * 0.0142),
  },
  groupIcon: {
    height: (height * 0.0142),
  },
  groupContainer: {
    top: (height * 0.0273),
    left: (width * 0.7487),
    width: (width * 0.1872),
    height: (height * 0.0142),
    position: "absolute",
  },
  rectangleParent: {
    top: (height * -0.9443),
    height: (height * 0.0735),
    width: width,
    position: "absolute",
  },
  instanceChild: {
    height: (height * 0.1363),
    top: (height * -0.0758),
    width: width,
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  groupChild4: {
    left: (width * 0.008),
    top: (height * 0.01),
    width: (width * 0.0513),
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.0191),
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  polygonIcon: {
    top: (height * -0.002),
    left: (width * 0.008), 
    width: (width * 0.0513),
    height: (height * 0.0178),
    overflow: "hidden",
    position: "absolute",
  },
  darkBackground: {
    backgroundColor: Color.colorDarkslateblue,
    height: (height * 0.08),
    width: (width * 0.15),
    borderRadius: 15,
  },
  homeButton: {
    left: (width * 0.04),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  petInfoButton: {
    left: (width * 0.045),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  remindersButton: {
    left: (width * 0.005),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  medsButton: {
    left: (width * 0.04),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  shareButton: {
    left: (width * 0.035),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  instanceItem: {
    left: (width * -0.01),
    top: (height * 0.002),
    position: "absolute",
  },
  instanceInner: {
    left: (width * 0.035)
  },
  instanceChild1: {
    top: (height * -0.003),
    width: (width * 0.0744),
    height: (height * 0.0344),
  },
  groupChild8: {
    borderRadius: Border.br_10xs_5,
    left: (width * 0.02),
    width: (width * 0.0077),
    height: (height * 0.0201),
  },
  groupChild9: {
    left: (width * 0.0226),
    width: (width * 0.0256),
    height: (height * 0.0036),
    borderRadius: Border.br_10xs,
  },
  groupChild10: {
    borderRadius: Border.br_12xs,
    left: (width * 0.0405),
  },
  rectangleParent2: {
    width: (width * 0.1),
    height: (height * 0.0296),
  },
  groupParent: {
    top: (height * 0.9443),
    height: (height * 0.0557),
    width: width,
    position: "absolute",
  },
});

export default TopBottomBar;
