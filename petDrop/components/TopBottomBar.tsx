import { Image } from "expo-image";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, View, Text, Dimensions } from "react-native";
import PetInfoButton from "../assets/pet_info_button.svg";
import RemindersButton from "../assets/reminders_button.svg";
import HouseButtonRoof from "../assets/house_button_roof.svg";
import ShareButtonRightArrow from "../assets/share_button_right_arrow.svg";
import { Border, Color, FontFamily, FontSize, ScreenEnum, styles } from "../GlobalStyles";

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
    <View style={[styles.topBottomBarGroupParent, groupViewStyle]}>
      <View style={styles.topBottomBarRectangleParent}>
        <View style={styles.topBottomBarGroupChild} />
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
          <View style={styles.topBottomBarGroupChild4}/>
          <Text style={styles.topBottomBarButtonText}>HOME</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("PetInfo")}} style={styles.petInfoPressable}>
        {props.currentScreen == ScreenEnum.PetInfo || 
        props.currentScreen == ScreenEnum.PetInfo1 ? (
          <View style={styles.darkBackground}/>
        ) : null}
        <View style={styles.petInfoButton}>
          <PetInfoButton 
            style={styles.instanceItem} 
            width={(width * 0.0808)} 
            height={(height * 0.029)} />
          <Text style={styles.topBottomBarButtonText}>PETS</Text>
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
          <Text style={styles.topBottomBarButtonText}>REMINDERS</Text>
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
          <Text style={styles.topBottomBarButtonText}>MEDS</Text>
        </View>
      </Pressable>
      <Pressable style={styles.sharePressable}>
        <View style={styles.shareButton}>
          <View style={[styles.groupChild8, styles.topBottomBarGroupChildPosition]} />
          <View style={[styles.groupChild9, styles.topBottomBarGroupChildPosition]} />
          <ShareButtonRightArrow
            style={[styles.groupChild10, styles.groupChild10Layout]}
            width={(width * 0.0385)}
            height={(height * 0.0237)}
          />
          <Text style={styles.topBottomBarButtonText}>SHARE</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default TopBottomBar;
