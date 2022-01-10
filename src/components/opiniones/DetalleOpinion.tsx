import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';
import { useSearchOpinion } from '../../hooks/useSearchOpinion';




export const DetalleOpinion = ( ) => {

  // let colorIcono = colores.primary;

    //invoke global state
    // const { ids } = useContext( GeneralContext )
    // const {  } = useSearchOpinion(); 

    
    return (
      <View style={{marginTop:50 }}>
            <Text>Detalle opinion</Text>
         
     
         
     
      </View>
    )
}
