import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { Loading } from '../../components/Loading';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { Calendario } from '../../components/agenda/Calendario';
import { OportunidadesDia } from '../../components/agenda/OportunidadesDia';

export const AgendaScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { flags} = useContext(GeneralContext);
    //call service to get data
    const { isLoading } = useMovies();

    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }
    if(isLoading){
        return <Loading color='green'></Loading>
    }
    
        return(
        <View style={ {  flexGrow:1,marginTop:top,marginBottom:20,}}>
            <Calendario></Calendario>
            <OportunidadesDia></OportunidadesDia>
        </View>
            
        )
}

const styles = StyleSheet.create({
    background:{
        flex:1, justifyContent:'center',
    },
});