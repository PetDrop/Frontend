import * as React from "react";
import { Text, StyleSheet, View, Button, Pressable, Image, Dimensions } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import BlueCircleBig from "../assets/blue_circle_big.svg";

const { width, height } = Dimensions.get('window');

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
      <BlueCircleBig style={styles.blueCircle} width={(width * 0.3744)} height={(height * 0.173)} />
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
  petdrop: {
    top: (height * 0.859),
    left: (width * 0.0744),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  neverMissA: {
    top: (height * 0.9301),
    left: (width * 0.1487),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  login: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Login;
