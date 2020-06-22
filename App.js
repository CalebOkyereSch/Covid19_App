import React, { createContext, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { Auth } from "./HOC/auth";
import BottomTab from "./navigation/bottomTabScreen";
import AfterVerification from "./navigation/afterVerification";
import VerificationStack from "./navigation/verificationStack";

const defaultOption = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
  mutate: {
    errorPolicy: "all",
  },
};
const client = new ApolloClient({
  uri: "https://signalc.herokuapp.com/GraphQL",
  cache: new InMemoryCache(),
  // defaultOptions: {},
});

export const countries = new ApolloClient({
  uri: "https://covid19-graphql.netlify.app/",
  cache: new InMemoryCache(),
  // defaultOptions: {},
});

export default function App() {
  const [log, setLog] = useState(false);
  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setLog(true);
      },
    };
  });
  return (
    <Auth.Provider value={authentication}>
      <ApolloProvider client={client}>
        {/* <ApolloProvider client={countries}> */}
        <NavigationContainer>
          {log ? <AfterVerification /> : <VerificationStack />}
        </NavigationContainer>
        {/* </ApolloProvider> */}
      </ApolloProvider>
    </Auth.Provider>
  );
}
