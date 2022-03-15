import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { GeneralContext } from '../../state/GeneralProvider';
import { Loading } from '../../components/Loading';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { Calendario } from '../../components/agenda/Calendario';
import { OportunidadesDia } from '../../components/agenda/OportunidadesDia';
import { DetalleAgenda } from '../../components/agenda/DetalleAgenda';
import { ModalFiltros } from '../../components/agenda/ModalFiltros';
import { ModalAgendaDetalle } from '../../components/agenda/ModalAgendaDetalle';

export const AgendaScreen = () => {

    const { top } = useSafeAreaInsets();
    //call global state
    const { flags,ids,agenda} = useContext(GeneralContext);


     if(flags?.resultadosAgendaVisible){
        return <SafeAreaProvider>
                <ModalAgendaDetalle iconClose='ic_round-close' color='black' label={`Resumo da Oportunidade ${ agenda.selectedOportunidadId }`}></ModalAgendaDetalle>
            </SafeAreaProvider> 
     }

    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }

    if(flags.verDetalleAgenda){
        return <DetalleAgenda></DetalleAgenda>
    }

    if(flags.isLoadingAgenda){
        return <Loading color='orange'></Loading>
    }
    
        return(
        <View style={ {  flexGrow:1,marginTop:top,marginBottom:20,}}>
            <Calendario></Calendario>
            <OportunidadesDia></OportunidadesDia>
            <View><ModalFiltros></ModalFiltros></View>
           
           
        </View>
            
        )
}

const styles = StyleSheet.create({
    background:{
        flex:1, justifyContent:'center',
    },
});