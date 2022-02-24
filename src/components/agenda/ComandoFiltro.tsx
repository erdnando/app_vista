import React, { useContext } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';



interface Props{
  label1:string,
  label2:string,
  onPressAction1: () => void;
  onPressAction2: () => void;
  }

export const ComandoFiltro = ({label1,label2, onPressAction1,onPressAction2} : Props) => {


  let colorIcono = colores.primary;

  const { agendaFiltro,setAgendaFiltro} = useContext( GeneralContext );



    return <View style={{flexDirection:'row',justifyContent:'flex-end', top:0, right:20}}>
                <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={onPressAction1}>
                  <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>{label1}</Text>
                </TouchableOpacity>

                <View style={{width:50}}></View>

                <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={onPressAction2} >
                  <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>{label2}</Text>
                </TouchableOpacity>

                <View style={{width:10}}></View>
            </View>
}
