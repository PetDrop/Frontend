import * as React from "react";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import AddButtons from "../components/PetInfo1AddButtons";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border, ScreenEnum } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

type PetInfo1Type = {
  navigation: any;
}

const PetInfo1 = (props: PetInfo1Type) => {
  return (
    <View style={styles.petInfo}>
      <BlueCircleBig style={styles.subtractIcon} width={(width * 0.3744)} height={(height * 0.173)} />
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
      <TopBottomBar navigation = {props.navigation} currentScreen={ScreenEnum.PetInfo1}/>
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
    width: (width * 0.1026),
    position: "absolute",
  },
  addTypo: {
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  groupChild1Layout: {
    height: (height * 0.0083),
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: Border.br_8xs_9,
    width: (width * 0.0846),
    position: "absolute",
  },
  subtractIcon: {
    top: (height * 0.3045),
    left: (width * 0.0282),
  },
  name: {
    top: (height * 0.3128),
    left: (width * 0.4513),
    fontSize: FontSize.size_17xl,
    width: (width * 0.3026),
    height: (height * 0.0509),
  },
  medications: {
    top: (height * 0.5415),
    left: (width * 0.0538),
  },
  groupChild: {
    top: (height * 0.0012),
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.0249),
  },
  add: {
    left: (width * 0.0462),
    color: Color.colorFloralwhite,
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
    top: (height * 0.5818),
    height: (height * 0.0273),
    left: (width * 0.0564),
  },
  petdrop: {
    top: (height * 0.0972),
    left: (width * 0.0436),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  neverMissA: {
    top: (height * 0.1694),
    left: (width * 0.1128),
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
  },
  rectangleView: {
    top: (height * 0.0154),
  },
  groupChild1: {
    top: (height * 0.0154),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleContainer: {
    top: (height * 0.3709),
    left: (width * 0.1718),
    height: (height * 0.0391),
    width: (width * 0.0846),
    position: "absolute",
  },
  addPet: {
    top: (height * 0.2227),
    width: (width * 0.4641),
    left: (width * 0.0564),
  },
  petInfo: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default PetInfo1;
