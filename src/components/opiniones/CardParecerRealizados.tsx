import React, { useContext, useEffect } from 'react';
import {  FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';
import { Spacer } from '../Spacer';
import { LabelTexto } from './LabelTexto';

export const CardParecerRealizados = () => {

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

    {/* tarjeta */}
    return (  <TouchableOpacity style={{ borderRadius: 100,  }} 
                                onPress={()=>{
                                  

                                }}>
                      <View style={{height:220, width:'100%',
                                      backgroundColor: 'white', borderRadius:7,padding:5,elevation:6,
                                      shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                      height: 3, width: 3 }
                                  }}>

                                  <View style={{ flexDirection:'column', margin:16, justifyContent:'flex-start',  alignItems:'flex-start'}}>

                                     {/* usuario */}
                                     <TextOportunidadIcono icono='gridicons_user' colorIcono='#838892' label='Usuario' colorValor='#838892' valor='Lorem ispum dolor'  size={15} ></TextOportunidadIcono>
                                      {/* line */}
                                      <View style={{width:'100%', marginBottom:8, height:2,backgroundColor:'#BCC1CB'}}></View>
                                       {/* usuario */}
                                     <TextOportunidadIcono icono='icomoon-free_hammer2' colorIcono='#838892' label='Parecer' colorValor='#838892' valor='Lorem ispum dolor'  size={15} ></TextOportunidadIcono>
                                      {/* line */}
                                      <View style={{width:'100%', marginBottom:8, height:2,backgroundColor:'#BCC1CB'}}></View>
                                       {/* usuario */}
                                     <TextOportunidadIcono icono='ic_round-pin' colorIcono='#838892' label='Motivo' colorValor='#838892' valor='Lorem ispum dolor'  size={15} ></TextOportunidadIcono>
                                      {/* line */}
                                      <View style={{width:'100%', marginBottom:8, height:2,backgroundColor:'#BCC1CB'}}></View>
                                       {/* usuario */}
                                       <LabelTexto  fontSize={14} color='#454A53' label='Justificativa:' value=' Lorem ispum dolor sit amet consectetur adipiscing elit. Nulla vehicula vetibulum laoreet. Vestibulum vitae.'></LabelTexto>
                                      
                                    
                                  </View>
                      </View>
            </TouchableOpacity>
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
