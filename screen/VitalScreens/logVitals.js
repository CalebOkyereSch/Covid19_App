import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SymptomLog from "../../component/symptomLog";

const LogVitals = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View>
          <SymptomLog symptom="Dry cough" />
          <SymptomLog symptom="Tiredness" />
          <SymptomLog symptom="Sore Throat" />
          <SymptomLog symptom="Fever" />
          <SymptomLog symptom="Aches and Pains" />
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
            backgroundColor: "#7199d9",
          }}
          onPress={() => navigation.navigate("afterLog")}
        >
          <Text style={{ color: "#fff", fontSize: 13, fontWeight: "700" }}>
            Log Vitals
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LogVitals;
