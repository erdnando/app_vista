import React, { useContext } from 'react'
import { ImageBackground, Modal, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles, colores } from '../../theme/appTheme';
import { Loading } from '../../components/Loading';
import { Spacer } from '../../components/Spacer';
import { Search } from '../../components/search/Search';
import { ResumenOportunidades } from '../../components/resumen/ResumenOportunidades';
import { HeaderActualizaciones } from '../../components/ultimasActualizaciones/HeaderActualizaciones';
import { ListActualizaciones } from '../../components/ultimasActualizaciones/ListActualizaciones';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    //const windowHeight = Dimensions.get('window').height;
    //call global state
    const { tipoUsuario} = useContext(GeneralContext);
    //call service to get data
    const { isLoading } = useMovies();
//https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/243#issuecomment-644091552
//https://github.com/osdnk/react-native-reanimated-bottom-sheet
  

    if(isLoading){
        return <Loading color='green'></Loading>
    }
    //render view after getting data
    if(tipoUsuario === 1){//terciario
       return ( 
            <View style={ { ...gstyles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
             
                <Text>Terciario</Text>
            </View>
            )
     }else if(tipoUsuario === 2) {//colaborador


       


        return (
            
                <View style={ {  flex:1,}}>
                      <ImageBackground style={styles.background}  resizeMode='cover' source={require('../../assets/Background.png')}>
                       <View style={{flex:1, alignItems:'center',marginTop: top}}>
                           
                            <Spacer height={15}></Spacer>
                            {/* buscador */}
                            <Search   label='Cod oportunidade' iconClose='ic_round-close' iconSearch='gg_search'></Search>
                            <Spacer height={8}></Spacer>
                           
                            {/* ultimas actualizaciones */}
                            <View style={{flex:1, flexDirection:'column',backgroundColor:'#BCC1CB', position:'absolute', bottom:0, 
                                           width:'100%', height:Platform.OS=='ios' ? '73%': '78%',  alignItems:'center',}}>
                                <HeaderActualizaciones label='Ultimas actualizaciones'></HeaderActualizaciones>
                                <View style={{height:Platform.OS=='ios' ? '63%': '72%' }}>
                                    <ListActualizaciones></ListActualizaciones>
                                </View>
                               
                            </View>

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