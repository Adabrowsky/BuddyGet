import { StatusBar } from 'expo-status-bar';
import { useState ,useEffect} from 'react';
import { StyleSheet,View,Image,useWindowDimensions } from 'react-native';
import Fingerprint from '../../assets/img/fingerprint.png';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';
import {useNavigation} from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';



export default function LocAuth({navigation}){
    const {height,width} = useWindowDimensions();
        let biometricAuth=0;
        useEffect(() => {
                const getEnrollment = async () => {
                    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
                    if (isEnrolled) {
                        const { success } = await LocalAuthentication.authenticateAsync({ promptMessage: 'Authenticate' });
                        if (success) {
                            biometricAuth=1;
                            navigation.navigate("Home");
                        }

                    }
                };
                getEnrollment();
            }, [])
        if(biometricAuth==1){
           console.log("successsss");
        }else if(biometricAuth==0){
        console.log("nosuccess");
        }

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
    backgroundColor:'#31423c',
  },
  logo:{
    width:'70%',
    maxWidth:300,
    maxHeight:300,
  },
});