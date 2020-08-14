import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useQuery } from "@apollo/react-hooks";
import isEmpty from "../../isEmpty";
import { vitalsData } from "../../controllers/graphql/queries/queries";
const Vital = ({ navigation }) => {
  const { data } = useQuery(vitalsData);
  useEffect(() => {
    if (!isEmpty(data)) {
      navigation.push("afterLog");
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ height: 250 }}>
        <LottieView
          source={require("../../assets/vital-loader.json")}
          autoPlay
          loop
        />
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
