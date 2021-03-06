import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';


interface Props{
  label:string,
  onPress: () => void,
}

export const ButtonRounded = ( { label,onPress }: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
    const { usuario } = useContext( GeneralContext )
    const { onChangePassword, } = useLogin(); 

    
    return (
          <View style={{ flex:1,flexDirection:'column', alignItems:'center',height:40,  justifyContent:'center', alignContent:'center', }}>
            <TouchableOpacity disabled={(usuario.email === '' || usuario.password === '') ? true : false} 
              style={{alignSelf:'stretch', marginHorizontal:50 , borderRadius: 100, backgroundColor:(usuario.email !== '' && usuario.password !== '') ? colores.primary : '#BCC1CB', 
              height:48, justifyContent:'center',  }} 
                onPress= {onPress}>
                <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color:(usuario.email !== '' && usuario.password !== '') ? 'black' : 'white'}}>{label}</Text>
            </TouchableOpacity>
          </View>
    )
}
