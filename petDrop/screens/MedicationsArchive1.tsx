/* This file will eventually be deleted, since it's essentially a duplicate of MedicationsArchive.tsx */

import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import WhiteCircle from "../assets/white_circle.svg";
import DarkBlueCircle from "../assets/dark_blue_circle.svg";
import MedicationInfo from "../components/MedicationInfo2";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border, ScreenEnum, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

type MedicationsArchive1Type = {
  navigation: any;
}

const MedicationsArchive1 = (props: MedicationsArchive1Type) => {
  return (
    <View style={styles.outermostView}>
      <Text style={[styles.homeLogoText, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.homeLogoSubtext, styles.addTypo]}>
        NEVER MISS A DROP.
      </Text>
      <Text style={[styles.medsMedications, styles.petdropTypo]}>Medications</Text>
      <View style={styles.medicationsArchiveChild} />
      <Text style={[styles.medsText, styles.medsTextTypo]}>{`>`}</Text>
      <Pressable onPress={() => {props.navigation.navigate("MedicationsArchive")}}>
        <Text style={[styles.switch, styles.switchTypo]}>SWITCH</Text>
      </Pressable>
      <WhiteCircle style={styles.medicationsArchiveItem} width={(width * 0.0821)} height={(height * 0.0379)} />
      <Image
        style={styles.meds1UntitledArtwork52Copy2}
        contentFit="cover"
        source={require("../assets/pink_dog_small.png")}
      />
      <DarkBlueCircle style={styles.medsSubtractIcon}/>
      <Text style={[styles.eyeDrops, styles.switchTypo]}>{`Eye drops `}</Text>
      <MedicationInfo
        eyeDropsSPARKY="Antibiotics: Blue "
        groupViewTop={(height * 0.3128)}
        rectangleViewBackgroundColor="#ffc635"
      />
      <MedicationInfo
        eyeDropsSPARKY="Heartgard: Blue"
        groupViewTop={(height * 0.4645)}
        rectangleViewBackgroundColor="#a0c66f"
      />
      <View style={[styles.meds1RectangleParent, styles.medsGroupChildLayout]}>
        <View style={[styles.petInfoGroupChild, styles.medsGroupChildLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <TopBottomBar navigation = {props.navigation} currentScreen={ScreenEnum.MedicationsArchive1}/>
    </View>
  );
};

export default MedicationsArchive1;