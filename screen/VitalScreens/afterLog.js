import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AfterVital from "../../component/afterVitals";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { user1 } from "../../controllers/config";
import { useQuery } from "@apollo/react-hooks";

const vitalsData = gql`
  {
    vitals(filter: { user: "5e92383292b9310017c84789" }) {
      _id
      vitals {
        dryCough
        fever
        soreThroat
        aches
        shortnessOfBreath
        tiredness
      }
    }
  }
`;
const AfterLog = ({ navigation }) => {
  const { loading, error, data } = useQuery(vitalsData);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    console.log(data);
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          {data.vitals.map((item, index) => (
            <AfterVital
              key={index}
              aches={item.vitals.aches}
              shortness={item.vitals.shortnessOfBreath}
              fever={item.vitals.fever}
              cough={item.vitals.dryCough}
              tired={item.vitals.tiredness}
              sore={item.vitals.soreThroat}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            backgroundColor: "#000",
            borderRadius: 100,
            position: "absolute",
            bottom: 20,
            right: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.push("LogVitals")}
        >
          <Ionicons name="ios-add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
};

export default graphql(vitalsData)(AfterLog);
