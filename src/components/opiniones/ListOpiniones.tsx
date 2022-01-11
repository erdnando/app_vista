import React, { useContext, useEffect } from 'react';
import {  FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';
import { Spacer } from '../Spacer';

export const ListOpiniones = () => {

  //invoke global state
  const { ids,setIds,setTabSelected,setTabSelectedOld,tabSelected } = useContext( GeneralContext )

  interface Opiniones{
    id:number,
    opinion:string,
    idOpinion:string,
    edital:string,
    oragao:string,
    fechaOpinion:string,
    ubicacion:string,
    estatus:number,
}

const Data:Opiniones[] = [
   {
      id:1,
      opinion:'Lorem ipsum dolor sit amet',
      idOpinion:'0000000000',
      edital:'000000000',
      oragao:'Lorem ipsum dolor sit amet',
      fechaOpinion:'00/00/00 00:00',
      ubicacion:'Uberbaba -MG',
      estatus:2,  //1 realizado, 2 no realizado
  },
  {
    id:2,
    opinion:'Lorem ipsum dolor sit amet',
    idOpinion:'0000000000',
    edital:'000000000',
    oragao:'Lorem ipsum dolor sit amet',
    fechaOpinion:'00/00/00 00:00',
    ubicacion:'Uberbaba -MG',
    estatus:1,  //1 realizado, 2 no realizado
  },
  {
    id:3,
    opinion:'Lorem ipsum dolor sit amet',
    idOpinion:'0000000000',
    edital:'000000000',
    oragao:'Lorem ipsum dolor sit amet',
    fechaOpinion:'00/00/00 00:00',
    ubicacion:'Uberbaba -MG',
    estatus:2,  //1 realizado, 2 no realizado
  },
  {
    id:4,
    opinion:'Lorem ipsum dolor sit amet',
    idOpinion:'0000000000',
    edital:'000000000',
    oragao:'Lorem ipsum dolor sit amet',
    fechaOpinion:'00/00/00 00:00',
    ubicacion:'Uberbaba -MG',
    estatus:1,  //1 realizado, 2 no realizado
  },
  {
    id:5,
    opinion:'Lorem ipsum dolor sit amet',
    idOpinion:'0000000000',
    edital:'000000000',
    oragao:'Lorem ipsum dolor sit amet',
    fechaOpinion:'00/00/00 00:00',
    ubicacion:'Uberbaba -MG',
    estatus:2,  //1 realizado, 2 no realizado
  },
  {
  id:6,
  opinion:'Lorem ipsum dolor sit amet',
  idOpinion:'0000000000',
  edital:'000000000',
  oragao:'Lorem ipsum dolor sit amet',
  fechaOpinion:'00/00/00 00:00',
  ubicacion:'Uberbaba -MG',
  estatus:1,  //1 realizado, 2 no realizado
  },
  {
    id:7,
    opinion:'Lorem ipsum dolor sit amet',
    idOpinion:'0000000000',
    edital:'000000000',
    oragao:'Lorem ipsum dolor sit amet',
    fechaOpinion:'00/00/00 00:00',
    ubicacion:'Uberbaba -MG',
    estatus:2,  //1 realizado, 2 no realizado
  },
  {
  id:8,
  opinion:'Lorem ipsum dolor sit amet',
  idOpinion:'0000000000',
  edital:'000000000',
  oragao:'Lorem ipsum dolor sit amet',
  fechaOpinion:'00/00/00 00:00',
  ubicacion:'Uberbaba -MG',
  estatus:1,  //1 realizado, 2 no realizado
  },
  {
    id:9,
    opinion:'Lorem ipsum dolor sit amet',
    idOpinion:'0000000000',
    edital:'000000000',
    oragao:'Lorem ipsum dolor sit amet',
    fechaOpinion:'00/00/00 00:00',
    ubicacion:'Uberbaba -MG',
    estatus:2,  //1 realizado, 2 no realizado
  },
  {
  id:10,
  opinion:'Lorem ipsum dolor sit amet',
  idOpinion:'0000000000',
  edital:'000000000',
  oragao:'Lorem ipsum dolor sit amet',
  fechaOpinion:'00/00/00 00:00',
  ubicacion:'Uberbaba -MG',
  estatus:1,  //1 realizado, 2 no realizado
  },
]

const renderUpdateItem = (item:Opiniones) =>{

  

    {/* alerta */}
    return (  <TouchableOpacity style={{ borderRadius: 100,  }} 
                                onPress={()=>{
                                  console.log('tarjeta click..');
                                  const payload= ids;
                                  payload.idOpinionBusqueda= '';
                                  payload.idOpinionSeleccionado=item.idOpinion;
                                  setIds(payload);

                                  setTabSelectedOld(tabSelected)
                                  setTabSelected(item.idOpinion);

                                }}>
                      <View style={{height:135, flexDirection:'row', width:'98%',borderLeftColor:(item.estatus==1 ? '#83AE69':'#FF9029'),borderLeftWidth:5,
                                      backgroundColor: 'white', borderRadius:7,padding:5,elevation:6,
                                      shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                      height: 3, width: 3
                                  }}}>

                                  <View style={{ flexDirection:'column', margin:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>

                                    {/* titulo */}
                                      <View style={{width:'85%', justifyContent:'space-evenly', marginBottom:10}}>
                                          <Text style={{fontFamily:'Roboto-Bold', fontSize:17, textAlign:'justify'}}>{item.opinion}</Text>
                                      </View>
                                      {/* id, edital */}
                                      <View style={{flexDirection:'row', width:'100%', justifyContent:'flex-start', marginBottom:5,marginTop:5 }}>
                                        <Text style={{fontFamily:'Roboto-Bold', fontSize:14, textAlign:'justify'}}>ID: 
                                          <Text style={{fontFamily:'Roboto-Regular', fontSize:14, textAlign:'justify'}}> {item.idOpinion}</Text>
                                        </Text>
                                        <View style={{width:10}}></View>
                                        <Text style={{fontFamily:'Roboto-Bold', fontSize:15, textAlign:'justify'}}>Edital: 
                                          <Text style={{fontFamily:'Roboto-Regular', fontSize:15, textAlign:'justify'}}> {item.edital}</Text>
                                        </Text>
                                      </View>
                                      {/* Orgao */}
                                      <Text style={{fontFamily:'Roboto-Bold', fontSize:15, textAlign:'justify', marginBottom:10}}>Orgao: 
                                          <Text style={{fontFamily:'Roboto-Regular', fontSize:15, textAlign:'justify'}}> {item.oragao}</Text>
                                      </Text>


                                      <View style={{flexDirection:'row', width:'80%', justifyContent:'space-between' }}>
                                          <TextOportunidadIcono icono='ic_round-date-range' label='' valor={item.fechaOpinion} size={15} ></TextOportunidadIcono>
                                          <View style={{width:20,}}></View>
                                          <TextOportunidadIcono icono='ic_baseline-place' colorValor='black' label='' valor={item.ubicacion} size={15} ></TextOportunidadIcono>
                                          {/* <View style={{width:30,}}></View> */}
                                      </View>


                                  </View>
                      </View>
            </TouchableOpacity>
    )
}

const renderSeparator = () =>{
    return (
         <Spacer height={17} ></Spacer>
    )
}


return (
    <View style={gstyles.globalTabView}>
         <Spacer height={10}></Spacer>
         <View style={{flex:1,width:'100%',justifyContent:'center',marginHorizontal:0,left:4 }}>
    
            <FlatList data={Data} 
                scrollEnabled={true}
                renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                keyExtractor={(item) => item.id+item.idOpinion} 
                ItemSeparatorComponent={ () => renderSeparator()}
            />
        </View>
    </View>
) 
}
