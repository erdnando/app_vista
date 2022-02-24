import React, { useContext, useEffect, useState } from 'react';
import {  FlatList, Platform, Switch, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores, gstyles } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { Spacer } from '../Spacer';
import { LabelTexto } from './LabelTexto';
import { OpinionesValores } from '../../models/OpinionesValores';
import { Select } from '../Select';
import { InputMensajeSimple } from './InputMensajeSimple';
import { InputMensajeSimpleCol } from './InputMensajeSimpleCol';
import { useParecer } from '../../hooks/useParecer';

export const CardParecerValores = () => {

  //invoke global state
  const { opiniones,setOpiniones } = useContext( GeneralContext )
  const { isFormValoresValid,saveValores } = useParecer()

  useEffect(() => {
    isFormValoresValid();
  }, [])
  

  const renderUpdateItem = (item:OpinionesValores) =>{



    {/* tarjeta */}
    return (  <View style={{height:item.colapsado?160:410, width:'100%',justifyContent:'center',
                                      alignContent:'center',alignItems:'flex-start',paddingLeft:4,paddingTop:5,
                                      backgroundColor: 'white', borderRadius:7,padding:0,elevation:6,
                                      shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                      height: 3, width: 3 }
                                  }}>

                                    {/* vista colapsada */}
                                    <View style={{flex:0,flexDirection:'row', justifyContent:'flex-end',alignContent:'center', 
                                                  width:'100%',marginVertical:16,marginTop:0,alignItems:'flex-end',height:40}}>
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
                               
                                    {opiniones.valores[item.id].colapsado && <View style={{flex:0,width:'90%',height:50,left:16,top:-5}}>
                                         
                                                <View style={{height:50,width:'100%'}}>
                                                    <InputMensajeSimpleCol placeholder='Produto' width='96%' campo={item.productoServicio} maxLength={50}
                                                    onChangeMensaje={(msg:string)=>{
                                                      console.log(msg)
                                                      const payload= opiniones;
                                                      payload.valores[item.id].productoServicio = msg;
                                                      setOpiniones(payload)
                                                      isFormValoresValid()
                                                    }}></InputMensajeSimpleCol>
                                                </View>
                                            </View>
                                    }

                                
                                    {/* vista expandida */}
                                    <View style={{flex:1,width:'100%'}}>
                                    <Collapsible collapsed={item.colapsado}  style={{justifyContent:'flex-start',alignContent:'flex-start',
                                                                                     alignItems:'flex-start'}} >
                                        <View style={{flex:0,width:'100%', height:340, }} >
                                       
                                           
                                            <View style={{flex:0,width:'90%',height:50,left:11,top:-10}}>
                                              <InputMensajeSimple placeholder='Motivo' width='96%' campo={item.motivo} maxLength={50}
                                              onChangeMensaje={(msg:string)=>{
                                                const payload= opiniones;
                                                payload.valores[item.id].motivo =msg;
                                                setOpiniones(payload)

                                                isFormValoresValid()
                                              }}></InputMensajeSimple>
                                            </View>
                                            {/* cbo motivo */}
                                            {/* <View style={{flex:0,width:'90%',height:50,left:4,top:0}}>
                                              <Select placeholder='Motivo' campo={item.familia} width='96%' items={opiniones.catMotivo}
                                                onValueChange={function (value: any, index: number): void {
                                                  const payload= opiniones;
                                                  console.log(value)
                                                  payload.valores[item.id].motivo =value;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }} />
                                              </View> */}
                                           

                                             {/* lotes, item and qtde */}
                                             <View style={{flex:0,width:'90%',height:55,flexDirection:'row',left:16,top:-8}}>

                                                  <InputMensajeSimpleCol placeholder='Lote' width='90%' campo={item.lote}
                                                  onChangeMensaje={(msg:string)=>{
                                                    const payload= opiniones;
                                                    payload.valores[item.id].lote = msg;
                                                    setOpiniones(payload)
                                                    isFormValoresValid()
                                                  }}></InputMensajeSimpleCol>
                                              

                                                <InputMensajeSimpleCol placeholder='Item' width='90%' campo={item.item}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].item = msg;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }}></InputMensajeSimpleCol>

                                                <InputMensajeSimpleCol placeholder='Qtde' width='88%' campo={item.qtde}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].qtde = msg;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }}></InputMensajeSimpleCol>

                                            </View>

                                              <Spacer height={0}></Spacer>

                                            {/* familia */}
                                            <View style={{flex:0,width:'90%',height:40,left:4,top:-10}}>
                                              <Select placeholder='Familia' campo={item.familia} width='96%' items={opiniones.catFamilia}
                                                onValueChange={function (value: any, index: number): void {
                                                  const payload= opiniones;
                                                  console.log(value)
                                                  payload.valores[item.id].familia =value;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }} />
                                              </View>

                                            <Spacer height={14}></Spacer>
                                            {/* producto servicio */}
                                            <View style={{flex:0,width:'90%',left:16,height:50,top:-18}}>
                                                <InputMensajeSimpleCol placeholder='Produto' width='96%' campo={item.productoServicio} maxLength={50}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].productoServicio =msg;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }}></InputMensajeSimpleCol>
                                            </View>
                                             {/*  producto servicio */}
                                            {/* <View style={{flex:0,width:'90%',height:50,left:4,top:0}}>
                                              <Select placeholder='Producto servicio' campo={item.familia} width='96%' items={opiniones.catProductoServicio}
                                                onValueChange={function (value: any, index: number): void {
                                                  const payload= opiniones;
                                                  console.log(value)
                                                  payload.valores[item.id].productoServicio =value;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }} />
                                              </View> */}
                                            

                                            <Spacer height={10}></Spacer>


                                            {/* valor inicial and final */}
                                            <View style={{flex:0,width:'90%',flexDirection:'row',left:16,top:-24}}>
                                                <InputMensajeSimpleCol placeholder='Valor inicial' width='90%' campo={item.valorinicial}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].valorinicial =msg;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }}></InputMensajeSimpleCol>

                                                <InputMensajeSimpleCol placeholder='Valor final' width='92%' campo={item.valorFinal}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].valorFinal =msg;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }}></InputMensajeSimpleCol>
                                            </View>
                                            <Spacer height={2}></Spacer>

                                            {/* justificativa */}
                                            <View style={{flex:0,width:'90%',left:16,height:50,top:-18}}>
                                                <InputMensajeSimpleCol placeholder='Justificativa' width='96%' campo={item.justificativa} maxLength={50}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].justificativa =msg;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }}></InputMensajeSimpleCol>
                                            </View>

                                            <Spacer height={0}></Spacer>
                                    
                                        </View>
                                    </Collapsible>
                                    </View>


                                    {/* colapsador */}
                                   <View style={{justifyContent:'flex-end',alignItems:'center',height:35,top:-10,width:'100%', }}>
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
                keyExtractor={(item) => item.id.toString()} 
                ItemSeparatorComponent={ () => renderSeparator()}
            />

            <Spacer height={5}></Spacer>
             {/* boton salvar*/}
             <View style={{flex:0, width:'100%',  alignItems:'center',height:40,backgroundColor:'transparent',
                                justifyContent:'flex-start', alignContent:'center', bottom:-5}}>
                      <TouchableOpacity 
                        disabled={ opiniones.valoresAllValid ? false : true} 
                        style={{ marginHorizontal:16, borderRadius: 100, width:'97%',
                        backgroundColor: !opiniones.valoresAllValid ? '#BCC1CB' :  colores.primary, 
                        height:48, justifyContent:'center',  }} 
                          onPress= {()=>{
                            //TODO add logic to save parecer
                            console.log('saving valores terciario..')
                            saveValores();
                            //clear parecer
                          }}>
                          <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: opiniones.valoresAllValid ? 'black' : 'white'}}>SALVAR</Text>
                      </TouchableOpacity>
             </View>
        </View>
    </View>
) 
}
