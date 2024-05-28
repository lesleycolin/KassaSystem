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
    <View style={styles.container}>
      <Text>HomeNavigator</Text>
    </View>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
