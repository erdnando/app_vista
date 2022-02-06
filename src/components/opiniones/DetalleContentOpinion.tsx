
import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { CardParecer } from './CardParecer';
import { CardParecerRealizados } from './CardParecerRealizados';
import { CardParecerExigencias } from './CardParecerExigencias';
import { CardParecerValores } from './CardParecerValores';
import { Loading } from '../Loading';



export const DetalleContentOpinion = ( ) => {

  const { ids,flags } = useContext(GeneralContext);
                     
  if(flags.isLoadingParecer){
    return <Loading  color='orange'></Loading>
}

  switch (ids.idMenuOpinionSelected) {
    case 1:
      return  <CardParecerExigencias></CardParecerExigencias>   
    case 2:
      return  <CardParecer></CardParecer>    
    case 3:
      return  <CardParecerRealizados></CardParecerRealizados>    
    case 4:
      return  <CardParecerValores></CardParecerValores>
    default:
      return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 
                 <Text>Opcion no valida</Text>
              </View> 
  }
     

             

     
      
   

    
          
}
