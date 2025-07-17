import { Image } from "expo-image";
import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Instructions.styles";

import { NavigationProp } from "@react-navigation/native";
import { Account, Medication as SponsorMedication } from "../data/dataTypes";
import { useEffect, useState } from "react";
import { httpRequest } from "../data/endpoints";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Instructions = ({ navigation, route }: Props) => {
  const [med, setMed] = useState<SponsorMedication>();

  // store the user's account info to avoid typing "route.params.account" repeatedly
  const account: Account = route.params.account;

  const getMed = async () => {
    let response =  await httpRequest('', '', ''); // TODO: add in parameters
    if (response.ok) {
      setMed(await response.json());
    }
  };

  useEffect(() => {
    getMed();
  }, []);

  // TODO: initialize text components for instructions

  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
        {/* Logo */}
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />

        {/* Page Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>{`How to administer ${med?.name}`}</Text>
        </View>

        {/* Med Instructions */}
        {/* TODO */}

        {/* Med Video */}
        {/* TODO */}

      {/* </ScrollView> */}

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Instructions} account={account} />

    </View>
  );
};

export default Instructions;