import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import CustomIcon from '../../theme/CustomIcon';

interface Props{
  label:string,
  valor:string | null,
  size:number,
  colorValor?:string,
  valueIsBold?:boolean,
  width:string,
  alineacion:TextStyle["textAlign"],
  borderEndWidth:number
}

export const TextOportunidadVertical = ( { size, label,valor,width,alineacion,borderEndWidth, colorValor = 'black', valueIsBold = false }: Props ) => {

    return  <View style={{ paddingVertical:2, justifyContent:'flex-start', alignContent:'center',alignItems:'flex-start', width:width , borderEndWidth:borderEndWidth, borderEndColor:'grey'}}>
              <Text style={{ fontFamily:'Roboto-Regular', color:'black', fontSize:size,textAlign:alineacion }}> {label}</Text>
              <Text style={{ fontFamily:'Roboto-Bold',textAlign:alineacion, fontSize:size, color:colorValor, marginTop:5 }}> {valor}</Text>
            </View>  
}
