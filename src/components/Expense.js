import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { StyleSheet, Text,View } from 'react-native';
import {CCustom} from './CCustom';

export default function ExpenseTotal(){

	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<View style={styles.box}>
			<Text style={styles.H2}>Spent so far: £{total}</Text >
		</View>
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