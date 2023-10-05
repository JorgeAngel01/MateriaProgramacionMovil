import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme/styles";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Numpad = () => {
  const numpadLayout = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
      <Ionicons name="md-reload-outline" size={24} color="white" />,
      0,
      <Feather name="x" size={24} color="white" />,
    ],
  ];

  return (
    <View style={styles.container}>
      {numpadLayout.map((row, rowIndex) =>
        row.map((buttonValue, index) => (
          <TouchableOpacity key={index} style={styles.circle}>
            <Text 
            style={styles.text}
            >{buttonValue}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
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
    color: THEME.COLORS.WHITE,
  },
  circle: {
    backgroundColor: THEME.COLORS.BLACK.EERIE,
    borderColor: "transparent",
    borderWidth: 2,
    height: 60,
    width: "28%",
    marginHorizontal: "0.5%",
    marginVertical: "0.5%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

export default Numpad;
