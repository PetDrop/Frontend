/* This file will eventually be deleted, since it's essentially a duplicate of MedicationsArchive.tsx */

import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import WhiteCircle from "../assets/white_circle.svg";
import DarkBlueCircle from "../assets/dark_blue_circle.svg";
import MedicationInfo from "../components/MedicationInfo2";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

type MedicationsArchive1Type = {
  navigation: any;
}

const MedicationsArchive1 = (props: MedicationsArchive1Type) => {
  return (
    <View style={styles.medicationsArchive}>
      <Text style={[styles.petdrop, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.addTypo]}>
        NEVER MISS A DROP.
      </Text>
      <Text style={[styles.medications, styles.petdropTypo]}>Medications</Text>
      <View style={styles.medicationsArchiveChild} />
      <Text style={[styles.text, styles.addTypo]}>{`>`}</Text>
      <Pressable onPress={() => {props.navigation.navigate("MedicationsArchive")}}>
        <Text style={[styles.switch, styles.switchTypo]}>SWITCH</Text>
      </Pressable>
      <WhiteCircle style={styles.medicationsArchiveItem} width={32} height={32} />
      <Image
        style={styles.untitledArtwork52Copy2}
        contentFit="cover"
        source={require("../assets/pink_dog_small.png")}
      />
      <DarkBlueCircle style={styles.subtractIcon}/>
      <Text style={[styles.eyeDrops, styles.switchTypo]}>{`Eye drops `}</Text>
      <MedicationInfo
        eyeDropsSPARKY="Antibiotics: Blue "
        groupViewTop={264}
        rectangleViewBackgroundColor="#ffc635"
      />
      <MedicationInfo
        eyeDropsSPARKY="Heartgard: Blue"
        groupViewTop={392}
        rectangleViewBackgroundColor="#a0c66f"
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <TopBottomBar groupViewLeft={-1} navigation = {props.navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  petdropTypo: {
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  addTypo: {
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    position: "absolute",
  },
  switchTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  groupChildLayout: {
    width: 40,
    position: "absolute",
  },
  groupLayout: {
    height: 2,
    borderRadius: Border.br_10xs,
    width: 10,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  petdrop: {
    top: 82,
    left: 25,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
  },
  neverMissA: {
    top: 143,
    left: 52,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorCornflowerblue,
  },
  medications: {
    top: 197,
    left: 34,
    fontSize: FontSize.size_5xl,
    width: 181,
  },
  medicationsArchiveChild: {
    top: 189,
    left: 250,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 117,
    height: 42,
    position: "absolute",
  },
  text: {
    top: 197,
    left: 348,
    fontSize: FontSize.size_base,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    color: Color.colorCornflowerblue,
  },
  switch: {
    top: 193,
    left: 293,
  },
  medicationsArchiveItem: {
    top: 194,
    left: 256,
    position: "absolute",
  },
  untitledArtwork52Copy2: {
    top: 198,
    left: 261,
    width: 23,
    height: 30,
    position: "absolute",
  },
  subtractIcon: {
    top: 193,
    left: 255,
    width: 34,
    height: 34,
  },
  eyeDrops: {
    top: 435,
    left: 67,
  },
  groupChild: {
    top: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    height: 21,
    left: 0,
  },
  add: {
    top: 0,
    left: 18,
    color: Color.colorFloralwhite,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
  },
  groupItem: {
    top: 4,
    left: 0,
  },
  groupInner: {
    top: 4,
    left: 0,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleGroup: {
    top: 6,
    left: 3,
    height: 10,
    width: 10,
    position: "absolute",
  },
  rectangleParent: {
    top: 523,
    left: 66,
    height: 23,
  },
  medicationsArchive: {
    flex: 1,
    width: "100%",
    height: 2080,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default MedicationsArchive1;
