import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { THEME } from "../../theme/styles";

const NavBar = ({ state, descriptors, navigation }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.navBar}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <TouchableOpacity
          style={styles.iconWithText}
          onPress={() => navigate("Home")}
        >
          <Ionicons
            name={state.index === 0 ? "ios-compass" : "ios-compass-outline"}
            size={24}
            color={
              state.index === 0
                ? THEME.COLORS.BLUE.VERDIGRIS
                : THEME.COLORS.BLACK.NIGHT
            }
          />
          <Text
            style={[
              styles.text,
              {
                color:
                  state.index === 0
                    ? THEME.COLORS.BLUE.VERDIGRIS
                    : THEME.COLORS.BLACK.NIGHT,
              },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWithText}
          onPress={() => navigate("Wishlist")}
        >
          <Ionicons
            name={state.index === 1 ? "md-heart" : "md-heart-outline"}
            size={24}
            color={
              state.index === 1
                ? THEME.COLORS.BLUE.VERDIGRIS
                : THEME.COLORS.BLACK.NIGHT
            }
          />
          <Text
            style={[
              styles.text,
              {
                color:
                  state.index === 1
                    ? THEME.COLORS.BLUE.VERDIGRIS
                    : THEME.COLORS.BLACK.NIGHT,
              },
            ]}
          >
            Wishlist
          </Text>
        </TouchableOpacity>
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <TouchableOpacity
          style={styles.buttonIcon}
          onPress={() => navigate("Cart")}
        >
          <Ionicons name="ios-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.iconWithText}
          onPress={() => navigate("Orders")}
        >
          <Ionicons
            name={state.index === 3 ? "list-circle" : "list-circle-outline"}
            size={24}
            color={
              state.index === 3
                ? THEME.COLORS.BLUE.VERDIGRIS
                : THEME.COLORS.BLACK.NIGHT
            }
          />
          <Text
            style={[
              styles.text,
              {
                color:
                  state.index === 3
                    ? THEME.COLORS.BLUE.VERDIGRIS
                    : THEME.COLORS.BLACK.NIGHT,
              },
            ]}
          >
            Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWithText}
          onPress={() => navigate("Profile")}
        >
          <Ionicons
            name={state.index === 4 ? "ios-person" : "ios-person-outline"}
            size={24}
            color={
              state.index === 4
                ? THEME.COLORS.BLUE.VERDIGRIS
                : THEME.COLORS.BLACK.NIGHT
            }
          />
          <Text
            style={[
              styles.text,
              {
                color:
                  state.index === 4
                    ? THEME.COLORS.BLUE.VERDIGRIS
                    : THEME.COLORS.BLACK.NIGHT,
              },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: THEME.COLORS.WHITE,
  },
  leftSection: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  middleSection: {
    width: "30%",
    flexDirection: "row",
    alignSelf: "flex-start",
    top: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWithText: {
    alignItems: "center",
  },
  buttonIcon: {
    backgroundColor: THEME.COLORS.BLUE.VERDIGRIS,
    padding: 10,
    borderRadius: 50,
  },
  text: {
    fontSize: 12,
  },
});

export default NavBar;
