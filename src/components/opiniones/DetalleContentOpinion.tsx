
import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { CardParecer } from './CardParecer';
import { CardParecerRealizados } from './CardParecerRealizados';
import { CardParecerExigencias } from './CardParecerExigencias';
import {CardParecerExigenciasTerciario} from './CardParecerExigenciasTerciario';
import { CardParecerValores } from './CardParecerValores';
import { Loading } from '../Loading';
import { TipoUsuario } from '../../models/Usuario';



export const DetalleContentOpinion = ( ) => {

  const { ids,flags,usuario } = useContext(GeneralContext);
                     
  if(flags.isLoadingParecer){
    return <Loading  color='orange'></Loading>
}

  switch (ids.idMenuOpinionSelected) {
    case 1:
      return   usuario.tipo==TipoUsuario.COLABORADOR ? <CardParecerExigencias/>  : <CardParecerExigenciasTerciario/>
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
