import React from 'react';
import {Ionicons,Entypo,MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Home=({focused})=>{
    return(
        <TouchableOpacity>
            <Ionicons name="ios-home" size={26} color={focused? "#000":"#aaa"} />
        </TouchableOpacity>
    )
}

export const Report=({focused})=>{
    return(
        <TouchableOpacity>
            <Entypo name="paper-plane" size={26} color={focused? "#000":"#aaa"} />
        </TouchableOpacity>
    )
}

export const Vitals=({focused})=>{
    return(
        <TouchableOpacity>
            <MaterialIcons name="show-chart" size={26} color={focused? "#000":"#aaa"} />
        </TouchableOpacity>
    )
}

export const Settings=({focused})=>{
    return(
        <TouchableOpacity>
            <Ionicons name="ios-settings" size={26} color={focused? "#000":"#aaa"} />
        </TouchableOpacity>
    )
}