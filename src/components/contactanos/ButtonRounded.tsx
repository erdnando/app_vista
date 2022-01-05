import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';
import { useMensaje } from '../../hooks/useMensaje';
import { SelectAsunto } from './SelectAsunto';


interface Props{
  label:string,
  onPress: () => void,
}

export const ButtonRounded = ( { label,onPress }: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
   // const { asuntoMensaje,mensaje } = useContext( GeneralContext )
   const { mensaje,setMensaje } = useContext( GeneralContext )

   // const { asuntoMensaje, mensaje } = useMensaje(); 

    const hasData = ((mensaje.asunto === '' || mensaje.asunto === null) || mensaje.mensaje === '');
    return (
          <View style={{ flex:1,width:'100%', flexDirection:'column', alignItems:'center',height:40,  justifyContent:'center', alignContent:'center', }}>
            <TouchableOpacity 
              disabled={ hasData ? true : false} 
              style={{alignSelf:'stretch', marginHorizontal:16,left:-1 , borderRadius: 100, 
              backgroundColor:hasData ? '#BCC1CB' :  colores.primary, 
              height:48, justifyContent:'center',  }} 
                onPress= {onPress}>
                <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: !hasData ? 'black' : 'white'}}>{label}</Text>
            </TouchableOpacity>
          </View>
    )
}
