import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import Numpad from "../../components/u2t9/Numpad";
import { useAppContext } from "../../hooks/useAppContext";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavBar = ({ icon1, text, icon2, onPress1, onPress2 }) => {
  navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.iconButton} onPress={onPress1}>
        {icon1}
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.iconButton} onPress={onPress2}>
        {icon2}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    width: "95%",
    backgroundColor: THEME.COLORS.BLACK.NIGHT,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: THEME.COLORS.GRAY.DIM,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: THEME.COLORS.WHITE,
  },
});

export default NavBar;
