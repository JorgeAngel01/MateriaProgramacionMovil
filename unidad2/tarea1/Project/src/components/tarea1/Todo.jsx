import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View, Text } from "react-native";

import { THEME } from "../../theme/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";

const Todo = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="notebook" size={24} color="white" />
        </View>
        <View style={{ justifyContents: "center" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: THEME.COLORS.RED,
            }}
          >
            {new Date().toLocaleString()}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <IconButton iconName="edit" iconSize={20} iconColor="white" />
        <IconButton iconName="cross" iconSize={24} iconColor="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  iconContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: THEME.COLORS.SECONDARY,
  },
});

export default Todo;
