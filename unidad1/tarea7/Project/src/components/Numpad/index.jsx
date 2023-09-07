import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme/styles";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Numpad = () => {
  const numpad = [];
  const numpadLayout = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [<Ionicons name="md-reload-outline" size={24} color="black" />, 9, 0, <Feather name="x" size={24} color="black" />],
  ];

  return (
    <View style={styles.container}>
      {numpadLayout.map((row, rowIndex) =>
        row.map((buttonValue , index) => (
          <TouchableOpacity key={index} style={styles.circle}>
            <Text>{buttonValue}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: "65%",
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
    color: THEME.COLORS.GREY,
  },
  circle: {
    backgroundColor: THEME.COLORS.WHITE,
    borderColor: THEME.COLORS.LIGHTWHITE,
    borderWidth: 2,
    height: "22%",
    width: "22%",
    marginHorizontal: "1%",
    marginVertical: "3%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 50,
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
    color: THEME.COLORS.RED,
  },
  decimal: {
    fontSize: 28,
    fontWeight: "bold",
    color: THEME.COLORS.GREY,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default Numpad;
