import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Case from "../../component/faq";
const FAQScreen = () => {
  const question = [
    {
      key: 1,
      topic: "What is Coronavirus?",
      msg:
        "pdhf fhda dfsfjal dfadj ore ew psodfdf fdlk fdkf akd fjfd fldf afa s ",
      value: "1",
    },
    {
      key: 2,
      topic: "What are the Symptions of COVID-19?",
      msg:
        "pdhf fhda dfsfjal dfadj ore ew psodfdf fdlk fdkf akd fjfd fldf afa s ",
      value: "2",
    },
    {
      key: 3,
      topic: "How does COVID-19 Spread?",
      msg:
        "pdhf fhda dfsfjal dfadj ore ew psodfdf fdlk fdkf akd fjfd fldf afa s ",
      value: "3",
    },
    {
      key: 4,
      topic:
        "What can I do to protect myself and prevend the spread of the disease?",
      msg:
        "pdhf fhda dfsfjal dfadj ore ew psodfdf fdlk fdkf akd fjfd fldf afa s ",
      value: "4",
    },
    {
      key: 5,
      topic: "How likely am I to catch COVID-19?",
      msg:
        "pdhf fhda dfsfjal dfadj ore ew psodfdf fdlk fdkf akd fjfd fldf afa s ",
      value: "5",
    },
    {
      key: 6,
      topic: "Should I worry about COVID-19?",
      msg:
        "pdhf fhda dfsfjal dfadj ore ew psodfdf fdlk fdkf akd fjfd fldf afa s ",
      value: "6",
    },
    {
      key: 7,
      topic: "Who is at risk of developing severe illness?",
      msg: " something for happen otherwise we go kill somebody",
      value: "7",
    },
    {
      key: 8,
      topic:
        "Are antibiotics effective for preventing or treating the COVID-19?",
      msg: " Eii so everybody dey do the shit dem dey do ",
      value: "8",
    },
    {
      key: 9,
      topic:
        "Are there any medicines or therapy that can prevent or cure COVID-19?",
      msg: "where the fuck is this happening here at the moment  ",
      value: "9",
    },
    {
      key: 10,
      topic: "Is there vaccine, drug or treatment for COVID-19?",
      msg:
        "kdshf askdfh akfhks dhfkha ksd hfk fhkf vdfa jsdl kfhlj fda fdsf aflshaf dso8 hred srf iuhai dfs df9 sp7d fyo dfas fhias di fhasoi fdsfd dsfsa fjl khfh  p9uo gqrr 7dfo sdf dsf adfl aiu hsdf gier tyhd fidsh ffoa  fsdf fds fhahh ",
      value: "10",
    },
  ];

  return (
    <View style={{ flex: 1, background: "#fff" }}>
      <ScrollView>
        {question.map((item) => (
          <Case topic={item.topic} msg={item.msg} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FAQScreen;
