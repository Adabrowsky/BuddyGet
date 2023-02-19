import React, { useState, useContext } from 'react';
//import ViewBudget from './ViewBudget';
//import EditBudget from './EditBudget';

import { StyleSheet, Text, Button,View,Image,useWindowDimensions,Pressable } from 'react-native';
import {CCustom} from './CCustom';
import {AppContext} from './../context/AppContext';

export default function Budget({onPress}){
	const { incomes } = useContext(AppContext);

	const total = incomes.reduce((total, item) => {
    		return (total += item.worth);
    	}, 0);


	return (
		<Pressable style={styles.box} onPress={onPress}>
                  <Text style={styles.H2}>Budget: {total} $</Text>
		</Pressable>
	);

};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
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

