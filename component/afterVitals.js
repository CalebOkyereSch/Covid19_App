import React from "react";
import { View, Text } from "react-native";
import AfterVitalItem from "./afterVitalItem";

const AfterVital = (props) => {
  const hype = (val) => {
    let anwser;
    switch (val) {
      case 0:
        anwser = "none";
        break;
      case 1:
        anwser = "mild";
        break;
      case 2:
        anwser = "mild";
        break;
      case 3:
        anwser = "semi";
        break;
      case 4:
        anwser = "high";
        break;
      default:
        anwser = "none";
    }
    return anwser;
  };
  return (
    <View
      style={{
        height: 250,
        paddingHorizontal: 30,
        backgroundColor: "#fff",
        borderBottomWidth: 0.5,
        borderBottomColor: "#ddd",
        marginHorizontal: 10,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "700", marginVertical: 5 }}>{props.date}</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <AfterVitalItem
          color="#95cc8b"
          sickness="Aches"
          value={props.aches}
          serious={hype(props.aches)}
        />
        <AfterVitalItem
          color="#f21616"
          sickness="Breath Shortness"
          value={props.shortness}
          serious={hype(props.shortness)}
        />
        <AfterVitalItem
          color="#13e0eb"
          sickness="Fever"
          value={props.fever}
          serious={hype(props.fever)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <AfterVitalItem
          color="#139ceb"
          sickness="Dry Cough"
          value={props.cough}
          serious={hype(props.cough)}
        />
        <AfterVitalItem
          color="#f7b602"
          sickness="Tiredness"
          value={props.tired}
          serious={hype(props.tired)}
        />
        <AfterVitalItem
          color="#ac82d1"
          sickness="Sore Throat"
          value={props.sore}
          serious={hype(props.sore)}
        />
      </View>
    </View>
  );
};

export default AfterVital;
