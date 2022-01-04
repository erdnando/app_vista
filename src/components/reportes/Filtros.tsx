import React, { useContext } from 'react';
import {  TextInput, View } from 'react-native';
import { useRelatorios } from '../../hooks/useRelatorios';
import { colores } from '../../theme/appTheme';
import { Spacer } from '../Spacer';
import { GeneralContext } from '../../state/GeneralProvider';
import { FechaInput } from './FechaInput';


export const Filtros = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const { filtroCliente, filtroFechaInicial, 
  setFiltroFechaInicial,filtroFechaFinal,setFiltroFechaFinal } = useContext( GeneralContext )

 const { onChangeFiltroCliente } = useRelatorios(); 

 

    return   <View >
                
                <TextInput style={{
                                    fontFamily:'Roboto-Regular',
                                    fontSize:16,
                                    height: 40,
                                    width:'100%',
                                    margin: 1,
                                    paddingLeft:1,
                                    borderWidth: 1,
                                    borderLeftWidth:0,
                                    borderRightWidth:0,
                                    borderTopWidth:0,
                                    borderColor:filtroCliente===''?'black':colorIcono
                                }}
                                onChangeText={ onChangeFiltroCliente }
                                placeholder='Cliente'
                                keyboardType='web-search'
                                autoCapitalize='none'
                                autoCorrect = {false}
                                maxLength={27} value={filtroCliente} />
                          
                        <Spacer height={15}></Spacer>
                        {/* filtros fechas*/}
                        <View style={{flexDirection:'row'}}>
                            <FechaInput filtroFecha={filtroFechaInicial} setFiltroFecha={setFiltroFechaInicial} placeHolder='Fecha inicial'></FechaInput>
                            <View style={{width:30}}></View>
                            <FechaInput filtroFecha={filtroFechaFinal} setFiltroFecha={setFiltroFechaFinal} placeHolder='Fecha final'></FechaInput>
                        </View>
      
              </View>

      
}
