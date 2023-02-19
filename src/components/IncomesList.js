import React, { useContext, useState, useEffect } from 'react';
import IncomeItem from './../components/IncomeItem';
import { AppContext } from '../context/AppContext';
import { StyleSheet, Text, Pressable,View } from 'react-native';

export default function IncomesList(){
	const { incomes } = useContext(AppContext);

	const [filteredIncomes, setfilteredIncomes] = useState(incomes || []);

	useEffect(() => {
		setfilteredIncomes(incomes);
	}, [incomes]);

	const handleChange = (event) => {
		const searchResults = incomes.filter((filteredIncome) =>
			filteredIncome.name.toLowerCase().includes(event.target.value)
		);
		setfilteredIncomes(searchResults);
	};
	return (

			<View style={styles.ListCont}>
				{filteredIncomes.map((income) => (
					<IncomeItem
					    key={income.id}
						id={income.id}
						name={income.name}
						worth={income.worth}
					/>
				))}
			</View>

	);
};

const styles = StyleSheet.create({
    ListCont:{
       marginTop:50,
    },
});