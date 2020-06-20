import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const SelfAssesmentScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 9 }}>
        <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
            Getting Started!
          </Text>
          <Text>
            This tool is intended to help you understand what to do next about
            COVID-19. You'll answer a few questions about your symptoms, travel,
            and contact you've had with others.
          </Text>
        </View>
        <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Note</Text>
          <Text>
            Recommendations provided by this tool do not constitute medical
            advice and should not be used to diagnose or treat medical
            conditions. {"\n"} Let's all look out for each other by knowing our
            status, trying not to infect others, and reserving care for those in
            need.
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            backgroundColor: "#000",
          }}
        >
          <Text style={{ fontSize: 12, color: "#fff" }}>
            Start Assessment . . .
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelfAssesmentScreen;
