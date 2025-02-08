/* This file will eventually be deleted, since it's essentially a duplicate of MedicationsArchive.tsx */

import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import WhiteCircle from "../assets/white_circle.svg";
import DarkBlueCircle from "../assets/dark_blue_circle.svg";
import MedicationInfo from "../components/MedicationInfo2";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

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
      <WhiteCircle style={styles.medicationsArchiveItem} width={(width * 0.0821)} height={(height * 0.0379)} />
      <Image
        style={styles.untitledArtwork52Copy2}
        contentFit="cover"
        source={require("../assets/pink_dog_small.png")}
      />
      <DarkBlueCircle style={styles.subtractIcon}/>
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
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.innerGroupChildLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <TopBottomBar navigation = {props.navigation}/>
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
    width: (width * 0.1026),
    position: "absolute",
  },
  innerGroupChildLayout: {
    width: (width * 0.1),
    position: "absolute",
  },
  groupLayout: {
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  petdrop: {
    top: (height * 0.0972),
    left: (width * 0.0641),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  neverMissA: {
    top: (height * 0.1694),
    left: (width * 0.1333),
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorCornflowerblue,
  },
  medications: {
    top: (height * 0.2334),
    left: (width * 0.0872),
    fontSize: FontSize.size_5xl,
    width: (width * 0.4641),
  },
  medicationsArchiveChild: {
    top: (height * 0.2239),
    left: (width * 0.641),
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_100,
    width: (width * 0.3),
    height: (height * 0.0498),
    position: "absolute",
  },
  text: {
    top: (height * 0.2334),
    left: (width * 0.8923),
    fontSize: FontSize.size_base,
    color: Color.colorCornflowerblue,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  switch: {
    top: (height * 0.2287),
    left: (width * 0.7513),
    fontSize: FontSize.size_xl,
  },
  medicationsArchiveItem: {
    top: (height * 0.2299),
    left: (width * 0.6564),
    position: "absolute",
  },
  untitledArtwork52Copy2: {
    top: (height * 0.2346),
    left: (width * 0.6692),
    width: (width * 0.059),
    height: (height * 0.0355),
    position: "absolute",
  },
  subtractIcon: {
    top: (height * 0.2287),
    left: (width * 0.6538),
    width: (width * 0.872),
    height: (height * 0.403),
  },
  eyeDrops: {
    top: (height * 0.5154),
    left: (width * 0.1718),
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.0249),
  },
  add: {
    left: (width * 0.0436),
    top: (height * -0.001),
    color: Color.colorFloralwhite
  },
  groupItem: {
    top: (height * 0.0047),
  },
  groupInner: {
    top: (height * 0.0047),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleGroup: {
    top: (height * 0.0071),
    left: (width * 0.0077),
    height: (height * 0.0118),
    width: (width * 0.0256),
    position: "absolute",
  },
  rectangleParent: {
    top: (height * 0.6197),
    left: (width * 0.1564),
    height: (height * 0.273),
  },
  medicationsArchive: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default MedicationsArchive1;
