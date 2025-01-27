import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

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
    top: 326,
    left: 150,
    width: 96,
    height: 128,
    position: "absolute",
  },
  subtractIcon: {
    top: 305,
    left: 120,
    width: 146,
    height: 146,
  },
  petdrop: {
    top: 449,
    left: 75,
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.jsMathCmbx10,
    width: 342,
    height: 112,
  },
  neverMissA: {
    top: 500,
    left: 104,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
  },
  loadingScreen: {
    backgroundColor: Color.colorFloralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LoadingScreen;
