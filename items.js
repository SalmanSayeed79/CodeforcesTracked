import React,{useState} from 'react';
import {Linking, StyleSheet,ScrollView, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Item({name,rating,c_id,index}){
    return( 
        <View style={styles.box}>

            <MaterialIcons name="add-box" size={32} color="orangered" />
            <Text style={styles.title}>{name}</Text>
            <Text>{rating}</Text>
            
            <TouchableOpacity  onPress={()=>Linking.openURL(`https://codeforces.com/problemset/problem/${c_id}/${index}`)} >
                <Feather name="external-link" size={32} color="orangered" />
            </TouchableOpacity>
        </View>
    )

   
}


const styles=StyleSheet.create({
    contain:{
        paddingHorizontal:50,
        paddingVertical:10,
        borderBottomColor:'grey',
        borderBottomWidth:2,

        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-around"
        
    },
    box:{
        paddingHorizontal:50,
        paddingVertical:10,
        borderBottomColor:'grey',
        borderBottomWidth:2,paddingHorizontal:50,
        paddingVertical:10,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        backgroundColor:'lightorange',
       // width:350,
        //borderRadius:20,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-around"

    },
    title:{
        fontSize:18,
        marginRight:100,
        width:200,
        textAlign:'left'
    }

})
