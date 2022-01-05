import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { useMensaje } from '../../hooks/useMensaje';


interface Props{
  placeholder:string,
  longitud:number
}

export const InputMensaje = ( { placeholder,longitud}: Props ) => {

  let colorIcono = colores.primary;
  const { onChangeMensaje,mensaje } = useMensaje(); 



    return (
      <View style={{ flexDirection: 'row',left:-24 }}>

              <View style={{width:'100%', left:30}}>
              <TextInput
                  style={{
                      textAlign:'justify',
                      fontFamily:'Roboto-Regular',
                      maxHeight:100,
                      width:'88%',
                      margin: 8,
                      paddingTop:10,
                      paddingLeft:10,
                      borderWidth: 1,
                      paddingBottom:10,
                      borderLeftWidth:0,
                      borderRightWidth:0,
                      borderTopWidth:0,
                      borderColor:mensaje===''?'black':colorIcono
                  }}
                  onChangeText={ onChangeMensaje }
                  placeholder={placeholder}
                  keyboardType='default'
                  autoCapitalize='none'
                  autoCorrect = {false}
                  multiline= {true}
                  numberOfLines={8}
                  maxLength={255}
                  value={mensaje}
              />

              <View style={{justifyContent:'flex-end',alignContent:'flex-end',alignItems:'flex-end', right:32}}>
                  <Text>{longitud} de 255</Text>
              </View>


              </View>
              
              

              
      </View>
    )
}
