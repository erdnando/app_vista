import React, { useContext } from 'react'
import { FlatList, Text, View } from 'react-native';
import { Loading } from '../../components/Loading';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { WithoutItems } from '../../components/search/WithoutItems';
import { Spacer } from '../../components/Spacer';
import { useSearch } from '../../hooks/useSearch';
import { OpportunityCustomListOpinionsByIdAux } from '../../models/response/OpportunityCustomListOpinionsByIdAux';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';

export const ParecerScreenSearch = () => {

    const { search,flags } = useContext( GeneralContext );

    const renderUpdateItem = (item:OpportunityCustomListOpinionsByIdAux) =>{

        {/* alerta */}
        return ( <View style={{height:115, flexDirection:'row',   
                        backgroundColor: '#EDF0F5', borderRadius:7,padding:5,elevation:6,
                        shadowColor: "black", shadowOpacity: 0.3,shadowOffset: {
                        height: 4, width: 1
                    }}}>
    
                    <View style={{ flexDirection:'column', margin:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>
                        <TextOportunidadIcono icono='gridicons_user' label='Responsable:  ' valor={item.responsable} size={15} ></TextOportunidadIcono>
                        <TextOportunidadIcono icono='ic_round-pin' label='Tipo:  ' valor={item.tipo} size={15} ></TextOportunidadIcono>
                        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between' }}>
                            <TextOportunidadIcono icono='icomoon-free_hammer2' label='Parecer:  ' valor={item.parecer} size={15} ></TextOportunidadIcono>
                            <View style={{width:3,}}></View>
                            <TextOportunidadIcono icono='bi_calendar-week' label='Date:  ' valor={item.fecha} size={15} ></TextOportunidadIcono>
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

    if(flags.isLoadingSearch){
        return <Loading color='orange'></Loading>       
      }
      
    return (
        <View style={gstyles.globalTabView}>
             <Spacer height={10}></Spacer>
             <View style={{flex:1,width:'100%',justifyContent:'center',marginHorizontal:0,left:2 }}>
        
               {search.parecer.length==0 && <WithoutItems label='Sem pareceres da oportunidade'></WithoutItems>}

                <FlatList data={search.parecer} 
                    scrollEnabled={true}
                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                    keyExtractor={(item,index) => item.id+index.toString()} 
                    ItemSeparatorComponent={ () => renderSeparator()}
                />
            </View>
        </View>
    )
}
