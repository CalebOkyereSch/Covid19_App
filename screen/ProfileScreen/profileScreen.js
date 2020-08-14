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
import axios from "axios";
import CountryModal from "../../component/countryModal";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState("");
  const [openKey, setKey] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [from, setFrom] = useState({
    country: "Ghana",
    flag: "https://disease.sh/assets/img/flags/gh.png",
  });
  const [to, setTo] = useState({
    country: "Ghana",
    flag: "https://disease.sh/assets/img/flags/gh.png",
  });

  const findId = (id) => {
    data.forEach((item) => {
      if (item.name == id) {
        setVisible(false);
        let name = item.name;
        let fl = item.flag;
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
      if (item.name == id) {
        setVisible2(false);
        let name = item.name;
        let fl = item.flag;
        let data = {
          country: name,
          flag: fl,
        };
        setTo(data);
      }
    });
  };

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((countries) => {
        setData(countries);
      })
      .catch((err) => {
        throw err;
      });
  });

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
                  setKey(!openKey);
                }}
              >
                <Image
                  source={{ uri: from.flag }}
                  style={{ height: 20, width: 30 }}
                />
                <Text>{from.country} </Text>
              </TouchableOpacity>
            </View>
            <CountryModal openKey={openKey} findId={findId} data={data} />
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
              <CountryModal openKey={isVisible2} findId={findId2} data={data} />
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

export default ProfileScreen;
