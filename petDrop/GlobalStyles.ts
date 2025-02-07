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

export const styles = StyleSheet.create({
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
  groupLayout: {
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
  dogImage: {
    top: (height * 0.1777),
    left: (width * 0.3718),
    height: (height * 0.1517),
    width: (width * 0.2462),
    position: "absolute",
  },
  blueCircle: {
    top: (height * 0.154),
    left: (width * 0.2949),
  },
  login1Typo: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    fontSize: 45,
  },
  petDropTypo: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  loginLayout: {
    height: (height * 0.0592),
    width: (width * 0.7538),
    borderRadius: Border.br_sm,
    left: (width * 0.1231),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  passwordTypo: {
    height: (height * 0.0201),
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: (width * 0.1231),
    textAlign: "left",
    position: "absolute",
  },
  signUpTypo: {
    textAlign: "center",
    width: (width * 0.2385),
    height: (height * 0.0201),
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  login1: {
    top: (height * 0.3436),
    left: (width * 0.359),
  },
  loginChild: {
    top: (height * 0.4123),
    left: (width * 0.0538),
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorLightskyblue,
    width: (width * 0.8897),
    height: (height * 0.3306),
    position: "absolute",
  },
  loginItem: {
    top: (height * 0.5806),
  },
  loginInner: {
    top: (height * 0.4834),
  },
  usernameEMail: {
    top: (height * 0.4514),
    width: (width * 0.2256),
  },
  password: {
    top: (height * 0.5486),
    width: (width * 0.1333),
  },
  forgotPassword: {
    top: (height * 0.6528),
    width: (width * 0.2385),
    left: (width * 0.3821),
    height: (height * 0.201),
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  rememberMe: {
    top: (height * 0.6789),
    left: (width * 0.3821),
  },
  signUp: {
    top: (height * 0.705),
    left: (width * 0.3821),
    textAlign: "center",
  },
  loginLogoText: {
    top: (height * 0.859),
    left: (width * 0.0744),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  loginLogoSubtext: {
    top: (height * 0.9301),
    left: (width * 0.1487),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  // end login
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
  eyeDropsSparky: {
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
  groupItem: {
    top: (height * 0.0047),
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  rectangleGroup: {
    top: (height * 0.0071),
    left: (width * 0.0077),
    height: (height * 0.0118),
    width: (width * 0.0256),
    position: "absolute",
  },
  petInfoRectangleParent: {
    top: (height * 0.532),
  },
  groupChild2: {
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
  groupChild3: {
    top: (height * 0.0083),
  },
  groupChild4: {
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
  groupParent: {
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
  datesSept1923: {
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
  groupInner: {
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
});