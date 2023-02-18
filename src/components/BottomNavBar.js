import React from 'react';
import { StyleSheet, Text,View,Image, Pressable } from 'react-native';

import {CCustom} from './CCustom';
import Home from '../../assets/img/home.png';
import Incomes from '../../assets/img/incomes.png';
import Expenses from '../../assets/img/expenses.png';

export default function BottomNavBar({selected}){

    return (
        <View style={styles.container}>
            <View style={styles.button}>
               <Image source={Home} style={styles.icon} resizeMode="contain"/>
            </View>
            <View style={styles.button}>
               <Image source={Incomes} style={styles.icon} resizeMode="contain"/>
            </View>
            <View style={styles.button}>
               <Image source={Expenses} style={styles.icon} resizeMode="contain"/>
            </View>
        </View >
    );
};
const styles = StyleSheet.create({
    container:{
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
         justifyContent:'space-between',
         alignItems:'center',
        display:"inline-flex",
        width:'100%',
        //position: 'relative',
        height: 40,
        flexWrap:'wrap',
        backgroundColor:'red',
        alignItems:'center',
    },
    button:{
   // maxWidth:'33%',
    },
    icon:{
    //maxWidth:'33%',
    flexDirection:'row',
    maxHeight:85,
    maxWidth:85,
    backgroundColor:'#00F',
    alignItems:'center',
    }
});