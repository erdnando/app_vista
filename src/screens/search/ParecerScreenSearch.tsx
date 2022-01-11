import React from 'react'
import { FlatList, View } from 'react-native';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { Spacer } from '../../components/Spacer';
import { gstyles } from '../../theme/appTheme';

export const ParecerScreenSearch = () => {

    interface Oportunidades{
        id:number,
        responsable:string,
        tipo:string,
        parecer:string,
        fecha:string
    }

    const Data:Oportunidades[] = [
        {
          id:1,
          responsable:'Lorem ipsum dolor',
          tipo:'Lorem ipsum dolor',
          parecer:'Go',
          fecha:'00/00/00 00:00'
      },{
        id:2,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },{
        id:3,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },{
        id:4,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },{
        id:5,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },{
        id:6,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },{
        id:7,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },{
        id:8,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },{
        id:9,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },{
        id:10,
        responsable:'Lorem ipsum dolor',
        tipo:'Lorem ipsum dolor',
        parecer:'Go',
        fecha:'00/00/00 00:00'
    },
    ]

    const renderUpdateItem = (item:Oportunidades) =>{

        {/* alerta */}
        return ( <View style={{height:115, flexDirection:'row',   
                        backgroundColor: '#EDF0F5', borderRadius:7,padding:5,elevation:6,
                        shadowColor: "black", shadowOpacity: 0.3,shadowOffset: {
                        height: 4, width: 1
                    }}}>
    
                    <View style={{ flexDirection:'column', margin:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>
                        <TextOportunidadIcono icono='gridicons_user' label='Responsable: ' valor={item.responsable} size={15} ></TextOportunidadIcono>
                        <TextOportunidadIcono icono='ic_round-pin' label='Tipo: ' valor={item.tipo} size={15} ></TextOportunidadIcono>
                        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between' }}>
                            <TextOportunidadIcono icono='icomoon-free_hammer2' label='Parecer' valor={item.parecer} size={15} ></TextOportunidadIcono>
                            <View style={{width:3,}}></View>
                            <TextOportunidadIcono icono='bi_calendar-week' label='Date' valor={item.fecha} size={15} ></TextOportunidadIcono>
                            <View style={{width:3,}}></View>
                        </View>
                    </View>
                </View>
        )
    }
    
    const renderSeparator = () =>{
        return (
           
             <Spacer height={10} ></Spacer>
        )
    }

    return (
        <View style={gstyles.globalTabView}>
             <Spacer height={10}></Spacer>
             <View style={{flex:1,width:'100%',justifyContent:'center',marginHorizontal:0,left:2 }}>
        
                <FlatList data={Data} 
                    scrollEnabled={true}
                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                    keyExtractor={(item) => item.id+item.fecha} 
                    ItemSeparatorComponent={ () => renderSeparator()}
                />
            </View>
        </View>
    )
}
