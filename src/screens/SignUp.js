import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button,View,Image,useWindowDimensions,Alert } from 'react-native';
import {CCustom} from './../components/CCustom';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../App';

export default function SignUp(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordRep,setPasswordRep] = useState('');

    const onSignUpPressed = () =>{
        if(password!=passwordRep){
            Alert.alert("Passwords are diffrent!");
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
                const user = userCredential.user;
                Alert.alert('User has been created');
            })
            .catch(error =>{
                console.log(error);
                Alert.alert(error.message);
            }
            )
        };

    const {height,width} = useWindowDimensions();
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Create An Account</Text>
          <TextInputCustom placeholder="Email" value={email} setValue={setEmail} />
          <TextInputCustom placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
          <TextInputCustom placeholder="Repeat Password" value={passwordRep} setValue={setPasswordRep} secureTextEntry={true}/>
          <ButtonCustom text="Sign Up" onPress={onSignUpPressed} type="Primary"/>
        </View >
    );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems: 'center',
    padding:20,
    backgroundColor:'#31423c',
  },
  logo:{
    width:'70%',
    maxWidth:300,
    maxHeight:150,
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    fontColor:CCustom.Onyx,
    paddingVertical:20,
  }
});
