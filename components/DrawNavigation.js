import * as React from "react";
import { Button, View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import TabNavigation from "./nav/TabNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function DrawNavigation({ route, isDarkMode }) {
  const { email } = route.params;
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <Text
            style={{
              marginVertical: 10,
              marginHorizontal: 15,
              color: isDarkMode ? "white" : "black",
            }}
          >
            Email Address: {email}
          </Text>

          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "TabNavigation") {
            iconName = focused ? "home" : "home-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        drawerActiveTintColor: "tomato",
        drawerInactiveTintColor: "gray",
      })}
    >
      <Drawer.Screen
        options={{
          drawerLabel: "Home",
          headerTitle: "👋 Welcome Back 🌟",
          headerTitleStyle: { fontSize: 14 },
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
        name="TabNavigation"
        component={TabNavigation}
      />
    </Drawer.Navigator>
  );
}
