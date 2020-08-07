import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { countryFlag } from "../controllers/graphql/queries/queries";
import isEmpty from "../isEmpty";
const CountryModal = ({ openKey, findId }) => {
  const [isVisible, setVisible] = useState(false);
  const { loading, data } = useQuery(countryFlag, { client: countries });
  return (
    <Modal visible={isVisible} presentationStyle="formSheet">
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <View style={{ position: "absolute", top: 20, right: 20 }}>
          <TouchableOpacity onPress={() => setVisible(!openKey)}>
            <Ionicons name="ios-close" size={40} />
          </TouchableOpacity>
        </View>
        {loading || isEmpty(data) ? (
          <View
            style={{
              marginTop: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={{ marginTop: 50 }}>
            <ScrollView>
              {data.countries.map((item, index) => (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      findId(item.countryInfo._id);
                    }}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Image
                      source={{ uri: item.countryInfo.flag }}
                      style={{ width: 20, height: 20 }}
                      resizeMode="contain"
                    />
                    <Text>{item.country} </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default CountryModal;
