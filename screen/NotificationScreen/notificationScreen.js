import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Lit } from "../../component/notificationComponent";

const NotificationScreen = () => {
  const data = [
    {
      message: "Stay Home",
      timeline: "2 days ago",
    },
    {
      message: "Hi Message",
      timeline: "2 days ago",
    },
    {
      message: "Testing",
      timeline: "3 days ago",
    },
    {
      message: "Everthing is working",
      timeline: "3 days ago",
    },
    {
      message: "This should work",
      timeline: "5 days ago",
    },
    {
      message: "Eat well and stay healthy",
      timeline: "6 days ago",
    },
    {
      message: "Trying again",
      timeline: " a month ago",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Lit data={data} />
    </View>
  );
};

export default NotificationScreen;
