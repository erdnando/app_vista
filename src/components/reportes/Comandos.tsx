import React, { useContext } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { useRelatorios } from '../../hooks/useRelatorios';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';


export const Comandos = () => {


 //invoke global state
 const {  setFiltroFechaInicial,setFiltroFechaFinal } = useContext( GeneralContext )

 

    return    <View style={{flexDirection:'row',justifyContent:'flex-end', top:35}}>
                    <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={()=>{  
                      // limpiar
                      setFiltroFechaInicial('');
                      setFiltroFechaFinal('');
                      }}>
                      <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>LIMPIAR</Text>
                    </TouchableOpacity>

                    <View style={{width:50}}></View>

                    <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={()=>{ 
                      //filtrar
                      //TODO implement api call
                      }} >
                      <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>FILTRAR</Text>
                    </TouchableOpacity>

                    <View style={{width:10}}></View>
               </View>

      
}
