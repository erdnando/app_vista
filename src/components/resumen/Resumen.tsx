import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';


interface Props{
  label:string,
  icono:string,
  colorIcono:string,
  metrica:string
}

export const Resumen = ( { colorIcono,icono,label,metrica }: Props ) => {

    return (
      <View style={{flex:1, height:120, justifyContent:'center',alignItems:'center'}}>
                                        
          <View style={{ backgroundColor:'#EDF0F5', borderWidth:0, borderRadius:50,margin:6, height:64, width:64, 
          justifyContent:'center', alignContent:'center', alignItems:'center' }}>
              <Text > 
              <CustomIcon name={icono} size={34} color={colorIcono} ></CustomIcon>
              </Text>
          </View>

        <Text style={{fontFamily:'Roboto-Bold', fontSize:17, margin:3}}>{metrica}</Text>
        <Text style={{fontFamily:'Roboto-Regular',color:'#838892', fontSize:15, margin:3}}>{label}</Text>
    </View>
    )
}
