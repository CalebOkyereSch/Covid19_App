import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import RoundCircle from "../component/roundCircle";

const SymptomLog = ({ symptom }) => {
  const [select, setSelect] = useState(null);

  function execute(selected) {
    setSelect(selected);
  }

  return (
    <View
      style={{
        backgroundColor: "#fff",
        shadowColor: "#888",
        height: 170,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 0.1,
        borderColor: "#ddd",
        shadowColor: "#999",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        elevation: 7,
      }}
    >
      <View
        style={{
          flex: 3,
          borderBottomWidth: 0.4,
          borderBottomColor: "#ddd",
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>{symptom}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginVertical: 10,
          justifyContent: "space-around",
          flex: 8,
        }}
      >
        <TouchableOpacity onPress={() => setSelect("check0")}>
          <RoundCircle
            checker="check0"
            value="None"
            keyed="0"
            sel={select === "check0" ? "#7199d9" : "#fff"}
            con={select === "check0" ? "#fff" : "#000"}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelect("check1")}>
          <RoundCircle
            checker="check1"
            value="Mild"
            keyed="1"
            sel={select === "check1" ? "#7199d9" : "#fff"}
            con={select === "check1" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelect("check2")}>
          <RoundCircle
            checker="check2"
            value="Mid"
            keyed="2"
            sel={select === "check2" ? "#7199d9" : "#fff"}
            con={select === "check2" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelect("check3")}>
          <RoundCircle
            checker="check3"
            value="Semi"
            keyed="3"
            sel={select === "check3" ? "#7199d9" : "#fff"}
            con={select === "check3" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelect("check4")}>
          <RoundCircle
            checker="check4"
            value="High"
            keyed="4"
            sel={select === "check4" ? "#7199d9" : "#fff"}
            con={select === "check4" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SymptomLog;
