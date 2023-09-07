import React from "react";
import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import CustomIcon from "./CustomIcon";

function CustomTouchable({
  text,
  color,
  fontSize,
  fontWeight,
  marginHorizontal,
  marginVertical,
  paddingVertical,
  paddingHorizontal,
  borderRadius,
  iconName,
  iconColor,
  iconSize,
  iconType,
  backgroundColor,
  width,
  height,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        borderRadius,
        backgroundColor,
        width,
        height,
        justifyContent: "center",
        alignItems: "center",

      }}
      onPress={onPress ? onPress : null}
    >
      {text && (
        <CustomText
          text={text}
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
        ></CustomText>
      )}
      {iconName && (
        <CustomIcon
          iconName={iconName}
          size={iconSize}
          color={iconColor}
          iconType={iconType}
        ></CustomIcon>
      )}
    </TouchableOpacity>
  );
}

export default CustomTouchable;
