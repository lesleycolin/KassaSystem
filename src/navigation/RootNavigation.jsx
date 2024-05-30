import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const RootNavigation = ({ isAuth }) => {
  return isAuth ? (
    <TabNavigator />
  ) : (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
        options={{
          title: "Sign Up",
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{
          title: "Login",
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          title: "Profile",
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
