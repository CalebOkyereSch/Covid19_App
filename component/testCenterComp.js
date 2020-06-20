import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TestCenterComp = (props) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.1,
        borderColor: "#ddd",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", font: 12 }}>{props.topic}</Text>
        <Text style={{ font: 12 }}>{props.date} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <Text style={{ font: 11 }}>{props.location} </Text>
        <TouchableOpacity onPress={() => props.func}>
          <Text style={{ font: 12, color: "#f0f" }}>Get Directions </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TestCenterComp;
