import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CloseButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginHorizontal: 20 }}
    >
      <Ionicons name="ios-close" size={30} color="#000" />
    </TouchableOpacity>
  );
};

export default CloseButton;
