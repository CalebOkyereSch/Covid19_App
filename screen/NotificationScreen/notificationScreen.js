import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Lit } from "../../component/notificationComponent";
import { notification } from "../../data";
const NotificationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Lit data={notification} />
    </View>
  );
};

export default NotificationScreen;
