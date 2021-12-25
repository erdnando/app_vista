
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme';

export const RelatorioScreen = () => {
    const { top } = useSafeAreaInsets();
    
    return (
        <View style={ { ...styles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
            <Text style={{fontSize:60, alignContent:'center',  justifyContent:'center', paddingBottom:250}}>relatorio</Text>
        </View>
    )
}
