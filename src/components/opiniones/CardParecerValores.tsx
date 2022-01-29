import React, { useContext, useEffect, useState } from 'react';
import {  FlatList, Platform, Switch, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { Spacer } from '../Spacer';
import { LabelTexto } from './LabelTexto';
import { OpinionesValores } from '../../models/OpinionesValores';
import { Select } from '../Select';
import { InputMensajeSimple } from './InputMensajeSimple';

export const CardParecerValores = () => {

  //invoke global state
  const { opiniones,setOpiniones } = useContext( GeneralContext )

  const items=[   { label: "JavaScript", value: "JavaScript" },
  { label: "TypeStript", value: "TypeStript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "C++", value: "C++" },
  { label: "C", value: "C" },
  ];

  const renderUpdateItem = (item:OpinionesValores) =>{

    {/* tarjeta */}
    return (  <View style={{height:item.colapsado?160:450, width:'100%',justifyContent:'center',
                                      alignContent:'center',alignItems:'flex-start',paddingLeft:4,paddingTop:16,
                                      backgroundColor: 'white', borderRadius:7,padding:0,elevation:6,
                                      shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                      height: 3, width: 3 }
                                  }}>

                                    {/* vista colapsada */}
                                    <View style={{flex:0,flexDirection:'row', justifyContent:'flex-end',alignContent:'center', width:'100%',marginVertical:16,marginTop:1,
                                                  alignItems:'flex-end',height:40}}>

                                        <Text style={{marginVertical:3,fontFamily:'Roboto-Bold',color:'#838892', fontSize:20}}>GO</Text>
                                        <Switch 
                                          style={{ transform: (Platform.OS==='android' ? [{ scaleX: 1.3 }, { scaleY: 1.3 }] : [{ scaleX: 1 }, { scaleY: 1 }]) , marginHorizontal:16 }}
                                          trackColor={{false:'#EDF0F5', true:'#FDBE0F'}}
                                          thumbColor= {opiniones.valores[item.id].go   ? '#FF9029':'#EDF0F5'}
                                          value={item.go}
                                          onValueChange={(value)=>{
                                            const payload= opiniones;
                                            payload.valores[item.id].go =value;
                                            setOpiniones(payload)
                                          }}
                                        ></Switch>
                                  
                                    </View>
                               
                                 {opiniones.valores[item.id].colapsado && <Select placeholder='Producto / Servicio' campo={item.productoServicio} width='88%' items={items}
                                      onValueChange={function (value: any, index: number): void {
                                        const payload= opiniones;
                                        payload.valores[item.id].productoServicio =value;
                                        setOpiniones(payload)
                                      }} />}

                                
                                     {/* marginBottom:Platform.OS==='ios'? 20: 70 */}

                                    {/* vista expandida */}
                                    <View style={{flex:1,width:'100%',}}>
                                    <Collapsible collapsed={item.colapsado}  style={{justifyContent:'flex-start',alignContent:'flex-start',alignItems:'flex-start'}} >
                                        <View style={{flex:0,width:'100%', height:310,  }} >
                                       
                                            {/* motivo */}
                                            <View style={{flex:0,width:'90%',height:50,left:16,}}>
                                              <InputMensajeSimple placeholder='Motivo' width='96%' campo={item.motivo} maxLength={50}
                                              onChangeMensaje={(msg:string)=>{
                                                const payload= opiniones;
                                                payload.valores[item.id].motivo =msg;
                                                setOpiniones(payload)
                                              }}></InputMensajeSimple>
                                            </View>
                                            <Spacer height={0}></Spacer>

                                             {/* lotes, item and qtde */}
                                             <View style={{flex:0,width:'90%',height:55,flexDirection:'row',left:16,}}>
                                                <InputMensajeSimple placeholder='Lote' width='90%' campo={item.lote}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].lote = msg;
                                                  setOpiniones(payload)
                                                }}></InputMensajeSimple>

                                                <InputMensajeSimple placeholder='Item' width='90%' campo={item.item}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].item = msg;
                                                  setOpiniones(payload)
                                                }}></InputMensajeSimple>

                                                <InputMensajeSimple placeholder='Qtde' width='88%' campo={item.qtde}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].qtde = msg;
                                                  setOpiniones(payload)
                                                }}></InputMensajeSimple>
                                              </View>

                                              <Spacer height={0}></Spacer>

                                            {/* familia */}
                                            <View style={{flex:0,width:'90%',height:40,left:10,}}>
                                              <Select placeholder='Familia' campo={item.familia} width='96%' items={items}
                                                onValueChange={function (value: any, index: number): void {
                                                  const payload= opiniones;
                                                  payload.valores[item.id].familia =value;
                                                  setOpiniones(payload)
                                                }} />
                                              </View>

                                            <Spacer height={14}></Spacer>
                                            {/* producto servicio */}
                                            <View style={{flex:0,width:'90%',height:40,left:10,}}>
                                                <Select placeholder='Producto / Servicio' campo={item.productoServicio} width='96%' items={items}
                                                  onValueChange={function (value: any, index: number): void {
                                                    const payload= opiniones;
                                                    payload.valores[item.id].productoServicio =value;
                                                    setOpiniones(payload)
                                                  }}/>
                                              </View>

                                            <Spacer height={0}></Spacer>



                                            {/* valor inicial and final */}
                                            <View style={{flex:0,width:'90%',flexDirection:'row',left:16}}>
                                                <InputMensajeSimple placeholder='Valor inicial' width='90%' campo={item.valorinicial}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].valorinicial =msg;
                                                  setOpiniones(payload)
                                                }}></InputMensajeSimple>

                                                <InputMensajeSimple placeholder='Valor final' width='92%' campo={item.valorFinal}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].valorFinal =msg;
                                                  setOpiniones(payload)
                                                }}></InputMensajeSimple>
                                            </View>
                                            <Spacer height={2}></Spacer>

                                            {/* justificativa */}
                                            <View style={{flex:0,width:'90%',left:16,height:50,}}>
                                                <InputMensajeSimple placeholder='Justificativa' width='96%' campo={item.justificativa}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].justificativa =msg;
                                                  setOpiniones(payload)
                                                }}></InputMensajeSimple>
                                            </View>

                                            <Spacer height={10}></Spacer>
                                    
                                        </View>
                                    </Collapsible>
                                    </View>


                                    {/* colapsador */}
                                   <View style={{justifyContent:'flex-end',alignItems:'center',height:35,top:0,marginBottom:20,width:'100%', }}>
                                        <TouchableOpacity  style={{ borderRadius: 100,  }} 
                                          onPress={() =>{ 
                                            const payload= opiniones;
                                            payload.valores[item.id].colapsado =!item.colapsado;
                                            setOpiniones(payload)

                                          }} >
                                          <View style={{ flexDirection:'row'}}>
                                                <Text  style={{ fontFamily:'Roboto-Bold',fontSize:17,fontWeight:'600', textAlign:'center',color:'black' }}>Ver todo</Text>
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
