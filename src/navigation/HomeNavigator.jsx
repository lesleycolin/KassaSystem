import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Splash" component={SplashScreen} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Signup" component={Signup} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
