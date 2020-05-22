import React from 'react'
import CaseReport from './reportS'
import MakeReport from './reportC'
import {createStackNavigator} from '@react-navigation/stack'
import {Head} from '../component/headers';
const Stack = createStackNavigator();

const ReportScreen=()=>{


    return(
        <Stack.Navigator mode="modal">
            <Stack.Screen name="cReport" component={CaseReport} options={{headerTitle:()=><Head title="Case Reports"/>}}/>
            <Stack.Screen name="mReport" component={MakeReport} options={{headerTitle:()=><Head title="Make Report"/>}}/>
        </Stack.Navigator>
    )
}


export default ReportScreen;