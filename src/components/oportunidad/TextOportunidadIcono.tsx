import React from 'react';
import { Text, View } from 'react-native';
import CustomIcon from '../../theme/CustomIcon';

interface Props{
  label:string,
  valor:string,
  size:number,
  icono:string,
  colorValor?:string,
  valueIsBold?:boolean,
  
}

export const TextOportunidadIcono = ( { size, label,valor, icono, colorValor = 'black', valueIsBold = false }: Props ) => {

    return  <View style={{flexDirection:'row', paddingVertical:3}}>
              {/* (icono != '') ? <Text><CustomIcon  name={icono} size={24} color='#000000'  ></CustomIcon></Text> : <View></View> */}
              <Text style={{top:-4}}><CustomIcon  name={icono} size= {icono==='' ? 0 :28} color='black'  ></CustomIcon></Text>
              <Text style={{ fontFamily:'Roboto-Bold', color:'black', fontSize:size }}> {label}</Text>
              <Text style={{ fontFamily:valueIsBold?'Roboto-Bold':'Roboto-Regular', fontSize:size, color:colorValor }}> {valor}</Text>
            </View>  
}
