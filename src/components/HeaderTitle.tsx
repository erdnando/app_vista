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
          <Text style={{ fontFamily:'Roboto-Bold', fontSize:fontSize}}>{label}</Text>
          <Spacer height={20}></Spacer>
      </View>
    )
}
