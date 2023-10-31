/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Entrada from './components/Entrada';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const App = () => {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [resultat, setResultat] = React.useState('');

  const calcular = () => {

    let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    if (imc < 18.5) setResultat('Peso insuficiente');
    else if (imc < 24.9) setResultat('Normopeso');
    else if (imc < 26.9) setResultat('Sobrepeso grado I');
    else if (imc < 29.9) setResultat('Sobrepeso grado II (preobesidad)');
    else if (imc < 34.9) setResultat('Obesidad de tipo I');
    else if (imc < 39.9) setResultat('Obesidad de tipo II ');
    else if (imc < 49.9) setResultat('Obesidad de tipo III (mórbida)');
    else setResultat('Obesidad de tipo IV (extrema)');
  };
  return (
    <View style={stils.contenedor}>
      <View style={stils.contenedorTitulo}><Text style={stils.titulo}>Calculadora IMC</Text></View>
      
      <View style={stils.centro}>
        <Entrada tipo="Pes" onTextTransmit={texto => setPeso(texto)}></Entrada>
        <Entrada tipo="Altura" onTextTransmit={texto => setAltura(texto)}></Entrada>
        <View style={stils.viewButton}>
          <Button style={stils.button} buttonColor='purple' textColor='white' onPress={() => calcular()}> Calcula </Button>
        </View>
      </View>
      <Text style={stils.resultat}>{resultat}</Text>
    </View>
  );
};

const stils = StyleSheet.create({
  titulo: {
   
    textAlign: 'center',
    color: 'black',
    fontSize: 33,
    
  },
  contenedorTitulo:{
     flex:1, 
     justifyContent: 'center',
  },
  button: {
     marginLeft:75,
     marginRight:75,
    
  },
  resultat: {
    textAlign: 'center',
    margin: 15,
    color: 'black',
    fontSize: 20,
    flex:1
  },
  centro:{
    flex:3
  },
  viewButton:{
    flex:1,
    justifyContent: 'center',
  },
  contenedor:{
    flexDirection: 'column',
    flex:1
  }
});

export default App;
