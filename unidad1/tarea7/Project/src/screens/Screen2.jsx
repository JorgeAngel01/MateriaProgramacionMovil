import React from 'react'
import {
  StyleSheet,
  View,
} from "react-native";
import { THEME } from "../theme/styles";
import Header from "../components/Header";
import Wallet from "../components/Wallet";

const Screen2 = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Header onPress={onPress}/>
      <Wallet/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.RED,
  },
});

export default Screen2
