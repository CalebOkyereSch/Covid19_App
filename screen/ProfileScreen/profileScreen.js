import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { countries } from "../../App";
const countryData = gql`
  query {
    countries {
      country
      countryInfo {
        _id
        flag
      }
    }
  }
`;
const ProfileScreen = () => {
  const { loading, error, data } = useQuery(
    countryData,
    (client = { countries })
  );
  const [check, setCheck] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [from, setFrom] = useState({
    country: "Ghana",
    flag: "https://disease.sh/assets/img/flags/gh.png",
  });
  const [to, setTo] = useState({
    country: "Ghana",
    flag: "https://disease.sh/assets/img/flags/gh.png",
  });
  // const [country, setCountry] = useState([]);

  const findId = (id) => {
    data.countries.forEach((item) => {
      if (item.countryInfo._id == id) {
        setVisible(false);
        let name = item.country;
        let fl = item.countryInfo.flag;
        let data = {
          country: name,
          flag: fl,
        };
        setFrom(data);
      }
    });
  };
  const findId2 = (id) => {
    data.countries.forEach((item) => {
      if (item.countryInfo._id == id) {
        setVisible2(false);
        let name = item.country;
        let fl = item.countryInfo.flag;
        let data = {
          country: name,
          flag: fl,
        };
        setTo(data);
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ minHeight: 200, marginTop: 20, marginLeft: 5 }}>
          <Text style={{ fontSize: 13, fontWeight: "700" }}>
            Personal Details
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Text style={{ marginHorizontal: 20 }}>Enter Age</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#ddd",
                marginHorizontal: 20,
                color: "#000",
                fontSize: 14,
                marginVertical: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => setCheck("female")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name={
                      check === "female"
                        ? "ios-checkmark-circle"
                        : "ios-checkmark-circle-outline"
                    }
                    size={26}
                  />
                  <Text style={{ marginLeft: 5 }}>Female</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => setCheck("male")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name={
                      check === "male"
                        ? "ios-checkmark-circle"
                        : "ios-checkmark-circle-outline"
                    }
                    size={26}
                  />
                  <Text style={{ marginLeft: 5 }}>Male</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ minHeight: 350, marginHorizontal: 5 }}>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                marginBottom: 5,
                color: "#000",
              }}
            >
              Travel History
            </Text>
            <Text style={{ fontSize: 10 }}>
              Select the last two countries you visited(if applicable)
            </Text>
          </View>
          <View style={{ flexDirection: "row", height: 120, padding: 10 }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                flex: 1,
                marginHorizontal: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setVisible(!isVisible);
                }}
              >
                <Image
                  // source={require("../../assets/images/10.jpg")}
                  source={{ uri: from.flag }}
                  style={{ height: 20, width: 30 }}
                />
                <Text>{from.country} </Text>
              </TouchableOpacity>
            </View>
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={isVisible}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 480,
                  background: "#fff",
                  borderWidth: 5,
                  borderColor: "#ddd",
                  width: 300,
                }}
              >
                {loading ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ActivityIndicator size="large" />
                  </View>
                ) : (
                  <ScrollView>
                    {data.countries.map((item, index) => (
                      <View key={index}>
                        <TouchableOpacity
                          onPress={() => {
                            findId(item.countryInfo._id);
                          }}
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 10,
                          }}
                        >
                          <Image
                            source={{ uri: item.countryInfo.flag }}
                            style={{ width: 20, height: 20 }}
                            resizeMode="contain"
                          />
                          <Text>{item.country} </Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>
            </Modal>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                flex: 1,
                marginHorizontal: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setVisible2(!isVisible2)}
              >
                <Image
                  source={{ uri: to.flag }}
                  style={{ height: 20, width: 30 }}
                />
                <Text>{to.country}</Text>
              </TouchableOpacity>
              <Modal
                animationType={"slide"}
                transparent={false}
                visible={isVisible2}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 480,
                    background: "#fff",
                    borderWidth: 5,
                    borderColor: "#ddd",
                    width: 300,
                  }}
                >
                  {loading ? (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ActivityIndicator size="large" />
                    </View>
                  ) : (
                    <ScrollView>
                      {data.countries.map((item, index) => (
                        <View key={index}>
                          <TouchableOpacity
                            onPress={() => {
                              findId2(item.countryInfo._id);
                            }}
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              paddingHorizontal: 10,
                            }}
                          >
                            <Image
                              source={{ uri: item.countryInfo.flag }}
                              style={{ width: 20, height: 20 }}
                              resizeMode="contain"
                            />
                            <Text>{item.country} </Text>
                          </TouchableOpacity>
                        </View>
                      ))}
                    </ScrollView>
                  )}
                </View>
              </Modal>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                marginBottom: 5,
                color: "#000",
              }}
            >
              Medical Professional Information
            </Text>
            <Text style={{ fontSize: 10 }}>
              Applicable if you are a health worker
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "300",
                marginTop: 30,
                marginBottom: 5,
              }}
            >
              Health License Number
            </Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#ddd",
                marginHorizontal: 20,
                color: "#000",
                fontSize: 14,
                marginVertical: 10,
              }}
            />
          </View>
        </View>

        <View
          style={{ backgroundColor: "#000", marginHorizontal: 20, height: 40 }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "500",
                color: "#ddd",
                marginLeft: 20,
              }}
            >
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default graphql(countryData)(ProfileScreen);
