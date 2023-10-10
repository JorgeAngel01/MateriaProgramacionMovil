import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../../theme/styles";

const IconButton = ({ icon, onPress, color, borderColor, borderRadius }) => {
  const buttonStyle = {
    backgroundColor: color || THEME.COLORS.GRAY.LIGHT, // Use the provided color or a default one
    borderColor: borderColor || THEME.COLORS.GRAY.DIM, // Use the provided borderColor or a default one
    borderRadius: borderRadius || 20, // Use the provided borderRadius or a default one
  };

  return (
    <TouchableOpacity style={[styles.iconButton, buttonStyle]} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
