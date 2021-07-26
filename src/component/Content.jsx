import React,{useState, Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Touchable, TouchableOpacity, Image} from 'react-native';


export default function Content(){
    const[state, setState] = useState({
        a: '',
        b: '',
        resultado: '',
        
    })

    console.log(state);

    const handleInputChange = (name, value) =>{
        setState({
            ...state,[name]:value
        })
    }
    const Soma = () => {
        setState({
        ...state, resultado: (state.a + state.b) 
    })
    }

    const Subtracao = () => {
        setState({
        ...state, resultado: (state.a - state.b) 
    })
    }
    const Multiplicacao = () => {
        setState({
        ...state, resultado: (state.a * state.b) 
    })
    }
    const Divisao = () => {
        setState({
        ...state, resultado: (state.a / state.b) 
    })
    }
    const RestoDivisao = () => {
        setState({
        ...state, resultado: (state.a % state.b) 
    })
    }
    const Exponenciacao = () => {
        setState({
        ...state, resultado: (state.a ** state.b) 
    })
    }


    
return(
    <View style={styles.calculadora}>
        <View style={styles.resul} >
        <Text style={styles.resultado}>{state.resultado}</Text>
        <TextInput style={styles.corpo}
            onChangeText={
            (valor) => handleInputChange("a", Number(valor))
            }KeyboardType="numeric" placeholder="Digite valor a"
            />

        <TextInput style={styles.corpo}
            onChangeText={
            (valor) => handleInputChange("b", Number(valor))
            }KeyboardType="numeric" placeholder="Digite valor b"
            />    

        </View>
        <TouchableOpacity>
            <Text style={styles.btn1} onPress={Soma}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.btn2} onPress={Subtracao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.btn3} onPress ={Multiplicacao}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.btn4} onPress ={Divisao}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.btn5} onPress ={RestoDivisao}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.btn6} onPress ={Exponenciacao}>^</Text>
        </TouchableOpacity>

    </View>
);
}

    



const styles = StyleSheet.create({
    calculadora: {
        borderRadius: 200,
        padding: 50,
        backgroundColor: '#CDCECE',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 400,
        height:400,
        
    },
    corpo: {
        fontSize: 18,
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 150,
        backgroundColor: '#fff',
        padding: 5,
        margin: 2,
        borderRadius: 50,
        

    },
    btn1: {
        borderRadius: 50,
        backgroundColor: 'yellow',
        padding: 20,
        fontSize: 25,
        width: 75,
        height: 75,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,

    },

    btn2: {
        borderRadius: 50,
        backgroundColor: 'green',
        padding: 20,
        fontSize: 25,
        width: 75,
        height: 75,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,

    },

    btn3: {
        borderRadius: 50,
        backgroundColor: '#235EB6',
        padding: 20,
        fontSize: 25,
        width: 75,
        height: 75,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,

    }, 
    
    btn4: {
        borderRadius: 50,
        backgroundColor: 'orange',
        padding: 20,
        fontSize: 25,
        width: 75,
        height: 75,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,

    }, 

    btn5: {
        borderRadius: 50,
        backgroundColor: '#DE28AB',
        padding: 20,
        fontSize: 25,
        width: 75,
        height: 75,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,

    },  
    
    btn6: {
        borderRadius: 50,
        backgroundColor: 'red',
        padding: 20,
        fontSize: 25,
        width: 75,
        height: 75,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,

    },    







    resul:{
        flexDirection: 'column',
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    resultado:{
        fontSize:25,
        fontWeight: 'bold',
        padding:5,
    }
    



  });





