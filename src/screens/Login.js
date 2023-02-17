import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, Button,View,Image,useWindowDimensions } from 'react-native';
import Logo from '../../assets/img/logo.png';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';
import {useNavigation} from '@react-navigation/native';
import LocalAuthentication from 'expo-local-authentication';

export default function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {height,width} = useWindowDimensions();

    const navigation = useNavigation();
    const onSignInPressed = () =>{
        console.warn("Sign in");
    }
    const onSignUpPressed = () =>{
        console.warn("onSignUpPressed");
        navigation.navigate("SignUp");
    }

    const onSignInFingPressed = () =>{
            console.warn("Fing");
            useEffect(() => {
                    const getEnrollment = async () => {
                        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
                        if (isEnrolled) {
                            const { success } = await LocalAuthentication.authenticateAsync({ promptMessage: 'Authenticate' });
                            if (success) navigation.navigate("Home");;
                        }
                    };
                    getEnrollment();
                }, [])
        }
    return (
        <View style={styles.container}>
            <Image source={Logo} style={[styles.logo],{height:height*0.3}} resizeMode="contain"/>
          <TextInputCustom placeholder="Username" value={username} setValue={setUsername} />
          <TextInputCustom placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
          <ButtonCustom text="Sign In" onPress={onSignInPressed} type="Primary"/>
          <ButtonCustom text="Sign In With FingerPrint" onPress={onSignInFingPressed} type="Primary"/>
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
