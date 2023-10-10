import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../theme/styles";
import { foodapp } from "../../../assets";
import CustomLongButton from "../../components/basic/CustomLongButton";
import { useNavigation } from "@react-navigation/native";
import InputWithLabel from "../../components/basic/InputWithLabel";
import useAuthContext from "../../hooks/useAuthContext";
import Header from "../../components/basic/Header";

const SignUpScreen = () => {
  navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Header
        title="Login"
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={THEME.COLORS.BLACK.NIGHT}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.row}>
          <Text style={styles.smtext}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={[styles.signup]}>Login</Text>
          </TouchableOpacity>
        </View>
        <InputWithLabel
          label={"Name"}
          placeholder={"Enter your name"}
          value={username}
          onChangeText={setUsername}
        />

        <InputWithLabel
          label={"Email"}
          placeholder={"Enter your email"}
          value={username}
          onChangeText={setUsername}
        />
        <InputWithLabel
          label={"Password"}
          placeholder={"Enter your password"}
          value={password}
          onChangeText={setPassword}
          isSecret
        />
        <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: "5%" }}>
          <Text style={{ color: THEME.COLORS.BLUE.VERDIGRIS }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <CustomLongButton
          text="Sign Up"
          borderColor="transparent"
          backgroundColor={THEME.COLORS.BLUE.VERDIGRIS}
          isPrimary={true}
          height={50}
          width={"100%"}
          borderRadius={10}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <View style={styles.row}>
          <Text style={styles.smtext}>
            By signing up, you are agreeing to our{" "}
            <Text style={styles.signup}>Terms of Service</Text> and{" "}
            <Text style={styles.signup}>Privacy Policy</Text>
          </Text>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
  },
  imageContainer: {
    alignSelf: "center",
    width: 400,
    overflow: "hidden", // for hide the not important parts from circle
    height: 200,
  },
  background: {
    borderRadius: 600, // border borderRadius same as width and height
    width: 600,
    height: 600,
    marginLeft: -100, // reposition the circle inside parent view
    position: "absolute",
    bottom: 0, // show the bottom part of circle
    overflow: "hidden", // hide not important part of image
  },
  image: {
    height: 200, // same width and height for the container
    width: 400,
    position: "absolute", // position it in circle
    bottom: 0, // position it in circle
    marginLeft: 100, // center it in main view same value as marginLeft for circle but positive
  },
  content: {
    paddingTop: "5%",
    paddingHorizontal: "7.5%",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: THEME.COLORS.PRIMARY,
    marginBottom: "5%",
    paddingTop: "5%",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: THEME.COLORS.GRAY.DIM,
    marginBottom: "25%",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  smtext: {
    color: THEME.COLORS.GRAY.DIM,
  },
  signup: {
    marginLeft: 5,
    color: THEME.COLORS.BLUE.VERDIGRIS,
  },
});

export default SignUpScreen;
