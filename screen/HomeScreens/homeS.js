import React from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { HomeCard, News } from "../../component/homeCard";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { countries } from "../../App";
import isEmpty from "../../isEmpty";
import { news } from "../../data";

const countryData = gql`
  {
    country(name: "Ghana") {
      name
      mostRecent {
        date(format: "yyyy-MM-dd")
        confirmed
        recovered
        deaths
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
      <View style={{ flex: 1, minHeight: 300, backgroundColor: "#fff" }}>
        <ScrollView style={{ flex: 1 }}>
          {console.log(data)}
          <View style={{ height: 280, justifyContent: "flex-start" }}>
            {isEmpty(data) ? (
              <ScrollView style={{ flex: 1 }} horizontal={true}>
                <HomeCard
                  value="loading..."
                  feeds="Confirmed Cases"
                  pic={require("../../assets/images/5.jpg")}
                />
                <HomeCard
                  value="loading..."
                  feeds="Recovered"
                  pic={require("../../assets/images/8.jpg")}
                />
                <HomeCard
                  value="loading..."
                  feeds="Death"
                  pic={require("../../assets/images/9.jpg")}
                />
              </ScrollView>
            ) : (
              <ScrollView style={{ flex: 1 }} horizontal={true}>
                <HomeCard
                  value={data.country.mostRecent.confirmed}
                  feeds="Confirmed Cases"
                  pic={require("../../assets/images/5.jpg")}
                />
                <HomeCard
                  value={data.country.mostRecent.recovered}
                  feeds="Recovered"
                  pic={require("../../assets/images/8.jpg")}
                />
                <HomeCard
                  value={data.country.mostRecent.deaths}
                  feeds="Death"
                  pic={require("../../assets/images/9.jpg")}
                />
              </ScrollView>
            )}
          </View>
          <View style={{ flex: 0.2, paddingLeft: 5 }}>
            <Text style={{ fontWeight: "700" }}>Ghana's Situation Updates</Text>
            <Text style={{ fontSize: 12 }}>Last Updated 4/16/2020</Text>
          </View>
          <View
            style={{ flex: 7.5, paddingVertical: 5, paddingHorizontal: 15 }}
          >
            {isEmpty(news) ? (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>No News Available</Text>
              </View>
            ) : (
              <View style={{ flex: 1 }}>
                {news.map((element) => {
                  return (
                    <News
                      title={element.title}
                      key={element.id}
                      body={element.body}
                      image={element.image}
                    />
                  );
                })}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default graphql(countryData)(HomeS);
