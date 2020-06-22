import React from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { HomeCard, News } from "../../component/homeCard";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { countries } from "../../App";

const countryData = gql`
  {
    country(name: "Ghana") {
      result {
        cases
        deaths
        recovered
      }
    }
  }
`;

const HomeS = () => {
  const { loading, error, data } = useQuery(countryData, { client: countries });
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, minHeight: 300 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ height: 280, justifyContent: "flex-start" }}>
            <ScrollView style={{ flex: 1 }} horizontal={true}>
              {console.log(data)}
              <HomeCard
                value={data.country.result.cases}
                feeds="Confirmed Cases"
                pic={require("../../assets/images/5.jpg")}
              />
              <HomeCard
                value={data.country.result.recovered}
                feeds="Recovered"
                pic={require("../../assets/images/8.jpg")}
              />
              <HomeCard
                value={data.country.result.deaths}
                feeds="Death"
                pic={require("../../assets/images/9.jpg")}
              />
            </ScrollView>
          </View>
          <View style={{ flex: 0.2, paddingLeft: 5 }}>
            <Text style={{ fontWeight: "700" }}>
              Ghana's Situation Updatees
            </Text>
            <Text style={{ fontSize: 12 }}>Last Updated 4/16/2020</Text>
          </View>
          <View
            style={{ flex: 7.5, paddingVertical: 5, paddingHorizontal: 15 }}
          >
            <News />
            <News />
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default graphql(countryData)(HomeS);
