import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button,View,Image,useWindowDimensions } from 'react-native';
import Logo from '../../assets/img/logo.png';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';
import {useNavigation} from '@react-navigation/native';

export default function Home(){

    return (
        <View style={styles.container}>
            <Image source={Logo} style={[styles.logo],{height:height*0.3}} resizeMode="contain"/>

        </View >
    );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  logo:{
    width:'70%',
    maxWidth:300,
    maxHeight:150,
  },
});