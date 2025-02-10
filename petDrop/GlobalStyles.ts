import { StyleSheet, Dimensions } from "react-native";

/* fonts */
export const FontFamily = {
  juaRegular: "Jua-Regular",
  koulenRegular: "Koulen-Regular",
  jsMathCmbx10: "jsMath-cmbx10",
};
/* font sizes */
export const FontSize = {
  size_xs: 12,
  size_smi: 13,
  size_mini: 15,
  size_base: 16,
  size_lg: 18,
  size_xl: 20,
  size_5xl: 24,
  size_17xl: 36,
  size_45xl: 64,
};
/* Colors */
export const Color = {
  colorFloralwhite: "#fffcf1",
  colorCornflowerblue: "#67a9fb",
  colorLightskyblue: "#add2ff",
  colorWhite: "#fff",
  colorGainsboro_100: "#d9d9d9",
  colorGainsboro_200: "rgba(217, 217, 217, 0.5)",
  colorDarkslateblue: "#124783",
  colorDarkkhaki: "#a0c66f",
  colorGoldenrod: "#ffc635",
  colorFirebrick: "#ae2828",
};
/* border radiuses */
export const Border = {
  br_12xs: 1,
  br_11xs: 2,
  br_10xs: 3,
  br_10xs_5: 3,
  br_9xs: 4,
  br_8xs_9: 5,
  br_7xs: 6,
  br_3xs: 10,
  br_sm: 14,
  br_mini: 15,
  br_xl: 20,
  br_2xl: 21,
  br_12xl: 31,
};
/* screen enum */
export enum ScreenEnum {
  Login = 0,
  Login1 = 1, // will be replaced by signup page
  Home = 2,
  PetInfo = 3,
  PetInfo1 = 4, //new pet page
  Reminders = 5,
  MedicationsArchive = 6,
  MedicationsArchive1 = 7, //will be deleted (2nd animal on same screen)
  LoadingScreen = 8,
};


/* global stylesheet */
const { width, height } = Dimensions.get('window');

/* 
*  keep in mind that some styles are duplicates between screens,
*  so a section for a particular screen may not have a style that
*  it uses. All this should eventually be made less jank
*/
export const styles = StyleSheet.create({
  // BEGIN SCREENS
  // begin home
  homePosition: {
    width: (width * 0.8897),
    left: (width * 0.0538),
    top: (height * 0.2583),
  },
  homeItemBg: {
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  textTypo5: {
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  sLayout: {
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
  },
  textTypo4: {
    left: (width * 0.1154),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo3: {
    top: (height * 0.6268),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo2: {
    left: (width * 0.241),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo1: {
    left: (width * 0.3564),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textPosition: {
    left: (width * 0.4821),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  homeTextTypo: {
    left: (width * 0.859),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  tTypo: {
    width: (width * 0.0333),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  petdropClr: {
    color: Color.colorCornflowerblue,
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    height: (height * 0.0249),
    width: (width * 0.0538),
    left: (width * 0.1051),
    position: "absolute",
  },
  homeChildLayout: {
    height: (height * 0.0071),
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  homeChildPosition: {
    left: (width * 0.0974),
    height: (height * 0.0071),
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  homeGroupLayout: {
    height: (height * 0.0024),
    width: (width * 0.0256),
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  hiTypo: {
    height: (height * 0.032),
    top: (height * 0.2263),
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  homeGroupPosition: {
    top: (height * 0.0047),
  },
  homeChild: {
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.4111),
    position: "absolute",
  },
  homeItem: {
    borderTopLeftRadius: Border.br_12xl,
    borderTopRightRadius: Border.br_12xl,
    height: (height * 0.0569),
    width: (width * 0.8897),
    left: (width * 0.0538),
    top: (height * 0.2583),
  },
  september: {
    top: (height * 0.2773),
    left: (width * 0.1026),
    fontSize: FontSize.size_5xl,
    color: Color.colorFloralwhite,
  },
  s: {
    width: (width * 0.0282),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.6318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    left: (width * 0.1051),
  },
  homeText: {
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text1: {
    top: (height * 0.4419),
    fontSize: FontSize.size_xs,
  },
  text2: {
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
    left: (width * 0.1051),
  },
  text3: {
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
    left: (width * 0.1051),
  },
  text4: {
    left: (width * 0.1051),
  },
  text5: {
    top: (height * 0.3803),
  },
  text6: {
    top: (height * 0.4419),
  },
  text7: {
    left: (width * 0.2308),
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
  },
  text8: {
    left: (width * 0.2308),
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
  },
  text9: {
    left: (width * 0.2308),
  },
  text10: {
    left: (width * 0.3667),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text11: {
    top: (height * 0.4419),
  },
  text12: {
    top: (height * 0.5036),
  },
  text13: {
    top: (height * 0.5652),
  },
  text14: {
    left: (width * 0.4923),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text15: {
    top: (height * 0.4419),
    fontSize: FontSize.size_xs,
  },
  text16: {
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
  },
  text17: {
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
  },
  text18: {
    left: (width * 0.6197),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text19: {
    left: (width * 0.6077),
    top: (height * 0.4419),
    fontSize: FontSize.size_xs,
  },
  text20: {
    left: (width * 0.6077),
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
  },
  text21: {
    left: (width * 0.6077),
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
  },
  text22: {
    left: (width * 0.7436),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text23: {
    left: (width * 0.7333),
    top: (height * 0.4419),
    fontSize: FontSize.size_xs,
  },
  text24: {
    left: (width * 0.7333),
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
  },
  text25: {
    left: (width * 0.7333),
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
  },
  text26: {
    left: (width * 0.8692),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text27: {
    top: (height * 0.4419),
  },
  text28: {
    top: (height * 0.5036),
  },
  text29: {
    top: (height * 0.5652),
  },
  s1: {
    left: (width * 0.8667),
    width: (width * 0.0282),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  m: {
    left: (width * 0.2231),
    width: (width * 0.0462),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  t: {
    left: (width * 0.359),
  },
  w: {
    width: (width * 0.0513),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
  },
  t1: {
    left: (width * 0.6231),
  },
  f: {
    left: (width * 0.7462),
    width: (width * 0.0308),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  eyeDropsRed: {
    top: (height * 0.7429),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: (width * 0.1821),
  },
  antibioticsBlueBottle: {
    top: (height * 0.7832),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: (width * 0.1821),
  },
  heartgardBlackBox: {
    top: (height * 0.8235),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: (width * 0.1821),
  },
  dayOutline: {
    top: (height * 0.4953),
    left: (width * 0.5897),
  },
  homeInner: {
    top: (height * 0.7441),
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_7xs,
    width: (width * 0.0538),
  },
  homeRectangleView: {
    top: (height * 0.7844),
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_7xs,
    width: (width * 0.0538),
  },
  homeChild1: {
    top: (height * 0.8246),
    backgroundColor: Color.colorDarkkhaki,
    borderRadius: Border.br_7xs,
    width: (width * 0.0538),
  },
  homeChild2: {
    top: (height * 0.532),
    width: (width * 0.2872),
    backgroundColor: Color.colorFirebrick,
    left: (width * 0.6077),
  },
  homeChild3: {
    top: (height * 0.4088),
    width: (width * 0.4051),
    backgroundColor: Color.colorDarkkhaki,
    left: (width * 0.2308),
  },
  homeChild4: {
    top: (height * 0.5427),
    width: (width * 0.1615),
    backgroundColor: Color.colorGoldenrod,
    left: (width * 0.7333),
  },
  homeChild5: {
    top: (height * 0.5972),
    width: (width * 0.0436),
    backgroundColor: Color.colorGoldenrod,
  },
  homeChild6: {
    top: (height * 0.5865),
    width: (width * 0.1692),
    backgroundColor: Color.colorFirebrick,
  },
  homeGroupChild: {
    borderRadius: 11,
    height: (height * 0.0249),
    width: (width * 0.0538),
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  hi: {
    width: (width * 0.1026),
    left: (width * 0.1051),
  },
  jane: {
    left: (width * 0.1923),
    width: (width * 0.2026),
  },
  homeLogoText: {
    top: (height * 0.0972),
    left: (width * 0.0641),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  homeLogoSubtext: {
    top: (height * 0.1694),
    left: (width * 0.1333),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  homeGroupIcon: {
    top: (height * 0.2737),
    left: (width * 0.8385),
    position: "absolute",
  },
  homeGroupChild1: {
    borderRadius: 17,
    width: (width * 0.3513),
    height: (height * 0.0403),
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  homeMedications: {
    left: (width * 0.0385),
    width: (width * 0.3821),
    height: (height * 0.0391),
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  homeRectangleContainer: {
    top: (height * 0.6896),
    width: (width * 0.4205),
    height: (height * 0.045),
    left: (width * 0.1051),
    position: "absolute",
  },
  outermostView: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
  // end home
  // begin login
  container: {
    flex: 1,
    backgroundColor: Color.colorFloralwhite,
  },
  scrollContainer: {
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: height * 0.025,
  },
  blueCircle: {
      justifyContent: 'center',
  },
  dogImage: {
      top: height * 0.17,
      left: width * 0.070,
      justifyContent: 'center',
      width: width * 0.2462,
      height: height * 0.1517,
  },
  loginSignupText: {
      fontSize: 45,
      color: Color.colorCornflowerblue,
      fontFamily: FontFamily.jsMathCmbx10,
      textAlign: 'center',
      marginTop: height * 0.02,
  },
  blueContainer: {
    width: width * 0.9, // Slightly smaller than full width
    minHeight: height * 0.3, // Enough space for input fields later
    backgroundColor: Color.colorLightskyblue, // Match the theme
    borderRadius: Border.br_12xl, // Rounded edges
    marginTop: height * 0.01, // Space between dog image and input fields
    alignSelf: 'stretch', // Ensures it takes the full width of parent
    flexGrow: 0.4, // Allows it to expand dynamically
    marginLeft: width * 0.05, // Center the container
  },
  inputLabel: {
      fontSize: 18,
      color: Color.colorDarkslateblue,
      fontFamily: FontFamily.koulenRegular,
      marginTop: height * 0.035,
      marginLeft: width * 0.065,
  },
  inputField: {
      width: width * 0.775,
      height: height * 0.06,
      borderRadius: Border.br_sm,
      backgroundColor: Color.colorFloralwhite,
      paddingHorizontal: 10,
      fontSize: 16,
      color: Color.colorDarkslateblue,
      marginBottom: height * -0.03, // Space between fields
      marginLeft: width * 0.065,
  },
  /* Checkbox */
  loginCheckboxContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: height * 0.05,
  },
  checkbox: {
      width: width * 0.05,
      height: width * 0.05,
      borderWidth: 2,
      borderColor: Color.colorDarkslateblue,
      borderRadius: 4,
      marginRight: width * 0.03,
  },
  checkboxChecked: {
      backgroundColor: Color.colorCornflowerblue, // Change when checked
  },
  checkboxText: {
      fontSize: 16,
      color: Color.colorDarkslateblue,
      fontFamily: FontFamily.koulenRegular,
  },
  /* Forgot Password */
  forgotPassword: {
      fontSize: 16,
      color: Color.colorDarkslateblue,
      fontFamily: FontFamily.koulenRegular,
      textAlign: 'center',
      marginTop: height * 0.015,
  },
  /* Button Row */
  buttonRow: {
      flexDirection: 'row', // Align buttons horizontally
      justifyContent: 'space-between', // Space between buttons
      width: width * 0.75, // Keeps buttons from being too wide
      marginTop: height * 0.03, // Space below blue container
  },
  button: {
      width: width * 0.35, // Rectangular shape
      height: height * 0.06, // Not too large
      backgroundColor: Color.colorLightskyblue, // Matching theme
      borderRadius: Border.br_sm,
      justifyContent: 'center',
      alignItems: 'center',
  },
  loginButtonText: {
      fontSize: 18,
      color: 'black',
      fontFamily: FontFamily.koulenRegular,
  },
  /* Slogan Image */
  sloganImage: {
    width: width * 0.5, // Proportional width
    height: height * 0.1, // Proportional height
    resizeMode: 'contain', // Ensures the image scales correctly
    marginTop: height * 0.02, // Space below the buttons
    alignSelf: 'flex-start', 
    marginLeft: width * 0.05, 
},
  // end login
  // begin signup
  /* Checkbox Styles */
  Checkboxes: {
      marginTop: height * 0.03,
      marginBottom: height * 0.02,
  },
  signupCheckboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: height * 0.015,
      marginLeft: width * 0.065,
      width: width * 0.475,
  },
  // end signup
  // begin petinfo
  newPetPressable: {
    position: "absolute",
  },
  untitledLayout: {
    height: (height * 0.1517),
    width: (width * 0.2462),
    left: (width * 0.1),
    position: "absolute",
  },
  blueTypo1: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  breedTypo: {
    width: (width * 0.3872),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    left: (width * 0.4513),
    position: "absolute",
  },
  medicationsTypo: {
    left: (width * 0.0538),
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  blueTypo: {
    left: (width * 0.1333),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  petLayout: {
    height: (height * 0.0249),
    width: (width * 0.0538),
    borderRadius: Border.br_7xs,
    left: (width * 0.0564),
    position: "absolute",
  },
  rectangleLayout: {
    height: (height * 0.0273),
    width: (width * 0.1026),
    left: (width * 0.0564),
    position: "absolute",
  },
  addPosition: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    position: "absolute",
  },
  petInfoGroupPosition: {
    top: (height * 0.0047),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  petChildLayout: {
    height: (height * 0.0071),
    width: (width * 0.8846),
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorLightskyblue,
    left: (width * 0.0564),
    position: "absolute",
  },
  groupParentPosition: {
    top: (height * 1.1813),
    position: "absolute",
  },
  petInfoGroupChildLayout: {
    height: (height * 0.0036),
    width: (width * 0.0436),
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  groupIconLayout: {
    height: (height * 0.0344),
    width: (width * 0.0744),
    left: (width * 0.8744),
    position: "absolute",
  },
  petInfoUntitledArtwork52Copy1: {
    top: (height * 0.2488),
  },
  subtractIcon1: {
    top: (height * 0.2251),
    left: (width * 0.0256),
  },
  subtractIcon2: {
    top: (height * 0.5095),
    left: (width * 0.0256),
  },
  sparky: {
    top: (height * 0.2251),
    fontSize: FontSize.size_17xl,
    left: (width * 0.4513),
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  age8Breed: {
    top: (height * 0.2808),
  },
  petInfoUntitledArtwork52Copy2: {
    top: (height * 0.7073),
  },
  blue: {
    top: (height * 0.6836),
    fontSize: FontSize.size_17xl,
    left: (width * 0.4513),
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  age12Breed: {
    top: (height * 0.7393),
  },
  petInfoMedications: {
    top: (height * 0.4467),
    fontSize: FontSize.size_5xl,
  },
  medications1: {
    top: (height * 0.9052),
    fontSize: FontSize.size_5xl,
  },
  petInfoEyeDropsSparky: {
    top: (height * 0.4905),
  },
  antibioticsBlueBlue: {
    top: (height * 0.9502),
  },
  heartgardBlueBlack: {
    top: (height * 0.9905),
  },
  petInfoChild: {
    top: (height * 0.4917),
    backgroundColor: Color.colorFirebrick,
  },
  petInfoItem: {
    top: (height * 0.9514),
    backgroundColor: Color.colorGoldenrod,
  },
  petInfoInner: {
    top: (height * 0.9917),
    backgroundColor: Color.colorDarkkhaki,
  },
  petInfoGroupChild: {
    top: (height * 0.0012),
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    width: (width * 0.1026),
    height: (height * 0.0249),
    position: "absolute",
  },
  add: {
    left: (width * 0.046),
    top: (height * -0.0006),
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
  },
  petInfoGroupItem: {
    top: (height * 0.0047),
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  petInfoRectangleGroup: {
    top: (height * 0.0071),
    left: (width * 0.0077),
    height: (height * 0.0118),
    width: (width * 0.0256),
    position: "absolute",
  },
  petInfoRectangleParent: {
    top: (height * 0.532),
  },
  petInfoGroupChild2: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  petInfoRectangleContainer: {
    top: (height * 1.0332),
  },
  petInfoChild1: {
    top: (height * 0.6161),
  },
  petInfoChild2: {
    top: (height * 1.1173),
  },
  petInfoChild3: {
    left: (width * 0.1538),
    borderRadius: 21,
    width: (width * 0.6897),
    height: (height * 0.0486),
    backgroundColor: Color.colorCornflowerblue,
  },
  petInfoGroupChild3: {
    top: (height * 0.0083),
  },
  petInfoGroupChild4: {
    top: (height * 0.0083),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleParent1: {
    top: (height * 0.0142),
    height: (height * 0.0201),
    width: (width * 0.0436),
    position: "absolute",
  },
  addNewPet: {
    left: (width * 0.0821),
    fontSize: FontSize.size_5xl,
  },
  petInfoGroupParent: {
    left: (width * 0.3128),
    width: (width * 0.3718),
    height: (height * 0.0509),
  },
  petInfoGroupIcon: {
    top: (height * 0.218),
  },
  petInfoChild4: {
    top: (height * 0.6706),
  },
  petInfoLogoText: {
    top: (height * 0.0972),
    left: (width * 0.0436),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  petInfoLogoSubtext: {
    top: (height * 0.1694),
    left: (width * 0.1128),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  // end petinfo
  // begin petinfo1
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    color: Color.colorCornflowerblue,
  },
  addPetTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  groupChild1Layout: {
    height: (height * 0.0083),
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: Border.br_8xs_9,
    width: (width * 0.0846),
    position: "absolute",
  },
  petInfo1GroupChildLayout: {
    width: (width * 0.1026),
    position: "absolute",
  },
  petInfo1SubtractIcon: {
    top: (height * 0.3045),
    left: (width * 0.0282),
  },
  name: {
    top: (height * 0.3128),
    left: (width * 0.4513),
    fontSize: FontSize.size_17xl,
    width: (width * 0.3026),
    height: (height * 0.0509),
  },
  petInfo1Medications: {
    top: (height * 0.5415),
    left: (width * 0.0538),
  },
  petInfo1RectangleParent: {
    top: (height * 0.5818),
    height: (height * 0.0273),
    left: (width * 0.0564),
  },
  petInfo1RectangleView: {
    top: (height * 0.0154),
  },
  petInfo1GroupChild1: {
    top: (height * 0.0154),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  petInfo1RectangleContainer: {
    top: (height * 0.3709),
    left: (width * 0.1718),
    height: (height * 0.0391),
    width: (width * 0.0846),
    position: "absolute",
  },
  addPet: {
    top: (height * 0.2227),
    width: (width * 0.4641),
    left: (width * 0.0564),
  },
  // end petinfo1
  // begin reminders
  petdropTypo: {
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    color: Color.colorCornflowerblue,
  },
  datesTypo: {
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  remindersGroupChildLayout: {
    width: (width * 0.1026),
    position: "absolute",
  },
  reminders1: {
    top: (height * 0.2322),
    left: (width * 0.0872),
    fontSize: FontSize.size_5xl,
  },
  remindersDatesSept1923: {
    top: (height * 1.0995),
    left: (width * 0.241),
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  datesSept2022: {
    top: (height * 1.2583),
    left: (width * 0.241),
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  datesSept25: {
    top: (height * 1.4656),
    left: (width * 0.241),
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  remindersGroupInner: {
    top: (height * 0.0047),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  remindersRectangleParent: {
    top: (height * 0.7322),
    left: (width * 0.1641),
    height: (height * 0.0273),
  },
  remindersLogoText: {
    top: (height * 0.0972),
    left: (width * 0.0487),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  remindersLogoSubtext: {
    top: (height * 0.1694),
    left: (width * 0.1179),
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_smi,
  },
  // end reminders
  // begin medications
  medsTextTypo: {
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  medsGroupChildLayout: {
    width: (width * 0.1),
    position: "absolute",
  },
  addTypo: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  medicationsArchiveChild: {
    top: (height * 0.2239),
    left: (width * 0.641),
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_100,
    width: (width * 0.3),
    height: (height * 0.0498),
    position: "absolute",
  },
  medsMedications: {
    top: (height * 0.2334),
    left: (width * 0.0872),
    fontSize: FontSize.size_5xl,
    width: (width * 0.4641),
  },
  medsText: {
    top: (height * 0.2334),
    left: (width * 0.8923),
    fontSize: FontSize.size_base,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  switch: {
    top: (height * 0.2287),
    left: (width * 0.7513),
    fontSize: FontSize.size_xl,
  },
  medicationsArchiveItem: {
    top: (height * 0.2299),
    left: (width * 0.6564),
    position: "absolute",
  },
  untitledArtwork52Copy3: {
    top: (height * 0.2346),
    left: (width * 0.6692),
    width: (width * 0.059),
    height: (height * 0.0355),
    position: "absolute",
  },
  medsRectangleParent: {
    top: (height * 0.7998),
    left: (width * 0.1564),
    height: (height * 0.273),
  },
  petSparkyDates: {
    top: (height * 0.3637),
    left: (width * 0.1872),
    lineHeight: 30,
    width: (width * 0.3128),
    height: (height * 0.4325),
  },
  // end medications
  // begin medications1
  switchTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  medsSubtractIcon: {
    top: (height * 0.2287),
    left: (width * 0.6538),
    width: (width * 0.872),
    height: (height * 0.403),
  },
  eyeDrops: {
    top: (height * 0.5154),
    left: (width * 0.1718),
  },
  meds1RectangleParent: {
    top: (height * 0.6197),
    left: (width * 0.1564),
    height: (height * 0.273),
  },
  meds1UntitledArtwork52Copy2: {
    top: (height * 0.2346),
    left: (width * 0.6692),
    width: (width * 0.059),
    height: (height * 0.0355),
    position: "absolute",
  },
  // end medications1
  // begin loadingscreen
  petdropFlexBox: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  loadingScreenUntitledArtwork52Copy1: {
    top: (height * 0.3863),
    left: (width * 0.3846),
    width: (width * 0.2462),
    height: (height * 0.1517),
    position: "absolute",
  },
  loadingScreenSubtractIcon: {
    top: (height * 0.3614),
    left: (width * 0.3077),
    width: (width * 0.3744),
    height: (height * 0.173),
  },
  loadingScreenLogoText: {
    top: (height * 0.532),
    left: (width * 0.1923),
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.jsMathCmbx10,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  loadingScrenLogoSubtext: {
    top: (height * 0.6043),
    left: (width * 0.2564),
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
  },
  // end loadingscreen
  // END SCREENS
  // BEGIN COMPONENTS
  // begin medicationinfo
  medsInfoGroupPosition: {
    width: (width * 0.7205),
    position: "absolute",
  },
  groupIconPosition: {
    top: (height * 0.0036),
    position: "absolute",
  },
  medsInfoGroupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.1315),
  },
  medsInfoGroupItem: {
    top: (height * 0.0379),
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorLightskyblue,
    height: (height * 0.4242),
  },
  medsInfoEyeDropsSparky: {
    left: (width * 0.1),
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorFloralwhite,
    textAlign: "left",
  },
  medsInfoGroupInner: {
    top: (height * 0.0083),
    left: (width * 0.0308),
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorFirebrick,
    width: (width * 0.0487),
    height: (height * 0.0225),
    position: "absolute",
  },
  medsInfoGroupIcon: {
    left: (width * 0.6282),
  },
  medsInfoRectangleParent: {
    top: (height * 0.314),
    left: (width * 0.1333),
    height: (height * 0.4621),
    width: (width * 0.7205),
    position: "absolute",
  },
  // end medicationinfo
  // begin medicationinfo2
  datesSept1923Typo: {
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  medsInfo2DatesSept1923: {
    top: (height * 0.0415),
    left: (width * 0.0359),
    fontSize: FontSize.size_smi,
  },
  medsInfo2RectangleParent: {
    top: (height * 0.2773),
    left: (width * 0.141),
    height: (height * 0.1315),
    width: (width * 0.7205),
    position: "absolute",
  },
  medsInfo2GroupItem: {
    top: (height * 0.0379),
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorLightskyblue,
    height: (height * 0.0936),
  },
  // end medicationinfo2
  // begin petinfo1addbuttons
  newPetButtonGroupChildPosition: {
    height: (height * 0.0249),
    position: "absolute",
  },
  vetTypo: {
    width: (width * 0.1103),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: (width * 0.0154),
    position: "absolute",
  },
  newPetButtonGroupChild: {
    top: (height * 0.0012),
    width: (width * 0.1128),
  },
  newPetButtonGroupItem: {
    top: (height * 0.032),
    width: (width * 0.1385),
  },
  newPetButtonGroupInner: {
    top: (height * 0.0652),
    width: (width * 0.1436),
  },
  newPetButtonGroupIcon: {
    top: (height * 0.0983),
    width: (width * 0.1641),
  },
  newPetButtonGroupChild1: {
    top: (height * 0.1315),
    width: (width * 0.1),
  },
  age: {
    width: (width * 0.0744),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: (width * 0.0154),
    position: "absolute",
  },
  breed: {
    top: (height * 0.0308),
  },
  weight: {
    top: (height * 0.064),
  },
  address: {
    top: (height * 0.0972),
  },
  vet: {
    top: (height * 0.1308),
  },
  newPetButtonGroupParent: {
    top: (height * 0.3637),
    left: (width * 0.4513),
    height: (height * 0.1576),
    width: (width * 0.1641),
    position: "absolute",
  },
  // end petinfo1addbuttons
  // begin topbottombar
  topBottomBarButtonText: {
    top: (height * 0.032),
    left: (width * 0.005),
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    position: "absolute"
  },
  homePressable: {
    left: (width * 0.06),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  petInfoPressable: {
    left: (width * 0.24),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  remindersPressable: {
    left: (width * 0.42),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  medsPressable: {
    left: (width * 0.6),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  sharePressable: {
    left: (width * 0.78),
    top: (height * -0.05),
    height: (height * 0.08),
    width: (width * 0.15),
    position: "absolute",
    borderRadius: 15,
  },
  groupChild1Position: {
    width: (width * 0.0564),
    position: "absolute",
  },
  groupChildLayout1: {
    height: (height * 0.0024),
    borderRadius: Border.br_9xs,
  },
  topBottomBarGroupLayout: {
    width: (width * 0.0256),
    position: "absolute",
  },
  groupChild10Layout: {
    height: (height * 0.0237),
    position: "absolute",
  },
  instanceChild1Position: {
    position: "absolute",
  },
  topBottomBarGroupChildPosition: {
    top: (height * 0.0095),
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  topBottomBarGroupChild: {
    backgroundColor: Color.colorLightskyblue,
    height: (height * 0.0735),
    width: width,
    position: "absolute",
  },
  topBottomBarText: {
    top: (height * 0.0225),
    left: (width * 0.0923),
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: (width * 0.1974),
    height: (height * 0.0273),
    position: "absolute",
  },
  topBottomBarGroupItem: {
    top: (height * 0.0024),
    left: (width * 0.0051),
    width: (width * 0.0359),
    height: (height * 0.0095),
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  topBottomBarGroupInner: {
    top: (height * 0.0047),
    left: (width * 0.0513),
    borderWidth: 0.5,
    width: (width * 0.0026),
    height: (height * 0.0047),
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  topBottomBarRectangleView: {
    borderWidth: 1,
    width: (width * 0.0513),
    borderRadius: Border.br_9xs,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: (height * 0.0142),
    position: "absolute",
  },
  topBottomBarRectangleGroup: {
    left: (width * 0.1333),
    width: (width * 0.0538),
    height: (height * 0.0142),
    position: "absolute",
  },
  topBottomBarGroupChild1: {
    backgroundColor: Color.colorGainsboro_200,
    width: (width * 0.0564),
    position: "absolute",
  },
  topBottomBarGroupChild2: {
    top: (height * 0.0059),
    width: (width * 0.0436),
    left: (width * 0.0077),
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  topBottomBarGroupChild3: {
    top: (height * 0.0118),
    left: (width * 0.0154),
    height: (height * 0.0024),
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
  },
  topBottomBarRectangleContainer: {
    left: (width * 0.059),
    height: (height * 0.0142),
  },
  groupIcon: {
    height: (height * 0.0142),
  },
  groupContainer: {
    top: (height * 0.0273),
    left: (width * 0.7487),
    width: (width * 0.1872),
    height: (height * 0.0142),
    position: "absolute",
  },
  topBottomBarRectangleParent: {
    top: (height * -0.9443),
    height: (height * 0.0735),
    width: width,
    position: "absolute",
  },
  instanceChild: {
    height: (height * 0.1363),
    top: (height * -0.0758),
    width: width,
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  topBottomBarGroupChild4: {
    left: (width * 0.008),
    top: (height * 0.01),
    width: (width * 0.0513),
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.0191),
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  polygonIcon: {
    top: (height * 0.001),
    left: (width * 0.0085), 
    width: (width * 0.0513),
    height: (height * 0.0178),
    overflow: "hidden",
    position: "absolute",
  },
  darkBackground: {
    backgroundColor: Color.colorDarkslateblue,
    height: (height * 0.08),
    width: (width * 0.15),
    borderRadius: 15,
  },
  homeButton: {
    left: (width * 0.04),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  petInfoButton: {
    left: (width * 0.045),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  remindersButton: {
    left: (width * 0.005),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  medsButton: {
    left: (width * 0.04),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  shareButton: {
    left: (width * 0.035),
    top: (height * 0.01),
    width: (width * 0.15),
    height: (height * 0.08),
    position: "absolute",
  },
  instanceItem: {
    left: (width * -0.01),
    top: (height * 0.002),
    position: "absolute",
  },
  instanceInner: {
    left: (width * 0.035)
  },
  instanceChild1: {
    top: (height * -0.003),
    width: (width * 0.0744),
    height: (height * 0.0344),
  },
  groupChild8: {
    borderRadius: Border.br_10xs_5,
    left: (width * 0.02),
    width: (width * 0.0077),
    height: (height * 0.0201),
  },
  groupChild9: {
    left: (width * 0.0226),
    width: (width * 0.0256),
    height: (height * 0.0036),
    borderRadius: Border.br_10xs,
  },
  groupChild10: {
    borderRadius: Border.br_12xs,
    left: (width * 0.0405),
  },
  rectangleParent2: {
    width: (width * 0.1),
    height: (height * 0.0296),
  },
  topBottomBarGroupParent: {
    top: (height * 0.9443),
    height: (height * 0.0557),
    width: width,
    position: "absolute",
  },
  // end topbottombar
  // END COMPONENTS
});