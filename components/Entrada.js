import React from 'react';
import { StyleSheet, View} from 'react-native';
import { TextInput, HelperText} from 'react-native-paper';

const comprovaCadena = entrada => {
  const expressioRegular = /^\d+\.+\d|^\d+$/;
  return expressioRegular.test(entrada);
};

const Entrada = props => {
  const [errors, setErrors] = React.useState('');

  const handleInput = texto => {
    props.onTextTransmit(texto);
    comprovaEntrada(texto);
  };

  const comprovaEntrada = entrada => {
    let error = ' ';
    if (entrada != '') {
      if (comprovaCadena(entrada)) {
        if (entrada == 0) {
          error =
            'El/la ' + props.tipo + ' ha de ser major de 0.0' + props.unitats;
        } else {
          error = '';
        }
      } else {
        error =
          'Escriu el/la ' +
          props.tipo +
          ' en ' +
          props.unitats +
          '. i amb valors positius';
      }
    }
    setErrors(error);
    if (error === '') props.esVisible(props.index, true);
    else props.esVisible(props.index, false);
  };
  return (
    <View style={stils.entrada}>
      <TextInput
        outlineColor={props.color}
        activeOutlineColor={props.color}
        style={stils.textInput}
        mode="outlined"
        label={props.tipo + '(' + props.unitats + ')'}
        right={<TextInput.Affix text={props.unitats} />}
        onChangeText={handleInput}
        keyboardType="numeric"
      />
      <HelperText
        style={stils.helperText}
        type="error"
        visible={errors.length > 0 ? true : false}>
        {errors}
      </HelperText>
    </View>
  );
};

const stils = StyleSheet.create({
  entrada: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  helperText: {
    flex: 1,
    fontSize: 15,
  },
});

export default Entrada;
