import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme/styles";

const CustomLongButton = ({
  isPrimary,
  text,
  secondText,
  onPress,
  color,
  backgroundColor,
  borderRadius,
  height,
  width,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        backgroundColor && { backgroundColor: backgroundColor },
        borderRadius && { borderRadius: borderRadius },
        borderColor && { borderColor: borderColor },
        { height, width },
      ]}
      onPress={onPress}
    >
      {secondText ? (
        <Text
          style={[
            isPrimary ? styles.primaryButtonText : styles.secondaryButtonText,
            color && { color: color },
          ]}
        >
          <Text>{text}</Text>
          <Text style={{ color: THEME.COLORS.ORANGE, fontWeight: "bold" }}>
            {secondText}
          </Text>
        </Text>
      ) : (
        <Text
          style={[
            isPrimary ? styles.primaryButtonText : styles.secondaryButtonText,
            color && { color: color }, // Apply the custom text color if provided
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
  },
  primaryButton: {
    backgroundColor: THEME.COLORS.ORANGE.CRAYOLA,
  },
  secondaryButton: {
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 1,
  },
  primaryButtonText: {
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
  },
  secondaryButtonText: {
    color: THEME.COLORS.BLACK.NIGHT,
  },
});

export default CustomLongButton;
