import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SettingComponent = ({ navigation, msg, topic, nav }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 90,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "#ddd",
      }}
    >
      <View style={{ flex: 8 }}>
        <Text style={{ fontSize: 17, fontWeight: "600", marginVertical: 7 }}>
          {topic}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "normal" }}>{msg}</Text>
      </View>
      <TouchableOpacity
        style={{ flex: 2 }}
        onPress={() => navigation.navigate(`${nav}`)}
      >
        <AntDesign name="right" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingComponent;
