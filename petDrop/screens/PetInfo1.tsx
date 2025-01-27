import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import AddButtons from "../components/PetInfo1AddButtons";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

type PetInfo1Type = {
  navigation: any;
}

const PetInfo1 = (props: PetInfo1Type) => {
  return (
    <View style={styles.petInfo}>
      <BlueCircleBig style={styles.subtractIcon} width={146} height={146} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.medications, styles.addPetTypo]}>Medications:</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <Text style={[styles.petdrop, styles.nameTypo]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.addTypo]}>
        NEVER MISS A DROP.
      </Text>
      <View style={styles.rectangleContainer}>
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Text style={[styles.addPet, styles.addPetTypo]}>Add Pet</Text>
      <AddButtons />
      <TopBottomBar navigation = {props.navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    color: Color.colorCornflowerblue,
  },
  addPetTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  groupChildLayout: {
    width: 40,
    position: "absolute",
  },
  addTypo: {
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
  groupChild1Layout: {
    height: 7,
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: Border.br_8xs_9,
    width: 33,
    position: "absolute",
  },
  subtractIcon: {},
  name: {
    top: 264,
    left: 176,
    fontSize: FontSize.size_17xl,
    width: 118,
    height: 43,
  },
  medications: {
    top: 457,
    left: 21,
  },
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
    color: Color.colorFloralwhite,
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
    top: 491,
    height: 23,
    left: 22,
  },
  petdrop: {
    top: 82,
    left: 17,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
  },
  neverMissA: {
    top: 133,
    left: 44,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
  },
  rectangleView: {
    top: 13,
    left: 0,
  },
  groupChild1: {
    top: 33,
    left: 13,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleContainer: {
    top: 313,
    left: 67,
    height: 33,
    width: 33,
    position: "absolute",
  },
  addPet: {
    top: 188,
    width: 181,
    left: 22,
  },
  petInfo: {
    flex: 1,
    width: "100%",
    height: 1032,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default PetInfo1;
