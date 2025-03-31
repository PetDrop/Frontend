import * as React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import TopBottomBar from "../components/TopBottomBar";
import PetCard from "../components/Pets/PetCard";
import AddNewPetButton from "../components/Pets/AddNewPetButton";
import styles from "../styles/Pets.styles";
import { ScreenEnum, logoImage } from "../GlobalStyles";
import { NavigationProp } from "@react-navigation/native";
import { Account, Pet } from "../data/dataTypes";
import { useState } from "react";
import MedicationPopup from "../components/MedicationPopup";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const PetInfo = ({ navigation, route }: Props) => {
  const [popupShowing, setPopupShowing] = useState(false);
  const [petBeingEdited, setPetBeingEdited] = useState<Pet>(); // the pet the user is adding a medication to

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
        <Text style={styles.pageTitle}>Pets</Text>
        {account.pets.map((pet: Pet) => (
          <View key={pet.id}>
            <PetCard key={pet.id} pet={pet} onPressFunction={() => {
              setPopupShowing(true);
              setPetBeingEdited(pet);
            }} />
            <Image style={styles.petImage} src={pet.image} />
          </View>
        ))}
        <AddNewPetButton navigation={navigation} account={account} />
      </ScrollView>
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.PetInfo} account={account} />
      <MedicationPopup isActive={popupShowing} showingFunction={setPopupShowing} pet={petBeingEdited} />
    </View>
  );
};

export default PetInfo;
