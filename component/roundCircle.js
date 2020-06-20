import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const RoundCircle = ({ con, value, keyed, sel }) => {
  return (
    <View style={{}}>
      <View
        style={{
          marginVertical: 5,
          height: 50,
          width: 50,
          borderRadius: 100,
          borderWidth: 0.5,
          borderColor: "#ddd",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `${sel}`,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", color: `${con}` }}>
          {keyed}
        </Text>
      </View>
      <Text style={{ marginLeft: 5 }}>{value}</Text>
    </View>
  );
};

export default RoundCircle;
