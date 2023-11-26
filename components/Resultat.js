/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Resultat = props => {
  return (
    <View style={stils.contenedor}>
      <Text style={{...stils.resultat}}>
          Tens un IMC de {props.result.numero}
      </Text>
      <Text style={{...stils.resultat, color: props.result.color}}>
        {props.result.missatge}
      </Text>
    </View>
  );
};

const stils = StyleSheet.create({
  resultat: {
    textAlign: 'center',
    margin: 5,
    fontSize: 20,
  },
  contenedor: {
    flexDirection: 'column',
  },
});

export default Resultat;
