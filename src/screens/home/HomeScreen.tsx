import React, { useContext, useEffect } from 'react'
import { ImageBackground, Modal, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { Loading } from '../../components/Loading';
import { Spacer } from '../../components/Spacer';
import { Search } from '../../components/search/Search';
import { ResumenOportunidades } from '../../components/resumen/ResumenOportunidades';
import { ResultadoParecer } from '../../components/home_chart/ResultadoParecer';
import { UltimasActualizaciones } from '../../components/ultimasActualizaciones/UltimasActualizaciones';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { usuario,flags} = useContext(GeneralContext);
    //call service to get data
    const { isLoading } = useMovies();
//https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/243#issuecomment-644091552
//https://github.com/osdnk/react-native-reanimated-bottom-sheet
  
    

    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }
    if(isLoading){
        return <Loading color='green'></Loading>
    }
    //render view after getting data
    if(usuario.tipo === 1){//terciario
       return ( 
        <View style={ {  flex:1,}}>
                <ImageBackground style={styles.background}  resizeMode='cover' source={require('../../assets/Background.png')}>
                <View style={{flex:1, alignItems:'center',marginTop: top}}>
                    
                    <Spacer height={15}></Spacer>
                    {/* buscador */}
                    <Search   label='Cod oportunidade' iconClose='ic_round-close' iconSearch='gg_search'></Search>
                    <Spacer height={8}></Spacer>
                    
                    {/* Charts https://gifted-charts.web.app/barchart*/}
                    <ResultadoParecer></ResultadoParecer>
                    
                    {/* Resumen de oportunidades */}
                    <ResumenOportunidades></ResumenOportunidades>

                </View>
            </ImageBackground>
        </View>
            )
     }else if(usuario.tipo === 2) {//colaborador

        return(
        <View style={ {  flex:1,}}>
                <ImageBackground style={styles.background}  resizeMode='cover' source={require('../../assets/Background.png')}>
                <View style={{flex:1, alignItems:'center',marginTop: top}}>
                    
                    <Spacer height={15}></Spacer>
                    {/* buscador */}
                    <Search   label='Cod oportunidade' iconClose='ic_round-close' iconSearch='gg_search'></Search>
                    <Spacer height={8}></Spacer>
                    
                    {/* ultimas actualizaciones */}
                    <UltimasActualizaciones></UltimasActualizaciones>
                    
                    {/* Resumen de oportunidades */}
                    <ResumenOportunidades></ResumenOportunidades>

                </View>
            </ImageBackground>
        </View>
            
             )
     }else{
         return (
             <View>
                 <Text>Sin permisos</Text>
             </View>
         )
     }
   
}


const styles = StyleSheet.create({
    background:{
        flex:1, justifyContent:'center',
    },
});