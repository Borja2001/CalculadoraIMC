import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput,HelperText} from 'react-native-paper';

const comprovaCadena=(entrada)=>{

 const expressioRegular=/^\d+\.+\d|^\d+$/
 return expressioRegular.test(entrada)
}
const Entrada = props => {
  const [error, setError] = React.useState('');
  const comprovaEntrada=(entrada)=>{

   props.onTextTransmit
      if( entrada==0){
          setError("El valor no puede ser 0")
      }
      
    
 
  }
  return (
    <View style={stils.entrada}>
      
      <TextInput
        style={stils.textInput}
        label={props.tipo}
        value={props.text}
        onChangeText={()=>comprovaEntrada(props.valor) }
        keyboardType='numeric'
      />
      <HelperText style={stils.helperText} type="error" visible={error.length>0? true:false}>
        {error}
      </HelperText>
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
 
  textInput: {
    flex: 1,
  },
  helperText:{
    flex:1,
  }
  
});

export default Entrada;
