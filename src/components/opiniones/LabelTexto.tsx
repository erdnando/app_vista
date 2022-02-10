import React from 'react';
import { Text } from 'react-native';

interface Props{
  fontSize:number,
  label:string,
  value:string,
  color:string
}

export const LabelTexto = ( { fontSize, label,value, color }: Props ) => {



     return   <Text style={{fontFamily:'Roboto-Regular', fontSize:fontSize,fontWeight:'700', textAlign:'justify', marginBottom:3}}>{label}
                      <Text style={{fontFamily:'Roboto-Regular', fontSize:fontSize,fontWeight:'400', textAlign:'justify',color:color}}>{value}</Text>
              </Text>
           
          
}
