import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar as ReactStatus,
} from "react-native";
import { THEME } from "../../theme/styles";
import Constants from "expo-constants";
import WalletContent from "../WalletContent";

const Wallet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.exchange}>
        <Text style={styles.exchangeText}>Exchange</Text>
      </View>
      <View style={styles.wallet}>
        <WalletContent/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    exchange: {
      backgroundColor: THEME.COLORS.BEIGE.LIGHT,
      height: "92.5%",
      width: "86%",
      margin: "7%",
      padding: "5%",
      borderRadius: 25,
      zIndex: 0,
      position: "absolute",
    },
    wallet: {
      backgroundColor: THEME.COLORS.WHITE,
      height: "88%",
      width: "96%",
      margin: "2%", 
      top: "10%", 
      borderRadius: 25,
      zIndex: 10,
      position: "absolute",
      
    },
    exchangeText:{
      color: THEME.COLORS.BEIGE.DARK,  
      fontWeight: 'bold',
      fontSize: 14  
    },
  });

export default Wallet;
