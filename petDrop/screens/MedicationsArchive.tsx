import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Ellipse5 from "../assets/ellipse-5.svg";
import Subtract2 from "../assets/subtract2.svg";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent1 from "../components/GroupComponent1";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MedicationsArchive = () => {
  return (
    <View style={styles.medicationsArchive}>
      <View style={styles.medicationsArchiveChild} />
      <Text style={[styles.petdrop, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.textTypo]}>
        NEVER MISS A DROP.
      </Text>
      <Text style={[styles.medications, styles.petdropTypo]}>Medications</Text>
      <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
      <Text style={[styles.switch, styles.textTypo]}>SWITCH</Text>
      <Ellipse5 style={styles.medicationsArchiveItem} width={32} height={32} />
      <Image
        style={styles.untitledArtwork52Copy3}
        contentFit="cover"
        source={require("../assets/untitled-artwork-52-copy-3.png")}
      />
      <Subtract2 style={styles.subtractIcon} width={34} height={34} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <GroupComponent3 />
      <Text style={[styles.petSparkyDates, styles.addTypo]}>{`Pet: Sparky
Dates: Sept 19-23
Drug:
Diagnosis: 
Location on body: 
APPLICATION: 
Vet Notes: 
R/l Eye: right/left/both
Notifications: 6am + 6pm
Message: “2 drops”
Other:`}</Text>
      <GroupComponent1 groupViewLeft={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  petdropTypo: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  groupChildLayout: {
    width: 40,
    position: "absolute",
  },
  addTypo: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 2,
    borderRadius: Border.br_10xs,
    width: 10,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
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
  petdrop: {
    top: 82,
    left: 25,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
  },
  neverMissA: {
    top: 133,
    left: 52,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
  },
  medications: {
    top: 197,
    left: 34,
    fontSize: FontSize.size_5xl,
    width: 181,
  },
  text: {
    top: 207,
    left: 367,
    fontSize: FontSize.size_base,
    transform: [
      {
        rotate: "89.4deg",
      },
    ],
  },
  switch: {
    top: 193,
    left: 293,
    fontSize: FontSize.size_xl,
  },
  medicationsArchiveItem: {
    top: 194,
    left: 256,
    position: "absolute",
  },
  untitledArtwork52Copy3: {
    top: 198,
    left: 261,
    width: 23,
    height: 30,
    position: "absolute",
  },
  subtractIcon: {},
  groupChild: {
    top: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightskyblue,
    height: 21,
    left: 0,
  },
  add: {
    top: 0,
    left: 18,
  },
  groupItem: {
    top: 4,
    left: 0,
  },
  groupInner: {
    top: 10,
    left: 4,
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
    top: 675,
    left: 61,
    height: 23,
  },
  petSparkyDates: {
    top: 307,
    left: 73,
    lineHeight: 30,
    width: 122,
    height: 365,
  },
  medicationsArchive: {
    flex: 1,
    width: "100%",
    height: 2080,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default MedicationsArchive;
