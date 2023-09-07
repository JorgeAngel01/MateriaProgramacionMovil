import React from "react";
import { View, Image } from "react-native";

export default function CustomImage({
  imgsource,
  width,
  height,
  marginHorizontal,
  marginVertical,
  borderRadius,
  backgroundColor,
}) {
  return (
    <View style={{ marginHorizontal, marginVertical, borderRadius, backgroundColor }}>
      <Image source={{ uri: imgsource }} width={width} height={height}></Image>
    </View>
  );
}
