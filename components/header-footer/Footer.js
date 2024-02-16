import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All rights reserved by <Text style={styles.bold}>SMU</Text>, 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D8BFD8", // Pastel purple color
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
  },
  text: {
    fontSize: 14,
    color: "#333", // Text color
    fontStyle: "italic", // Italicize the text
  },
  bold: {
    fontWeight: "bold", // Make the text bold
    color: "#6B3E85", // Custom color for the bold text
  },
});
