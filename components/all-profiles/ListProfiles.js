import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import User from "../User";
import { faker } from "@faker-js/faker";
import uuid from "react-native-uuid";

export default function ListProfiles() {
  const [state, setData] = useState([]);
  const url = "https://randomuser.me/api/?results=100";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        // console.log("Error" + err);
        throw new Error("Error setting up the request");
      });
  }, []);
  return (
    <View>
      {state.length === 0 ? (
        <Text>Loading... ⌛ </Text>
      ) : (
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item) => uuid.v4()}
            data={state}
            renderItem={({ item }) => (
              <User
                cellPhone={item.cell}
                emailUser={item.email}
                ageUser={item.dob.age}
                countryUser={item.location.country}
                firstName={item.name.first}
                lastName={item.name.last}
                pictureUser={item.picture.medium}
                jobType={faker.person.jobType()}
              />
            )}
            style={{ marginTop: 30 }}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
