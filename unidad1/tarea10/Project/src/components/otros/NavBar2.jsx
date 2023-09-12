import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../theme/styles";

const NavBar = () => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.selected}>
        <Ionicons name="home" size={24} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notSelected}>
        <Feather name="shopping-bag" size={24} color="#9f9f9f" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notSelected}>
        <Feather name="bell" size={24} color="#9f9f9f" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notSelected}>
        <Ionicons name="person-circle-outline" size={24} color="#9f9f9f" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  notSelected: {
    backgroundColor: "transparent",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: THEME.COLORS.BlACK,
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
