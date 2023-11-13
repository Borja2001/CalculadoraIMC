/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Capçalera = props => {
  return (
    <View >
      <View style={stils.contenedorTitulo}>
        <Text style={stils.titulo}>Calculadora</Text>
      </View>
      <View style={stils.contenedorTextos}>
        {props.lletres.map((item, index) => (
          <Text key={index} style={{...stils.lletra, color: item.color}}>
            {item.lletra}
          </Text>
        ))}
      </View>
    </View>
  );
};

const stils = StyleSheet.create({
  contenedorTextos: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contenedorTitulo: {
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    color: 'black',
    fontSize: 33,
  },
  lletra: {
    fontSize: 33,
    fontWeight: 'bold',
  },
});

export default Capçalera;
