import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { THEME } from "../../theme/styles";
import Numpad from "../../components/u2t9/Numpad";
import { useAppContext } from "../../hooks/useAppContext";
import NavBar from "../../components/u2t9/NavBar";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import CustomButton2 from "../../components/CustomButton2";

const ThirdScreen = ({navigation}) => {
  const { theme } = useAppContext();
  const isDark = useColorScheme();
  console.log("isDark", isDark);
  console.log("theme", theme);

  icon1 = <Ionicons name="md-arrow-back" size={24} color="white" />
  icon2 = <Entypo name="dots-two-vertical" size={24} color="white" />

  return (
    <View
      style={[
        styles.container,
        // isDark === "dark" ? styles.containerDark : styles.containerLight,
      ]}
    > 
      <NavBar icon1={icon1} icon2={icon2} text="Send"/>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.text}>Benjamin Parker</Text>
        <Text style={styles.creditCard}>**** **** **** 1234</Text>
        <Text>Balance</Text>
      </View>
      <View style={styles.wallet}>
        <Text>
          <Text style={styles.int}>$340</Text>
          <Text style={styles.decimal}>.00</Text>
        </Text>
      </View>
      <Numpad />
      <CustomButton2 text="Send" isPrimary={false} color={THEME.COLORS.MINDARO}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.COLORS.BLACK.NIGHT,
  },
  navBar: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: THEME.COLORS.BLACK.NIGHT,
  },
  iconButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
  },
  creditCard: {
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.COLORS.GRAY.DIM,
  },
  wallet: {
    justifyContent: "center",
    alignItems: "center",
  },

  line: {
    height: 2,
    marginVertical: 20,
    backgroundColor: THEME.COLORS.LIGHTWHITE,
  },
  content: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  int: {
    fontSize: 28,
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
  },
  decimal: {
    fontSize: 28,
    fontWeight: "bold",
    color: THEME.COLORS.GRAY.DIM,
  },
});

export default ThirdScreen;
