import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Details from "../screens/Details";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import useAuthContext from "../hooks/useAuthContext";

const Stack = createStackNavigator();

const Layout = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);
    delay(1000).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
          {!user ? (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Details" component={Details} />
            </>
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
});
