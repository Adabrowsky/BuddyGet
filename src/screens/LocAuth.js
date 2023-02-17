import { StatusBar } from 'expo-status-bar';
import { useState ,useEffect} from 'react';
import { StyleSheet, Text, Button,View,Image,useWindowDimensions } from 'react-native';
import Fingerprint from '../../assets/img/fingerprint.png';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';
import {useNavigation} from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';



export default function LocAuth({navigation}){
    const {height,width} = useWindowDimensions();
    useEffect(()=>{
        const biometricAuth = LocalAuthentication.authenticateAsync({
            promptMessage:'Login With Biometrics',
            cancelLabel:'cancel',
            disableDeviceFallback:true,
        })
        if(biometricAuth){
          //navigation.navigate("Home");
           console.log("success");
        }else{
        console.log("nosuccess");
        }
        console.log(biometricAuth);
    })
    return (
        <View style={styles.container}>
            <Image source={Fingerprint} style={[styles.logo],{height:height*0.6}} resizeMode="contain"/>
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
    maxHeight:300,
  },
});