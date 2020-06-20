import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CaseReport from "../../component/caseReport";

const CaseReporter = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CaseReport />
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
        onPress={() => navigation.push("mReport")}
      >
        <Ionicons name="ios-add" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CaseReporter;
