import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { email ,tipoUsuario} = useContext(GeneralContext);
    //call service to get data
    const { peliculasEnCine, isLoading } = useMovies();

    //generate action without and event
    // useEffect(() => {
    // setUserName(route.params.nombre);
    //  }, []);
  


    if(isLoading){
        return ( 
            <View style={{ flex:1, justifyContent:'center',alignContent:'center' }}>
                <ActivityIndicator color='red' size={80}></ActivityIndicator>
            </View>                
            )
    }

    //render view after getting data
    if(tipoUsuario === 1){//terciario
       return ( <View style={ { ...gstyles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
             
                <Text>Terciario</Text>
            </View>
            )
     }else if(tipoUsuario === 2) {//colaborador
        return (<View style={ { ...gstyles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
              <Text>Colaborador</Text>
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
