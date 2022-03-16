import React, { useContext } from 'react'
import { View, FlatList, Button } from 'react-native';
import { Spacer } from '../../components/Spacer';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { gstyles } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { WithoutItems } from '../../components/search/WithoutItems';
import { ListJudgeResourceByOpportunityIdAux } from '../../models/response/ListJudgeResourceByOpportunityIdAux';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import CustomIcon from '../../theme/CustomIcon';
import { DocumentosAgendaType } from '../../models/response/DocumentosAgendaType';

export const DocumentosAgenda = () => {

        const { agenda } = useContext( GeneralContext );

        function renderUpdateItem({ item }: { item: DocumentosAgendaType }) {
    
            { /* alerta */ }
            return (<View style={{
                height: 150, flexDirection: 'row', width: '98%',
                backgroundColor: '#EDF0F5', borderRadius: 7, padding: 5, elevation: 6,
                shadowColor: "black", shadowOpacity: 0.3, shadowOffset: {
                    height: 4, width: 1
                }
            }}>
    
                <View style={{ flexDirection: 'column', margin: 6, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <TextOportunidadIcono icono='clarity_tasks-solid' label='Tipo do documento: ' valor={' '+item.tipoDocumento} size={15}></TextOportunidadIcono>
                    <TextOportunidadIcono icono='ic_round-warning' label='Descricao: ' valor={item.descricao==null ? '' : item.descricao} size={15}></TextOportunidadIcono>
                    <TextOportunidadIcono icono='bi_calendar-week' label='Vencimento: ' valor={item.vencido==null ? '': item.vencido} size={15}></TextOportunidadIcono>
                    <TextOportunidadIcono icono='clarity_tasks-solid' label='Arquivo: ' valor={item.arquivo==null ? '': item.arquivo} size={15}></TextOportunidadIcono>
                </View>
            </View>
            );
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
            
                 {agenda.documentos.length==0 && <WithoutItems label='Sem documentos'></WithoutItems>}
                    <FlatList data={agenda.documentos} 
                        scrollEnabled={true}
                        renderItem={ ({ item,index }) =>renderUpdateItem({ item }) } 
                        //keyExtractor={(item) => item.id} 
                        ItemSeparatorComponent={ () => renderSeparator()}
                    />
                </View>
            </View>
        )
    }
    