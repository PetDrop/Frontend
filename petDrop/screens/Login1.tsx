import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Login1 = () => {
  return <View style={styles.login} />;
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: Color.colorFloralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Login1;
