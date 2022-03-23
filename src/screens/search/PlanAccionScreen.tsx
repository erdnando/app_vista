import React, { useContext } from 'react'
import { FlatList, Platform, Text, View } from 'react-native';
import { Loading } from '../../components/Loading';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { WithoutItems } from '../../components/search/WithoutItems';
import { Spacer } from '../../components/Spacer';
import { ListAllTaskByOpportunityIdAux } from '../../models/response/ListAllTaskByOpportunityIdAux';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';

export const PlanAccionScreen = () => {

    const { search,flags } = useContext( GeneralContext );

    function renderUpdateItem(item: ListAllTaskByOpportunityIdAux) {

        { /* alerta */ }
        return (<View style={{
            height: 150, flexDirection: 'row', width: '98%',
            backgroundColor: '#EDF0F5', borderRadius: 7, padding: 5, elevation: 6,
            shadowColor: "black", shadowOpacity: 0.3, shadowOffset: {
                height: 4, width: 1
            }
        }}>

            <View style={{ flexDirection: 'column', margin: 6, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <TextOportunidadIcono icono='clarity_tasks-solid' label='Tarifa:  ' valor={item.tarifa} size={15}></TextOportunidadIcono>
                <TextOportunidadIcono icono='gridicons_user' label='Responsable:  ' valor={item.responsable} size={15}></TextOportunidadIcono>
                <TextOportunidadIcono icono='bi_calendar-week' label='Fecha planeada:  ' valor={item.fechaPlaneada} size={15}></TextOportunidadIcono>
                <TextOportunidadIcono icono='bi_calendar-week' label='Fecha realizada:  ' valor={item.fechaPlaneada2} size={15}></TextOportunidadIcono>
            </View>
        </View>
        );
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
             <View style={{flex:1,width:'100%',justifyContent:'center',marginHorizontal:0,left:4 }}>
        
             {search.planAccion.length==0 && <WithoutItems label='Sem plano de acao'></WithoutItems>}
                <FlatList data={search.planAccion} 
                    scrollEnabled={true}
                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                    //keyExtractor={(item) => item.id} 
                    ItemSeparatorComponent={ () => renderSeparator()}
                />
            </View>
        </View>
    )
}
