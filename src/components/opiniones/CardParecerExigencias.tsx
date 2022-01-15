import React, { useState,useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores } from '../../theme/appTheme';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';
import { Select } from '../Select';
import { Spacer } from '../Spacer';
import { InputMensaje } from './InputMensaje';
import { LabelTexto } from './LabelTexto';
import { RoundedSelectors } from './RoundedSelectors';
import { InputMensajeSimple } from './InputMensajeSimple';


export const CardParecerExigencias = ( ) => {

  const { opiniones,setOpiniones} = useContext(GeneralContext);
const [hasData, sethasData] = useState(false)

  const items=[   { label: "JavaScript", value: "JavaScript" },
  { label: "TypeStript", value: "TypeStript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "C++", value: "C++" },
  { label: "C", value: "C" },
  ];

      return <View style={{flex:1,width:'100%',backgroundColor:'transparent',}}>
                        <View  style={{ width:'100%', height:370, backgroundColor: 'white',borderRadius:10,padding:15,elevation:6,
                        justifyContent:'flex-start',alignItems:'flex-start',
                                        shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                        height: 3, width: 3 }
                                        }}>


                                      <Spacer height={10}></Spacer>
                                      <Select placeholder='Descripcion' campo={opiniones.exigencias.descripcion} width='91%' items={items}
                                        onValueChange={function (value: any, index: number): void {
                                               const payload = opiniones;
                                               opiniones.exigencias.descripcion=value;
                                               setOpiniones(payload);
                                        }} 
                                      />
                                      <Spacer height={30}></Spacer>

                                       <Select placeholder='Oportunidad' campo={opiniones.exigencias.oportunidad}  width='91%' items={items}
                                        onValueChange={function (value: any, index: number): void {
                                          const payload = opiniones;
                                          opiniones.exigencias.oportunidad=value;
                                          setOpiniones(payload);
                                        }} 
                                      />
                                      <Spacer height={20}></Spacer>

                                      <InputMensajeSimple placeholder='Qtde de dias' width='33%' campo={opiniones.exigencias.qtededias}
                                      onChangeMensaje={(msg:string)=>{
                                        const payload = opiniones;
                                        opiniones.exigencias.qtededias=msg;
                                        setOpiniones(payload);
                                      }}></InputMensajeSimple>

                                      <Spacer height={20}></Spacer>

                                      <Select placeholder='Tipo de usuario' campo={opiniones.exigencias.tipoUsuario}  width='91%' items={items}
                                      onValueChange={function (value: any, index: number): void {
                                        const payload = opiniones;
                                        opiniones.exigencias.tipoUsuario=value;
                                        setOpiniones(payload);
                                      }} 
                                      />


                                      <Spacer height={20}></Spacer>
                                      <InputMensaje placeholder='Observaciones' longitud={opiniones.exigencias.observaciones.length} width='91%' campo={opiniones.exigencias.observaciones}
                                        onChangeMensaje={(msg: string) => {
                                          const payload = opiniones;
                                        opiniones.exigencias.observaciones=msg;
                                        setOpiniones(payload);
                                        } } ></InputMensaje>
                        </View> 

                        <Spacer height={20}></Spacer>
                        {/* boton */}
                        <View style={{flex:1, width:'100%', flexDirection:'column', alignItems:'center',height:40,backgroundColor:'transparent',  justifyContent:'flex-start', alignContent:'center', }}>
                            <TouchableOpacity 
                              disabled={ hasData ? true : false} 
                              style={{ marginHorizontal:16, borderRadius: 100, width:'100%',
                              backgroundColor:hasData ? '#BCC1CB' :  colores.primary, 
                              height:48, justifyContent:'center',  }} 
                                onPress= {()=>{
                                  //TODO add logic to add nova exigencia
                                  const payload = opiniones;
                                  opiniones.exigencias.descripcion='';
                                  opiniones.exigencias.oportunidad='';
                                  opiniones.exigencias.qtededias='';
                                  opiniones.exigencias.tipoUsuario='';
                                  opiniones.exigencias.observaciones='';
                                  setOpiniones(payload);

                                }}>
                                <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: !hasData ? 'black' : 'white'}}>ADICIONAR NOVA EXIGENCIA</Text>
                            </TouchableOpacity>
                        </View>

            </View>
          
}
