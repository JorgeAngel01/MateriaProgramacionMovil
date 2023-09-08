import React from "react";
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Otros/Card";
import SymptomCard from "../components/SymptomCard";
import Therapists from "../components/Therapists";

const IMAGE = "";

const THERAPIST = [
  { id: 1, image: Image, name: "Dr alice", job: "xd", rate: 5 },
  { id: 2, image: Image, name: "Dr john", job: "xd", rate: 3.5 },
  { id: 3, image: Image, name: "Dr susan", job: "xd", rate: 4.8 },
  { id: 4, image: Image, name: "Dr smith", job: "xd", rate: 4 },
];

const CARDS = [
  { id: 1, isDarkBlue: true, text: "Start training", iconName: "hdd", iconType: 'AntDesign' },
];

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerImage}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Image style={styles.headerImage} source={{ uri: "" }} />
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello,</Text>
        <Text style={{ color: "#2b3941" }}>Chris</Text>
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CARDS.map(({ id, iconName, text, iconType, isDarkBlue }) => (
          <Card isDarkBlue={true} />
        ))}
      </ScrollView>
      <Text style={styles.textHeader}></Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SymptomCard symptom="none" />
      </ScrollView>
      <View style={styles.theraTitle}>
        <Text style={styles.textHeader}>Popular Therapist</Text>
        <Text style={{ color: "", fontWeight: "bold" }}>See all</Text>
      </View>
      <FlatList
        data={THERAPIST}
        renderItem={({ item: { name, image, job, rate } }) => (
          <Therapists image={IMAGE} name={name} job={job} rate={rate} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // resizeMode: "center",
  },
  titleText: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    height: 200,
    width: 200,
    borderRadius: 40,
    backgroundColor: "#e6ecff",
    padding: 20,
    justifyContent: "space-evenly",
  },
  cardIconContainer: {
    backgroundColor: "#2362df",
    width: 50,
    height: 50,
    // padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#236cff",
  },
  textHeader: {
    fontSize: 25,
    color: "",
    fontWeight: "bold",
  },
  theraTitle: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default WelcomeScreen;
