import React, { useState,useContext } from 'react';
import { FlatList, Platform, Switch, Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores, gstyles } from '../../theme/appTheme';
import { Spacer } from '../Spacer';
import { LabelTexto } from './LabelTexto';
import { OpinionesExigenciasTerciario } from '../../models/OpinionesExigenciasTerciario';
import { useParecer } from '../../hooks/useParecer';
import { RoundedSelectorsTerciarios } from './RoundedSelectorsTerciarios';


export const CardParecerExigenciasTerciario = ( ) => {

   //invoke global state
   const { opiniones,setOpiniones } = useContext( GeneralContext )
   
   const { isAllParecerOK,saveExigenciaTerciario } = useParecer()
 
   const renderUpdateItem = (item:OpinionesExigenciasTerciario) =>{
 
     {/* tarjeta */}
     return (  <View style={{height:230, width:'100%',justifyContent:'center',
                                       alignContent:'center',alignItems:'flex-start',paddingLeft:4,paddingTop:16,
                                       backgroundColor: 'white', borderRadius:7,padding:0,elevation:6,
                                       shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                       height: 3, width: 3 }
                                   }}>
 
                                     <View style={{flex:1,width:'100%',marginTop:3}}>
                                     
                                         <View style={{flex:0,width:'100%', height:210,  }} >
                                        
                                              <View style={{flex:1,width:'90%',marginLeft:15, marginRight:30,}}>
                                                    {/* exigencia */}
                                                    <LabelTexto  fontSize={14} color='#838892' label='' value='Exigencia'></LabelTexto>
                                                    {/* titulo */}
                                                    <Spacer height={8}></Spacer>
                                                    <LabelTexto  fontSize={18} color='#454A53' label='' value={item.exigencia}></LabelTexto>
                                                    {/* line */}
                                                    <View style={{width:'100%', marginBottom:8,marginTop:8, height:2,backgroundColor:'#BCC1CB'}}></View>
                                              </View>
                                              <Spacer height={15}></Spacer>
                                              <View style={{flex:1,width:'90%',marginLeft:15, marginRight:30,}}>
                                                  {/* Orgao */}
                                                  <LabelTexto  fontSize={14} color='#454A53' label='Observacao: ' value={item.observacion}></LabelTexto>
                                                  {/* Edital */}
                                                  <LabelTexto  fontSize={14} color='#454A53' label='Tipo: ' value={item.tipo}></LabelTexto>
                                                  {/* Modalidade */}
                                                  <LabelTexto  fontSize={14} color='#454A53' label='Dias: ' value={item.dias}></LabelTexto>
                                              </View>
                                             
      
                                              {/* rounded button */}
                                              <View style={{width:'100%', flex:1,justifyContent:'center',alignItems:'center'}}>
                                                  <RoundedSelectorsTerciarios label1='ATENDE' label2='NAO ATENDE' width='93%'
                                                        estatusGO= {item.goNoGo}
                                                        onPress1={()=>{
                                                          console.log('go')
                                                           const payload = opiniones;
                                                           payload.exigenciasTerciario[item.id].goNoGo=1;
                                                           setOpiniones(payload);
                                                        }}
                                                        onPress2={()=>{
                                                          console.log('no go')
                                                          const payload = opiniones;
                                                           payload.exigenciasTerciario[item.id].goNoGo=2;
                                                           setOpiniones(payload);
                                                        }}
                                                  ></RoundedSelectorsTerciarios>
                                              </View>
      
                                              <Spacer height={20}></Spacer>
                                     
                                         </View>
                                 
                                     </View>
 
 
                                    
 
 
               </View>
            
     )
 }
 
 const renderSeparator = () =>{
     return (
          <Spacer height={12} ></Spacer>
     )
 }
 
 
 return (
     <View style={{...gstyles.globalTabView , width:'100%',top:-8}}>
          <Spacer height={10}></Spacer>
          <View style={{flex:1,width:'100%',justifyContent:'center',}}>
     
             <FlatList data={opiniones.exigenciasTerciario} 
                 scrollEnabled={true}
                 renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                 keyExtractor={(item) => item.id+item.exigencia} 
                 ItemSeparatorComponent={ () => renderSeparator()}
             />

             <Spacer height={5}></Spacer>
             {/* boton salvar*/}
             <View style={{flex:0, width:'100%',  alignItems:'center',height:40,backgroundColor:'transparent',
                                justifyContent:'flex-start', alignContent:'center', bottom:-5}}>
                      <TouchableOpacity 
                        disabled={ !isAllParecerOK() ? true : false} 
                        style={{ marginHorizontal:16, borderRadius: 100, width:'97%',
                        backgroundColor: !isAllParecerOK() ? '#BCC1CB' :  colores.primary, 
                        height:48, justifyContent:'center',  }} 
                          onPress= {()=>{
                            //TODO add logic to save parecer
                            console.log('saving exigencias terciario..')
                            saveExigenciaTerciario();
                            //clear parecer
                          }}>
                          <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: isAllParecerOK() ? 'black' : 'white'}}>SALVAR</Text>
                      </TouchableOpacity>
                  </View>
         </View>
     </View>
 ) 
          
}
