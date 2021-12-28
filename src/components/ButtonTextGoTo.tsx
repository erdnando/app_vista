import React, { useContext } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../hooks/useLogin';
import { GeneralContext } from '../state/GeneralProvider';
import { colores } from '../theme/appTheme';


interface Props{
  label:string,
  bottom:number,
  onPress: () => void,
}

export const ButtonTextGoTo = ( { label,onPress,bottom }: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
    const { email,password } = useContext( GeneralContext )
    const { onChangePassword, } = useLogin(); 

    
    return (
      <View style={{justifyContent:'flex-end', bottom:bottom}}>
        <Button color={colores.primary}   title={label}  onPress={onPress}  ></Button>
      </View>
    )
}
