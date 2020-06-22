import React from "react";
import { View, Text } from "react-native";
import TestCenterComp from "../../component/testCenterComp";

const TestCenterScreen = ({ navigation }) => {
  const navi = () => {
    navigation.push("Map");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TestCenterComp
        topic="ani-fori medical institute"
        date="Tue Apr 14 2020"
        location="Accra,Ghana"
        func={navi}
      />
      <TestCenterComp
        topic="Here we go"
        date="Sun Apr 12 2020"
        location="Legon,Accra,Ghana"
        func={navi}
      />
      <TestCenterComp
        topic="Adenta Municipality"
        date="Tue Apr 14 2020"
        func={navi}
      />
    </View>
  );
};

export default TestCenterScreen;
