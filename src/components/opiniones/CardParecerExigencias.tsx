import React, { useState,useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores } from '../../theme/appTheme';
import { TabParecerExigencias } from './TabParecerExigencia';
import { SelectorTabParecerExigencias } from './SelectorTabParecerExigencia';
import { useParecer } from '../../hooks/useParecer';
import { Spacer } from '../Spacer';


export const CardParecerExigencias = ( ) => {

  const { opiniones,setOpiniones} = useContext(GeneralContext);
  const { saveExigencias } = useParecer();
  //const [hasData] = useState(false)


  const items=[   { label: "JavaScript", value: "JavaScript" },
  { label: "TypeStript", value: "TypeStript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "C++", value: "C++" },
  { label: "C", value: "C" },
  ];

  

      return <View style={{flex:1,width:'100%',flexDirection:'column', backgroundColor:'transparent',alignItems:'flex-start'}}>
                <View style={{height:350}}>
                  <TabParecerExigencias visible={opiniones.tabsContador===1?true:false} indexTab={0} ></TabParecerExigencias>
                  <TabParecerExigencias visible={opiniones.tabsContador===2?true:false} indexTab={1} ></TabParecerExigencias>
                  <TabParecerExigencias visible={opiniones.tabsContador===3?true:false} indexTab={2} ></TabParecerExigencias>
                  <TabParecerExigencias visible={opiniones.tabsContador===4?true:false} indexTab={3} ></TabParecerExigencias>
                  <TabParecerExigencias visible={opiniones.tabsContador===5?true:false} indexTab={4} ></TabParecerExigencias>  
                  </View>
                <Spacer height={10}></Spacer>
                <View style={{flex:1, flexDirection:'row',}}>

                  {/* ------------------Incrementar---------------------------------------------------- */}
                  <SelectorTabParecerExigencias visible={true} validItem={false} label='Salvar' index={6} selected={false}
                  onPress={()=>{ console.log('+')  
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
                  <View style={{flex:0, width:'100%',  alignItems:'center',height:40,backgroundColor:'transparent',  justifyContent:'flex-start', alignContent:'center', marginBottom:20,marginTop:30}}>
                      <TouchableOpacity 
                        disabled={ !opiniones.exigenciasAllValid ? true : false} //true deshabilita
                        style={{ marginHorizontal:16, borderRadius: 100, width:'97%',
                        backgroundColor: !opiniones.exigenciasAllValid  ? '#BCC1CB' :  colores.primary, 
                        height:48, justifyContent:'center',  }} 
                          onPress= {()=>{
                            //TODO add logic to add nova exigencia
                            saveExigencias();

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
                          <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: opiniones.exigenciasAllValid  ? 'black' : 'white'}}>SALVAR</Text>
                      </TouchableOpacity>
                  </View>

            </View>
          
}
