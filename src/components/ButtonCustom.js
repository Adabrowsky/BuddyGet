import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import {CCustom} from './CCustom';

export default function ButtonCustom({onPress,text,type}){

    return (
        <Pressable
            onPress={onPress}
            style={[styles.container,styles['container_'+type]]}>
                <Text style={styles['text_'+type]}>{text}</Text>
        </Pressable >
    );
};
const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:17,
        marginVertical:5,
        alignItems:"center",
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
    },
    container_Primary:{
        backgroundColor:CCustom.GreenMain,
    },
    container_Secondary:{
       backgroundColor:CCustom.LightBlue,
       color:"green",
    },
    text_Primary:{
        fontWeight:'bold',
        color:'#FFF',
        fontSize:20,
    },
    text_Secondary:{
            fontWeight:'bold',
            color:'green',
            fontSize:20,
        }
});