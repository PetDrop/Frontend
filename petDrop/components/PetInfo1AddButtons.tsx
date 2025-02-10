import * as React from "react";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const PetInfo1AddButtons = () => {
  return (
    <View style={styles.newPetButtonGroupParent}>
      <Image
        style={[styles.newPetButtonGroupChild, styles.newPetButtonGroupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_age_button.png")}
      />
      <Image
        style={[styles.newPetButtonGroupItem, styles.newPetButtonGroupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_breed_button.png")}
      />
      <Image
        style={[styles.newPetButtonGroupInner, styles.newPetButtonGroupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_weight_button.png")}
      />
      <Image
        style={[styles.newPetButtonGroupIcon, styles.newPetButtonGroupChildPosition]}
        contentFit="cover"
        source={require("../assets/add_address_button.png")}
      />
      <Image
        style={[styles.newPetButtonGroupChild1, styles.newPetButtonGroupChildPosition]}
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

// const styles = StyleSheet.create({
//   groupChildPosition: {
//     height: (height * 0.0249),
//     position: "absolute",
//   },
//   vetTypo: {
//     width: (width * 0.1103),
//     textAlign: "left",
//     color: Color.colorFloralwhite,
//     fontFamily: FontFamily.koulenRegular,
//     fontSize: FontSize.size_smi,
//     left: (width * 0.0154),
//     position: "absolute",
//   },
//   groupChild: {
//     top: (height * 0.0012),
//     width: (width * 0.1128),
//   },
//   groupItem: {
//     top: (height * 0.032),
//     width: (width * 0.1385),
//   },
//   groupInner: {
//     top: (height * 0.0652),
//     width: (width * 0.1436),
//   },
//   groupIcon: {
//     top: (height * 0.0983),
//     width: (width * 0.1641),
//   },
//   groupChild1: {
//     top: (height * 0.1315),
//     width: (width * 0.1),
//   },
//   age: {
//     width: (width * 0.0744),
//     textAlign: "left",
//     color: Color.colorFloralwhite,
//     fontFamily: FontFamily.koulenRegular,
//     fontSize: FontSize.size_smi,
//     left: (width * 0.0154),
//     position: "absolute",
//   },
//   breed: {
//     top: (height * 0.0308),
//   },
//   weight: {
//     top: (height * 0.064),
//   },
//   address: {
//     top: (height * 0.0972),
//   },
//   vet: {
//     top: (height * 0.1308),
//   },
//   groupParent: {
//     top: (height * 0.3637),
//     left: (width * 0.4513),
//     height: (height * 0.1576),
//     width: (width * 0.1641),
//     position: "absolute",
//   },
// });

export default PetInfo1AddButtons;
