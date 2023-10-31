import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../theme/styles";

export const NumberButton = ({ text, role, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        role === "number"
          ? styles.numberContainer
          : role === "operator"
          ? styles.operatorContainer
          : styles.functionContainer,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          role === "number"
            ? styles.textNumber
            : role === "operator"
            ? styles.textOperator
            : styles.textNumber,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 50, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 30,
  },
  textNumber: {
    color: THEME.COLORS.WHITE,
  },
  textOperator: {
    color: THEME.COLORS.GRAY.DIM,
  },
  textFunction: {
    color: THEME.COLORS.GRAY.DIM,
  },
  numberContainer: {
    backgroundColor: THEME.COLORS.BLUE.CAMBRIDGE,
  },
  operatorContainer: {
    backgroundColor: THEME.COLORS.WHITE,
  },
  functionContainer: {
    backgroundColor: "#d9d9d9",
  },
});
