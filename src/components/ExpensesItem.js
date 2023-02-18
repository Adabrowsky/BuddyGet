import React, { useContext } from 'react';
//import Icon from 'react-native-ionicons'
import { AppContext } from '../context/AppContext';
import { StyleSheet, Text, Pressable,View,Image } from 'react-native';
import Delete from '../../assets/img/bin.png';
export default function ExpenseItem(props){
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<View style={styles.ListElement}>
			<Text style={styles.text}>{props.name}</Text>
			<Text style={styles.text}>£{props.cost}</Text>
			<Image name='delete' onClick={handleDeleteExpense} source={Delete} style={styles.icon} resizeMode="contain"/>
		</View>
	);
};

const styles = StyleSheet.create({
    ListElement:{
        //flex:1,
        flexWrap:'wrap',
        width:'100%',
        display:'flex',
        backgroundColor:'red',
        flexDirection:'row',
        //flexBasis:'9%',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:30,
        paddingVertical:10,

    },

    text:{
        fontSize:20,
        minWidth:150,
    },
    ListBox:{

    },
    icon:{
        flexGrow:0,
        flexShrink:0,
        maxHeight:30,
        maxWidth:30,
        //justifySelf:'flex-end',
        backgroundColor:"blue",
        //alignSelf:'flex-end',
        //alignSelf:'center',
    }
});
