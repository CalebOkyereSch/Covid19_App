import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth } from "../../HOC/auth";
import { general } from "../../data";
import isEmpty from "../../isEmpty";
const GeneralInfo = () => {
  const { setLog } = useContext(Auth);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "flex-end",
          marginLeft: 10,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "600" }}>
          General Information
        </Text>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          {!isEmpty(general) ? (
            <View style={{ flex: 1 }}>
              {general.map((element) => {
                return (
                  <View key={element.id} style={{ marginVertical: 5 }}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "700",
                        marginVertical: 10,
                        color: "#777",
                      }}
                    >
                      {element.title}
                    </Text>
                    <Text style={{}}>{element.info}</Text>
                  </View>
                );
              })}
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>No Information Available</Text>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => setLog(true)}
          style={{
            marginHorizontal: 30,
            height: 40,
            backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 11, fontWeight: "500" }}>
            Lets get started ...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GeneralInfo;
