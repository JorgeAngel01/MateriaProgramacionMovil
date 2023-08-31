import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { THEME } from "../../theme/colors";
import { facebookImage, googleImage } from "../../../assets";
import IconButton from "../IconButton";

const LoginContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} value="eder.rivera@gmail.com" />
        <TextInput style={styles.input} secureTextEntry={true} />
        <Text style={styles.text}>Forgot password?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.line}></View>
        <Text style={{ fontWeight: "bold" }}> Or login with</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.row}>
        <IconButton text="Google" image={googleImage} />
        <IconButton text="Facebook" image={facebookImage} />
      </View>
      <View style={[styles.row, { justifyContent: "center", gap: 10 }]}>
        <Text
          style={{ color: THEME.COLORS.GREY, fontWeight: "bold", fontSize: 16 }}
        >
          Don't have an account?
        </Text>
        <Text style={styles.text}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  form: {
    gap: 20,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    borderColor: THEME.COLORS.GREY,
    paddingHorizontal: 20,
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    color: THEME.COLORS.GREEN.DARK,
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 16,
  },
  button: {
    backgroundColor: THEME.COLORS.GREEN.LIGHT,
    height: 60,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 19,
    fontWeight: "bold",
    color: THEME.COLORS.DARK_BLUE,
  },
  line: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: THEME.COLORS.GREY,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});

export default LoginContent;
