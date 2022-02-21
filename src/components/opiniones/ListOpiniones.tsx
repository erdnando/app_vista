import React, { useContext, useEffect } from 'react';
import {  FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';
import { Spacer } from '../Spacer';
import { ListaParecerAux } from '../../models/response/ListaParecerAux';
import { useParecer } from '../../hooks/useParecer';

export const ListOpiniones = () => {

  //invoke global state
  const { ids,setIds,setTabSelected,setTabSelectedOld,tabSelected, parecer,setParecer} = useContext( GeneralContext )
  const { cargaComoboTipo,cargaComoboDescripcion,cargaComoboTipoUsuario,
    cargaExigenciasTerciario,cargaComboMotivo,getListParecerRealizadoTerciario,cargaComboFamilia } = useParecer();
 


const renderUpdateItem = (item:ListaParecerAux) =>{

    {/* alerta */}
    return (  <TouchableOpacity style={{ borderRadius: 100,  }} 
                                onPress={()=>{
                                  console.log('tarjeta click..');
                                  const payload= ids;
                                  payload.idOpinionBusqueda= '';
                                  payload.idOpinionSeleccionado=item.idOpinion;
                                  setIds(payload);

                                  const payload1= parecer;
                                  payload1.parecerSeleccionado=item;
                                  setParecer(payload1);

                                  setTabSelectedOld(tabSelected)
                                  setTabSelected(item.idOpinion);

                                  cargaComoboTipo();
                                  cargaComoboDescripcion();
                                  cargaComboMotivo();
                                  cargaComboFamilia();

                                  cargaComoboTipoUsuario();
                                  cargaExigenciasTerciario();
                                  getListParecerRealizadoTerciario();

                                  

                                }}>
                      <View style={{height:135, flexDirection:'row', width:'98%',borderLeftColor:(item.estatus==1 ? '#83AE69':'#FF9029'),borderLeftWidth:5,
                                      backgroundColor: 'white', borderRadius:7,padding:5,elevation:6,
                                      shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                      height: 3, width: 3 }
                                  }}>

                                  <View style={{ flexDirection:'column', margin:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>

                                    {/* titulo */}
                                      <View style={{width:'85%', justifyContent:'space-evenly', marginBottom:10}}>
                                          <Text style={{fontFamily:'Roboto-Regular',fontWeight:'400', fontSize:18,color:'#373737', textAlign:'justify'}}>{item.opinion}</Text>
                                      </View>
                                      {/* id, edital */}
                                      <View style={{flexDirection:'row', width:'100%', justifyContent:'flex-start', marginBottom:5,marginTop:5 }}>
                                        <Text style={{fontFamily:'Roboto-Regular',fontWeight:'400', fontSize:14, textAlign:'justify',color:'#373737'}}>Oportunidade: 
                                          <Text style={{fontFamily:'Roboto-Regular',fontWeight:'400', fontSize:14, textAlign:'justify',color:'#838892'}}> {item.idOpinion}</Text>
                                        </Text>
                                        <View style={{width:10}}></View>
                                        <Text style={{fontFamily:'Roboto-Regular',fontWeight:'700', fontSize:14, textAlign:'justify'}}>Edital: 
                                          <Text style={{fontFamily:'Roboto-Regular',fontWeight:'400', fontSize:14, textAlign:'justify',color:'#838892'}}> {item.edital}</Text>
                                        </Text>
                                      </View>
                                      {/* Orgao */}
                                      <Text style={{fontFamily:'Roboto-Regular', fontSize:14,fontWeight:'700', textAlign:'justify', marginBottom:10}}>Orgao: 
                                          <Text style={{fontFamily:'Roboto-Regular', fontSize:14,fontWeight:'400', textAlign:'justify',color:'#838892'}}> {item.oragao}</Text>
                                      </Text>


                                      <View style={{flexDirection:'row', width:'80%', justifyContent:'space-between' }}>
                                          <TextOportunidadIcono icono='ic_round-date-range' colorIcono='#838892' label='' colorValor='#838892' valor={item.fechaOpinion} size={15} ></TextOportunidadIcono>
                                          <View style={{width:20,}}></View>
                                          <TextOportunidadIcono icono='ic_baseline-place'  colorIcono='#838892' colorValor='#838892' label='' valor={item.ubicacion} size={15} ></TextOportunidadIcono>
                                          {/* <View style={{width:30,}}></View> */}
                                      </View>


                                  </View>
                      </View>
            </TouchableOpacity>
    )
}

const renderSeparator = () =>{
    return (
         <Spacer height={6} ></Spacer>
    )
}


return (
    <View style={gstyles.globalTabView}>
         <Spacer height={10}></Spacer>
         <View style={{flex:1,width:'100%',justifyContent:'center',marginHorizontal:0,left:4 }}>
    
            <FlatList data={parecer.listaParecer} 
                scrollEnabled={true}
                renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                keyExtractor={(item) => item.id+item.idOpinion} 
                ItemSeparatorComponent={ () => renderSeparator()}
            />
        </View>
    </View>
) 
}
