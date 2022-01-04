import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomIcon from '../../theme/CustomIcon';
import { Spacer } from '../Spacer';


interface Props{
  icono:string,
  color:string,
  background:string,
  size:number,
  right:number,
  rightIcon:number,
  topIcon:number,
}

export const IconoActualizacion = ( { icono,color,background,size,right,rightIcon,topIcon }: Props ) => {

    return (
        <View style={{ flexDirection:'column', flex:1}}>
        {/* icono */}
        <Text style={{right:rightIcon,top:topIcon}}> 
                <CustomIcon  name={icono} size={size} color={color} ></CustomIcon>
        </Text>
        {/* circulo */}
        <View style={{ backgroundColor:background,opacity:0.3, borderWidth:0,top:-30,right:right, 
                    borderRadius:50,margin:3, height:62, width:62, }}></View>
        </View>
            )
}
