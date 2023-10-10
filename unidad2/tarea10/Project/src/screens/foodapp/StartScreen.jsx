import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../theme/styles";
import { foodapp } from "../../../assets";
import CustomLongButton from "../../components/basic/CustomLongButton";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
    navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{uri: "https://img.freepik.com/free-vector/people-choosing-products-grocery-store-trolley-vegetables-basket-flat-vector-illustration-shopping-supermarket-concept_74855-10122.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1696377600&semt=ais"}} style={styles.image} />
      <Text style={styles.title}>
        Shopping with best{"\n"} e-commerce store
      </Text>
      <Text style={styles.text}>
        Find best shopping experience with{"\n"}
        us by your favoirite daily needs!
      </Text>
      <CustomLongButton
        text={"Get Started"}
        borderColor="transparent"
        backgroundColor={THEME.COLORS.BLUE.VERDIGRIS}
        isPrimary={true}
        height={50}
        width={"90%"}
        borderRadius={10}
        onPress={() => { navigation.navigate("Login") }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: "#fbfcfe",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: "90%",
    height: 300,
    resizeMode: "cover",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: THEME.COLORS.PRIMARY,
    marginBottom: "5%",
    paddingTop: "5%",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: THEME.COLORS.GRAY.DIM,
    marginBottom: "25%",
  },
});

export default StartScreen;
