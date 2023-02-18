import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button,View,Image,useWindowDimensions } from 'react-native';
import Logo from '../../assets/img/logo.png';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';
import {useNavigation} from '@react-navigation/native';
import ExpenseList from './../components/ExpensesList';

export default function Expenses(){

    return (
        <View style={styles.container}>
            <ExpenseList/>
        </View >

    );
}
const styles = StyleSheet.create({
  container: {
//    flex:1,
//    width:'100%',
//    alignItems: 'center',
//    justifyContent: 'center',
//    padding:20,
  },

});