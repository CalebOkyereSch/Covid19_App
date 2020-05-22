import React,{createContext, useMemo, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Auth} from './HOC/auth';
import BottomTab from './navigation/bottomTabScreen';
import AfterVerification from './navigation/afterVerification';
import VerificationStack from './navigation/verificationStack';


export default function App() {
  const [log,setLog] = useState(false)
  const authentication = useMemo(()=>{
     return(
       {
         signIn:()=>{
            setLog(true)
         }
       }
     )
  })
  return (
    
      <Auth.Provider value={authentication} >
      <NavigationContainer>
          {
            log? <AfterVerification/>: <VerificationStack/>
          }
            
        </NavigationContainer>
      </Auth.Provider>    
    
  );
}

