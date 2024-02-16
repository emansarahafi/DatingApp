import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "@rneui/themed";
import Modal from "react-native-modal";
import { faker } from "@faker-js/faker";
import axios from "axios";

export default function User({
  firstName,
  lastName,
  pictureUser,
  cellPhone,
  countryUser,
  ageUser,
}) {
  // Custom pastel color values
  const primaryColor = "#ADD8E6"; // Pastel Blue
  const secondaryColor = "#E6E6FA"; // Lavender

  const [isModalVisible, setModalVisible] = useState(false);
  const [quoteData, setQuoteData] = useState({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    // console.log(3);
  };

  const url = "https://api.quotable.io/random?tags=love";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setQuoteData(res.data);
      })
      .catch((err) => {
        // console.log("Error" + err);
        throw new Error("Error setting up the request");
      });
  }, []);

  return (
    <View>
      <Card containerStyle={{ borderRadius: 30, shadowRadius: 10, backgroundColor: primaryColor }}>
        <Card.Title>
          <View
            style={{
              width: "100%",
              fontSize: 14,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: secondaryColor,
              justifyContent: "center",
            }}
          >
            <Pressable onPress={toggleModal}>
              <Image
                source={require("../assets/plus-sign.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </Pressable>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 40,
                color: "#6495ED",
              }}
            >
              {firstName} {lastName}
            </Text>
          </View>
        </Card.Title>
        <Card.Divider />
        <View style={{ flexDirection: "row" }}>
          <Card.Image
            style={{
              width: 90,
              marginHorizontal: 9,
              height: 100,
              borderRadius: 80,
            }}
            source={{
              uri: pictureUser,
            }}
          />
          <View>
            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
            📞 Phone: <Text style={{ fontWeight: "500" }}>{cellPhone}</Text>
            </Text>

            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
            🌍 Country: <Text style={{ fontWeight: "500" }}>{countryUser}</Text>
            </Text>
            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
            🎂 Age: <Text style={{ fontWeight: "500" }}>{ageUser}</Text>
            </Text>
            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
            🧑‍💼 Job: <Text style={{ fontWeight: "500" }}>{faker.person.jobType()}</Text>
            </Text>
          </View>
        </View>
      </Card>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View
          style={{
            alignItems: "center",
            backgroundColor: "white",
            height: "50%",
            justifyContent: "space-between",
            borderRadius: 20,
            padding: 20,
          }}
        >
          <Text
            style={{
              flex: 1,
              // backgroundColor: "yellow"
            }}
          >
            Hi, My name is {firstName}
          </Text>
          <Image
            source={{ uri: pictureUser }}
            style={{
              height: 130,
              width: 130,
              resizeMode: "contain",
              borderRadius: 15,
              flex: 2,
              // backgroundColor: "green",
            }}
          />

          {/* TODO: ADD A DYNAMIC QUOTE FROM THE API: https://api.quotable.io/random?tags=love" */}
          {quoteData.content && (
            <Text
              style={{
                flex: 3,
                marginTop: 20,
                flexWrap: 'wrap',
                color: 'black',
              }}
            >
              {quoteData.content}
            </Text>
          )}

          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: "https://i.pinimg.com/564x/6c/f2/dd/6cf2dda53700582bf836ef0333785ec1.jpg",
              }}
            />
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: "https://i.pinimg.com/564x/6c/ac/af/6cacaf8325f5c4138c1b371d59722916.jpg",
              }}
            />
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: "https://i.pinimg.com/564x/8e/64/f3/8e64f3086daea43a5a866f6eb6675df5.jpg",
              }}
            />
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: "https://i.pinimg.com/564x/e5/61/62/e561628e1729cffd1807586ba771397f.jpg",
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
