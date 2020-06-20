import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreens/homeStackScreen";
import ReportScreen from "../screen/ReportScreens/reportStackScreen";
import VitalScreen from "../screen/VitalScreens/vitalStackScreen";
import SettingScreen from "../screen/SettingScreens/setttingStackScreen";
import { Home, Settings, Vitals, Report } from "../component/tabBarIcons";
const Tabs = createBottomTabNavigator();
const BottomTab = ({ route }) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{ labelStyle: { color: "#666", fontWeight: "700" } }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <Home focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarIcon: ({ focused }) => <Report focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="Vitals"
        component={VitalScreen}
        options={{
          tabBarIcon: ({ focused }) => <Vitals focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => <Settings focused={focused} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTab;
