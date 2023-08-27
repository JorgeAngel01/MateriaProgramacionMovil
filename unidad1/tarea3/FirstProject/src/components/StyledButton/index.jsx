import React from "react";
import { Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";

const StyledButton = (props) => {
  const combinedButtonStyle = [
    defaultStyles.button,
    // Style provided
    props.style,

    //Individual properties
    props.backgroundColor
      ? { backgroundColor: props.backgroundColor }
      : props.style,
  ];

  const combinedButtonTextStyle = [
    defaultStyles.buttonText,
    
    props.textStyle,

    props.textColor
      ? { color: props.textColor }
      : props.textStyle,
    ];

  return (
    <TouchableOpacity style={combinedButtonStyle} onPress={props.onPress}>
      <Text style={combinedButtonTextStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default StyledButton;
