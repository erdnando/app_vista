import React, { useContext, useEffect } from 'react';
import {  FlatList, Platform, Switch, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores, gstyles } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { Spacer } from '../Spacer';
import { OpinionesValores } from '../../models/OpinionesValores';
import { Select } from '../Select';
import { InputMensajeSimpleCol } from './InputMensajeSimpleCol';
import { useParecer } from '../../hooks/useParecer';

export const CardParecerValores = () => {

  //invoke global state
  const { opiniones,setOpiniones } = useContext( GeneralContext )
  const { isFormValoresValid,saveParecerTerciario,asignaProductoServicio,isAllParecerOK } = useParecer()

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
                                        <Text style={{marginVertical:3,fontFamily:'Roboto-Bold',color:'#838892', fontSize:18}}>
                                       { opiniones.valores[item.id].go ? 'GO' : 'NO GO'}

                                        </Text>
                                        <Switch disabled={opiniones.allDisabledforNoGo}
                                          style={{ transform: (Platform.OS==='android' ? [{ scaleX: 1.3 }, { scaleY: 1.3 }] : [{ scaleX: 1 }, { scaleY: 1 }]) , marginHorizontal:16 }}
                                          trackColor={{false:'#EDF0F5', true:'#FDBE0F'}}
                                          thumbColor= {opiniones.valores[item.id].go   ? '#FF9029':'#EDF0F5'}
                                          value={item.go}
                                          onValueChange={(value)=>{
                                            const payload= opiniones;
                                            payload.valores[item.id].go =value;
                                            setOpiniones(payload)
                                            isFormValoresValid()
                                          }}
                                        ></Switch>
                                    </View>
                               
                                    {opiniones.valores[item.id].colapsado && <View style={{flex:0,width:'90%',height:50,left:16,top:-5}}>
                                         
                                              
                                            {/*  producto servicio */}
                                            <View style={{flex:0,width:'90%',height:50,left:4}}>
                                              <Select placeholder='Producto servicio' campo={item.productoServicio} width='96%' items={opiniones.valores[item.id].arrProductox}
                                                onValueChange={function (value: any, index: number): void {
                                                  const payload= opiniones;
                                                  console.log(value)
                                                  payload.valores[item.id].productoServicio =value;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }} />
                                              </View>
                                                
                                            </View>
                                    }

                                    {/* vista expandida */}
                                    <View style={{flex:1,width:'100%'}}>
                                    <Collapsible collapsed={item.colapsado}  style={{justifyContent:'flex-start',alignContent:'flex-start',
                                                                                     alignItems:'flex-start'}} >
                                        <View style={{flex:0,width:'100%', height:350, }} >
                                       
                                            {/* cbo motivo */}
                                            <View  style={{flex:0,width:'90%',height:50,left:4,top:0,}}>
                                             { !item.go && <Select placeholder='Motivo' campo={item.motivo} width='96%' items={opiniones.catMotivo}
                                                disabled={opiniones.allDisabledforNoGo}
                                                onValueChange={function (value: any, index: number): void {
                                                  const payload= opiniones;
                                                  console.log(value +' in '+ item.id);
                                                  payload.valores[item.id].motivo = value;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }} />}
                                              </View>
                                           

                                             {/* lotes, item and qtde */}
                                             <View style={{flex:0,width:'90%',height:50,flexDirection:'row',left:16,top:-8}}>

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

                                              <Spacer height={10}></Spacer>

                                            {/* familia */}
                                            <View style={{flex:0,width:'90%',height:40,left:4,top:-10}}>
                                              <Select placeholder='Familia' campo={item.familia} width='96%' items={opiniones.catFamilia}
                                                onValueChange={function (value: any, index: number): void {
                                                  const payload= opiniones;
                                                  console.log(value)
                                                  payload.valores[item.id].familia =value;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()

                                                  asignaProductoServicio(value,item.id)
                                                }} />
                                              </View>

                                            <Spacer height={10}></Spacer>
                       
                                             {/*  producto servicio */}
                                            <View style={{flex:0,width:'90%',height:50,left:4,top:-18}}>
                                              <Select placeholder='Producto servicio' campo={item.productoServicio} width='96%' items={opiniones.valores[item.id].arrProductox}
                                                onValueChange={function (value: any, index: number): void {
                                                  const payload= opiniones;
                                                  console.log(value)
                                                  payload.valores[item.id].productoServicio =value;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }} />
                                              </View>
                                            

                                            <Spacer height={10}></Spacer>


                                            {/* valor inicial and final */}
                                            <View style={{flex:0,width:'90%',flexDirection:'row',left:16,top:-34}}>
                                                <InputMensajeSimpleCol keyboardType='decimal-pad' placeholder='Valor inicial' width='90%' campo={item.valorinicial}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].valorinicial =msg;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }}></InputMensajeSimpleCol>

                                                <InputMensajeSimpleCol keyboardType='decimal-pad' placeholder='Valor final' width='92%' campo={item.valorFinal}
                                                onChangeMensaje={(msg:string)=>{
                                                  const payload= opiniones;
                                                  payload.valores[item.id].valorFinal =msg;
                                                  setOpiniones(payload)
                                                  isFormValoresValid()
                                                }}></InputMensajeSimpleCol>
                                            </View>
                                            <Spacer height={20}></Spacer>

                                            {/* justificativa */}
                                            <View style={{flex:0,width:'90%',left:16,height:30,top:-20}}>
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
                                justifyContent:'flex-start', alignContent:'center', bottom:5}}>
                      <TouchableOpacity 
                        disabled={ isAllParecerOK() ? false : true} 
                        style={{ marginHorizontal:16, borderRadius: 100, width:'97%',
                        backgroundColor: !isAllParecerOK() ? '#BCC1CB' :  colores.primary, 
                        height:48, justifyContent:'center',  }} 
                          onPress= {()=>{
                            //TODO add logic to save parecer
                            console.log('saving valores terciario..')
                            saveParecerTerciario();
                            //clear parecer
                          }}>
                          <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: isAllParecerOK() ? 'black' : 'white'}}>SALVAR</Text>
                      </TouchableOpacity>
             </View>
        </View>
    </View>
) 
}
