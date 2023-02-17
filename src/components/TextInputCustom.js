import React from 'react';
import { StyleSheet, TextInput,View,useWindowDimensions } from 'react-native';
import {CCustom} from './CCustom';


export default function Login({value,setValue,placeholder,secureTextEntry}){
    const {width} = useWindowDimensions();
    return (
        <View style={styles.container}>
          <TextInput

            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.input}
          />
        </View >
    );
};

const styles = StyleSheet.create({
    container:{

        backgroundColor:CCustom.Onyx,
        width:'100%',
        borderColor:'#000',
        borderWidth:1,
        borerRadius:5,
        addingHorizontal:10,
        marginVertical:5,
        padding:20,
    },
    input:  {
       fontSize:16,
    },
}
)