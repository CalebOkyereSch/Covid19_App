import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CoverScreen from "../screen/CoverScreen/coverScreen";
import Verification from "../screen/VerificationScreen/verification";
import GeneralInfo from "../screen/GeneralInfoScreen/generalInfo";

const Stack = createStackNavigator();

const VerificationStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="cover" component={CoverScreen} />
      <Stack.Screen name="verification" component={Verification} />
      <Stack.Screen name="general" component={GeneralInfo} />
    </Stack.Navigator>
  );
};

export default VerificationStack;
