import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { THEME } from "../../theme/styles";
import CustomLongButton from "../basic/CustomLongButton";

const ButtonScroll = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.scroll} showsHorizontalScrollIndicator={false}>
      <CustomLongButton
          text="Burgers"
          borderColor="transparent"
          backgroundColor={THEME.COLORS.BLUE.VERDIGRIS}
          isPrimary
          height={50}
          width={100}
          borderRadius={20}
        />
        <CustomLongButton
          text="Burgers"
          borderColor={THEME.COLORS.BLUE.VERDIGRIS}
          color={THEME.COLORS.BLUE.VERDIGRIS}
          backgroundColor="transparent"
          isPrimary
          height={50}
          width={100}
          borderRadius={20}
        />
        <CustomLongButton
          text="Drinks"
          borderColor={THEME.COLORS.BLUE.VERDIGRIS}
          color={THEME.COLORS.BLUE.VERDIGRIS}
          backgroundColor="transparent"
          isPrimary
          height={50}
          width={100}
          borderRadius={20}
        />
        <CustomLongButton
          text="Pizzas"
          borderColor={THEME.COLORS.BLUE.VERDIGRIS}
          color={THEME.COLORS.BLUE.VERDIGRIS}
          backgroundColor="transparent"
          isPrimary
          height={50}
          width={100}
          borderRadius={20}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    width: "auto",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  scroll: {
    width: "100%",
    height: "100%",
    marginTop: 0,
  },
});

export default ButtonScroll;
