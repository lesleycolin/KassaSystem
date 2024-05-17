import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CashRegisterScreen from "../screens/CashRegisterScreen";
import { myColors } from "../utilities/Colors";

const CashRegisterStack = createStackNavigator();

const CashRegisterNavigator = () => {
  return (
    <CashRegisterStack.Navigator
      screenOptions={{
        headerTintColor: myColors.primary,
        headerStyle: { backgroundColor: myColors.backGround },
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
