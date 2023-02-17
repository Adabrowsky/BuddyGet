import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, Button,View,Image,useWindowDimensions } from 'react-native';
import Logo from '../../assets/img/logo.png';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';
import Na from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../App';


export default function Login({navigation}){

    const handleBiometricAuth = async() =>{
        const isBiometricsAvailable = await LocalAuthentication.hasHardwareAsync();
    }
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {height,width} = useWindowDimensions();


    const onSignInPressed = () =>{
          let localAuthViable = 0;
          const isBiometricsAvailable = LocalAuthentication.hasHardwareAsync();
          const supportedBiometric =  LocalAuthentication.supportedAuthenticationTypesAsync();
          const savedBiometrics =  LocalAuthentication.isEnrolledAsync();
            if(isBiometricsAvailable&&supportedBiometric&&savedBiometrics){
                    localAuthViable=1;
            }
          signInWithEmailAndPassword(auth,username,password)
                .then((userCredential)=>{
                        console.log(localAuthViable);
                        if(localAuthViable==0)
                            navigation.navigate("Home");
                        else if(localAuthViable==1){
                             navigation.navigate("LocAuth");
                        }
                    })
                    .catch(error =>{
                        console.log(error);
                        Alert.alert(error.message);
                    }
                    )
    }
    const onSignUpPressed = () =>{
        console.warn("onSignUpPressed");
        navigation.navigate("SignUp");
    }


    return (
        <View style={styles.container}>
            <Image source={Logo} style={[styles.logo],{height:height*0.3}} resizeMode="contain"/>
          <TextInputCustom placeholder="Username" value={username} setValue={setUsername} />
          <TextInputCustom placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
          <ButtonCustom text="Sign In" onPress={onSignInPressed} type="Primary"/>
          <ButtonCustom text="Sign Up" onPress={onSignUpPressed} type="Secondary"/>
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
