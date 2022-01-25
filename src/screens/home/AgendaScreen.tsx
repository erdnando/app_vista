import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { Loading } from '../../components/Loading';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { Calendario } from '../../components/agenda/Calendario';
import { OportunidadesDia } from '../../components/agenda/OportunidadesDia';
import { DetalleAgenda } from '../../components/agenda/DetalleAgenda';
import { ModalSearchResultados } from '../../components/search/ModalSearchResultados';
import { ModalFiltros } from '../../components/agenda/ModalFiltros';

export const AgendaScreen = () => {

    const { top } = useSafeAreaInsets();
    //call global state
    const { flags,ids} = useContext(GeneralContext);
    //call service to get data
    const { isLoading } = useMovies();

     if(flags?.resultadosBusquedaVisible){
        return <SafeAreaProvider>
                <ModalSearchResultados iconClose='ic_round-close' color='black' label={`Oportunidade ${ ids.codigoBusqueda }`}></ModalSearchResultados>
            </SafeAreaProvider> 
     }

    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }

    if(flags.verDetalleAgenda){
        return <DetalleAgenda></DetalleAgenda>
    }

    if(isLoading){
        return <Loading color='green'></Loading>
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