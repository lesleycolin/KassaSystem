import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import { myColors } from "../utilities/Colors";

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTintColor: myColors.primary,
        headerStyle: { backgroundColor: myColors.backGround },
      }}
    >
      <ProfileStack.Screen name="PROFILE" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
