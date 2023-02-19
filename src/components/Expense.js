import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { StyleSheet, Text,View,Pressable } from 'react-native';
import {CCustom} from './CCustom';

export default function ExpenseTotal({onPress}){

	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<Pressable style={styles.box} onPress={onPress}>
			<Text style={styles.H2}>Spent so far: {total}$</Text >
		</Pressable>
	);
};
const styles = StyleSheet.create({
  H2:{
      color:'#F00',
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
    borderColor:'#F00',
    borderWidth:1,
  }

});