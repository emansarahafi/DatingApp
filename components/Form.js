import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";

export default function Form() {
  const user = {
    firstName: "",
    lastName: "",
    birthday: "",
    country: "",
    city: "",
    job: "",
    email: "",
  };
  const [userInfo, setUserInfo] = useState(user); 
  // console.log(userInfo);
  return (
    <View style={styles.container}>
       {/* <Header /> */}
       <View style={styles.textContainer}>
        <Text style={styles.title}> Update Your Profile Infos</Text>
      </View>
      <View style={styles.containerScroll}>
        <ScrollView style={styles.subContainer}>
          <TextInput
            label="First Name"
            value={userInfo.firstName}
            onChangeText={(text) => {
              setUserInfo({ firstName: text });
            }}
            outlined
            selectionColor="red"
            style={styles.input}
          />
          <TextInput
            label="Last Name"
            value={userInfo.lastName}
            onChangeText={(text) => {
              setUserInfo({ lastName: text });
            }}
            outlined
            selectionColor="red"
            style={styles.input}
          />
          <TextInput
            label="Phone Number"
            value={userInfo.phone}
            onChangeText={(text) => {
              setUserInfo({ phone: text });
            }}
            outlined
            selectionColor="red"
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="Birthday"
            value={userInfo.birthday}
            onChangeText={(text) => {
              setUserInfo({ birthday: text });
            }}
            outlined
            selectionColor="red"
            style={styles.input}
          />
          <TextInput
            label="Country"
            value={userInfo.country}
            onChangeText={(text) => {
              setUserInfo({ country: text });
            }}
            outlined
            selectionColor="red"
            style={styles.input}
          />
          <TextInput
            label="City"
            value={userInfo.city}
            onChangeText={(text) => {
              setUserInfo({ city: text });
            }}
            outlined
            selectionColor="red"
            style={styles.input}
          />
          <TextInput
            label="Job"
            value={userInfo.job}
            onChangeText={(text) => {
              setUserInfo({ job: text });
            }}
            outlined
            selectionColor="red"
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={userInfo.email}
            onChangeText={(text) => {
              setUserInfo({ email: text });
            }}
            outlined
            selectionColor="red"
            style={styles.input}
            keyboardType="email-address"
          />
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerScroll: {
    flex: 1,
    height: 300,

    marginBottom: 30,
  },
  subContainer: {
    width: 250,
    marginTop: 90,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 100,
  },
  input: {
    marginBottom: 10,
  },
});
