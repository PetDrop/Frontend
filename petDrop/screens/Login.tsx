import * as React from "react";
import { Text, StyleSheet, View, Button, Pressable } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

type LoginType = {
  navigation: any;
}

const Login = (props: LoginType) => {
  return (
    <View style={styles.login}>
      <Pressable onPress={() => {props.navigation.navigate("Home")}}>
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </Pressable>
      <View style={styles.loginChild} />
      <View style={[styles.loginItem, styles.loginLayout]} />
      <View style={[styles.loginInner, styles.loginLayout]} />
      <Text style={[styles.usernameEMail, styles.passwordTypo]}>
        Username/ E-mail:
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password:</Text>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Text style={[styles.rememberMe, styles.signUpTypo]}>Remember me</Text>
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
      <Text style={[styles.petdrop, styles.login1Typo]}>petdrop.</Text>
      <Text style={styles.neverMissA}>NEVER MISS A DROP.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login1Typo: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  loginLayout: {
    height: 50,
    width: 294,
    borderRadius: Border.br_sm,
    left: 48,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  passwordTypo: {
    height: 17,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: 48,
    textAlign: "left",
    position: "absolute",
  },
  signUpTypo: {
    textAlign: "center",
    width: 93,
    height: 17,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  login1: {
    top: 304,
    left: 138,
    fontSize: 40,
  },
  loginChild: {
    top: 348,
    left: 21,
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorLightskyblue,
    width: 347,
    height: 279,
    position: "absolute",
  },
  loginItem: {
    top: 490,
  },
  loginInner: {
    top: 408,
  },
  usernameEMail: {
    top: 381,
    width: 88,
  },
  password: {
    top: 463,
    width: 52,
  },
  forgotPassword: {
    top: 551,
    width: 93,
    left: 149,
    height: 17,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  rememberMe: {
    top: 573,
    left: 148,
  },
  signUp: {
    top: 595,
    left: 149,
    textAlign: "center",
  },
  petdrop: {
    top: 747,
    left: 29,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
  },
  neverMissA: {
    top: 798,
    left: 58,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  login: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Login;
