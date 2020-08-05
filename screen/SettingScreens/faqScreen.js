import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Case from "../../component/faq";
import { faq } from "../../data";
import isEmpty from "../../isEmpty";
const FAQScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        {!isEmpty(faq) ? (
          <View style={{ flex: 1 }}>
            {faq.map((item, index) => (
              <Case topic={item.title} msg={item.content} key={index} />
            ))}
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>No FAQs</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default FAQScreen;
