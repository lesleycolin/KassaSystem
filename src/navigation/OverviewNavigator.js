import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OverviewScreen from "../screens/OverviewScreen";
import { myColors } from "../utilities/Colors";

const OverviewStack = createStackNavigator();

const OverviewNavigator = () => {
  return (
    <OverviewStack.Navigator
      screenOptions={{
        headerTintColor: myColors.primary,
        headerStyle: { backgroundColor: myColors.backGround },
      }}
    >
      <OverviewStack.Screen name="OVERZICHT" component={OverviewScreen} />
    </OverviewStack.Navigator>
  );
};

export default OverviewNavigator;

const styles = StyleSheet.create({});
