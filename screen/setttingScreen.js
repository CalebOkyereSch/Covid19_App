import React from 'react'
import {View,Text} from 'react-native'
import {SafeAreaView } from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {Head} from '../component/headers';
const Stack = createStackNavigator();

const SettingScreen=()=>{

    const Settings=()=>{
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>Settings Screen</Text>
            </View>
        )
    }


    return(
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} options={{headerTitle:()=><Head title="Settings"/>}}/>
        </Stack.Navigator>
    )
}


export default SettingScreen;