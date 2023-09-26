import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View } from "react-native";
import { THEME } from "./src/theme/styles";
import { Constants } from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RMList from "./src/screens/RickMortyList/RMList";
import CharacterScreen from "./src/screens/RickMortyList/CharacterScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="List"
         
        >
          <Stack.Screen
            name="List"
            component={RMList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Character" component={CharacterScreen} 
          options={
            ({route}) => ({
              title: route.params.name,
              headerStyle: {
                backgroundColor: THEME.COLORS.GUNMETAL,
              },
              headerTintColor: THEME.COLORS.WHITE,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            })
          }/>
        </Stack.Navigator>
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
    backgroundColor: THEME.COLORS.GUNMETAL,
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
