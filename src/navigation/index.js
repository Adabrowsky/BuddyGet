import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from'@react-navigation/native-stack';
import {CCustom} from './../components/CCustom';
import Login  from './../screens/Login';
import SignUp  from './../screens/SignUp';
import Home  from './../screens/Home';
import LocAuth  from './../screens/LocAuth';
import Expenses from './../screens/Expenses';
import Incomes  from './../screens/Incomes';
import Quote  from './../screens/Quote';

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer style={styles.container} independent={true}>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="LocAuth" component={LocAuth}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Incomes"  component={Incomes}/>
                <Stack.Screen name="Expenses" component={Expenses}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

};
const styles = StyleSheet.create({
  container: {
   flex:1,
    width:'100%',
    backgroundColor: '#31423c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

