/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import Entrada from './Entrada';
import Resultat from './Resultat';


const Calculadora = () => {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [resultat, setResultat] = React.useState({
    numero: '',
    missatge: '',
    color: '',
  });
  const [visible, setVisible] = React.useState([false, false]);

  const calcular = () => {
    let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    if (imc < 18.5)
      setResultat({numero: imc, missatge: 'Peso insuficiente', color: 'green'});
    else if (imc < 24.9) setResultat({missatge: 'Normopeso', color: 'green'});
    else if (imc < 26.9)
      setResultat({numero: imc, missatge: 'Sobrepeso grado I', color: 'green'});
    else if (imc < 29.9)
      setResultat({
        missatge: 'Sobrepeso grado II (preobesidad)',
        color: 'orange',
      });
    else if (imc < 34.9)
      setResultat({
        numero: imc,
        missatge: 'Obesidad de tipo I',
        color: 'orange',
      });
    else if (imc < 39.9)
      setResultat({
        numero: imc,
        missatge: 'Obesidad de tipo II ',
        color: 'orange',
      });
    else if (imc < 49.9)
      setResultat({
        numero: imc,
        missatge: 'Obesidad de tipo III (mórbida)',
        color: 'red',
      });
    else
      setResultat({
        numero: imc,
        missatge: 'Obesidad de tipo IV (extrema)',
        color: 'red',
      });
  };

  const calcularVisible = (index, valor) => {
    const valors = [...visible];
    valors[index] = valor;
    setVisible(valors);
    setResultat({numero: '', missatge: '', color: ''});
  };

  return (
    <View style={stils.contenedor}>
        <Entrada
          tipo="Pes"
          color="green"
          onTextTransmit={setPeso}
          valor={peso}
          esVisible={calcularVisible}
          index={0}
          unitats="Kg"></Entrada>
        <Entrada
          tipo="Altura"
          color="orange"
          onTextTransmit={setAltura}
          valor={altura}
          esVisible={calcularVisible}
          index={1}
          unitats="m"></Entrada>
          {visible[0] && visible[1] && (
            <Button
              style={stils.button}
              buttonColor="purple"
              textColor="white"
              onPress={() => calcular()}>
              Calcula
            </Button>
          )}
      {resultat.numero != '' && <Resultat result={resultat}></Resultat>}
    </View>
  );
};

const stils = StyleSheet.create({
  button: {
    margin:15,
    fontSize:20,//no funciona
    fontWeight: 'bold',
  },
  contenedor: {
    flexDirection: 'column',
    alignContent:'flex-start',
    flex: 5,
  }
});

export default Calculadora;
