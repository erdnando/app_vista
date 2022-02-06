import React, { useState,useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useParecer } from '../../hooks/useParecer';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { Select } from '../Select';
import { Spacer } from '../Spacer';
import { InputMensaje } from './InputMensaje';  
import { InputMensajeSimple } from './InputMensajeSimple';


interface Props{
  visible:boolean,
  indexTab:number,
}


export const TabParecerExigencias = ( { visible,indexTab}: Props ) => {

  const { opiniones,setOpiniones} = useContext(GeneralContext);
  const { ajustaBorrado } = useParecer();

  const items=[   { label: "JavaScript", value: "JavaScript" },
  { label: "TypeStript", value: "TypeStript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "C++", value: "C++" },
  { label: "C", value: "C" },
  ];

  if(!visible)return <View></View>
  

      return <View style={{flex:1,width:'100%',backgroundColor:'transparent',}}>
        
                       

                        <View  style={{ width:'100%', height:340, backgroundColor: 'white',borderRadius:10,padding:15,elevation:6,
                        justifyContent:'flex-start',alignItems:'flex-start',
                                        shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                        height: 3, width: 3 }
                                        }}>
                                               
                           
                                      <Spacer height={10}></Spacer>
                                      <Select placeholder='Descripcion' campo={opiniones.exigencias[indexTab].descripcion} width='91%' items={items}
                                        onValueChange={function (value: string, index: number): void {
                                          console.log('-----------')
                                              
                                               const payload = opiniones;
                                               payload.exigencias[indexTab].descripcion=value;
                                               setOpiniones(payload);
                                        }} 
                                      />
                                      <Spacer height={30}></Spacer>

                                       <Select placeholder='Tipo' campo={opiniones.exigencias[indexTab].oportunidad}  width='91%' items={opiniones.catTipoExigencia}
                                        onValueChange={function (value: any, index: number): void {
                                          const payload = opiniones;
                                          payload.exigencias[indexTab].oportunidad=value;
                                          setOpiniones(payload);
                                        }} 
                                      />
                                      <Spacer height={10}></Spacer>

                                      <View style={{flex:0,width:'100%',height:50,left:7}}>
                                        <InputMensajeSimple placeholder='Qtde de dias' width='33%' maxLength={4} keyboardType='numeric' campo={opiniones.exigencias[indexTab].qtededias}
                                        onChangeMensaje={(msg:string)=>{
                                          const payload = opiniones;
                                          payload.exigencias[indexTab].qtededias=msg;
                                          setOpiniones(payload);
                                        }}></InputMensajeSimple>
                                      </View>

                                      <Spacer height={20}></Spacer>

                                      <Select placeholder='Tipo de usuario' campo={opiniones.exigencias[indexTab].tipoUsuario}  width='91%' items={items}
                                      onValueChange={function (value: any, index: number): void {
                                        const payload = opiniones;
                                        payload.exigencias[indexTab].tipoUsuario=value;
                                        setOpiniones(payload);
                                      }} 
                                      />


                                      <Spacer height={20}></Spacer>
                                      <InputMensaje placeholder='Observaciones' longitud={opiniones.exigencias[indexTab].observaciones.length} width='91%' campo={opiniones.exigencias[indexTab].observaciones}
                                        onChangeMensaje={(msg: string) => {
                                          const payload = opiniones;
                                          payload.exigencias[indexTab].observaciones=msg;
                                        setOpiniones(payload);
                                        } } ></InputMensaje>
                        </View> 


                       {/* Eliminar card */}
                       { opiniones.tabsContador >1 ? <View style={{ backgroundColor:'red',position:'absolute', top:-15,right:5, 
                                                               borderWidth:1,borderColor:'red', borderRadius:50, height:30, width:30, 
                                                               justifyContent:'center',  alignItems:'center' }}>
                            <TouchableOpacity onPress={()=>{
                              console.log('closing tab...'+indexTab)
                              ajustaBorrado(indexTab)

                            }}>
                            <Text> 
                              <CustomIcon  name='ic_round-close' size={22} color='white' ></CustomIcon>
                            </Text>
                            </TouchableOpacity>
                           
                        </View> : <View></View>}

                       

            </View>
          
}
