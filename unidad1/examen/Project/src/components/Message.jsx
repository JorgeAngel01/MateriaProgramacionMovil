import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Chat = ({ image, name, message, date }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.therapistInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.grayText}>{message}</Text>
      </View>
      <View style={styles.therapistdate}>
        {date >= 4 ? (
          <AntDesign name="star" size={24} color="#2663df" />
        ) : (
          <AntDesign name="staro" size={24} color="#2663df" />
        )}
        <Text style={styles.grayText}>{date}</Text>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fefdfe",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
    // margin: 10,
  },
  therapistInfo: {
    margin: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#495258",
  },
  grayText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#d4d4d7",
    marginTop: 5,
  },
  therapistdate: {
    // margin: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});