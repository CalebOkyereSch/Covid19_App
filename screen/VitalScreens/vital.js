import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Vital = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ height: 250 }}>
        <Text>Animations</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginVertical: 10 }}>
          You have not logged your vitals yet
        </Text>
        <TouchableOpacity
          onPress={() => navigation.push("LogVitals")}
          style={{
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "#aaa",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 120,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#444" }}>Log vitals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Vital;
