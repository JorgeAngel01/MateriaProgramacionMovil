import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { THEME } from "../../../theme/styles";
import { AntDesign } from '@expo/vector-icons'; 

const Header = (props) => {
  return (
    <View style={styles.header}>
      <AntDesign name="left" size={24} color="white" />
      <Text style={styles.text}>Withdraw money</Text>
      <AntDesign name="staro" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 35,
    width: 35,
  },
  header: {
    flexDirection: "row",
    height: "auto",
    width: "100%",
    
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default Header;
