import React, { useContext, useState } from 'react';
import {  Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { GeneralContext } from '../../state/GeneralProvider';



interface Props{
  campo:string,
  onPress: () => void;
  }

export const InputLauncherModal = ({ campo,onPress} : Props) => {


  let colorIcono = colores.primary;

  // const { } = useContext( GeneralContext );

    return   <View style={{flexDirection:'row', }}>

                     <TouchableOpacity style={{left:20, top:8,backgroundColor:'transparent', width:'86%',height:30,borderBottomWidth:1,
                                               borderColor:campo===''?'black':colorIcono  }} 
                                               onPress={onPress}
                                              >
                                                 
                                            <Text style={{color:'#838892',marginLeft:15, top:2,fontFamily:'Roboto-Regular',fontSize:14,}}>
                                            {/* seleccione un horario */}
                                            {campo} 
                                            </Text>
                     </TouchableOpacity>
                     <View style={{position:'absolute',right:40}} pointerEvents="none">
                      <CustomIcon name='ic_baseline-arrow-drop-down' size={28} color={campo===''?'black':colorIcono }  style={{left:8,top:8,}} ></CustomIcon>
                    </View>
                   
               </View>
}
