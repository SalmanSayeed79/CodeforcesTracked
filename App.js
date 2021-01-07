import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ScrollView, Text, View ,TextInput,TouchableOpacity, Button} from 'react-native';
import MainPage from './main-page'
import Login from './sign-in'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/corestack';

export default function App({navigation}) {


  const Stack=createStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' screen={MainPage}/>  
          <Stack.Screen name="login" screen={Login}/>  
        </Stack.Navigator>
    
    </NavigationContainer>
  );
}

