import React, { useState,useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores } from '../../theme/appTheme';
import { TabParecerExigencias } from './TabParecerExigencia';
import { SelectorTabParecerExigencias } from './SelectorTabParecerExigencia';
import { useParecer } from '../../hooks/useParecer';
import { Spacer } from '../Spacer';
import Toast from 'react-native-toast-message';


export const CardParecerExigencias = ( ) => {

  const { opiniones,setOpiniones} = useContext(GeneralContext);
  const { saveExigencias,formExigenciasValid } = useParecer();

      return <View style={{flex:1,width:'100%',flexDirection:'column', backgroundColor:'transparent',alignItems:'flex-start'}}>
               {/* <> */}
                    <View style={{height:350}}>
                      <TabParecerExigencias visible={opiniones.tabsContador===1?true:false} indexTab={0} ></TabParecerExigencias>
                      <TabParecerExigencias visible={opiniones.tabsContador===2?true:false} indexTab={1} ></TabParecerExigencias>
                      <TabParecerExigencias visible={opiniones.tabsContador===3?true:false} indexTab={2} ></TabParecerExigencias>
                      <TabParecerExigencias visible={opiniones.tabsContador===4?true:false} indexTab={3} ></TabParecerExigencias>
                      <TabParecerExigencias visible={opiniones.tabsContador===5?true:false} indexTab={4} ></TabParecerExigencias>  
                      </View>
                    <Spacer height={10}></Spacer>
                    {/* Incrementar */}
                    <View style={{flex:1, flexDirection:'row'}}>
                        {/* ------------------Incrementar---------------------------------------------------- */}
                        <SelectorTabParecerExigencias visible={true} validItem={false} label='Salvar' index={6} selected={false}
                        onPress={()=>{ 
                          if(!opiniones.exigenciasAllValid){
                            console.log('no se puede agregar')
                            Toast.show({type: 'ko',props: { mensaje: 'Antes de agregar otra exigencia, capture todos los datos' }});
                            return;
                          }
                          
                          console.log('incrementando   +');

                          //incrementando los tabs
                          const payload= opiniones;
                          console.log(payload.exigenciasIndex)

                          payload.exigenciasAllValid=false;
                        // let arrAux =payload.exigencias
                          payload.exigenciasIndex++;

                          payload.tabsContador=payload.exigenciasIndex;
                          if(payload.exigenciasIndex>5) {
                            payload.exigenciasIndex=5;
                            payload.tabsContador=payload.exigenciasIndex;
                          }
                          console.log(payload.exigenciasIndex-1)
                          payload.exigencias[payload.exigenciasIndex-1].visible=true;

                          //cleaning item
                          payload.exigencias[payload.exigenciasIndex-1].descripcion='';
                          payload.exigencias[payload.exigenciasIndex-1].oportunidad='';
                          payload.exigencias[payload.exigenciasIndex-1].qtededias='';
                          payload.exigencias[payload.exigenciasIndex-1].tipoUsuario='';
                          payload.exigencias[payload.exigenciasIndex-1].observaciones='';
                          payload.exigencias[payload.exigenciasIndex-1].valid=false;
                          payload.exigencias[payload.exigenciasIndex-1].tipoExigencia='';
                          setOpiniones(payload);

                        }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>
                        {/* --------------------------------------------------------------------------------- */}

                        <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>0?true:false}  validItem={opiniones.exigencias[0].valid} selected={opiniones.tabsContador==1?true:false} label='1' index={0}  
                        onPress={()=>{ console.log('0')  

                          const payload= opiniones;
                          payload.tabsContador=1;
                          setOpiniones(payload); 
                        }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>

                        <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>1?true:false}  validItem={opiniones.exigencias[1].valid} selected={opiniones.tabsContador==2?true:false} label='2' index={1}  
                        onPress={()=>{ console.log('1')  

                          const payload= opiniones;
                          payload.tabsContador=2;
                          setOpiniones(payload); 
                        }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>

                        <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>2?true:false}  validItem={opiniones.exigencias[2].valid} selected={opiniones.tabsContador==3?true:false} label='3' index={2}  
                        onPress={()=>{ console.log('2') 
                        
                          const payload= opiniones;
                          payload.tabsContador=3;
                          setOpiniones(payload); 
                        }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>

                        <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>3?true:false}  validItem={opiniones.exigencias[3].valid} selected={opiniones.tabsContador==4?true:false} label='4' index={3}  
                        onPress={()=>{ console.log('3')  

                          const payload= opiniones;
                          payload.tabsContador=4;
                          setOpiniones(payload); 
                        }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>
                        <SelectorTabParecerExigencias visible={opiniones.exigenciasIndex>4?true:false}  validItem={opiniones.exigencias[4].valid} selected={opiniones.tabsContador==5?true:false} label='5' index={4}  
                        onPress={()=>{ console.log('4')  

                          const payload= opiniones;
                          payload.tabsContador=5;
                          setOpiniones(payload); 
                        }} icono='ic_baseline-lightbulb'></SelectorTabParecerExigencias>

                    </View>
                  
                    {/* boton salvar*/}
                    <View style={{flex:0, width:'100%',  alignItems:'center',height:40,backgroundColor:'transparent',  justifyContent:'flex-start', alignContent:'center',bottom:5, }}>
                          <TouchableOpacity 
                            disabled={ !opiniones.exigenciasAllValid ? true : false} //true deshabilita
                            style={{ marginHorizontal:16, borderRadius: 100, width:'97%',
                            backgroundColor: !opiniones.exigenciasAllValid  ? '#BCC1CB' :  colores.primary, 
                            height:48, justifyContent:'center',  }} 
                              onPress= {()=>{
                                //TODO add logic to add nova exigencia
                                saveExigencias();
                              }}>
                              <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: opiniones.exigenciasAllValid  ? 'black' : 'white'}}>SALVAR</Text>
                          </TouchableOpacity>
                    </View>
                    <Spacer height={15}></Spacer>
               {/* </> */}
            </View>
          
}
