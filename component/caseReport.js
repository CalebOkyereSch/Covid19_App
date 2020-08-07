import React from "react";
import { View, Text } from "react-native";

const CaseReport = (props) => {
  return (
    <View
      style={{
        height: 120,
        width: "100%",
        padding: 20,
        backgroundColor: "#fff",
        borderBottomWidth: 0.5,
        borderColor: "#eee",
        marginVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            marginBottom: 10,
            fontWeight: "700",
            fontSize: 14,
            color: "#000",
          }}
        >
          {props.title}
        </Text>

        <Text style={{ fontSize: 13 }}>{props.date}</Text>
      </View>

      <Text style={{ fontWeight: "normal", fontSize: 12, color: "#000" }}>
        {props.body}
      </Text>
    </View>
  );
};

export default CaseReport;
