import React, { useContext, useEffect, useState } from 'react';
import {  FlatList, Platform, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';
import { Spacer } from '../Spacer';
import { LabelTexto } from './LabelTexto';

export const CardParecerValores = () => {

  //invoke global state
  const {  } = useContext( GeneralContext )
  const [isFilterCollapsed, setisFilterCollapsed] = useState(false)

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
  }
]

const renderUpdateItem = (item:Opiniones) =>{

    {/* tarjeta */}
    return (  <TouchableOpacity style={{ borderRadius: 100,  }} 
                                onPress={()=>{
                                  

                                }}>
                      <View style={{height:isFilterCollapsed?140:330, width:'100%',justifyContent:'space-between',
                                      alignContent:'center',alignItems:'center',
                                      backgroundColor: 'white', borderRadius:7,padding:20,elevation:6,
                                      shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                                      height: 3, width: 3 }
                                  }}>

                                   


                                    <LabelTexto  fontSize={14} color='#454A53' label='inicial:' value=' Lorem ispumscing elit. vitae.'></LabelTexto>
                                    <LabelTexto  fontSize={14} color='#454A53' label='inicial:' value=' Lorem ispumscing elit. vitae.'></LabelTexto>
                                    <LabelTexto  fontSize={14} color='#454A53' label='inicial:' value=' Lorem ispumscing elit. vitae.'></LabelTexto>

                                    <Collapsible collapsed={isFilterCollapsed} >
                                        <View style={{ width:'100%',height:180, backgroundColor:'white', paddingHorizontal:18,marginBottom:Platform.OS==='ios'? 0: 70}} >
                                        <Spacer height={20}></Spacer>
                                        {/* content */}
                                        <LabelTexto  fontSize={14} color='#454A53' label='Justificativa:' value=' Lorem ispumscing elit. vitae.'></LabelTexto>
                                        <LabelTexto  fontSize={14} color='#454A53' label='Justificativa:' value=' Lorem ispumscing elit. vitae.'></LabelTexto>
                                        <LabelTexto  fontSize={14} color='#454A53' label='Justificativa:' value=' Lorem ispumscing elit. vitae.'></LabelTexto>

                                        </View>
                                    </Collapsible>



                                    {/* colapsador */}
                                   <View style={{justifyContent:'flex-end',alignItems:'center',height:50,top:-12 ,width:'100%' }}>
                                        <TouchableOpacity  style={{ borderRadius: 100,  }} 
                                          onPress={() =>{ 
                                            setisFilterCollapsed(!isFilterCollapsed);
                                          }} >
                                          <View style={{ flexDirection:'row'}}>
                                                <Text  style={{ fontFamily:'Roboto-Bold',fontSize:17,fontWeight:'600', textAlign:'center',color:'black' }}>Ver todo</Text>
                                                <CustomIcon name= {isFilterCollapsed ? 'ic_round-keyboard-arrow-down': 'ic_round-keyboard-arrow-up'} 
                                                size={24} color='black' style={{right:-10,top:Platform.OS=='ios'? -2 :0,}} ></CustomIcon>
                                              </View>
                                        </TouchableOpacity>
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
