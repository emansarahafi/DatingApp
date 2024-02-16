import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Switch, StyleSheet, useColorScheme, ImageBackground } from "react-native";
import DrawNavigation from "./components/DrawNavigation";
import SignIn from "./components/sign-in/SignIn";

export default function App() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark"); 
  const Stack = createNativeStackNavigator();

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode ? styles.DarkTheme : styles.LightTheme; 

  return (
    <ImageBackground
      source={{ uri: "https://images.pexels.com/photos/3910065/pexels-photo-3910065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
      resizeMode="cover"
      style={styles.container}
    >
      <NavigationContainer theme={theme}> 
        <Stack.Navigator
          screenOptions={{ headerShown: true }}
          initialRouteName="SignIn"
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen
            name="DrawNavigation"
            component={props => <DrawNavigation {...props} 
            isDarkMode={isDarkMode} />}
          />
        </Stack.Navigator>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          style={styles.switch}
        />
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  LightTheme: {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      text: "black",
      background: "transparent",
    },
  },
  DarkTheme: {
    ...DarkTheme,
    dark: false,
    colors: {
      ...DarkTheme.colors,
      text: "white",
      background: "transparent",
    },
  },
  switch: {
    position: "absolute",
    top: 40,
    right: 10,
  },
  container: {
    flex: 1,
  },
});
