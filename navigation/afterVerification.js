import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './bottomTabScreen';
import ProfileScreen from '../screen/profileScreen';
import NotificationScreen from '../screen/notificationScreen';
import {LeftHeaderIcon,RightHeaderIcon} from '../component/headers';


const Stack = createStackNavigator();
const AfterVerification=()=>{

    return(
        <Stack.Navigator mode="modal">
            <Stack.Screen 
                name="BottomTab" 
                component={BottomTab} 
                options={({navigation})=>({
                    headerTitle:"",
                    headerLeft:()=><LeftHeaderIcon navigation={navigation} />,
                    headerRight:()=><RightHeaderIcon navigation={navigation} />
                  })}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
        </Stack.Navigator>
    )
}


export default AfterVerification;