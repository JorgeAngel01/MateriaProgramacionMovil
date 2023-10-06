import React from "react";
import { Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { THEME } from "../theme/styles";
import InputWithLabel from "../components/InputWithLabel";
import SwitchButton from "../components/SwitchButton";
import { AntDesign } from "@expo/vector-icons";

const SignInScreen = ({ onPress }) => {
  const Form = (
    <View style={styles.form}>
      <InputWithLabel label="Full name" placeholder="Enter your name" />
      <InputWithLabel label="Email address" placeholder="name@example.com" />
      <InputWithLabel label=" Create password" placeholder="Enter your Password" />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={styles.textHeader}>Create new</Text>
        <Text style={styles.textHeader}>account</Text>
      </View>
      {Form}
      <Button isPrimary text="Sign In!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginHorizontal: 30,
  },
  form: {
    width: "100%",
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: THEME.COLORS.GREY,
  },
});

export default SignInScreen;
