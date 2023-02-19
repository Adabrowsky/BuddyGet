import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { StyleSheet, Text,View } from 'react-native';
import {CCustom} from './CCustom';
export default function Left(){

	const { expenses,incomes } = useContext(AppContext);

    const budget = incomes.reduce((budget, item) => {
        		return (budget += item.worth);
        	}, 0);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    let Left = budget-totalExpenses;
	return (
		<View style={styles.box}>
        			<Text style={styles.H2}>Left: {Left}$</Text >
        </View>
	);
};
const styles = StyleSheet.create({
  H2:{
      color:'#44a63b',
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
    borderColor:'green',
    borderWidth:1,
  }

});