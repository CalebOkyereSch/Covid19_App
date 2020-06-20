import React from "react";
import { View, Text } from "react-native";
import TestCenterComp from "../../component/testCenterComp";

const TestCenterScreen = () => {
  return (
    <View style={{ flex: 1, background: "#fff" }}>
      <TestCenterComp
        topic="ani-fori medical institute"
        date="Tue Apr 14 2020"
        location="Accra,Ghana"
      />
      <TestCenterComp
        topic="Here we go"
        date="Sun Apr 12 2020"
        location="Legon,Accra,Ghana"
      />
      <TestCenterComp topic="Adenta Municipality" date="Tue Apr 14 2020" />
    </View>
  );
};

export default TestCenterScreen;
