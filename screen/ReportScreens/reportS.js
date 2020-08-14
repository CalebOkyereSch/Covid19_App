import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { report } from "../../data";
import isEmpty from "../../isEmpty";
const CaseReport = ({ navigation }) => {
  useEffect(() => {
    if (!isEmpty(report)) {
      navigation.push("mReportItem");
    }
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ height: 200, width: 350 }}>
        <LottieView
          source={require("../../assets/report-loader.json")}
          autoPlay
          loop
        />
      </View>
      <View>
        <Text style={{ marginVertical: 10 }}>
          You have not made any case reports
        </Text>
        <TouchableOpacity
          onPress={() => navigation.push("mReport")}
          style={{
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "#aaa",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 40,
            height: 40,
          }}
        >
          <Text style={{ color: "#aaa" }}>Make Case Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CaseReport;
