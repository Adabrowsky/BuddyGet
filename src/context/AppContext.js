import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'DELETE_INCOME':
            return {
            	...state,
            	incomes: state.incomes.filter(
            	(income) => income.id !== action.payload
                ),
            };
        case 'ADD_INCOME':
                    return {
                    	...state,
                        incomes: [...state.incomes, action.payload],
                    };
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};
const initialState = {
	budget: 3000,
	expenses: [
		{ id: 10, name: 'Shopping', cost: 50 },
		{ id: 11, name: 'Home', cost: 300 },
		{ id: 12, name: 'Food', cost: 70 },
		{ id: 13, name: 'Fuel', cost: 40 },
		{ id: 14, name: 'Car', cost: 500 },
	],
	incomes: [
           		{ id: 10, name: 'Work', worth: 2300 },
           		{ id: 11, name: 'Amazon', worth: 150 },
           		{ id: 12, name: 'Paintings', worth: 70 },
           		{ id: 13, name: 'Bonus', worth: 40 },
           		{ id: 14, name: 'Child Care', worth: 500 },
    ],
};



 export const AppContext = createContext(initialState);


export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				incomes: state.incomes,
				budget: state.budget,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};