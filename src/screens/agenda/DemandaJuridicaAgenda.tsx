import React, { useContext } from 'react'
import { FlatList, Platform, Text, View } from 'react-native';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { WithoutItems } from '../../components/search/WithoutItems';
import { Spacer } from '../../components/Spacer';
import { useSearch } from '../../hooks/useSearch';
import { ListJudgeResourceByOpportunityIdAux } from '../../models/response/ListJudgeResourceByOpportunityIdAux';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';

export const DemandaJuridicaAgenda = () => {

    const { search } = useContext( GeneralContext );

    const renderUpdateItem = (item:ListJudgeResourceByOpportunityIdAux) =>{

        {/* alerta */}
        return ( <View style={{height:115, flexDirection:'row', width:'98%',   
                        backgroundColor: '#EDF0F5', borderRadius:7,padding:5,elevation:6,
                        shadowColor: "black", shadowOpacity: 0.3,shadowOffset: {
                        height: 4, width: 1
                    }}}>
    
                    <View style={{ flexDirection:'column', margin:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>
                        <TextOportunidadIcono icono='clarity_tasks-solid' label='Procedimiento: ' valor={item.procedimiento} size={15} ></TextOportunidadIcono>
                        <TextOportunidadIcono icono='bi_calendar-week' label='Feha de protocolo: ' valor={item.fechaProtocolo} size={15} ></TextOportunidadIcono>
                        <TextOportunidadIcono icono='icomoon-free_hammer2' label='Resultado: ' valor={item.resultado} size={15} ></TextOportunidadIcono>
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
             <View style={{flex:1,width:'100%',justifyContent:'center',marginHorizontal:0,left:4 }}>
        
             {search.demandaJuridica.length==0 && <WithoutItems label='Sem demandas juridica'></WithoutItems>}

                <FlatList data={search.demandaJuridica} 
                    scrollEnabled={true}
                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                    //keyExtractor={(item) => item.id} 
                    ItemSeparatorComponent={ () => renderSeparator()}
                />
            </View>
        </View>
    )
}
