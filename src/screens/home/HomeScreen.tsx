import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { styles } from '../../theme/appTheme';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { userName } = useContext(GeneralContext);
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
    return (
            <View style={ { ...styles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
                <Text style={{fontSize:60, alignContent:'center',  justifyContent:'center', paddingBottom:250}}>home</Text>
                <Text>
                { userName }
                </Text>
            </View>
    )
}
