import React, { useContext, useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Auth } from "../../HOC/auth";
const Verification = ({ navigation }) => {
  const { number } = useContext(Auth);
  const [code, setCode] = useState("");

  const signIn = () => {
    if (code == "12345" && number === "0558691496") {
      navigation.push("general");
    } else {
      Alert.alert("Authentication", "Incorrect Passcode ... Code is  12345", {
        text: "OK",
        onPress: () => navigation.goBack(),
      });
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 30,
          left: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-arrow-back" size={26} />
          <Text
            style={{ fontSize: 11, fontWeight: "500", marginHorizontal: 5 }}
          >
            Change phone
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>Verification PIN</Text>
          <Text style={{ textAlign: "center", width: 200 }}>
            Enter the verification code{"\n"} we just sent you on{"\n"} 12345
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <TextInput
            style={{
              borderBottomWidth: 2,
              height: 30,
              color: "#999",
              marginHorizontal: 30,
              marginVertical: 10,
            }}
            keyboardType="number-pad"
            onChangeText={(text) => setCode(text)}
            defaultValue="12345"
          />
          <TouchableOpacity
            onPress={() => signIn()}
            style={{
              height: 40,
              backgroundColor: "#000",
              marginHorizontal: 30,
              marginVertical: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "500" }}>
              Subscribe
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginVertical: 10 }}>
          <Text>Have no received code?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verification;
