import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { myColors } from "../utilities/Colors";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert("Success", "Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
      Alert.alert("Error", "An error occurred during logout.");
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      {userData ? (
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{userData.name}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData.email}</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: myColors.backGround,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    color: myColors.primary,
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    color: myColors.secondary,
    fontSize: 18,
    fontWeight: "400",
    marginTop: 10,
  },
  value: {
    color: myColors.primary,
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    height: 50,
    backgroundColor: myColors.focus,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 40,
    width: "100%",
  },
  buttonText: {
    color: myColors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  loading: {
    color: myColors.primary,
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Profile;
