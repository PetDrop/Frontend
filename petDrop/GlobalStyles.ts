/* fonts */
import { Dimensions, ImageResizeMode } from "react-native";
const { width, height } = Dimensions.get("window");

export const FontFamily = {
  juaRegular: "Jua-Regular",
  koulenRegular: "Koulen-Regular",
  jsMathCmbx10: "jsMath-cmbx10",
};
/* Petdrop logo on all pages */
export const logoImage = {
		width: width * 0.6,
		height: height * 0.115,
    marginTop: height * 0.025,
    marginBottom: height * 0.025,
    marginLeft: width * 0.05,
		resizeMode: "contain" as ImageResizeMode,
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
  size_30: 30,
  size_17xl: 36,
  size_40: 40,
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
  br_17: 17,
  br_xl: 20,
  br_2xl: 21,
  br_12xl: 31,
};
/* screen enum */
export enum ScreenEnum {
  Login = 0,
  Signup = 1,
  Home = 2,
  PetInfo = 3,
  PetInfo1 = 4, //new pet page
  Reminders = 5,
  MedicationsArchive = 6,
  LoadingScreen = 7,
};

export const petImages: { [key: string]: any } = {
  sparky: require("./assets/blue_dog_big.png"),
  blue: require("./assets/pink_dog_big.png"),
  small_blue: require("./assets/pink_dog_small.png"),
  small_sparky: require("./assets/blue_dog_small.png"),
};