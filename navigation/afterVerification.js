import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./bottomTabScreen";
import ProfileScreen from "../screen/ProfileScreen/profileScreen";
import NotificationScreen from "../screen/NotificationScreen/notificationScreen";
import { LeftHeaderIcon, RightHeaderIcon, Head } from "../component/headers";
import CloseButton from "../component/closeButton";
const Stack = createStackNavigator();
const AfterVerification = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={({ navigation }) => ({
          headerTitle: "",
          headerLeft: () => <LeftHeaderIcon navigation={navigation} />,
          headerRight: () => <RightHeaderIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Profile" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Notification" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AfterVerification;
