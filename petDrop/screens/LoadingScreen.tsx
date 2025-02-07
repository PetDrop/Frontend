import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import { Color, FontFamily, FontSize, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
  return (
    <View style={styles.outermostView}>
      <Image
        style={styles.loadingScreenUntitledArtwork52Copy1}
        contentFit="cover"
        source={require("../assets/blue_dog_big.png")}
      />
      <BlueCircleBig style={styles.loadingScreenSubtractIcon}/>
      <Text style={[styles.loadingScreenLogoText, styles.petdropFlexBox]}>petdrop.</Text>
      <Text style={[styles.loadingScrenLogoSubtext, styles.petdropFlexBox]}>
        NEVER MISS A DROP.
      </Text>
    </View>
  );
};

export default LoadingScreen;