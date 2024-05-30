import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { myColors } from "../utilities/Colors";

import CashRegisterNavigator from "./CashRegisterNavigator";
import OverviewNavigator from "./OverviewNavigator";
import ClientNavigator from "./ClientNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    //Navigator
    <Tab.Navigator
      initialRouteName="CashRegisterScreen"
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
        <Tab.Screen
          name="Profiel"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={24} color={myColors.primary} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
