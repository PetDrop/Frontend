import * as React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import TopBottomBar from "../components/TopBottomBar";
import PetCard from "../components/Pets/PetCard";
import AddNewPetButton from "../components/Pets/AddNewPetButton";
import mockData from "../data/mockData.json";
import styles from "../styles/Pets.styles";
import { ScreenEnum, logoImage } from "../GlobalStyles";

import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { GET_ACCOUNT_BY_USERNAME } from "../data/endpoints";
import { Account, Pet } from "../data/dataTypes";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const PetInfo = ({ navigation, route }: Props) => {
  const [pets, setPets] = React.useState<Pet[]>([]);

  // fetch pets for this account from db
  useEffect(() => {
      try {
        // get the account of the user
        fetch(GET_ACCOUNT_BY_USERNAME + `${route.params.username}`)
        .then((response) => {
          if (response.ok) {
            // if account found, extract the pets
            response.json()
            .then((value) => {
              const account: Account = value;
              setPets(account.pets);
            })
          } else {
            console.log('unable to find account of user');
          }
        })
      } catch (error) {
        console.error(error);
      }
    }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
        <Text style={styles.pageTitle}>Pets</Text>
        {pets.map((pet: Pet) => (
          <View key={pet.id}>
            <PetCard key={pet.id} pet={pet} />
            <Image style={styles.petImage} src={pet.image}/>
          </View>
        ))}
        <AddNewPetButton navigation={navigation} username={route.params.username}/>
      </ScrollView>
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.PetInfo} username={route.params.username}/>
    </View>
  );
};

export default PetInfo;
