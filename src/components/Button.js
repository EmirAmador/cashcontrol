import React from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Button = ({ title, callback ,margin }) => {
  return (
    <TouchableOpacity onPress={callback} style={styles.button} >
      <Text style={styles.buttonText}  >{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#277BF8",
    padding: 20,
    borderRadius: 40,
    width: width * 0.4,

  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button;