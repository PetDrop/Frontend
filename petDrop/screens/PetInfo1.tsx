import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import AddButtons from "../components/AddPets/PetInfo1AddButtons";
import TopBottomBar from "../components/TopBottomBar";
import { ScreenEnum } from "../GlobalStyles";
import { NavigationProp } from "@react-navigation/core";
import styles from '../styles/PetInfo1.styles';
import { Account } from "../data/dataTypes";

const { width, height } = Dimensions.get('window');

type PetInfo1Type = {
  navigation: NavigationProp<any>;
  route: any;
}

const PetInfo1 = ({ navigation, route }: PetInfo1Type) => {
  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  return (
    <View style={styles.outermostView}>
      <BlueCircleBig style={styles.petInfo1SubtractIcon} width={(width * 0.3744)} height={(height * 0.173)} />
      <Text style={[styles.petInfo1Name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.petInfo1Medications, styles.addPetTypo]}>Medications:</Text>
      <View style={[styles.petInfo1RectangleParent, styles.petInfo1GroupChildLayout]}>
        <View style={[styles.petInfo1GroupChild, styles.petInfo1GroupChildLayout]} />
        <Text style={[styles.petInfo1Add, styles.petInfo1AddTypo]}>ADD</Text>
        <View style={styles.petInfo1RectangleGroup}>
          <View style={[styles.petInfo1GroupItem, styles.petInfo1GroupLayout]} />
          <View style={[styles.petInfo1GroupInner, styles.petInfo1GroupLayout]} />
        </View>
      </View>
      <Text style={[styles.petInfo1LogoText, styles.nameTypo]}>petdrop.</Text>
      <Text style={styles.petInfo1LogoSubtext}>
        NEVER MISS A DROP.
      </Text>
      <View style={styles.petInfo1RectangleContainer}>
        <View style={[styles.petInfo1RectangleView, styles.groupChild1Layout]} />
        <View style={[styles.petInfo1GroupChild1, styles.groupChild1Layout]} />
      </View>
      <Text style={[styles.petInfo1AddPet, styles.addPetTypo]}>Add Pet</Text>
      <AddButtons />
      <TopBottomBar navigation = {navigation} currentScreen={ScreenEnum.PetInfo1} account={account}/>
    </View>
  );
};

export default PetInfo1;