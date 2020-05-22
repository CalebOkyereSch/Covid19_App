import React from 'react';
import {Image,Text,View,TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';


export const LeftHeaderIcon =({navigation})=>{

    return(
        <View style={{width:35,height:35,borderRadius:100,marginLeft:15}}>
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={()=> navigation.push("Profile")}>
                <Image
                    source={require('../assets/images/3.jpg')}
                    style={{width:30,height:30,borderRadius:100}}
                    resizeMode="cover"
            />
            </TouchableOpacity>
        </View>
    )
}

export const RightHeaderIcon=({navigation})=>{
    return(
        <TouchableOpacity  style={{justifyContent:'center',alignItems:'center',marginRight:15}} onPress={()=> navigation.push("Notification")}>
            <Ionicons
                name="ios-notifications-outline"
                size={30}
           />
        </TouchableOpacity>
        
    )
}


export const Head=({title})=>{
    return(
        <Text style={{fontSize:25,fontWeight:'700'}}>{title}</Text>
    )
}