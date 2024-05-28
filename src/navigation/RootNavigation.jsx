import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const RootNavigation = ({ isAuth }) => {
  return isAuth ? (
    <TabNavigator />
  ) : (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
