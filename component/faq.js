import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Case = (props) => {
  const [something, setsomething] = useState(false);
  return (
    <View style={{ background: "#fff" }}>
      <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
        <TouchableOpacity onPress={() => setsomething(!something)}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
            {props.topic}
          </Text>
        </TouchableOpacity>
      </View>
      {something ? (
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 12 }}>{props.msg}</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Case;
