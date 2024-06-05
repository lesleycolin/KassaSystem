import "react-native-gesture-handler";

import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";

//hooks import
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";

//redux imports
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

//navigation

import RootNavigation from "./src/navigation/RootNavigation";
import AuthContextProvider from "./src/contexts/AuthContext";

//firebase imports
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseConfig";

SplashScreen.preventAutoHideAsync();

export default function App() {
  //state hooks
  const [isAppReady, setIsAppReady] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsAuth(user !== null);
      setIsAuthLoading(false);

      try {
        await Font.loadAsync({
          "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
          OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
          Angkor: require("./assets/fonts/Angkor-Regular.ttf"),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsAppReady(true);
      }
    });

    return unsubscribe;
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthContextProvider>
            <NavigationContainer>
              <RootNavigation isAuth={isAuth} />
            </NavigationContainer>
          </AuthContextProvider>
        </PersistGate>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Angkor",
  },
});
