import React, { useState, useContext } from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Auth } from "../../HOC/auth";

const CoverScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [setNumber] = useContext(Auth);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/7.jpg")}
        style={{ height: "100%", borderRadius: 100 }}
        resizeMode="stretch"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 65, fontWeight: "600", color: "#ddd" }}>
              COVERS
            </Text>
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "500" }}>
              (COVID-19 EMERGENCY RESPONSE SOLUTION)
            </Text>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{ fontSize: 12, color: "#fff", textAlign: "center" }}
              >
                Join the effort by well-meaning Africans using technology to
                show{"\n"}
                down and eventually halt the spread of COVID-19
                {"\n"}
                Enter this number 0558691496
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 30, width: "100%" }}>
            <TextInput
              style={{
                height: 35,
                marginHorizontal: 30,
                padding: 10,
                marginVertical: 10,
                color: "#999",
                backgroundColor: "#fff",
              }}
              placeholder="Phone Number"
              keyboardType="number-pad"
              onChangeText={(text) => setText(text)}
              defaultValue={text}
            />
            <TouchableOpacity
              onPress={() => {
                setNumber(text);
                navigation.push("verification");
              }}
              style={{
                height: 35,
                backgroundColor: "#677180",
                marginHorizontal: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#efefef", fontSize: 12 }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "rgba(180,180,180,0.6)",
              marginTop: 20,
              fontSize: 11,
              fontWeight: "400",
            }}
          >
            Beta 0.1.2
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CoverScreen;
