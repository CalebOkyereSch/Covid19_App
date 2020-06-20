import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Head } from "../../component/headers";
import HomeS from "./homeS";
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeS}
        options={{ headerTitle: () => <Head title="Home" /> }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
