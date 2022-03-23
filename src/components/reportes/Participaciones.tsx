import React from 'react';
import {  View } from 'react-native';
import { Spacer } from '../Spacer';
import { SeccionFiltros } from './SeccionFiltros';
import { RoundedSelectors } from './RoundedSelectors';
import { Charts } from './Charts';


export const Participaciones = ( ) => {


    return  <View style={{flex:1,backgroundColor:'#BCC1CB', width:'100%',  alignItems:'center',alignContent:'space-between',justifyContent:'flex-start' }}>
                {/* filtros    */}
                
                  <SeccionFiltros></SeccionFiltros>
      
                  <Spacer height={20}></Spacer>
              
            
                {/* botones tabs rounded */}
                <RoundedSelectors></RoundedSelectors>
                
                {/* charts */}
                <Charts></Charts>
                
                <Spacer height={20}></Spacer>
           
                 
                  
            </View>
}
