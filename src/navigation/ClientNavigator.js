import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ClientsScreen from "../screens/ClientsScreen";

const ClientStack = createStackNavigator();

const ClientNavigator = () => {
  return (
    <ClientStack.Navigator
      screenOptions={{
        headerTintColor: "#EEEEEE",
        headerStyle: { backgroundColor: "#222831" },
      }}
    >
      <ClientStack.Screen name="KLANTEN" component={ClientsScreen} />
    </ClientStack.Navigator>
  );
};

export default ClientNavigator;

const styles = StyleSheet.create({});
