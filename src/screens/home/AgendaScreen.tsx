import React, { useContext } from 'react'
import { ImageBackground, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { Loading } from '../../components/Loading';
import { Spacer } from '../../components/Spacer';
import { UltimasActualizaciones } from '../../components/ultimasActualizaciones/UltimasActualizaciones';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { Calendario } from '../../components/agenda/Calendario';
import { OportunidadesDia } from '../../components/agenda/OportunidadesDia';

export const AgendaScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { usuario,flags} = useContext(GeneralContext);
    //call service to get data
    const { isLoading } = useMovies();

    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }
    if(isLoading){
        return <Loading color='green'></Loading>
    }
    //render view after getting data
        return(
        <View style={ {  flexGrow:1}}>
                {/* <ImageBackground style={styles.background}  resizeMode='cover' source={require('../../assets/Background.png')}> */}
                {/* <View style={{flex:1, alignItems:'center',justifyContent:'flex-start',alignContent:'flex-start', marginTop: top}}> */}
                    
                    {/* Resumen de oportunidades */}
                    <View style={{flex:1, marginTop:top}}>
                        <Calendario></Calendario>
                    </View>
                    <View style={{flexGrow:1,bottom:top-35}}>
                        <OportunidadesDia></OportunidadesDia>
                    </View>
                   
                    
                   
                    
                    
                    
                {/* </View> */}
            {/* </ImageBackground> */}
        </View>
            
        )
}


const styles = StyleSheet.create({
    background:{
        flex:1, justifyContent:'center',
    },
});