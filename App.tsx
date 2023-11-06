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
  const [resultat, setResultat] = React.useState({missatge:"",color:""});

  const calcular = () => {

    let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    if (imc < 18.5) setResultat({missatge:'Peso insuficiente',color:'green'});
    else if (imc < 24.9) setResultat({missatge:'Normopeso',color:'green'});
    else if (imc < 26.9) setResultat({missatge:'Sobrepeso grado I',color:'green'});
    else if (imc < 29.9) setResultat({missatge:'Sobrepeso grado II (preobesidad)',color:'orange'});
    else if (imc < 34.9) setResultat({missatge:'Obesidad de tipo I',color:'orange'});
    else if (imc < 39.9) setResultat({missatge:'Obesidad de tipo II ',color:'orange'});
    else if (imc < 49.9) setResultat({missatge:'Obesidad de tipo III (mórbida)',color:'red'});
    else setResultat({missatge:'Obesidad de tipo IV (extrema)',color:'red'});
  };
  
  return (
    <View style={stils.contenedor}>
      <View style={stils.contenedorTitulo}><Text style={stils.titulo}>Calculadora IMC</Text></View>
      
      <View style={stils.centro}>
        <Entrada tipo="Pes" onTextTransmit={texto => setPeso(texto)} valor={peso}></Entrada>
        <Entrada tipo="Altura" onTextTransmit={texto => setAltura(texto)} valor={altura}></Entrada>
        <View style={stils.viewButton}>
          <Button style={stils.button} buttonColor='purple' textColor='white' onPress={() => calcular()}> Calcula </Button>
        </View>
      </View>
      <Text style={{...stils.resultat,color: resultat.color}}>{resultat.missatge
      }</Text>
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
