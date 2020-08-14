import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import isEmpty from "../isEmpty";
const CountryModal = ({ openKey, findId, data }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Modal visible={isVisible} presentationStyle="formSheet">
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <View style={{ position: "absolute", top: 20, right: 20 }}>
          <TouchableOpacity onPress={() => setVisible(!openKey)}>
            <Ionicons name="ios-close" size={40} />
          </TouchableOpacity>
        </View>
        {isEmpty(data) ? (
          <View
            style={{
              marginTop: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={{ marginTop: 50 }}>
            <ScrollView>
              {data.data.map((item, index) => (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      findId(item.name);
                    }}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Image
                      source={{ uri: item.flag }}
                      style={{ width: 20, height: 20 }}
                      resizeMode="contain"
                    />
                    <Text>{item.name} </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default CountryModal;
