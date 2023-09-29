import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import { THEME } from "../../theme/styles";
import { tarea6 } from "../../../assets";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}> Play and win! </Text>
      <Text style={styles.text}>
        {" "}
        Game for anyone who likes try {"\n"} luck at guessing numbers
      </Text>
      <Image
        source={tarea6}
        style={styles.image}
        resizeMode="contain" // Set resizeMode to 'contain'
      />

      <Button
        onPress={() => navigation.navigate("Screen", {
            texto1: "$234 000 000",
            texto2: "UroMillions"
        })}
        isPrimary
        text="Get Started"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.GREEN.DARKSPRING,
  },
  image: {
    width: "80%",
    height: "60%",
  },
  textHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
  },
  text: {
    color: THEME.COLORS.GRAY.ASH,
    textAlign: "center",
  },
});

export default HomeScreen;
