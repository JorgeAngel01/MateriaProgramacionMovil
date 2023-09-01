import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { THEME } from "../../theme/colors";

const Person = ({ name, lastName, image, index }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{lastName}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    marginHorizontal:15,
    backgroundColor: THEME.COLORS.DARK_BLUE,
    borderColor: "transparent",
    paddingHorizontal: 30,

    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
  },
  image: {
    height: 40,
    width: 40,
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Person;
