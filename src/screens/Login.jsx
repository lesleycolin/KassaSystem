import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../utilities/Colors";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { authentication } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const Signup = ({ db }) => {
  // States
  const [isVisible, setIsVisible] = useState(true);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password, name } = userCredentials;

  const uid = uuid.v4();

  const userAccount = () => {
    try {
      signInWithEmailAndPassword(authentication, email, password);

      // Set the user document in the Firestore database
      setDoc(doc(db, "users", uid), {
        email: email,
        id: authentication.currentUser.uid,
      });
    } catch (error) {}
    if (error.code === "auth/invalid-email") {
      Alert.alert("Error", "That email address is invalid!");
    } else if (error.code === "auth/invalid-password") {
      Alert.alert("Error", "That password address is invalid!");
    }
    console.error("Error creating user account:", error);
  };

  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <Image
        style={styles.image}
        source={require("../../assets/logos/Cash-register-Photo.jpg")}
      />
      <Text style={styles.title}>Login</Text>
      <ScrollView style={styles.loginField}>
        <View>
          <Text style={styles.inputTitle}>Email</Text>
          <View style={styles.inputfield}>
            <TextInput
              value={email}
              onChangeText={(value) => {
                setUserCredentials({ ...userCredentials, email: value });
              }}
              maxLength={35}
              keyboardType="email-address"
              style={styles.textinput}
            />
          </View>
          <Text style={styles.inputTitle}>Password</Text>
          <View style={styles.inputfield}>
            <TextInput
              value={password}
              onChangeText={(value) => {
                setUserCredentials({ ...userCredentials, password: value });
              }}
              maxLength={20}
              secureTextEntry={isVisible}
              keyboardType="default"
              style={styles.textinput}
            />
            <Ionicons
              onPress={() => setIsVisible(!isVisible)}
              name={isVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color={myColors.primary}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={userAccount} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
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
