import * as React from "react";
import { Pressable, View, Text } from "react-native";
import { Image } from "expo-image";
import styles from '../styles/SelectMedPopup.styles';

type SelectMedPopupType = {
  close: () => void;
};


const SelectMedPopup = ({ close }: SelectMedPopupType) => {
  return (
    <View style={{ position: "absolute" }}>

      {/* opaque layer to blur background */}
      <View style={styles.opaqueBackground} />

      {/* the popup itself */}
      <View style={styles.reminderPopup}>

        {/* top blue banner */}
        <View style={styles.topBanner}>

          <Text style={styles.text}>Select Medication to View</Text>

          {/* close popup button */}
          <Pressable onPress={close}>
            <Image
              style={styles.closePopup}
              contentFit="cover"
              source={require("../assets/remove_x_white.png")}
            />
          </Pressable>

        </View>

        {/* main popup body */}
        <View style={styles.popupBody}>

        </View>
      </View>
    </View>
  );
}

export default SelectMedPopup;