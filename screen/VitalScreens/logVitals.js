import React, { useMutation } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SymptomLog from "../../component/symptomLog";

const LogVitals = ({ navigation }) => {
  // const [logData, { loading }] = useMutation(logVitals);

  // const HandleLogData = () => {
  //   logData({
  //     variables: {
  //       vitals: {
  //         dryCough: 2,
  //         tiredness: 2,
  //         soreThroat: 2,
  //         fever: 2,
  //         aches: 2,
  //         shortnessOfBreath: 2,
  //       },
  //       location: {
  //         longitute: 123.4,
  //         lattitude: 3442,
  //       },
  //     },
  //   })
  //     .then((data) => {
  //       navigation.navigate("afterLog");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
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
