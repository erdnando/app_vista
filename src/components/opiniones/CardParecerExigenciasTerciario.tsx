import React, { useState,useContext } from 'react';
import { FlatList, Platform, Switch, Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores, gstyles } from '../../theme/appTheme';
import { Spacer } from '../Spacer';
import Collapsible from 'react-native-collapsible';
import { InputMensajeSimple } from './InputMensajeSimple';
import { Select } from '../Select';
import CustomIcon from '../../theme/CustomIcon';
import { OpinionesValores } from '../../models/OpinionesValores';
import { RoundedSelectors } from './RoundedSelectors';
import { LabelTexto } from './LabelTexto';
import { LabelTextoCol } from './LabelTextoCol';


export const CardParecerExigenciasTerciario = ( ) => {

   //invoke global state
   const { opiniones,setOpiniones } = useContext( GeneralContext )

  //  const items=[   { label: "JavaScript", value: "JavaScript" },
  //  { label: "TypeStript", value: "TypeStript" },
  //  { label: "Python", value: "Python" },
  //  { label: "Java", value: "Java" },
  //  { label: "C++", value: "C++" },
  //  { label: "C", value: "C" },
  //  ];
 
   const renderUpdateItem = (item:OpinionesValores) =>{
 
     {/* tarjeta */}
     return (  <View style={{height:item.colapsado?190:330, width:'100%',justifyContent:'center',
                                       alignContent:'center',alignItems:'flex-start',paddingLeft:4,paddingTop:16,
                                       backgroundColor: 'white', borderRadius:7,padding:0,elevation:6,
                                       shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                       height: 3, width: 3 }
                                   }}>
 
                                     {/* vista colapsada */}
                                     <View style={{flex:0,flexDirection:'row', justifyContent:'flex-end',alignContent:'center', width:'100%',marginVertical:8,marginTop:1,
                                                   alignItems:'flex-end'}}>
                                         {/* Encabezado */}
                                         <View style={{flex:1,width:'93%',height:55,flexDirection:'row',top:0,marginLeft:10, marginRight:20,justifyContent:'space-between'}}>
                                            <View style={{borderRightWidth:0.5, borderRightColor:'grey',height:40,paddingRight:10}}>
                                              <LabelTextoCol  fontSize={14} color='#454A53' label='Produto' value={'Lorem ipsum dole...'}></LabelTextoCol>
                                            </View>
                                            <View style={{borderRightWidth:0.5, borderRightColor:'grey',height:40,paddingRight:10}}>
                                             <LabelTextoCol  fontSize={14} color='#454A53' label='Valor in' value={'R$100.00'}></LabelTextoCol>
                                           </View>
                                           
                                            <LabelTextoCol  fontSize={14} color='#454A53' label='Valor fin: ' value={'R$100.00'}></LabelTextoCol>
                                          
                                          </View>
                                     </View>
                                     <Spacer height={0}></Spacer>
                                      {/* Rounded button */}
                                      {
                                      opiniones.valores[item.id].colapsado &&  
                                       <View style={{width:'100%', flex:1,justifyContent:'center',alignItems:'center'}}>
                                          <RoundedSelectors label1='GO' label2='NO GO' width='93%'
                                            onPress1={()=>{
                                              console.log('go')
                                              const payload = opiniones;
                                              payload.parecer.estatusGO=1;
                                              setOpiniones(payload);
                                            }}
                                            onPress2={()=>{
                                              console.log('no go')
                                              const payload = opiniones;
                                              payload.parecer.estatusGO=2;
                                              setOpiniones(payload);}}
                                        ></RoundedSelectors>
                                      </View> 
                                       }

                                     <Spacer height={10}></Spacer>
                                  
                                     {/* vista expandida */}
                                     <View style={{flex:1,width:'100%',marginTop:-15}}>
                                     <Collapsible collapsed={item.colapsado}  style={{justifyContent:'flex-start',alignContent:'flex-start',alignItems:'flex-start'}} >
                                         <View style={{flex:0,width:'100%', height:200,  }} >
                                        
                                         <View style={{flex:1,width:'70%',height:55,flexDirection:'row',top:0,marginLeft:10, marginRight:30,justifyContent:'space-between'}}>
                                              <LabelTextoCol  fontSize={14} color='#454A53' label='Lote' value={'00000'}></LabelTextoCol>
                                              <LabelTextoCol  fontSize={14} color='#454A53' label='Item' value={'00000'}></LabelTextoCol>
                                              <LabelTextoCol  fontSize={14} color='#454A53' label='Quota' value={'00000'}></LabelTextoCol>
                                          </View>

                                          <View style={{flex:1,width:'70%',height:55,flexDirection:'row',top:0,marginLeft:10, marginRight:30,justifyContent:'space-between'}}>
                                              <LabelTextoCol  fontSize={14} color='#454A53' label='Motivo' value={'Lorem ipsum del...'}></LabelTextoCol>
                                          </View>

                                          <View style={{flex:1,width:'70%',height:55,flexDirection:'row',top:0,marginLeft:10, marginRight:30,justifyContent:'space-between'}}>
                                              <LabelTextoCol  fontSize={14} color='#454A53' label='Justificacion' value={'Lorem ipsum del...'}></LabelTextoCol>
                                          </View>

                                          <Spacer height={2}></Spacer>
 
                                          {/* rounded button */}
                                          <View style={{width:'100%', flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <RoundedSelectors label1='GO' label2='NO GO' width='93%'
                                                  onPress1={()=>{
                                                    console.log('go')
                                                    const payload = opiniones;
                                                    payload.parecer.estatusGO=1;
                                                    setOpiniones(payload);
                                                  }}
                                                  onPress2={()=>{
                                                    console.log('no go')
                                                    const payload = opiniones;
                                                    payload.parecer.estatusGO=2;
                                                    setOpiniones(payload);}}
                                            ></RoundedSelectors>
                                          </View>
 
                                          <Spacer height={10}></Spacer>
                                     
                                         </View>
                                     </Collapsible>
                                     </View>
 
 
                                     {/* colapsador */}
                                    <View style={{justifyContent:'flex-end',alignItems:'center',height:55,top:0, marginBottom:0,width:'100%', }}>
                                         <TouchableOpacity  style={{ borderRadius: 100,  }} 
                                           onPress={() =>{ 
                                             const payload= opiniones;
                                             payload.valores[item.id].colapsado =!item.colapsado;
                                             setOpiniones(payload)
 
                                           }} >
                                           <View style={{ flexDirection:'row'}}>
                                                 <Text  style={{ fontFamily:'Roboto-Bold',fontSize:17,fontWeight:'600', textAlign:'center',color:'black',marginBottom:20 }}>Ver todo</Text>
                                                 <CustomIcon name= {item.colapsado ? 'ic_round-keyboard-arrow-down': 'ic_round-keyboard-arrow-up'} 
                                                 size={24} color='black' style={{right:-10,top:Platform.OS=='ios'? -2 :0,}} ></CustomIcon>
                                           </View>
                                         </TouchableOpacity>
                                    </View>
 
 
               </View>
             //  <TouchableOpacity style={{ borderRadius: 100,  }}    onPress={()=>{ }}></TouchableOpacity>
     )
 }
 
 const renderSeparator = () =>{
     return (
          <Spacer height={15} ></Spacer>
     )
 }
 
 
 return (
     <View style={{...gstyles.globalTabView , width:'100%',top:-8}}>
          <Spacer height={10}></Spacer>
          <View style={{flex:1,width:'100%',justifyContent:'center',}}>
     
             <FlatList data={opiniones.valores} 
                 scrollEnabled={true}
                 renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                 keyExtractor={(item) => item.id+item.productoServicio} 
                 ItemSeparatorComponent={ () => renderSeparator()}
             />
         </View>
     </View>
 ) 
          
}
