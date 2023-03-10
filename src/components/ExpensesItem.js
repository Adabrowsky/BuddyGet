import React, { useContext } from 'react';
//import Icon from 'react-native-ionicons'
import { AppContext } from '../context/AppContext';
import { StyleSheet, Text, Pressable,View,Image,TouchableOpacity } from 'react-native';
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
			<Text style={styles.text}>{props.cost}$</Text>
            <Pressable style={styles.pressable} onPress={handleDeleteExpense}>
			<Image name='delete' onClick={handleDeleteExpense} source={Delete} style={styles.icon} resizeMode="contain"/>
            </Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
    ListElement:{

        flexWrap:'wrap',
        width:'100%',
        display:'flex',
        backgroundColor:'#31423c',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:30,
        paddingVertical:10,
        borderWidth:3,
        borderColor:'red',

    },

    text:{
        color:'white',
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

    },
    pressable:{
        maxHeight:30,
        maxWidth:30,
    }
});
