import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { Head } from "../../component/headers";
import Settings from "./settingScreen";
import SelfAssesmentScreen from "./selfAssementScreen";
import FAQScreen from "./faqScreen";
import TestCenterScreen from "./testCenterScreen";
import PersonalDetailScreen from "./personalDetailScreen";
import AudioScreen from "./audioScreen";
import PrivacyPolicyScreen from "./privacyPolicyScreen";
import ShareScreen from "./shareScreen";
const Stack = createStackNavigator();

const SettingScreen = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: () => <Head title="Settings" /> }}
      />
      <Stack.Screen
        name="sAssessment"
        component={SelfAssesmentScreen}
        options={{ headerTitle: () => <Head title="Self Assesment" /> }}
      />
      <Stack.Screen
        name="faq"
        component={FAQScreen}
        options={{ headerTitle: () => <Head title="FAQs" /> }}
      />
      <Stack.Screen
        name="tCenters"
        component={TestCenterScreen}
        options={{ headerTitle: () => <Head title="Test Centers" /> }}
      />
      <Stack.Screen
        name="pDetails"
        component={PersonalDetailScreen}
        options={{ headerTitle: () => <Head title="Personal Details" /> }}
      />
      <Stack.Screen
        name="audio"
        component={AudioScreen}
        options={{ headerTitle: () => <Head title="Audio" /> }}
      />
      <Stack.Screen
        name="pPolicy"
        component={PrivacyPolicyScreen}
        options={{ headerTitle: () => <Head title="Privacy Policy" /> }}
      />
      <Stack.Screen
        name="share"
        component={ShareScreen}
        options={{ headerTitle: () => <Head title="Share" /> }}
      />
    </Stack.Navigator>
  );
};

export default SettingScreen;
