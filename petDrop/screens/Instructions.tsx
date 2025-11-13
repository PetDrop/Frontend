import { Image } from "expo-image";
import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Instructions.styles";
import { NavigationProp } from "@react-navigation/native";
import { emptySponsorMed, SponsorMedication } from "../data/dataTypes";
import { useEffect, useState } from "react";
import { GET_SPONSOR_MEDICATION_BY_NAME, httpRequest } from "../data/endpoints";
import VideoScreen from "../components/Instructions/VideoScreen";
import HelpButton from "../components/HelpButton";
import HelpPopup from "../components/HelpPopup";
import { helpText } from "../data/helpText";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Instructions = ({ navigation, route }: Props) => {
  const [med, setMed] = useState<SponsorMedication>(emptySponsorMed);
  const [showHelp, setShowHelp] = useState(false);

  // get the sponsor med from the db
  const getMed = async () => {
    let response = await httpRequest(GET_SPONSOR_MEDICATION_BY_NAME + route.params.medName, 'GET', '');
    if (response.ok) {
      setMed(await response.json());
    }
  };

  useEffect(() => {
    getMed();
  }, []);

  // container of text elements corresponding to steps in instructions
  let instructionsText: React.JSX.Element = <View></View>;
  if (med.instructions.length > 0) {
    instructionsText =
      <View style={styles.instructionsContainer}>
        {med.instructions.map((instruction: string, index: number) =>
          <Text style={styles.instructionText} key={`instruction${index}`}>{instruction}</Text>
        )}
      </View>
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />

        {/* Page Title */}
        <Text style={styles.pageTitle}>{`How to Administer \n${med.name}`}</Text>

        {/* Med Instructions */}
        {instructionsText}

        {/* Med Video */}
        <View style={styles.video}>
          {VideoScreen(med.videoLink)}
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Instructions} />

      <HelpButton onPress={() => setShowHelp(true)} />
      <HelpPopup
        isVisible={showHelp}
        helpText={helpText.Instructions}
        onClose={() => setShowHelp(false)}
      />

    </View>
  );
};

export default Instructions;