import * as React from "react";
import { Text, StyleSheet, View, Button, Pressable, Image, Dimensions } from "react-native";
import { Color, FontFamily, Border, FontSize, styles } from "../GlobalStyles";
import BlueCircleBig from "../assets/blue_circle_big.svg";

const { width, height } = Dimensions.get('window');

type LoginType = {
  navigation: any;
}

const Login = (props: LoginType) => {
  return (
    <View style={styles.outermostView}>
      <Pressable onPress={() => {props.navigation.navigate("Home")}} style={styles.login1}>
        <Text style={styles.login1Typo}>Login</Text>
      </Pressable>
      <Image
        style={[styles.dogImage]}
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
      <Text style={[styles.loginLogoText, styles.petDropTypo]}>petdrop.</Text>
      <Text style={styles.loginLogoSubtext}>NEVER MISS A DROP.</Text>
    </View>
  );
};

export default Login;