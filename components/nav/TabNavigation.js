import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListProfiles from "../all-profiles/ListProfiles";
import Form from "../Form";
import ListUsers from "../top-10/ListUsers";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "All Profiles") {
            iconName = focused ? "people" : "people-outline";
          }
          if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          if (route.name === "Top 10") {
            iconName = focused ? "heart" : "heart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="All Profiles"
        component={ListProfiles}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Top 10"
        component={ListUsers}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={Form}
      />
    </Tab.Navigator>
  );
}
