import React from "react";
import { View, Text } from "react-native";

const AfterVitalItem = (props) => {
  return (
    <View
      style={{
        height: 70,
        width: 70,
        backgroundColor: props.color,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 12,
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        {props.sickness}
      </Text>
      <Text style={{ color: "#fff", fontSize: 13, fontWeight: "800" }}>
        {props.value}
      </Text>
      <Text style={{ color: "#fff", fontSize: 12, fontWeight: "normal" }}>
        {props.serious}
      </Text>
    </View>
  );
};

export default AfterVitalItem;
