import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';


interface Props{
  label:string,
  iconLeft:string,
  campo:string,
  multiline:boolean,
}

export const InputContactanos = ( { label, iconLeft, campo,multiline}: Props ) => {

  let colorIcono = colores.primary;
    return (
      <View style={{ flexDirection: 'row',left:-24 }}>

              <View style={{flexDirection:'column',position:'absolute' }}>
                  <Text style={{ left:95,top:-3, color:campo===''?'transparent':colorIcono,  }}>{label}</Text>
                  <CustomIcon  name={iconLeft} size={33} color='#838892'   style={{left:48, top:-9,}} ></CustomIcon>
              </View>
              
              <View style={{width:'100%', left:30}}>
              <TextInput
                  style={{
                    textAlign:'justify',
                      fontFamily:'Roboto-Regular',
                      height: multiline ? 50 : 37,
                      width:'88%',
                      margin: 8,
                      paddingTop:multiline ? 10 : 0,
                      paddingLeft:55,
                      borderWidth: 1,
                      borderLeftWidth:0,
                      borderRightWidth:0,
                      borderTopWidth:0,
                      borderColor:campo===''?'black':colorIcono
                  }}
                  // onChangeText={ onChangeEmail }
                  placeholder={label}
                  keyboardType='default'
                  autoCapitalize='none'
                  autoCorrect = {false}
                  multiline= {multiline}
                  maxLength={127}
                  value={campo}
              />
              </View>
      </View>
    )
}
