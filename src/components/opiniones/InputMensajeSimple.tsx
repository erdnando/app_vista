import React, { useContext } from 'react';
import { Text, TextInput, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';


interface Props{
  placeholder:string;
  campo:string;
  width?:string,
  onChangeMensaje: (msg:string) =>void;
}

export const InputMensajeSimple = ( { placeholder,campo,width='90%',onChangeMensaje}: Props ) => {

  let colorIcono = colores.primary;
  
    return (
      <View style={{ flexDirection: 'row',left:0 }}>

              <View style={{width:'100%', left:0}}>
              <TextInput
                  style={{
                      textAlign:'justify',
                      fontFamily:'Roboto-Regular',
                      fontSize:14,
                      maxHeight:50,
                      width:width,
                      paddingLeft:12,
                      left:5,
                      margin: 8,
                      borderWidth: 1,
                      paddingBottom:10,
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
                  multiline= {false}
                  numberOfLines={2}
                  maxLength={8}
                  value={campo}
              />

             

              </View>
              
              

              
      </View>
    )
}
