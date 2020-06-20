import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { Head } from "../../component/headers";
import Vital from "./vital";
import CloseButton from "../../component/closeButton";
import LogVitals from "./logVitals";
import AfterLog from "./afterLog";
const Stack = createStackNavigator();

const VitalScreen = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Vital"
        component={Vital}
        options={{ headerTitle: () => <Head title="Vitals" /> }}
      />
      <Stack.Screen
        name="LogVitals"
        component={LogVitals}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Log Symptoms" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="afterLog"
        component={AfterLog}
        options={{
          headerTitle: () => <Head title="Vitals" />,
          headerLeft: "",
          headerRight: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default VitalScreen;
