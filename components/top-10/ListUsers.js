import { StyleSheet, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User";
import uuid from "react-native-uuid";

export default function ListUsers() {
  const [state, setData] = useState([]);
  const url = "https://randomuser.me/api/?results=10";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ScrollView style={styles.container}>
      {state.length === 0 ? (
        <Text>Loading... ⌛</Text>
      ) : (
        state.map((elt) => (
          <User
            key={uuid.v4()}
            cellPhone={elt.cell}
            firstName={elt.name.first}
            lastName={elt.name.last}
            pictureUser={elt.picture.medium}
            ageUser={elt.dob.age}
            countryUser={elt.location.country}
          />
        ))
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginTop: 20,
  },
});
