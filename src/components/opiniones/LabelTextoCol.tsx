import React from 'react';
import { Text, View } from 'react-native';

interface Props{
  fontSize:number,
  label:string,
  value:string,
  color:string
}

export const LabelTextoCol = ( { fontSize, label,value, color }: Props ) => {



     return <View style={{flexDirection:'column'}}>
              <Text style={{fontFamily:'Roboto-Regular', fontSize:fontSize,fontWeight:'400', textAlign:'justify', color:color,}}>{label}</Text>
              <Text style={{fontFamily:'Roboto-Regular', fontSize:fontSize,fontWeight:'700', textAlign:'justify',marginTop:3}}>{value}</Text>
            </View>
           
          
}
