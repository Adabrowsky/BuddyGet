import React, { createContext, useReducer } from 'react';

const initialState = {
	budget: 3000,
	expenses: [
		{ id: 10, name: 'Shopping', cost: 50 },
		{ id: 11, name: 'Holiday', cost: 300 },
		{ id: 12, name: 'Transportation', cost: 70 },
		{ id: 13, name: 'Fuel', cost: 40 },
		{ id: 14, name: 'Child Care', cost: 500 },
	],
};



 export const AppContext = createContext(initialState);

