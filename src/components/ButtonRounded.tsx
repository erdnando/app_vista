import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../hooks/useLogin';
import { GeneralContext } from '../state/GeneralProvider';
import CustomIcon from '../theme/CustomIcon';
import { colores } from '../theme/appTheme';


interface Props{
  label:string,
  onPress: () => void,
}

export const ButtonRounded = ( { label,onPress }: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
    const { email,password } = useContext( GeneralContext )
    const { onChangePassword, setPassVisible, passwordVisible } = useLogin(); 

    
    return (
          <View style={{  alignItems:'center',height:40}}>
            <TouchableOpacity disabled={(email === '' && password === '') ? true : false} style={{ borderRadius: 100, backgroundColor:(email !== '' && password !== '') ? colores.primary : '#BCC1CB', height:48, justifyContent:'center',  }} 
              onPress= {onPress}>
               <Text style={{ width:290,  textAlign:'center',color:(email !== '' && password !== '') ? 'black' : 'white'}}>{label}</Text>
            </TouchableOpacity>
          </View>
    )
}
