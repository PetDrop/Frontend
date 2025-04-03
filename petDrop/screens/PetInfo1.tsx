import * as React from "react";
import { Dimensions, Pressable, Text, View, Image } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import AddButtons from "../components/AddPets/PetInfo1AddButtons";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import { NavigationProp } from "@react-navigation/core";
import styles from '../styles/PetInfo1.styles';
import { Account } from "../data/dataTypes";
import { useState } from "react";
import MedicationPopup from "../components/MedicationPopup";
import AddMedicationButton from "../components/AddButton";
import AddPetImage from "../components/AddImage";

const { width, height } = Dimensions.get('window');

type PetInfo1Type = {
  navigation: NavigationProp<any>;
  route: any;
}

const PetInfo1 = ({ navigation, route }: PetInfo1Type) => {
  const [popupShowing, setPopupShowing] = useState(false);

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  // all the fields for the user to give input on to add a pet
  const inputFields: string[] = ['name', 'age', 'breed', 'address', 'vet', 'vet phone'];

  return (
    <View style={styles.outermostView}>
      {/* Logo Image */}
      <View style={styles.logoImageContainer}>
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
      </View>

      {/* Page Title */}
      <Text style={[styles.petInfo1AddPet, styles.addPetTypo]}>Add Pet</Text>

      {/* Add Image Circle w/ Plus Sign */}
      <AddPetImage onPressFunction={() => {}} containerStyle={styles.addImageContainer}/>

      {/* Pet Info Input Section */}
      <Text style={[styles.petInfo1Name, styles.nameTypo]}>Pet Info</Text>
      <AddButtons inputFields={inputFields}/>

      {/* Add Medications Section */}
      <Text style={[styles.petInfo1Medications, styles.addPetTypo]}>Medications</Text>
      {/* TODO: meds list like on pets page */}
      <View style={styles.addMedicationButton}>
        <AddMedicationButton onPressFunction={() => { setPopupShowing(true) }} />
      </View>

      {/* Top Banner and Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.PetInfo1} account={account} />

      {/* Pop-up for Adding Medications */}
      <MedicationPopup isActive={popupShowing} showingFunction={setPopupShowing} pet={undefined} />
    </View>
  );
};

export default PetInfo1;