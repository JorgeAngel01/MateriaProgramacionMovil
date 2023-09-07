import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { THEME } from "../../theme/styles";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import Numpad from "../Numpad";
import Slidebutton from "../Slidebutton";

const WalletContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>Current Wallet Balance</Text>
          <Text style={styles.numberHeader}>$23,867</Text>
        </View>
        <View style={styles.circle}>
          <AntDesign name="plus" size={24} color={THEME.COLORS.RED} />
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.content}>
        <Text style={styles.text}>Withdraw Amount</Text>
        <Text style={{paddingTop: 10}}>
          <Text style={styles.int}>$19,29.</Text>
          <Text style={styles.decimal}>00</Text>
        </Text>
        <Numpad/>
        <Slidebutton/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberHeader: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 5,
  },
  text: {
    fontSize: 14,
    color: THEME.COLORS.GREY,
  },
  circle: {
    backgroundColor: THEME.COLORS.ROSE,
    padding: 10,
    borderRadius: 100,
  },
  line: {
    height: 2,
    marginVertical: 20,
    backgroundColor: THEME.COLORS.LIGHTWHITE,
  },
  content: {
    flex: 1,
    alignItems: "center",
    
  },
  int: {
    fontSize: 28,
    fontWeight: "bold",
    color: THEME.COLORS.RED,
  },
  decimal: {
    fontSize: 28,
    fontWeight: "bold",
    color: THEME.COLORS.GREY,
  },
});

export default WalletContent;
