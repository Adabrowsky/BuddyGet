import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {CCustom} from './../components/CCustom';

import Home  from './../screens/Home';
import Expenses from './../screens/Expenses';
import Incomes  from './../screens/Incomes';
import Quote  from './../screens/Quote';

const Bottom = createBottomTabNavigator();

export default function BottomNavigation(){
    return (
        <NavigationContainer independent={true}>
            <Bottom.Navigator>
                <Bottom.Screen name="Home" component={Home}/>
                <Bottom.Screen name="Expenses" component={Expenses}/>
                <Bottom.Screen name="Incomes" component={Incomes}/>
                <Bottom.Screen name="Quote" component={Quote}/>
            </Bottom.Navigator>
        </NavigationContainer>
    );

};
