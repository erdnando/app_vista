import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Spacer } from './Spacer';


interface Props{
  label:string,
  top:number,
  fontSize:number
}

export const HeaderTitle = ( { label,top,fontSize }: Props ) => {

    return (
      <View style={{ width:'90%',alignContent:'flex-start', left:0,top:top,paddingVertical:3}}>
          <Text style={{ fontFamily:'Roboto-Bold',color:'#838892', fontSize:fontSize}}>{label}</Text>
          <Spacer height={10}></Spacer>
      </View>
    )
}
