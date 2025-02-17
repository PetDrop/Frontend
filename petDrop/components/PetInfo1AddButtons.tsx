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

export default PetInfo1AddButtons;
