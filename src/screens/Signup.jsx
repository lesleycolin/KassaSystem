import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../utilities/Colors";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <Image
        style={styles.image}
        source={require("../../assets/logos/Cash-register-Photo.jpg")}
      />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>or</Text>
      <Text style={styles.login}>Login</Text>
      <ScrollView style={styles.loginField}>
        <View>
          <Text style={styles.inputTitle}>Username</Text>
          <View style={styles.inputfield}>
            <TextInput
              maxLength={35}
              keyboardType="name-phone-pad"
              style={styles.textinput}
            />
          </View>
          <Text style={styles.inputTitle}>Email</Text>
          <View style={styles.inputfield}>
            <TextInput
              maxLength={35}
              keyboardType="name-phone-pad"
              style={styles.textinput}
            />
          </View>
          <Text style={styles.inputTitle}>Password</Text>
          <View style={styles.inputfield}>
            <TextInput
              maxLength={20}
              secureTextEntry={isVisible}
              keyboardType="ascii-capable"
              style={styles.textinput}
            />
            <Ionicons
              onPress={() => setIsVisible(!isVisible)}
              name={isVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color={myColors.primary}
            />
          </View>
          <Text numberOfLines={2} style={styles.footnote}>
            By continuing you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: myColors.backGround,
  },
  image: {
    height: "15%",
    width: "100%",
  },
  title: {
    color: myColors.primary,
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    color: myColors.secondary,
    fontSize: 14,
    fontWeight: "100",
    marginTop: 10,
    textAlign: "center",
  },
  login: {
    color: myColors.focus,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  loginField: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: myColors.secondary,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 20,
  },
  inputfield: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    backgroundColor: myColors.input,
    color: myColors.primary,
    fontSize: 16,
    marginTop: 10,
  },
  textinput: {
    flex: 0.9,
    color: myColors.primary,
    fontSize: 16,
  },
  footnote: {
    color: myColors.secondary,
    fontSize: 12,
    letterSpacing: 0.7,
    lineHeight: 25,
    fontWeight: "100",
    marginTop: 15,
    textAlign: "left",
    width: "95%",
  },
  button: {
    height: 50,
    backgroundColor: myColors.focus,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  buttonText: {
    color: myColors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
});
