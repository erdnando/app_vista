
import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { CardParecer } from './CardParecer';
import { CardParecerRealizados } from './CardParecerRealizados';
import { CardParecerExigencias } from './CardParecerExigencias';
import { CardParecerValores } from './CardParecerValores';



export const DetalleContentOpinion = ( ) => {

  const { ids } = useContext(GeneralContext);
                     

  switch (ids.idMenuOpinionSelected) {
    case 1:
      return  <CardParecer></CardParecer>
    case 2:
      return  <CardParecerRealizados></CardParecerRealizados>
    case 3:
      return  <CardParecerValores></CardParecerValores>
    case 4:
      return  <CardParecerExigencias></CardParecerExigencias>
    default:
      return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 
                 <Text>Opcion no valida</Text>
              </View> 
  }
     

             

     
      
   

    
          
}
