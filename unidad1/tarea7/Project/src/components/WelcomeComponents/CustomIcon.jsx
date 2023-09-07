import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

function CustomIcon({
  iconName,
  size,
  color,
  backgroundColor,
  borderRadius,
  width,
  height,
  marginHorizontal,
  marginVertical,
  iconType,
}) {
  return (
    <View
      style={{
        backgroundColor,
        borderRadius,
        width,
        height,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal,
      }}
    >
      {iconType === "Ionicons" && (
        <Ionicons name={iconName} size={size} color={color} />
      )}
      {iconType === "Feather" && (
        <Feather name={iconName} size={size} color={color} />
      )}
      {iconType === "AntDesign" && (
        <AntDesign name={iconName} size={size} color={color} />
      )}
      {iconType === "FontAwesome5" && (
        <FontAwesome5 name={iconName} size={size} color={color} />
      )}
    </View>
  );
}

export default CustomIcon;
