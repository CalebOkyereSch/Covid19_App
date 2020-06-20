import React from "react";
import { View, Text } from "react-native";

const AfterVitalItem = () => {
  return (
    <View
      style={{
        height: 90,
        width: 90,
        backgroundColor: "#f00",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 12, fontWeight: "normal" }}>
        Aches
      </Text>
      <Text style={{ color: "#fff", fontSize: 13, fontWeight: "800" }}>0</Text>
      <Text style={{ color: "#fff", fontSize: 12, fontWeight: "normal" }}>
        None
      </Text>
    </View>
  );
};

export default AfterVitalItem;
