import React from 'react';
import { Text, View } from 'react-native';
import CustomIcon from '../../theme/CustomIcon';

interface Props{
  label:string,
  valor:string | null,
  size:number,
  colorValor?:string,
  valueIsBold?:boolean,
  
}

export const TextOportunidad = ( { size, label,valor, colorValor = 'black', valueIsBold = false }: Props ) => {

    return  <View style={{flexDirection:'row', paddingVertical:3}}>
              <Text style={{ fontFamily:'Roboto-Bold', color:'black', fontSize:size }}> {label}</Text>
              <Text style={{ fontFamily:valueIsBold?'Roboto-Bold':'Roboto-Regular', fontSize:size, color:colorValor }}> {valor}</Text>
            </View>  
}
