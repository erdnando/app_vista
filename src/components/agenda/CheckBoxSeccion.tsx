import React, { useContext, useState } from 'react';
import {  Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { GeneralContext } from '../../state/GeneralProvider';
import CheckBox from '@react-native-community/checkbox';
import { CheckBoxFiltro } from './CheckBoxFiltro';



// interface Props{
//   campo:boolean,
//   label:string
//   onValueChange: (value:boolean) => void;
//   }

export const CheckBoxSeccion = () => {
  const { setAgendaFiltro,agendaFiltro } = useContext(GeneralContext);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  // let colorIcono = colores.primary;

  

    return    <View style={{}}>
               <CheckBoxFiltro campo={agendaFiltro.bTodo} label={'Todo'} 
                                onValueChange={(value)=>{
                                      const payload = agendaFiltro;
                                      payload.bTodo=value;
                                      setAgendaFiltro(payload)
                                }} />
                                <CheckBoxFiltro campo={agendaFiltro.bParecerOK} label={'Parecer OK'} 
                                onValueChange={(value)=>{
                                  const payload = agendaFiltro;
                                  payload.bParecerOK=value;
                                  setAgendaFiltro(payload)
                                }}/>
                                <CheckBoxFiltro campo={agendaFiltro.bAguardando} label={'Aguardando'} 
                                 onValueChange={(value)=>{
                                  const payload = agendaFiltro;
                                  payload.bAguardando=value;
                                  setAgendaFiltro(payload)
                                }} />
                                <CheckBoxFiltro campo={agendaFiltro.bFinalizado} label={'Finalizados'} 
                                onValueChange={(value)=>{
                                  const payload = agendaFiltro;
                                  payload.bFinalizado=value;
                                  setAgendaFiltro(payload)
                                }}/>
            </View>
}
