import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/homeScreen';
import ReportScreen from '../screen/reportScreen';
import VitalScreen from '../screen/vitalScreen';
import SettingScreen from '../screen/setttingScreen';
import {Home,Settings,Vitals,Report} from '../component/tabBarIcons'
const Tabs = createBottomTabNavigator();
const BottomTab=({route})=>{

    return(
        <Tabs.Navigator tabBarOptions={{labelStyle:{color:'#666',fontWeight:"700"}}}>
            <Tabs.Screen
                 name="Home"
                 component={HomeScreen} 
                 options={{
                    tabBarIcon: ({focused}) => <Home focused={focused}/>,
                    
                  }}
                
            />

            <Tabs.Screen 
                name="Report" 
                component={ReportScreen}
                options={{
                    tabBarIcon: ({focused}) => <Report focused={focused}/>
                  }}
            />

            <Tabs.Screen 
                name="Vitals" 
                component={VitalScreen} 
                options={{
                    tabBarIcon: ({focused}) => <Vitals focused={focused}/>
                  }}
            />
            <Tabs.Screen 
                name="Settings" 
                component={SettingScreen} 
                options={{
                    tabBarIcon: ({focused}) => <Settings focused={focused}/>,
                    
                  }}

                
            />

        </Tabs.Navigator>
    )
}

export default BottomTab;   