import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button,View,Image,useWindowDimensions,ScrollView } from 'react-native';
import Logo from '../../assets/img/logo.png';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';
import {useNavigation} from '@react-navigation/native';
import IncomesList from './../components/IncomesList';
import AddIncome from './../components/AddIncome';

export default function Incomes(){

    return (
        <ScrollView style={styles.container}>
                <Text style={styles.H1}>Incomes</Text>
                    <IncomesList/>

                </ScrollView>

    );
}
const styles = StyleSheet.create({
   container: {
     flex:1,
     //justifyContent: 'center',
  backgroundColor:'#31423c',
    },
    H1:{
        marginTop:80,
        margin:40,
        color:'#44a63b',
        fontSize:45,
        fontWeight:'bold',
        fontFamily:'Roboto',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
      },
});