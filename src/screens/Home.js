import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button,View,Image,useWindowDimensions } from 'react-native';
import TextInputCustom from '../components/TextInputCustom';
import ButtonCustom from '../components/ButtonCustom';
import BottomNavBar from './../components/BottomNavBar';
import {useNavigation} from '@react-navigation/native';
import {CCustom} from './../components/CCustom';
import Budget from './../components/Budget';
import Expense from './../components/Expense';
import Left from './../components/Left';

export default function Home({navigation}){

const navToEx = () =>{
    navigation.navigate("Expenses");
}

    return (
        <View style={styles.container}>
            <Text style={styles.H1}>Budget Summary</Text>
            <Budget/>
            <Expense onPress={navToEx}/>
            <Left/>

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
    maxHeight:150,
  },
  H1:{
    marginVertical:20,
    color:CCustom.GreenMain,
    fontSize:45,
    fontWeight:'bold',
    fontFamily:'Roboto',
    textShadowColor: CCustom.LightBlue,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  },
  H2:{
      color:'#000',
      fontSize:20,
      fontWeight:'bold',
      fontFamily:'Roboto',
      textShadowRadius: 1
    },
  box:{
    width:'100%',
    padding:20,
    marginVertical:10,
    alignItems:"center",
    borderRadius:15,
    backgroundColor: CCustom.LightBlue,
    borderColor:'#000',
    borderWidth:1,
  }

});