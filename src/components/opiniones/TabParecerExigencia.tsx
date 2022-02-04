import React, { useState,useContext } from 'react';
import { View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { Select } from '../Select';
import { Spacer } from '../Spacer';
import { InputMensaje } from './InputMensaje';  
import { InputMensajeSimple } from './InputMensajeSimple';


interface Props{
  visible:boolean,
  index:number,
}


export const TabParecerExigencias = ( { visible,index}: Props ) => {

  const { opiniones,setOpiniones} = useContext(GeneralContext);
  const [hasData, sethasData] = useState(false)

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
                                      <Select placeholder='Descripcion' campo={opiniones.exigencias[index].descripcion} width='91%' items={items}
                                        onValueChange={function (value: any, index: number): void {
                                               const payload = opiniones;
                                               opiniones.exigencias[index].descripcion=value;
                                               setOpiniones(payload);
                                        }} 
                                      />
                                      <Spacer height={30}></Spacer>

                                       <Select placeholder='Tipo' campo={opiniones.exigencias[index].oportunidad}  width='91%' items={opiniones.catTipoExigencia}
                                        onValueChange={function (value: any, index: number): void {
                                          const payload = opiniones;
                                          opiniones.exigencias[index].oportunidad=value;
                                          setOpiniones(payload);
                                        }} 
                                      />
                                      <Spacer height={10}></Spacer>

                                      <View style={{flex:0,width:'100%',height:50,left:7}}>
                                        <InputMensajeSimple placeholder='Qtde de dias' width='33%' maxLength={4} keyboardType='numeric' campo={opiniones.exigencias.qtededias}
                                        onChangeMensaje={(msg:string)=>{
                                          const payload = opiniones;
                                          opiniones.exigencias[index].qtededias=msg;
                                          setOpiniones(payload);
                                        }}></InputMensajeSimple>
                                      </View>

                                      <Spacer height={20}></Spacer>

                                      <Select placeholder='Tipo de usuario' campo={opiniones.exigencias[index].tipoUsuario}  width='91%' items={items}
                                      onValueChange={function (value: any, index: number): void {
                                        const payload = opiniones;
                                        opiniones.exigencias[index].tipoUsuario=value;
                                        setOpiniones(payload);
                                      }} 
                                      />


                                      <Spacer height={20}></Spacer>
                                      <InputMensaje placeholder='Observaciones' longitud={opiniones.exigencias[index].observaciones.length} width='91%' campo={opiniones.exigencias.observaciones}
                                        onChangeMensaje={(msg: string) => {
                                          const payload = opiniones;
                                        opiniones.exigencias[index].observaciones=msg;
                                        setOpiniones(payload);
                                        } } ></InputMensaje>
                        </View> 

                       

            </View>
          
}
