import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { gstyles } from '../../theme/appTheme';

export const ChangePasswordScreen = () => {
    const { top } = useSafeAreaInsets();
    
    return (
        <View style={ { ...gstyles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
            <Text style={{fontSize:60, alignContent:'center',  justifyContent:'center', paddingBottom:250}}>cambio contraseña</Text>
        </View>
    )
}
