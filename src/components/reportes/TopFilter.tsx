import React, { useContext, useState } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { GeneralContext } from '../../state/GeneralProvider';



export const TopFilter = () => {

const { relatorio,setRelatorio } = useContext( GeneralContext )


    return   <View style={{justifyContent:'flex-end',alignItems:'center',height:50,top:-12 ,width:'100%' }}>
                <TouchableOpacity  style={{ borderRadius: 100,  }} 
                  onPress={() =>{ 
                   // setIsFilterCollapsed(!relatorio.isFilterCollapsed);
                    const payload= relatorio;
                    payload.isFilterCollapsed=!relatorio.isFilterCollapsed;
                    setRelatorio(payload);


                  }} >
                  <View style={{flexDirection:'row'}}>
                        <Text  style={{ fontFamily:'Roboto-Bold',fontSize:17,fontWeight:'600', textAlign:'center',color:'black' }}>Filtrar</Text>
                        <CustomIcon name= {relatorio.isFilterCollapsed ? 'ic_round-keyboard-arrow-down': 'ic_round-keyboard-arrow-up'} size={24} color='black' style={{right:-10,top:-2,}} ></CustomIcon>
                      </View>
                </TouchableOpacity>
            </View>

      
}
