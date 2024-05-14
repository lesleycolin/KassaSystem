import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OverviewScreen from "../screens/OverviewScreen";

const OverviewStack = createStackNavigator();

const OverviewNavigator = () => {
  return (
    <OverviewStack.Navigator
      screenOptions={{
        headerTintColor: "#EEEEEE",
        headerStyle: { backgroundColor: "#222831" },
      }}
    >
      <OverviewStack.Screen name="OVERZICHT" component={OverviewScreen} />
    </OverviewStack.Navigator>
  );
};

export default OverviewNavigator;

const styles = StyleSheet.create({});
