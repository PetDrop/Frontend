import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PetInfo1AddButtons = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={[styles.groupChild, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_age_button.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_breed_button.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_weight_button.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_address_button.png")}
      />
      <Image
        style={[styles.groupChild1, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_vet_button.png")}
      />
      <Text style={styles.age}>{`Age: `}</Text>
      <Text style={[styles.breed, styles.vetTypo]}>Breed</Text>
      <Text style={[styles.weight, styles.vetTypo]}>Weight</Text>
      <Text style={[styles.address, styles.vetTypo]}>Address</Text>
      <Text style={[styles.vet, styles.vetTypo]}>Vet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 21,
    left: 0,
    position: "absolute",
  },
  vetTypo: {
    width: 43,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: 6,
    position: "absolute",
  },
  groupChild: {
    top: 1,
    width: 44,
  },
  groupItem: {
    top: 27,
    width: 54,
  },
  groupInner: {
    top: 55,
    width: 56,
  },
  groupIcon: {
    top: 83,
    width: 64,
  },
  groupChild1: {
    top: 111,
    width: 39,
  },
  age: {
    top: 0,
    width: 29,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: 6,
    position: "absolute",
  },
  breed: {
    top: 26,
  },
  weight: {
    top: 54,
  },
  address: {
    top: 82,
  },
  vet: {
    top: 110,
  },
  groupParent: {
    top: 307,
    left: 176,
    height: 133,
    width: 64,
    position: "absolute",
  },
});

export default PetInfo1AddButtons;
