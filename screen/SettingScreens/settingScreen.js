import React from "react";
import { View, Text, ScrollView } from "react-native";
import SettingComponent from "../../component/settingsComponent";
const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SettingComponent
          msg="Ascertain your covid-19 using our screening tool"
          topic="Self Assessment"
          navigation={navigation}
          nav="sAssessment"
        />
        <SettingComponent
          msg="Get answers to Frequently Asked Questions"
          topic="FAQs"
          navigation={navigation}
          nav="faq"
        />
        <SettingComponent
          msg="View testing centers near you"
          topic="Testing Centers"
          navigation={navigation}
          nav="tCenters"
        />
        <SettingComponent
          msg="View and update your personal details"
          topic="Personal Details"
          navigation={navigation}
          nav="pDetails"
        />
        <SettingComponent
          msg="Listen to audio"
          topic="Audio"
          navigation={navigation}
          nav="audio"
        />
        <SettingComponent
          msg="View our privacy policy"
          topic="Privacy Policy"
          navigation={navigation}
          nav="pPolicy"
        />
        <SettingComponent
          msg="Share this app with friends and family"
          topic="Share"
          navigation={navigation}
          nav="share"
        />
      </ScrollView>
    </View>
  );
};

export default Settings;
