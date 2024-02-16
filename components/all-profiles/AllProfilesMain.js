import React from "react";
import { StyleSheet, Text } from "react-native";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import ListProfiles from "./ListProfiles";

export default function AllProfilesMain({ isDarkMode }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text
        style={[
          styles.title,
          isDarkMode ? { color: "green" } : { color: "red" },
        ]}
      >
        All Profiles Ready to Start!
      </Text>
      <Text style={[isDarkMode ? { color: "white" } : { color: "black" }]}>
        Color Scheme: {isDarkMode ? "Dark" : "Light"}
      </Text>
      <ListProfiles />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});
