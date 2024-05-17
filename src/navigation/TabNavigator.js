import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeNavigator from "./HomeNavigator";
import CashRegisterNavigator from "./CashRegisterNavigator";
import OverviewNavigator from "./OverviewNavigator";
import ClientNavigator from "./ClientNavigator";
import { myColors } from "../utilities/Colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    //Navigator
    <Tab.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerStyle: { backgroundColor: myColors.backGround },
        headerTintColor: myColors.secondary,
        tabBarStyle: { backgroundColor: myColors.backGround },
        tabBarActiveTintColor: myColors.focus,
        tabBarInactiveTintColor: myColors.third,
      }}
    >
      {/* Group navigation */}
      <Tab.Group
        screenOptions={{
          headerShown: false,
          headerTitleStyle: { fontFamily: "Angkor" },
          tabBarLabelStyle: { fontFamily: "Angkor" },
        }}
      >
        {/* bottom tabs to navigate to the main screens */}
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={24} color={myColors.primary} />
            ),
          }}
        />
        <Tab.Screen
          name="Kassa"
          component={CashRegisterNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name="cash-register"
                size={24}
                color={myColors.primary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Klanten"
          component={ClientNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people" size={24} color={myColors.primary} />
            ),
          }}
        />
        <Tab.Screen
          name="Overzicht"
          component={OverviewNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="linechart" size={24} color={myColors.primary} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
