import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Touchable, TouchableOpacity} from 'react-native';


export default function Header(){

return(

    <View>
        <Text style={styles.titulo}>
            Calculadora AQUARELA
        </Text>
    </View>

)
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        padding: 20,

    },

});