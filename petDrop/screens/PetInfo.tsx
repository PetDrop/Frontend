import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import TopBottomBar from "../components/TopBottomBar";
import PetCard from "../components/Pets/PetCard";
import AddNewPetButton from "../components/Pets/AddNewPetButton";
import mockData from "../data/mockData.json";
import styles from "../styles/Pets.styles";
import { ScreenEnum, logoImage } from "../GlobalStyles";

import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

const PetInfo = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
        <Text style={styles.pageTitle}>Pets</Text>
        {mockData.pets.map((pet) => (
          <>
          <PetCard key={pet.id} pet={pet} />
          <Image style={styles.petImage} src={pet.image}/>
          </>
        ))}
        <AddNewPetButton navigation={navigation} />
      </ScrollView>
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.PetInfo} />
    </View>
  );
};

export default PetInfo;
