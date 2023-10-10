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

const LoginScreen = () => {
  navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin: onLogin } = useAuthContext();

  const handleLogin = () => {
    try {
      const loginValue = onLogin(username, password);
      if (loginValue) {
        console.log("Login successful");
        navigation.navigate("SubDrawer");
      } else {
        console.log("Login failed");
        Alert.alert("Error", "Login failed");
      }
    } catch (error) {
      console.log("Error: ", error);
      Alert.alert("Error", "Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.background}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544598740-cf6d85e2cbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome!</Text>
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
          text={"Login"}
          borderColor="transparent"
          backgroundColor={THEME.COLORS.BLUE.VERDIGRIS}
          isPrimary={true}
          height={50}
          width={"100%"}
          borderRadius={10}
          onPress={() => {
            handleLogin();
          }}
        />
        <View style={styles.row}>
          <Text style={styles.smtext}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={[styles.signup]}>Sign up</Text>
          </TouchableOpacity>
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
    alignSelf: 'center',
    width: 400,
    overflow: 'hidden', // for hide the not important parts from circle
    height: 200,
  },
  background: {
    borderRadius: 600, // border borderRadius same as width and height
    width: 600,
    height: 600,
    marginLeft: -100, // reposition the circle inside parent view
    position: 'absolute',
    bottom: 0, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
  },
  image: {
    height: 200, // same width and height for the container
    width: 400,
    position: 'absolute', // position it in circle
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
    flexDirection: "row",
    alignItems: "center",
  },
  smtext: {
    color: THEME.COLORS.GRAY.DIM,
  },
  signup: {
    marginLeft: 5,
    color: THEME.COLORS.BLUE.VERDIGRIS,
  },
});

export default LoginScreen;
