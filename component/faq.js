import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Case = (props) => {
  const [key, setkey] = useState(false);
  return (
    <View style={{ background: "#fff" }}>
      <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
        <TouchableOpacity onClick={() => setkey(!key)}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
            {props.topic}
          </Text>
        </TouchableOpacity>
      </View>
      {key ? (
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 12 }}>{props.msg}</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Case;
