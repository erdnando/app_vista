import React, { useContext, useEffect } from 'react';
import {  FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores, gstyles } from '../../theme/appTheme';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';
import { Spacer } from '../Spacer';
import { LabelTexto } from './LabelTexto';
import { useParecer } from '../../hooks/useParecer';
import { ParecerRealizadoAux } from '../../models/ParecerRealizadoAux';

export const CardParecerRealizados = () => {

  //invoke global state
  const { parecer } = useContext( GeneralContext )
  const { isAllParecerOK,saveParecerTerciario } = useParecer()

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

const renderUpdateItem = (item:ParecerRealizadoAux) =>{

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

                                     <Spacer height={4}></Spacer>
                                     {/* usuario */}
                                     <TextOportunidadIcono icono='gridicons_user' colorIcono='#838892' label='Usuario: ' colorValor='#838892' valor={item.usuario}  size={15} ></TextOportunidadIcono>
                                      {/* line */}
                                      <View style={{width:'100%', marginBottom:12, height:2,backgroundColor:'#BCC1CB'}}></View>
                                       {/* usuario */}
                                     <TextOportunidadIcono icono='icomoon-free_hammer2' colorIcono='#838892' label='Parecer: ' colorValor='#838892' valor={item.parecer}  size={15} ></TextOportunidadIcono>
                                      {/* line */}
                                      <View style={{width:'100%', marginBottom:12, height:2,backgroundColor:'#BCC1CB'}}></View>
                                       {/* usuario */}
                                     <TextOportunidadIcono icono='ic_round-pin' colorIcono='#838892' label='Motivo: ' colorValor='#838892' valor={item.motivo}  size={15} ></TextOportunidadIcono>
                                      {/* line */}
                                      <View style={{width:'100%', marginBottom:14, height:2,backgroundColor:'#BCC1CB'}}></View>
                                       {/* usuario */}
                                       <LabelTexto  fontSize={14} color='#454A53' label='Justificativa: ' value={ item.justificativa}></LabelTexto>
                                      
                                    
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
    
         {parecer.listaParecerRealizado.length==0 && <View style={{flex:1,width:'100%',justifyContent:'flex-start',
                                      paddingTop:20,paddingLeft:20, height:220,backgroundColor: 'white', borderRadius:7,padding:5,elevation:6,
                                      shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                      height: 3, width: 3 }}}>
              <Text>Sem pareceres realizados</Text>
            </View>}

            <FlatList data={parecer.listaParecerRealizado} 
                scrollEnabled={true}
                renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                keyExtractor={(item) => item.id+item.usuario} 
                ItemSeparatorComponent={ () => renderSeparator()}
            />

             <Spacer height={5}></Spacer>
             {/* boton salvar*/}
             <View style={{flex:0, width:'100%',  alignItems:'center',height:40,backgroundColor:'transparent',
                                justifyContent:'flex-start', alignContent:'center', bottom:-5}}>
                      <TouchableOpacity 
                        disabled={ !isAllParecerOK() ? true : false} 
                        style={{ marginHorizontal:16, borderRadius: 100, width:'97%',
                        backgroundColor: !isAllParecerOK() ? '#BCC1CB' :  colores.primary, 
                        height:48, justifyContent:'center',  }} 
                          onPress= {()=>{
                            //TODO add logic to save parecer
                            console.log('saving ..')
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
