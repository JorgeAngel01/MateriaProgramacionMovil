import React from "react";
import { Text } from "react-native";

function CustomText({
  text,
  color,
  fontSize,
  fontWeight,
  marginVertical,
  marginHorizontal,
  paddingHorizontal,
  paddingVertical,
}) {
  return (
    <Text
      style={{
        color,
        fontSize,
        fontWeight,
        marginHorizontal,
        marginVertical,
        paddingHorizontal,
        paddingVertical,
      }}
    >
      {text}
    </Text>
  );
}

export default CustomText;
