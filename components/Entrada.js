import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const Entrada = props => {
  const [text, setText] = React.useState('');
  return (
    <View style={stils.entrada}>
      <View style={stils.espacio}></View>
      <Text style={stils.text}>{props.tipo}:</Text>
      <TextInput
        style={stils.textInput}
        label={props.tipo}
        value={props.text}
        onChangeText={props.onTextTransmit}
      />
      <View style={stils.espacio}></View>
    </View>
  );
};

const stils = StyleSheet.create({
  entrada: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  text: {
    flex: 1,
  },
  textInput: {
    flex: 3,
  },
  espacio: {
    flex: 1,
  },
});

export default Entrada;
