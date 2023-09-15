import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const UserStory = ({ image, story}) => {

  return (
    <View style={styles.container}>
        <Image
          style={styles.headerImage}
          source={{
            uri: image,
          }}
        />
        <Text>{story}</Text>
    </View>
  );
};

export default UserStory;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 40,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // resizeMode: "center",
  },
});