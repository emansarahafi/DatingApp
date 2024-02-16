import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";
import { useState } from "react";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/log-in.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.spacer} />
      <TextInput
        outlined
        label="Email address"
        value={email}
        textContentType="emailAddress"
        autoCompleteType="email"
        onChangeText={(text) => {
          setEmail(text);
        }}
        selectionColor="red"
        style={styles.input}
      />
      <TextInput
        outlined
        label="Password"
        value={password}
        textContentType="password"
        autoCompleteType="password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        selectionColor="red"
        secureTextEntry={true}
        style={styles.input}
      />
      <Text style={styles.forgotPassword}>Forgot your Password</Text>
      <Pressable
        style={styles.buttonLogin}
        onPress={() => navigation.navigate("DrawNavigation", { email })}
      >
        <Text style={styles.textStyle}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 50,
  },
  spacer: {
    height: 70,
  },
  input: {
    marginBottom: 10,
    width: "80%",
    backgroundColor: "whitesmoke",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonLogin: {
    borderRadius: 20,
    padding: 10,
    width: 100,
    backgroundColor: "#e5d5da",
  },
  forgotPassword: {
    fontSize: 14,
    color: "purple", 
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: 20,
  },
});
