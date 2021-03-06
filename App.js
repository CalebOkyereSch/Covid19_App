import React, { useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { Auth } from "./HOC/auth";
import AfterVerification from "./navigation/afterVerification";
import VerificationStack from "./navigation/verificationStack";

const client = new ApolloClient({
  uri: "https://signalc.herokuapp.com/GraphQL",
  cache: new InMemoryCache(),
  // defaultOptions: {},
});

export const countries = new ApolloClient({
  uri: "https://covid19-graphql-bit5wtpnv.vercel.app/",
  cache: new InMemoryCache(),
  // defaultOptions: {},
});

export default function App() {
  const [log, setLog] = useState(false);
  const [number, setNumber] = useState("");

  const authentication = {
    setLog: setLog,
    number: number,
    setNumber: setNumber,
  };
  return (
    <Auth.Provider value={authentication}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          {log ? <AfterVerification /> : <VerificationStack />}
        </NavigationContainer>
      </ApolloProvider>
    </Auth.Provider>
  );
}
