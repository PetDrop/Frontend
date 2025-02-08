import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

const Login1 = () => {
  return <View style={styles.login} />;
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: Color.colorFloralwhite,
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
  },
});

export default Login1;
