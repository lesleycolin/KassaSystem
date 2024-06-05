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
import { auth } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigation();

  // States
  const [isVisible, setIsVisible] = useState(true);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const userLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      const username = user ? user.name || user.email : "User";

      dispatch(login({ email }));
      Alert.alert("Success", `Logged in successfully, ${username}!`);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        Alert.alert("Error", "No user found with this email address!");
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Error", "Incorrect password!");
      } else {
        Alert.alert("Error", "An error occurred during login.");
      }
      console.error("Error logging in user:", error);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <Image
        style={styles.image}
        source={require("../../assets/logos/Cash-register-Photo.jpg")}
      />
      <Text style={styles.title}>Login</Text>

      <KeyboardAwareScrollView style={styles.loginField}>
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
        <TouchableOpacity onPress={userLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
