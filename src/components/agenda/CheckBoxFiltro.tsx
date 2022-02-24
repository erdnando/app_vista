import React, { useContext, useState } from 'react';
import {  Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import CheckBox from '@react-native-community/checkbox';



interface Props{
  campo:boolean,
  label:string
  onValueChange: (value:boolean) => void;
  }

export const CheckBoxFiltro = ({ label,campo,onValueChange} : Props) => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  let colorIcono = colores.primary;

  

    return    <View style={{flexDirection:'row',justifyContent:'flex-start',marginLeft:20,marginBottom:8}}>
                <CheckBox
                  disabled={false}
                  value={campo}
                  onValueChange={onValueChange}
                />
                <Text style={{marginLeft:20,top:5,fontFamily:'Roboto-Bold',fontSize:16}}>{label}</Text>
            </View>
}
