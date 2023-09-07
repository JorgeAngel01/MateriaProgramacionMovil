import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "./CustomIcon";
import CustomText from "./CustomText";

export default function Data({
  iconName,
  iconType,
  color,
  backgroundColor,
  text1,
  text2,
  text3,
  text4,
  id,
}) {
  return (
    <>
      <View style={styles.container} key={id}>
        <View style={styles.container2}>
          <CustomIcon
            iconName={iconName}
            size={24}
            color={color}
            backgroundColor={backgroundColor}
            borderRadius={50}
            width={60}
            height={60}
            iconType={iconType}
          ></CustomIcon>
          <View style={styles.textView}>
            <CustomText
              text={text1}
              fontWeight={"bold"}
              color={"black"}
              fontSize={15}
            ></CustomText>
            <CustomText
              text={text2}
              color={"#b3b3b3"}
            ></CustomText>
          </View>
        </View>
        <View>
          <CustomText
            text={text3}
            fontWeight={"bold"}
            color={"black"}
            fontSize={15}
          ></CustomText>
          <CustomText text={text4} color={"#b3b3b3"}></CustomText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container2: {
    flexDirection: "row",
  },
  textView: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
