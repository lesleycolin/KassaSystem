import React from "react";
import "react-native-gesture-handler";
// import { useAuth } from "../hooks/useAuth";
import HomeScreen from "../screens/HomeScreen";
import CashRegisterScreen from "../screens/CashRegisterScreen";
import Signup from "../screens/Signup";
import TabNavigator from "./TabNavigator";

const RootNavigation = ({ isAuth }) => {
  // const { isAuthenticated } = useAuth();

  return isAuth ? <TabNavigator /> : <Signup />;
};

export default RootNavigation;
