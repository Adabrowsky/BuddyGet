import React,{ useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { StyleSheet, Text,TextInput,Pressable, Button,View,Image,useWindowDimensions,Alert } from 'react-native';
let index=14;
export default function AddIncomeForm(props){
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [worth, setWorth] = useState('');

	const onSubmit = () => {
		if(name.length==0||worth.length==0){
		    Alert.alert("Income must have worth and name!");
		    return;
		}
		index=index+1;
		const income = {
		    key:index,
			id: index,
			name,
			cost: parseInt(worth),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setWorth('');
	};

	return (
			<View style={styles.container}>
				<View style={styles.subcontainer}>
					<Text style={styles.textInput}>Name</Text>
					<TextInput
					    style={styles.input}
						required='required'
						type='text'
						id='name'
						value={name}
						onChangeText={setName}
					/>
				</View>
				<View style={styles.subcontainer}>
					<Text style={styles.textInput}>Worth</Text>
					<TextInput
					    style={styles.input}
						required='required'
						type='number'
						class='form-control'
						id='worth'
						value={worth}
						onChangeText={setWorth}
					/>
				</View>

			<Pressable style={styles.button} onPress={onSubmit}>
                 <Text style={styles.Textbutton}>Add</Text>
            </Pressable >
            </View>
	);

};
const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    //backgroundColor:'red',

  },
  logo:{
    width:'70%',
    maxWidth:300,
    maxHeight:150,
  },
  subcontainer:{
    width:"70%",
    backgroundColor:'#305252',
    borderWidth:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    fontSize:30,
    borderRadius:5,
  },
  input:{
  borderRadius:5,
    fontSize:20,
    minWidth:150,
    minHeight:50,
    backgroundColor:'#B7D5D4',
    color:'black'
  },
  textInput:{
    fontSize:25,
    marginLeft:10,
    fontWeight:'bold',
    color:'white',
  },
  button:{
     minWidth:120,
     minHeight:35,
     backgroundColor:'#44a63b',
     alignItems:'center',
     justifyContent:'center',
     marginTop:3,
     borderRadius:5,
     borderWidth:2,

  },
  Textbutton:{
    fontSize:20,
  }
});
