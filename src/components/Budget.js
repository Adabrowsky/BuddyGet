import React, { useState, useContext } from 'react';
//import ViewBudget from './ViewBudget';
//import EditBudget from './EditBudget';

import { StyleSheet, Text, Button,View,Image,useWindowDimensions } from 'react-native';
import {CCustom} from './CCustom';
import {AppContext} from './../context/AppContext';

export default function Budget(){
	const { budget, dispatch } = useContext(AppContext);

	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);

	};

	return (
		<View style={styles.container}>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<View style={styles.box}>
                                <Text style={styles.H2}>Budget: {budget} </Text>
        </View >
			)}
		</View>
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

