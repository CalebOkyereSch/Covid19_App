import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import isEmpty from "../isEmpty";

export const Lit = ({ data }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {isEmpty(data) ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>No Notifications</Text>
        </View>
      ) : (
        <View>
          {data.map((element, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  backgroundColor: "#fff",
                  minHeight: 50,
                  marginVertical: 5,
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    minHeight: 50,
                    marginVertical: 5,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 13, fontWeight: "700", color: "#555" }}
                  >
                    {element.message}{" "}
                  </Text>
                  <Text
                    style={{ fontSize: 10, fontWeight: "400", color: "#000" }}
                  >
                    {element.timeline}{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};
