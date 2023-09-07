import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme/styles";
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';

const Slidebutton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.circle}>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <Text style={styles.text } >Swipe to Withdraw</Text>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: THEME.COLORS.RED,
    width: "100%",
    height: 60,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 50,
  },
  text: {
    marginLeft: 35,
    textAlign: "center",
    fontSize: 14,
    color: THEME.COLORS.WHITE,
  },
  circle: {
    backgroundColor: THEME.COLORS.WHITE,
    borderColor: THEME.COLORS.LIGHTWHITE,
    borderWidth: 2,
    height: 57,
    width: 57,
    margin: 3,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});

export default Slidebutton;
