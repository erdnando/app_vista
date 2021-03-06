import React, { useContext } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DatosContacto } from '../../components/contactanos/DatosContacto';
import { EnviarAsunto } from '../../components/contactanos/EnviarAsunto';
import { ResultadoParecer } from '../../components/home_chart/ResultadoParecer';
import { Loading } from '../../components/Loading';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { ResumenOportunidades } from '../../components/resumen/ResumenOportunidades';
import { Search } from '../../components/search/Search';
import { Spacer } from '../../components/Spacer';
import { GeneralContext } from '../../state/GeneralProvider';


export const ContactoScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { flags} = useContext(GeneralContext);
    
    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }

    if(flags.isLoadingContacto){
        return <Loading loadingSize={40} color='orange'></Loading>
    }
    
    return (
          <View style={ {  flex:1,}}>
             
                <ImageBackground style={styles.background}  resizeMode='cover' source={require('../../assets/Background.png')}>
                <View style={{flex:1, alignItems:'center',marginTop: top}}>
                    
                    <Spacer height={25}></Spacer>
                    
                     {/* datos contacto */}
                     <DatosContacto></DatosContacto>
                 
                    
                    <Spacer height={20}></Spacer>
                   {/* asunto envio */}
                   <EnviarAsunto></EnviarAsunto>
                  

                </View>
            </ImageBackground>
          
        </View>
        
    
    )
}



const styles = StyleSheet.create({
    background:{
        flex:1, justifyContent:'center',
    },
});