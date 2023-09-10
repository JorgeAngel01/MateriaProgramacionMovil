import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { useState } from "react";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

export default function App() {
  const [screen, setScreen] = useState(1);

  onClickScreen1 = () => {
    setScreen(1);
  };

  onClickScreen2 = () => {
    setScreen(2);
  };

  onClickScreen3 = () => {
    setScreen(3);
  };
  

  return (
    <View style={styles.container}>
      {screen === 1 ? (
        <WelcomeScreen onSignInPress={onClickScreen2} onSignUpPress={onClickScreen3}/>
      ) : screen === 2 ? (
        <SignInScreen onPress={onClickScreen1} />
      ) : (
        <SignUpScreen onPress={onClickScreen1} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: ReactStatus.currentHeight,
  },
});
