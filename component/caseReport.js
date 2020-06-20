import React from "react";
import { View, Text } from "react-native";

const CaseReport = () => {
  return (
    <View
      style={{
        height: 120,
        width: "100%",
        flexDirection: "row",
        padding: 20,
        backgroundColor: "#fff",
        borderBottomWidth: 0.5,
        borderColor: "#eee",
      }}
    >
      <View style={{ flex: 7 }}>
        <Text
          style={{
            marginBottom: 10,
            fontWeight: "700",
            fontSize: 14,
            color: "#000",
          }}
        >
          Self
        </Text>
        <Text style={{ fontWeight: "normal", fontSize: 12, color: "#000" }}>
          My head aches and I'm running a temperature 0244123456
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={{ fontSize: 13 }}>Thr Apr 16 2020</Text>
      </View>
    </View>
  );
};

export default CaseReport;
