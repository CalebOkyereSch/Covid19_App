import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CaseReport from "../../component/caseReport";
import { report } from "../../data";
import isEmpty from "../../isEmpty";

const CaseReporter = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {isEmpty(report) ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No Report Made</Text>
        </View>
      ) : (
        <View>
          {report.map((element) => {
            return (
              <CaseReport
                key={element.id}
                title={element.title}
                body={element.info}
                date={element.date}
              />
            );
          })}
        </View>
      )}

      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          backgroundColor: "#000",
          borderRadius: 100,
          position: "absolute",
          bottom: 20,
          right: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.push("mReport")}
      >
        <Ionicons name="ios-add" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CaseReporter;
