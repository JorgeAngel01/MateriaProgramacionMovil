import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar as Status2 } from "react-native";
import Constants from "expo-constants";
import Welcome from "./src/screens/Welcome";
import Screen2 from "./src/screens/Screen2";
import { useState } from "react";

export default function App() {
  const data = [
    {
      id: 1,
      iconName: "ethereum",
      iconType: "FontAwesome5",
      color: "white",
      backgroundColor: "#d3643b",
      text1: "Ethereum",
      text2: "29.74% ($28,015)",
      text3: "79.008 ETH",
      text4: "$100,000.00",
    },
    {
      id: 2,
      iconName: "affiliatetheme",
      iconType: "FontAwesome5",
      color: "white",
      backgroundColor: "#f0b904",
      text1: "Binance",
      text2: "15.96% ($28,015)",
      text3: "107.70 BNB",
      text4: "$30,812.92",
    },
    {
      id: 3,
      iconName: "ethernet",
      iconType: "FontAwesome5",
      color: "white",
      backgroundColor: "#879d54",
      text1: "Tether USD",
      text2: "29.74% ($28,015)",
      text3: "79.006 ETH",
      text4: "$100,000.00",
    },
    {
      id: 4,
      iconName: "ethereum",
      iconType: "FontAwesome5",
      color: "white",
      backgroundColor: "#d3643b",
      text1: "Ethereum",
      text2: "29.74% ($28,015)",
      text3: "79.008 ETH",
      text4: "$100,000.00",
    },
    {
      id: 5,
      iconName: "affiliatetheme",
      iconType: "FontAwesome5",
      color: "white",
      backgroundColor: "#f0b904",
      text1: "Binance",
      text2: "15.96% ($28,015)",
      text3: "107.70 BNB",
      text4: "$30,812.92",
    },
    {
      id: 6,
      iconName: "ethernet",
      iconType: "FontAwesome5",
      color: "white",
      backgroundColor: "#879d54",
      text1: "Tether USD",
      text2: "29.74% ($28,015)",
      text3: "79.006 ETH",
      text4: "$100,000.00",
    },
  ];

  const [screen, setScreen]= useState(1);

  onClickScreen1 = () => {
    setScreen(1);
  }

  onClickScreen2= () => {
    setScreen(2);
  }

  return (
    <View style={styles.container}>
      {screen === 1 ? (
        <Welcome data={data} onPress={onClickScreen2} />
      ) : (
        <Screen2 onPress={onClickScreen1} />
      )}
      {/* <Welcome data={data}/> */}
      {/* <Screen2></Screen2> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d76741",
    paddingTop: Constants.statusBarHeight,
  },
});
