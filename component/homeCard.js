import React from "react";
import { View, Text, Image } from "react-native";

export const HomeCard = ({ value, feeds, pic }) => {
  return (
    <View
      style={{
        width: 400,
        height: 250,
        borderRadius: 20,
        margin: 20,
        borderWidth: 0.1,
      }}
    >
      <Image
        style={{ flex: 1, borderRadius: 20, width: 400, height: 250 }}
        source={pic}
        resizeMode="cover"
      />
      <View
        style={{
          width: 400,
          height: 250,
          borderRadius: 20,
          backgroundColor: "rgba(0,0,0,0.6)",
          alignItems: "flex-end",
          padding: 30,
          position: "absolute",
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "700", color: "#fff" }}>
          {value}{" "}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#ddd" }}>
          {feeds}{" "}
        </Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export const News = (props) => {
  return (
    <View style={{ marginVertical: 20, minHeight: 300 }}>
      <Text style={{ marginBottom: 15, fontSize: 15, fontWeight: "700" }}>
        {" "}
        {props.title}
      </Text>
      <Image
        style={{ width: 350, height: 250, alignSelf: "center" }}
        source={props.image}
        resizeMode="cover"
      />
      <Text>{props.body}</Text>
    </View>
  );
};
