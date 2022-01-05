import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { useMensaje } from '../../hooks/useMensaje';


interface Props{
  placeholder:string,
  campo:string,
}

export const InputMensaje = ( { placeholder, campo}: Props ) => {

  let colorIcono = colores.primary;
  const { onChangeMensaje } = useMensaje(); 



    return (
      <View style={{ flexDirection: 'row',left:-24 }}>

              <View style={{width:'100%', left:30}}>
              <TextInput
                  style={{
                      textAlign:'justify',
                      fontFamily:'Roboto-Regular',
                      height: 90 ,
                      width:'88%',
                      margin: 8,
                      paddingTop:10,
                      paddingLeft:5,
                      borderWidth: 1,
                      borderLeftWidth:0,
                      borderRightWidth:0,
                      borderTopWidth:0,
                      borderColor:campo===''?'black':colorIcono
                  }}
                  onChangeText={ onChangeMensaje }
                  placeholder={placeholder}
                  keyboardType='default'
                  autoCapitalize='none'
                  autoCorrect = {false}
                  multiline= {true}
                  maxLength={255}
                  value={campo}
              />
              </View>
      </View>
    )
}
