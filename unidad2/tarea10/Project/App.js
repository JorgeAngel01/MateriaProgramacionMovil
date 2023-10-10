import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as ReactStatus } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Details from "./src/screens/Details";
import { AuthProvider } from "./src/context/AuthContext";
import { THEME } from "./src/theme/styles";
import StartScreen from "./src/screens/foodapp/StartScreen";
import LoginScreen from "./src/screens/foodapp/LoginScreen";
import HomeScreen from "./src/screens/foodapp/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavBar from "./src/components/foodapp/NavBar";
import WishlistScreen from "./src/screens/foodapp/WishlistScreen";
import SignUpScreen from "./src/screens/foodapp/SignUpScreen";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </View>
      <View style={{ justifyContent: 'flex-end', marginBottom: 50 }}>
        <DrawerItem
          label={() => <Text style={{ color: THEME.COLORS.BLACK.EERIE }}>Logout</Text>}
          onPress={() => navigation.navigate("Start")}
        />
      </View>
    </DrawerContentScrollView>
  );
}


function HomeTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <NavBar {...props} />}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Wishlist" component={WishlistScreen} />
      <Tabs.Screen name="Cart" component={WishlistScreen} />
      <Tabs.Screen name="Orders" component={WishlistScreen} />
      <Tabs.Screen name="Profile" component={WishlistScreen} />
    </Tabs.Navigator>
  );
}

function SubDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubDrawer"
              component={SubDrawer}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </AuthProvider>
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
