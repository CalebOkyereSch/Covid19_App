import React from 'react'
import {View,Text,Image} from 'react-native'

export const HomeCard =({value,feeds,pic})=>{

    return(
        <View style={{width:400,height:250,borderRadius:20,margin:20,borderWidth:0.1}}>
            <Image style={{flex:1,borderRadius:20,width:400,height:250}} source={pic} resizeMode="cover"/>
                <View style={{width:400,height:250,borderRadius:20,backgroundColor:'rgba(0,0,0,0.6)',alignItems:'flex-end',padding:30,position:"absolute"}}>
                        <Text style={{fontSize:35,fontWeight:"700",color:"#fff"}}>{value} </Text> 
                        <Text style={{fontSize:16,fontWeight:"500",color:'#ddd'}}>{feeds} </Text>  
                </View>
            {/* </ImageBackground> */}
        </View>
    )
}

export const News=()=>{
    return(
        <View style={{marginVertical:20,minHeight:300}}>
            <Text style={{marginBottom:15, fontSize:15,fontWeight:'700'}}> Confirmed Covid-19 Cases In Ghana As At 25 March 2020, 09:00Hr</Text>
                    <Text>
                1.	1. Customer involvement; 2.  Maintain simplicity; 3. Incremental delivery; 4. Embrace change; 5. People not process.
2.	 Requirement elicitation; Requirement analysis; Requirement validation; Requirement management
3.	 1.  Stakeholders don’t know what they really want; 2. Stakeholder express requirements in their own terms; 3. Different stakeholders may have confliction requirements; 4. Organizational and political factors may influence the system requirements; 5. The requirement change during the analysis process and at that time new stakeholders may emerge changing the business environment 
4.	As software requirements document is the official statement of what is required of the system developers, the manager use it to plan a bid for the system and to plan the system development process and the engineers use it to understand what is to be developed, understand the relationship between parts and to develop validation test for the system 
5.	1. Problem analysis and change specification; 2. Change analysis and costing; 3. Change implementation
6.	1. Test-first development; 2. Refactoring; 3. Paired Programming
7.	1. Product requirement; 2. Organizational requirement; 3. External requirements
8.	Use case is a high level graphical model that identifies the actors in an interaction and describe all possible interactions with the system.
9.	Scum sprint is a fixed time period usually 2-4 week iterative development cycle where a scrum team sets to complete their work pulled from the requirements of the product backlog
10.	This is because scrum agile method focuses on managing iterative development rather that specific agile practices and has only three phases
11.	1. Requirement elicitation; 2. Requirement analysis; 3. Requirement validation; 4. Requirement management
12.	1.Incremental planning; 2. Small releases; 3. Simple design; 4. Test-first development; 5. Refactoring; 6. Pair programming; 7. Collective ownership; 8. Continuous integration; 9. Sustainable pace; 10. On-site customer
13.	1. Lack of clarity; 2. Continual reliance on legacy methods; 3. Inadequate experience with agile; 4. Lack of testing strategies; 5. Lack of collaboration in team composed by different companies.
14.	 1.Some test can be hard to write especially using a complex interface; 2. The programmer may not make sufficient test and take shortcuts that may not check for all the exceptions that could occur

                </Text>
        </View>
    )
}
