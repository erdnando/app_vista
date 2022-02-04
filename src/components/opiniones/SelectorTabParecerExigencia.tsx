import React, { useState,useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { Select } from '../Select';
import { Spacer } from '../Spacer';
import { InputMensaje } from './InputMensaje';  
import { InputMensajeSimple } from './InputMensajeSimple';


interface Props{
  visible:boolean,
  label:string,
  index:number,
  icono:string,
  selected:boolean,
  onPress:()=>void
}


export const SelectorTabParecerExigencias = ( { visible,label,index,selected,icono,onPress}: Props ) => {

  const { opiniones,setOpiniones} = useContext(GeneralContext);



  if(!visible)return <View></View>
  if(opiniones.exigenciasIndex>4 && label==='Salvar') return  (<View style={{height:40, flexDirection:'row', width:45,
                                              backgroundColor: 'white', borderRadius:7,padding:5,elevation:6,marginRight:0,marginLeft:6,
                                              borderColor:'#E2E5EA',borderWidth:2,
                                              shadowColor: 'grey', shadowOpacity: 0.8,shadowOffset: {
                                                  height: 1, width: 3, }               
                                              }}>

                                            <View style={{ justifyContent:'flex-start',width:'100%',  alignItems:'center',alignContent:'flex-start',}}>
                                              <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                                                  {/* icon */}
                                                  <View style={{ backgroundColor:('#E2E5EA'), borderWidth:0, borderRadius:50,margin:6, height:36, width:36, 
                                                  justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                                                    {
                                                      label==='Salvar' ? <Text style={{fontSize:25,color:'grey', fontWeight:'bold'}}>+</Text> :
                                                      <Text > 
                                                      <CustomIcon  name={icono} size={26} color='grey' ></CustomIcon>
                                                      </Text>
                                                    }
                                                      
                                                    
                                                  </View>
                                              </View>
                                            </View>
                                            </View>)

      return   <TouchableOpacity style={{ borderRadius: 100,  }} 
                                onPress={onPress}>
                            <View style={{height:40, flexDirection:'row', width:45,
                                            backgroundColor: 'white', borderRadius:7,padding:5,elevation:6,marginRight:0,marginLeft:6,
                                            borderColor:'#E2E5EA',borderWidth:2,
                                            shadowColor: (selected ? 'orange':'grey'), shadowOpacity: 0.8,shadowOffset: {
                                                height: 1, width: 3, }               
                                            }}>

                                        <View style={{ justifyContent:'flex-start',width:'100%',  alignItems:'center',alignContent:'flex-start',}}>
                                            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                                                {/* icon */}
                                                <View style={{ backgroundColor:('#E2E5EA'), borderWidth:0, borderRadius:50,margin:6, height:36, width:36, 
                                                justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                                                  {
                                                    label==='Salvar' ? <Text style={{fontSize:25, fontWeight:'bold'}}>+</Text> :
                                                    <Text > 
                                                    <CustomIcon  name={icono} size={26} color={selected ? 'orange':'grey'} ></CustomIcon>
                                                    </Text>
                                                  }
                                                    
                                                   
                                                </View>
                                            </View>
                                        </View>
                            </View>
                    </TouchableOpacity>
          
}
