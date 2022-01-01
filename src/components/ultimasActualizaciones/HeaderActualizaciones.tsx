import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Spacer } from '../Spacer';


interface Props{
  label:string
}

export const HeaderActualizaciones = ( { label }: Props ) => {

    return (
      <View style={{ width:'90%',alignContent:'flex-start', left:0,top:95+30,}}>
          <Text style={{ fontFamily:'Roboto-Bold', fontSize:17}}>{label}</Text>
          <Spacer height={20}></Spacer>
      </View>
    )
}
