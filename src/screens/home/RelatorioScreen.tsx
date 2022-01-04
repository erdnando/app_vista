
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { Participaciones } from '../../components/reportes/Participaciones';
import { GeneralContext } from '../../state/GeneralProvider';

export const RelatorioScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { isNotificaciones} = useContext(GeneralContext);

    if(isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }
    
    return (<View style={ { marginTop: top, flex:1,}}>
        
            {/* Charts https://gifted-charts.web.app/barchart*/}
            <Participaciones></Participaciones>
            
        </View>


    )
}
