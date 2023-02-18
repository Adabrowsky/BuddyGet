import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './../components/ExpensesItem';
import { AppContext } from '../context/AppContext';
import { StyleSheet, Text, Pressable,View } from 'react-native';

export default function ExpenseList(){
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};
/*
<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>

			*/
	return (

			<View style={styles.ListCont}>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
					    key={expense.id}
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</View>

	);
};

const styles = StyleSheet.create({
    ListCont:{
    //flex:1,
        //display:'flex',
       // flexDirection:'column',
        //alignItems:'center',
       // justifyContent:'center',
       backgroundColor:'blue',
       marginTop:50,
    },
});