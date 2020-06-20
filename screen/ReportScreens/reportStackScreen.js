import React from "react";
import CaseReport from "./reportS";
import MakeReport from "./reportC";
import CaseReporter from "./reportI";
import { createStackNavigator } from "@react-navigation/stack";
import { Head } from "../../component/headers";
import CloseButton from "../../component/closeButton";
const Stack = createStackNavigator();

const ReportScreen = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="cReport"
        component={CaseReport}
        options={{ headerTitle: () => <Head title="Case Reports" /> }}
      />
      <Stack.Screen
        name="mReport"
        component={MakeReport}
        options={({ navigation }) => ({
          headerTitle: () => <Head title="Make Report" />,
          headerLeft: "",
          headerRight: () => <CloseButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="mReportItem"
        component={CaseReporter}
        options={{
          headerTitle: () => <Head title="Case Reports" />,
          headerLeft: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default ReportScreen;
