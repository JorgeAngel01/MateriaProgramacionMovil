import React from "react";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  FlatList,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { THEME } from "../../theme/styles";

const CharacterScreen = ({ route, navigation }) => {
  const { image, name, status, species, location, episode } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.contentContainer}>
        
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={[
              styles.status,
              status === "Alive"
                ? { backgroundColor: "green" }
                : status === "Dead"
                ? { backgroundColor: "red" }
                : status === "Unknown"
                ? { backgroundColor: "gray" }
                : { backgroundColor: "gray" },
            ]}
          />
          <Text style={styles.text}>
            <Text style={{ textTransform: "capitalize" }}>{status}</Text>
            <Text> - </Text>
            <Text>{species}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textLabel}>Last known location: </Text>
          <Text style={styles.text}>{location}</Text>
        </View>

        <View>
          <Text style={styles.textLabel}>First seen in: </Text>
          <Text style={styles.text}>{episode}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GUNMETAL,
    position: "relative", // Required for absolute positioning
  },
  image: {
    width: "100%",
    height: 400,
  },
  textContainer: {
    height: "20%",
    width: "85%",
    position: "absolute",
    top: "35%",
    left: "5%",
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
  },
  contentContainer: {
    gap: 30,
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  textLabel: {
    color: THEME.COLORS.GRAY.DIM,
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    height: 20,
    width: 20,
    marginRight: 10,
    borderRadius: 50,
  },
});

export default CharacterScreen;
