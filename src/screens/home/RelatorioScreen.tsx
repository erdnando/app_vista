
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { Participaciones } from '../../components/reportes/Participaciones';
import { GeneralContext } from '../../state/GeneralProvider';

export const RelatorioScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { flags} = useContext(GeneralContext);

    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }
    
    return (<View style={ { marginTop: top, flex:1,width:'100%'}}>
        
                {/* Charts https://gifted-charts.web.app/barchart*/}
                <Participaciones></Participaciones>
        
        </View>


    )
}
