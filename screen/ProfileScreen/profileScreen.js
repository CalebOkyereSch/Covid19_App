import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [fcheck, setFCheck] = useState(false);
  const [mcheck, setMCheck] = useState(false);
  function fChecker() {
    setFCheck(!fcheck);
    setMCheck(false);
  }
  function mChecker() {
    setMCheck(!mcheck);
    setFCheck(false);
  }
  return (
    <View style={{ flex: 1 }}>
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
              onPress={() => fChecker()}
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
                    fcheck
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
              onPress={() => mChecker()}
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
                    mcheck
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
            >
              <Image
                source={require("../../assets/images/10.jpg")}
                style={{ height: 20, width: 30 }}
              />
              <Text>Ghana</Text>
            </TouchableOpacity>
          </View>
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
            >
              <Image
                source={require("../../assets/images/11.png")}
                style={{ height: 20, width: 30 }}
              />
              <Text>United States</Text>
            </TouchableOpacity>
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
    </View>
  );
};

export default ProfileScreen;
