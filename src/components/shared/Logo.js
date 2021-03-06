import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import CashControlLogo from "../../../assets/logo.png";

const { width, height } = Dimensions.get("screen");

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={CashControlLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  logo: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode: "contain",
  },
});

export default Logo;
