import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "react-native-elements";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { lightTheme } from "./src/themes";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <ThemeProvider theme={lightTheme}>
          <StatusBar style="dark" />
          <SafeAreaProvider>
            <StackNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
}
