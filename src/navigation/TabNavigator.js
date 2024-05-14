import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import CashRegisterNavigator from "./CashRegisterNavigator";
import OverviewNavigator from "./OverviewNavigator";
import ClientNavigator from "./ClientNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#222831" },
        headerTintColor: "#CADEFC",
        tabBarStyle: { backgroundColor: "#222831" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#c8c8c8",
      }}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
          headerTitleStyle: { fontFamily: "Angkor" },
          tabBarLabelStyle: { fontFamily: "Angkor" },
        }}
      >
        <Tab.Screen
          name="Kassa"
          component={CashRegisterNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="cash-register" size={24} color="#EEEEEE" />
            ),
          }}
        />
        <Tab.Screen
          name="Overzicht"
          component={OverviewNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="linechart" size={24} color="#EEEEEE" />
            ),
          }}
        />
        <Tab.Screen
          name="Klanten"
          component={ClientNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people" size={24} color="#EEEEEE" />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
