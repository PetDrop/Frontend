import { Image } from "expo-image";
import * as React from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import TopBottomBar from "../components/TopBottomBar";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Instructions.styles";
import { NavigationProp } from "@react-navigation/native";
import { emptySponsorMed, SponsorMedication } from "../data/dataTypes";
import { useEffect, useState } from "react";
import { GET_SPONSOR_MEDICATION_BY_NAME, NOTIFY_MEDICATION_ADMINISTERED, httpRequest } from "../data/endpoints";
import VideoScreen from "../components/Instructions/VideoScreen";
import HelpButton from "../components/HelpButton";
import HelpPopup from "../components/HelpPopup";
import { helpText } from "../data/helpText";
import { useAccount } from "../context/AccountContext";

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Instructions = ({ navigation, route }: Props) => {
  const [med, setMed] = useState<SponsorMedication>(emptySponsorMed);
  const [showHelp, setShowHelp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { account } = useAccount();
  const { ownerUsername, petName } = route.params || {};

  // get the sponsor med from the db
  const getMed = async () => {
    const medName = route.params?.medName;
    if (!medName) return;
    let response = await httpRequest(GET_SPONSOR_MEDICATION_BY_NAME + medName, 'GET', '');
    if (response.ok) {
      setMed(await response.json());
    }
  };

  useEffect(() => {
    getMed();
  }, []);

  const handleMedicationAdministered = async () => {
    if (!ownerUsername || isSubmitting) return;
    const medName = route.params?.medName;
    if (!medName) return;
    setIsSubmitting(true);
    try {
      const body = JSON.stringify({
        ownerUsername,
        medName,
        petName: petName || 'your pet',
        administeredByUsername: account.username || '',
      });
      const response = await httpRequest(NOTIFY_MEDICATION_ADMINISTERED, 'POST', body, false);
      if (response.ok) {
        Alert.alert('Done', 'Recipients have been notified.');
      }
    } catch (e) {
      // Silently fail - user can retry
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* I finished giving it button - only when opened from notification tap */}
        {ownerUsername && (
          <Pressable
            onPress={handleMedicationAdministered}
            style={styles.administeredButton}
            disabled={isSubmitting}
          >
            <Text style={styles.administeredButtonText}>
              {isSubmitting ? 'Sending...' : "I finished giving it to my pet"}
            </Text>
          </Pressable>
        )}

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