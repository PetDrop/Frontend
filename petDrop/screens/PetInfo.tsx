import * as React from "react";
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
  route: any;
}

const PetInfo = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
        <Text style={styles.pageTitle}>Pets</Text>
        {mockData.pets.map((pet: any) => (
          <View key={pet.id}>
            <PetCard key={pet.id} pet={pet} />
            <Image style={styles.petImage} src={pet.image}/>
          </View>
        ))}
        <AddNewPetButton navigation={navigation} />
      </ScrollView>
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.PetInfo} username={route.params.username}/>
    </View>
  );
};

export default PetInfo;
