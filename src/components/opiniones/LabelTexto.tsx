import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, TextStyle } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';


interface Props{
  fontSize:number,//18
  label:string,
  value:string,
  color:string
}

export const LabelTexto = ( { fontSize, label,value, color }: Props ) => {

 // const { flags,setFlags } = useContext(GeneralContext);

     return   <Text style={{fontFamily:'Roboto-Regular', fontSize:fontSize,fontWeight:'700', textAlign:'justify', marginBottom:8}}>{label}
                      <Text style={{fontFamily:'Roboto-Regular', fontSize:fontSize,fontWeight:'400', textAlign:'justify',color:color}}>{value}</Text>
              </Text>
           
          
}
