import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';

export const ParecerScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { flags} = useContext(GeneralContext);
    
    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }
    
    return (
        <View style={ { ...gstyles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
            <Text style={{fontSize:60, alignContent:'center',  justifyContent:'center', paddingBottom:250}}>parecer</Text>
        </View>
    )
}
