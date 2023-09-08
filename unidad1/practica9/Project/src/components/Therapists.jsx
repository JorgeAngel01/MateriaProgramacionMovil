import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Therapists = ({image, name, job, rate}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.theraInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.theraJob}>{job}</Text>
      </View>
      <View style={styles.theraRate}>
        <AntDesign color={iconColor} name={rate > 4 ? 'star' : 'staro'} size={24} />
        <Text>{rate.toFixed(1)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  name: {
    fontSize: 20,
    color: " ",
    fontWeight: "bold",
  },
  theraJob: {
    marginTop: 5,
    fontSize: 15,
    color: " ",
    fontWeight: "bold",
  },
  theraRate: { flexDirection: "row" , alignItems: "center", },
});

export default Therapists;
