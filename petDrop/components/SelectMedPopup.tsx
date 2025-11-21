import * as React from "react";
import { Pressable, View, Text, Dimensions } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/SelectMedPopup.styles';
import HelpButton from './HelpButton';
import HelpPopup from './HelpPopup';
import { helpText } from '../data/helpText';

const { width, height } = Dimensions.get('window');

type SelectMedPopupType = {
  close: () => void;
};


const SelectMedPopup = ({ close }: SelectMedPopupType) => {
  const [showHelp, setShowHelp] = React.useState(false);

  return (
    <View style={{ position: "absolute", zIndex: 1000, elevation: 1000 }}>

      {/* opaque layer to blur background */}
      <View style={styles.opaqueBackground} />

      {/* the popup itself */}
      <View style={styles.reminderPopup}>

        {/* top blue banner */}
        <View style={styles.topBanner}>

          <Text style={styles.text}>View Medication</Text>

          {/* close popup button */}
          <Pressable 
            onPress={close}
            style={{ position: 'absolute', top: height * 0.015, right: width * 0.025, zIndex: 20 }}
          >
            <Image
              style={styles.closePopup}
              contentFit="cover"
              source={require("../assets/remove_x_white.png")}
            />
          </Pressable>

          {/* Help button - positioned relative to topBanner */}
          <HelpButton onPress={() => setShowHelp(true)} inPopup={true} />

        </View>

        {/* main popup body */}
        <View style={styles.popupBody}>

        </View>
      </View>

      <HelpPopup
        isVisible={showHelp}
        helpText={helpText.SelectMedPopup}
        onClose={() => setShowHelp(false)}
      />
    </View>
  );
}

export default SelectMedPopup;