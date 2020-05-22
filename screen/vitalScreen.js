import React from 'react'
import {View,Text} from 'react-native'
import {SafeAreaView } from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {Head} from '../component/headers';
const Stack = createStackNavigator();

const VitalScreen=()=>{

    const Vital=()=>{
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>Vital Screen</Text>
            </View>
        )
    }


    return(
        <Stack.Navigator>
            <Stack.Screen name="Vital" component={Vital} options={{headerTitle:()=><Head title="Vitals"/>}} />
        </Stack.Navigator>
    )
}


export default VitalScreen;