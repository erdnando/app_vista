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
import { TabParecerExigencias } from './TabParecerExigencia';
import { SelectorTabParecerExigencias } from './SelectorTabParecerExigencia';


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

  

      return <View style={{flex:1,width:'100%',flexDirection:'column', backgroundColor:'transparent',}}>
                
                  <TabParecerExigencias visible={opiniones.exigenciasIndex===1?true:false} index={0} ></TabParecerExigencias>
                  <TabParecerExigencias visible={opiniones.exigenciasIndex===2?true:false} index={1} ></TabParecerExigencias>
                  <TabParecerExigencias visible={opiniones.exigenciasIndex===3?true:false} index={2} ></TabParecerExigencias>
                  <TabParecerExigencias visible={opiniones.exigenciasIndex===4?true:false} index={3} ></TabParecerExigencias>
                  <TabParecerExigencias visible={opiniones.exigenciasIndex===5?true:false} index={4} ></TabParecerExigencias>  
                

                <View style={{flex:0, flexDirection:'row', justifyContent:'flex-start', marginLeft:0}}>

                  <SelectorTabParecerExigencias visible={true} label='Salvar' index={6} 
                  onPress={()=>{ console.log('+')  
                    //incrementando los tabs
                    const payload= opiniones;
                    payload.exigenciasIndex++;

                    if(payload.exigenciasIndex>5) payload.exigenciasIndex=5;
                    setOpiniones(payload);

                  }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>


                  <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>0?true:false} label='1' index={0}  
                  onPress={()=>{ console.log('0') 

                  //if(opiniones.exigenciasIndex>1)return;
                    const payload= opiniones;
                    payload.exigenciasIndex=1;
                    setOpiniones(payload); 
                  }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>

                  <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>1?true:false} label='2' index={1}  
                  onPress={()=>{ console.log('1')  

                  //if(opiniones.exigenciasIndex>2)return;
                    const payload= opiniones;
                    payload.exigenciasIndex=2;
                    setOpiniones(payload); 
                  }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>

                  <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>2?true:false} label='3' index={4}  
                  onPress={()=>{ console.log('2') 
                  
                  //if(opiniones.exigenciasIndex>3)return;
                    const payload= opiniones;
                    payload.exigenciasIndex=3;
                    setOpiniones(payload); 
                  }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>

                  <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>3?true:false} label='4' index={3}  
                  onPress={()=>{ console.log('3')  

                  //if(opiniones.exigenciasIndex>4)return;
                    const payload= opiniones;
                    payload.exigenciasIndex=4;
                    setOpiniones(payload); 
                  }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>
                  <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>4?true:false} label='5' index={4}  
                  onPress={()=>{ console.log('4')  

                  //if(opiniones.exigenciasIndex>5)return;
                    const payload= opiniones;
                    payload.exigenciasIndex=5;
                    setOpiniones(payload); 
                  }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>

                </View>
               



                  {/* boton */}
                  <View style={{flex:0, width:'100%',  alignItems:'center',height:40,backgroundColor:'transparent',  justifyContent:'flex-start', alignContent:'center', marginBottom:20,marginTop:30}}>
                      <TouchableOpacity 
                        disabled={ hasData ? true : false} 
                        style={{ marginHorizontal:16, borderRadius: 100, width:'97%',
                        backgroundColor:hasData ? '#BCC1CB' :  colores.primary, 
                        height:48, justifyContent:'center',  }} 
                          onPress= {()=>{
                            //TODO add logic to add nova exigencia



                            //clear arrExigencias
                            // const payload = opiniones;
                            // for(let i = 0; i<5;i++){
                            //   opiniones.exigencias[i].descripcion='';
                            //   opiniones.exigencias[i].oportunidad='';
                            //   opiniones.exigencias[i].qtededias='';
                            //   opiniones.exigencias[i].tipoUsuario='';
                            //   opiniones.exigencias[i].observaciones='';
                            // }
                            // setOpiniones(payload);

                          }}>
                          <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: !hasData ? 'black' : 'white'}}>ADICIONAR NOVA EXIGENCIA</Text>
                      </TouchableOpacity>
                  </View>

            </View>
          
}
