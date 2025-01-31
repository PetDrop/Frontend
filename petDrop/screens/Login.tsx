import * as React from "react";
import { Text, StyleSheet, View, Button, Pressable, Image } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import BlueCircleBig from "../assets/blue_circle_big.svg";

type LoginType = {
  navigation: any;
}

const Login = (props: LoginType) => {
  return (
    <View style={styles.login}>
      <Pressable onPress={() => {props.navigation.navigate("Home")}} style={styles.login1}>
        <Text style={styles.login1Typo}>Login</Text>
      </Pressable>
      <Image
        style={[styles.dogImage]}
        contentFit="cover"
        source={require("../assets/blue_dog_big.png")}
      />
      <BlueCircleBig style={styles.blueCircle} width={146} height={146} />
      <View style={styles.loginChild} />
      <View style={[styles.loginItem, styles.loginLayout]} />
      <View style={[styles.loginInner, styles.loginLayout]} />
      <Text style={[styles.usernameEMail, styles.passwordTypo]}>Username/ E-mail:</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password:</Text>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Text style={[styles.rememberMe, styles.signUpTypo]}>Remember me</Text>
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
      <Text style={[styles.petdrop, styles.petDropTypo]}>petdrop.</Text>
      <Text style={styles.neverMissA}>NEVER MISS A DROP.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dogImage: {
    top: "17.77%",
    left: "37.18%",
    height: "15.17%",
    width: "24.62%",
    position: "absolute",
  },
  blueCircle: {
    top: "15.4%",
    left: "29.49%",
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
    height: "5.92%",
    width: "75.38%",
    borderRadius: Border.br_sm,
    left: "12.31%",
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  passwordTypo: {
    height: "2.01%",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: "12.31%",
    textAlign: "left",
    position: "absolute",
  },
  signUpTypo: {
    textAlign: "center",
    width: "23.85%",
    height: "2.01%",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  login1: {
    top: "34.36%",
    left: "35.9%",
  },
  loginChild: {
    top: "41.23%",
    left: "5.38%",
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorLightskyblue,
    width: "88.97%",
    height: "33.06%",
    position: "absolute",
  },
  loginItem: {
    top: "58.06%",
  },
  loginInner: {
    top: "48.34%",
  },
  usernameEMail: {
    top: "45.14%",
    width: "22.56%",
  },
  password: {
    top: "54.86%",
    width: "13.33%",
  },
  forgotPassword: {
    top: "65.28%",
    width: "23.85%",
    left: "38.21%",
    height: "2.01%",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  rememberMe: {
    top: "67.89%",
    left: "38.21%",
  },
  signUp: {
    top: "70.5%",
    left: "38.21%",
    textAlign: "center",
  },
  petdrop: {
    top: "85.9%",
    left: "7.44%",
    fontSize: FontSize.size_45xl,
    width: "87.69%",
    height: "13.27%",
  },
  neverMissA: {
    top: "93.01%",
    left: "14.87%",
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  login: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Login;
