
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ResultadoParecer } from '../../components/home_chart/ResultadoParecer';
import { gstyles } from '../../theme/appTheme';
import { Participaciones } from '../../components/reportes/Participaciones';

export const RelatorioScreen = () => {
    const { top } = useSafeAreaInsets();
    
    return (<View style={ { marginTop: top, flex:1,}}>
        
            {/* Charts https://gifted-charts.web.app/barchart*/}
            <Participaciones></Participaciones>
            
        </View>


    )
}
