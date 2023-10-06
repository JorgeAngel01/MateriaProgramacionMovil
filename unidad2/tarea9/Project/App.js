import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View, Text } from "react-native";
import { THEME } from "./src/theme/styles";
import { Constants } from "expo-constants";
import { AppContextProvider } from "./src/context/AppContext";
import Card from "./src/components/practica9/Card";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ThirdScreen from "./src/screens/u2t9/ThirdScreen";
import Screen from "./src/screens/u2t9/Screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppContextProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Screen} />
            <Stack.Screen name="Third" component={ThirdScreen} />
          </Stack.Navigator>
        </AppContextProvider>
        <StatusBar hidden={true} /> 
      </View>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingTop: ReactStatus.currentHeight,
    backgroundColor: THEME.COLORS.BLACK.NIGHT,
  },
});

/*

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
  
{
  screen === 1 ? (
  <WelcomeScreen onSignInPress={onClickScreen2} onSignUpPress={onClickScreen3}/>
  ) : screen === 2 ? (
  <SignInScreen onPress={onClickScreen1} />
  ) : (
  <SignUpScreen onPress={onClickScreen1} />
  )}
*/
