import React, { useContext } from 'react';
import { Text, TextInput, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';


interface Props{
  placeholder:string;
  longitud:number;
  campo:string;
  width?:string,
  onChangeMensaje: (msg:string) =>void;
}

export const InputMensaje = ( { placeholder,longitud,campo,width='88%',onChangeMensaje}: Props ) => {

  let colorIcono = colores.primary;
  
    return (
      <View style={{ flexDirection: 'row',left:-24 }}>

              <View style={{width:'100%', left:30}}>
              <TextInput
                  style={{
                      textAlign:'justify',
                      fontFamily:'Roboto-Regular',
                      fontSize:14,
                      maxHeight:50,
                      width:width,
                      margin: 8,
                      paddingTop:10,
                      paddingLeft:10,
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
                  multiline= {true}
                  numberOfLines={2}
                  maxLength={255}
                  value={campo}
              />

              <View style={{justifyContent:'flex-end',alignContent:'flex-end',alignItems:'flex-end', right:32}}>
                  <Text>{longitud} de 255</Text>
              </View>


              </View>
              
              

              
      </View>
    )
}
