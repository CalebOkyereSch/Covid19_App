import React from "react";
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
import CloseButton from "../../component/closeButton";
import Mapper from "./mapScreen";
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
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Self Assessment" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="faq"
        component={FAQScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="FAQs" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="tCenters"
        component={TestCenterScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Test Centers" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="pDetails"
        component={PersonalDetailScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Personal Details" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="audio"
        component={AudioScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Audio" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="pPolicy"
        component={PrivacyPolicyScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Privacy Policy" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="share"
        component={ShareScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Share" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Map"
        component={Mapper}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default SettingScreen;
