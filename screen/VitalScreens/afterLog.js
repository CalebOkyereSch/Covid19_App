import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AfterVital from "../../component/afterVitals";
const AfterLog = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <AfterVital />
      </ScrollView>
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          backgroundColor: "#000",
          borderRadius: 100,
          position: "absolute",
          bottom: 20,
          right: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.push("LogVitals")}
      >
        <Ionicons name="ios-add" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default AfterLog;
