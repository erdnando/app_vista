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
 const { relatorio,setRelatorio } = useContext( GeneralContext )

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
                                    borderColor:relatorio.filtroCliente===''?'black':colorIcono
                                }}
                                onChangeText={ onChangeFiltroCliente }
                                placeholder='Cliente'
                                keyboardType='web-search'
                                autoCapitalize='none'
                                autoCorrect = {false}
                                maxLength={27} value={relatorio.filtroCliente} />
                          
                        <Spacer height={15}></Spacer>
                        {/* filtros fechas*/}
                        <View style={{flexDirection:'row'}}>
                            <FechaInput filtroFecha={relatorio.filtroFechaInicial} setFiltroFecha={setRelatorio} iniFini='ini' placeHolder='Fecha inicial'></FechaInput>
                            <View style={{width:30}}></View>
                            <FechaInput filtroFecha={relatorio.filtroFechaFinal} setFiltroFecha={setRelatorio} iniFini='fini' placeHolder='Fecha final'></FechaInput>
                        </View>
      
              </View>

      
}
