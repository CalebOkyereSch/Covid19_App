import React from "react";
import { View, Text } from "react-native";
import AfterVitalItem from "./afterVitalItem";
const AfterVital = () => {
  return (
    <View
      style={{
        height: 250,
        paddingHorizontal: 30,
        backgroundColor: "#fff",
        borderBottomWidth: 0.5,
        borderBottomColor: "#ddd",
        marginHorizontal: 10,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "700", marginVertical: 5 }}>
        Thu Apr 16 2020
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <AfterVitalItem />
        <AfterVitalItem />
        <AfterVitalItem />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <AfterVitalItem />
        <AfterVitalItem />
        <AfterVitalItem />
      </View>
    </View>
  );
};

export default AfterVital;
