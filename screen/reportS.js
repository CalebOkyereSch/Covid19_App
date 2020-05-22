import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'



    const CaseReport=({navigation})=>{
        return(
        <View style={{flex:1, justifyContent:"space-around",alignItems:'center'}}>
            <Image source={require('../assets/images/1.jpg')}  style={{width:70,height:70}} />
            <View>
                <Text style={{marginVertical:10}}>You have not made any case reports</Text>
                <TouchableOpacity onPress={()=>navigation.push("mReport")} style={{borderWidth:1,borderStyle:'dashed',borderColor:'#aaa',justifyContent:'center',alignItems:'center',marginHorizontal:40,height:40 }}>
                    <Text style={{color:'#aaa'}}>Make Case Report</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }



    export default CaseReport