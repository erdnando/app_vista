import React, { useContext } from 'react';
import { View } from 'react-native';
import { colores } from '../../theme/appTheme';
import Collapsible from 'react-native-collapsible';
import { GeneralContext } from '../../state/GeneralProvider';
import { FechaInput } from './FechaInput';
import { TopFilter } from './TopFilter';
import { Filtros } from './Filtros';
import { Comandos } from './Comandos';


export const SeccionFiltros = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const {  isFilterCollapsed } = useContext( GeneralContext )


    return   <View style={{flex:1, width:'100%',justifyContent:'flex-start', backgroundColor:'white'}}>
                 {/* colapsar filtro */}
                 <TopFilter></TopFilter>

                {/* https://github.com/oblador/react-native-collapsible */}
                <Collapsible collapsed={isFilterCollapsed} >
                    <View style={{ width:'100%',height:180, backgroundColor:'white', paddingHorizontal:18}} >
                            {/* filtro cliente */}
                            <Filtros></Filtros>
                            {/* commands to clean and filter */}
                            <Comandos></Comandos>
                    </View>
                </Collapsible>

              </View>

      
}
