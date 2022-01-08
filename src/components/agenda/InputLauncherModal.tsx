import React, { useContext, useState } from 'react';
import {  Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { GeneralContext } from '../../state/GeneralProvider';



interface Props{
  campo:string,
  modo:string
  }

export const InputLauncherModal = ({ campo,modo} : Props) => {


  let colorIcono = colores.primary;

  const { agendaFiltro,setAgendaFiltro,flags,setFlags} = useContext( GeneralContext );

    return <View style={{flex:1}}>  
               <View style={{flexDirection:'row', }}>

                     <TouchableOpacity style={{left:20, top:8,backgroundColor:'transparent', width:'86%',height:30,borderBottomWidth:1,
                                               borderColor:campo===''?'black':colorIcono  }} 
                                               onPress={() =>{  
                                                  console.log('modal de filtro fecha..');
                                                  const payload= flags;
                                                  payload.modalFechaVisible=true;
                                                  setFlags(payload)
                                               }}>
                                                 
                                            <Text style={{color:'black', left:0, top:2,fontFamily:'Roboto-Bold',fontSize:14,}}>
                                            {campo}
                                            </Text>
                     </TouchableOpacity>
                     <View style={{position:'absolute',right:40}} pointerEvents="none">
                      <CustomIcon name='ic_baseline-arrow-drop-down' size={28} color={campo===''?'black':colorIcono }  style={{left:8,top:8,}} ></CustomIcon>
                    </View>
                   
               </View>
             


            </View>
}
