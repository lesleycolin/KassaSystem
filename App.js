import "react-native-gesture-handler";

import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";

import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";

//redux imports
import { Provider } from "react-redux";
import store from "./src/redux/store";
import RootNavigation from "./src/navigation/RootNavigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const [isFontLoaded, fontError] = useFonts({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    Angkor: require("./assets/fonts/Angkor-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (isFontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [isFontLoaded, fontError]);

  if (!isFontLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation isAuth={isAuth} />
        </NavigationContainer>
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
