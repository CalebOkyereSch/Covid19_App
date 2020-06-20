import React from "react";
import { View, Text, ScrollView } from "react-native";
import { HomeCard, News } from "../../component/homeCard";

const HomeS = () => {
  return (
    <View style={{ flex: 1, minHeight: 300 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 280, justifyContent: "flex-start" }}>
          <ScrollView style={{ flex: 1 }} horizontal={true}>
            <HomeCard
              value="641"
              feeds="Confirmed Cases"
              pic={require("../../assets/images/5.jpg")}
            />
            <HomeCard
              value="241"
              feeds="Recovered"
              pic={require("../../assets/images/8.jpg")}
            />
            <HomeCard
              value="8"
              feeds="Death"
              pic={require("../../assets/images/9.jpg")}
            />
          </ScrollView>
        </View>
        <View style={{ flex: 0.2, paddingLeft: 5 }}>
          <Text style={{ fontWeight: "700" }}>Ghana's Situation Updatees</Text>
          <Text style={{ fontSize: 12 }}>Last Updated 4/16/2020</Text>
        </View>
        <View style={{ flex: 7.5, paddingVertical: 5, paddingHorizontal: 15 }}>
          <News />
          <News />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeS;
