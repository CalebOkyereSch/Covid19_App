import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AfterVital from "../../component/afterVitals";
import { graphql } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { vitalsData } from "../../controllers/graphql/queries/queries";
import isEmpty from "../../isEmpty";

const AfterLog = ({ navigation }) => {
  const { loading, data } = useQuery(vitalsData);
  if (loading || isEmpty(data)) {
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
              date={new Date(item.createdAt).toDateString()}
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
