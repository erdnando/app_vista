import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomIcon from '../../theme/CustomIcon';
import { Spacer } from '../Spacer';


interface Props{
  icono:string,
  color:string,
  background:string
}

export const IconoActualizacion = ( { icono,color,background }: Props ) => {

    return (
      <View style={{ flexDirection:'column', flex:1}}>
          {/* icono */}
          <Text style={{right:10,top:25}}> 
                  <CustomIcon  name={icono} size={36} color={color} ></CustomIcon>
          </Text>
          {/* circulo */}
          <View style={{ backgroundColor:background,opacity:0.3, borderWidth:0,top:-30,right:26, 
                      borderRadius:50,margin:3, height:62, width:62, }}></View>
      </View>
    )
}
