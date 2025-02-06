import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
  return (
    <View style={styles.loadingScreen}>
      <Image
        style={styles.untitledArtwork52Copy1}
        contentFit="cover"
        source={require("../assets/blue_dog_big.png")}
      />
      <BlueCircleBig style={styles.subtractIcon}/>
      <Text style={[styles.petdrop, styles.petdropFlexBox]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.petdropFlexBox]}>
        NEVER MISS A DROP.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  petdropFlexBox: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  untitledArtwork52Copy1: {
    top: (height * 0.3863),
    left: (width * 0.3846),
    width: (width * 0.2462),
    height: (height * 0.1517),
    position: "absolute",
  },
  subtractIcon: {
    top: (height * 0.3614),
    left: (width * 0.3077),
    width: (width * 0.3744),
    height: (height * 0.173),
  },
  petdrop: {
    top: (height * 0.532),
    left: (width * 0.1923),
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.jsMathCmbx10,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  neverMissA: {
    top: (height * 0.6043),
    left: (width * 0.2564),
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
  },
  loadingScreen: {
    backgroundColor: Color.colorFloralwhite,
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
  },
});

export default LoadingScreen;
