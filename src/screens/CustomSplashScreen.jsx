import { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { myColors } from "../utilities/Colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const CustomSplashScreen = () => {
  //navigation setup
  const nav = useNavigation();

  //useEffects
  useEffect(() => {
    setTimeout(() => {
      nav.replace("Signup");
    }, 3000);
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.screen}>
        <Text style={styles.title}>TC DUVELS KASSA</Text>
        <Text style={styles.title}>WORDT GELADEN</Text>
        <Image
          style={styles.image}
          source={require("../../assets/logos/Cash-register-Photo.jpg")}
        />
      </View>
    </View>
  );
};

export default CustomSplashScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: myColors.backGround,
    justifyContent: "center",
  },
  title: {
    marginBottom: 80,
    color: myColors.primary,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
