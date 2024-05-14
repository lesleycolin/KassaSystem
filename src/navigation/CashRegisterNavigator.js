import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CashRegisterScreen from "../screens/CashRegisterScreen";

const CashRegisterStack = createStackNavigator();

const CashRegisterNavigator = () => {
  return (
    <CashRegisterStack.Navigator
      screenOptions={{
        headerTintColor: "#EEEEEE",
        headerStyle: { backgroundColor: "#222831" },
      }}
    >
      <CashRegisterStack.Screen
        name="KASSA REGISTER"
        component={CashRegisterScreen}
      />
    </CashRegisterStack.Navigator>
  );
};

export default CashRegisterNavigator;

const styles = StyleSheet.create({});
