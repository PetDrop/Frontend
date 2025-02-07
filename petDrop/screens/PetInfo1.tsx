import * as React from "react";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import AddButtons from "../components/PetInfo1AddButtons";
import TopBottomBar from "../components/TopBottomBar";
import { FontFamily, Color, FontSize, Border, ScreenEnum, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

type PetInfo1Type = {
  navigation: any;
}

const PetInfo1 = (props: PetInfo1Type) => {
  return (
    <View style={styles.outermostView}>
      <BlueCircleBig style={styles.petInfo1SubtractIcon} width={(width * 0.3744)} height={(height * 0.173)} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.petInfo1Medications, styles.addPetTypo]}>Medications:</Text>
      <View style={[styles.petInfo1RectangleParent, styles.petInfo1GroupChildLayout]}>
        <View style={[styles.petInfoGroupChild, styles.petInfo1GroupChildLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <Text style={[styles.petInfoLogoText, styles.nameTypo]}>petdrop.</Text>
      <Text style={styles.petInfoLogoSubtext}>
        NEVER MISS A DROP.
      </Text>
      <View style={styles.petInfo1RectangleContainer}>
        <View style={[styles.petInfo1RectangleView, styles.groupChild1Layout]} />
        <View style={[styles.petInfo1GroupChild1, styles.groupChild1Layout]} />
      </View>
      <Text style={[styles.addPet, styles.addPetTypo]}>Add Pet</Text>
      <AddButtons />
      <TopBottomBar navigation = {props.navigation} currentScreen={ScreenEnum.PetInfo1}/>
    </View>
  );
};

export default PetInfo1;