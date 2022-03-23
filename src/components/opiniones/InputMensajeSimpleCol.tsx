import React, { useContext } from 'react';
import { KeyboardType, KeyboardTypeOptions, Text, TextInput, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { LabelTexto } from './LabelTexto';


interface Props{
  placeholder:string;
  campo:string;
  width?:string,
  maxLength?:number,
  keyboardType?:KeyboardType,
  onChangeMensaje: (msg:string) =>void;
}

export const InputMensajeSimpleCol = ( { placeholder,campo,width='90%',maxLength=8,keyboardType='default' ,onChangeMensaje}: Props ) => {

  let colorIcono = colores.primary;
  
    return (<View style={{flex:1,width:'100%',backgroundColor:'transparent',height:30}}>
              <View style={{marginLeft:15}}>
                 <LabelTexto  fontSize={12} color='#838892' label='' value={placeholder}></LabelTexto>
              </View>
              <TextInput
                  style={{
                      textAlign:'justify',
                      fontFamily:'Roboto-Regular',
                      fontSize:14,
                      maxHeight:50,
                      width:width,
                      paddingLeft:14,
                      marginTop:0,
                      left:0,
                      margin: 2,
                      borderWidth: 1,
                      paddingBottom:0,
                      borderLeftWidth:0,
                      borderRightWidth:0,
                      borderTopWidth:0,
                      borderColor:campo===''?'black':colorIcono
                  }}
                  onChangeText={ onChangeMensaje }
                  placeholder={placeholder}
                  keyboardType= {keyboardType}
                  autoCapitalize='none'
                  autoCorrect = {false}
                  multiline= {false}
                  numberOfLines={2}
                  maxLength={maxLength}
                  value={campo}
              />
              </View>
    )
}
