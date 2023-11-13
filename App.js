/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Capçalera from './components/Capçalera';
import Calculadora from './components/Calculadora';

const App = () => {
  return (
    <View style={stils.contenedor}>
      <Capçalera
        lletres={[
          {lletra: 'I', color: 'red'},
          {lletra: 'M', color: 'green'},
          {lletra: 'C', color: 'blue'},
        ]}></Capçalera>
        <Calculadora/>
        
    </View>
  );
};

const stils = StyleSheet.create({ 
  contenedor: {
    flexDirection: 'column',
    alignContent:'flex-start',
    flex: 1,
  },
});

export default App;
