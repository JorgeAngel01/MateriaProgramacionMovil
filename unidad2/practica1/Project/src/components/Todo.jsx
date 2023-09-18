import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import CustomButton from "./otros/Button1";

const Todo = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1, fontSize: 20 }}>{name}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton text="Edit" onPress={() => console.log("Edit")} />
        <CustomButton text="Delete" onPress={() => console.log("Delete")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: ReactStatus.currentHeight,
  },
});

export default Todo;
