import React, { useContext } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../hooks/useLogin';
import { GeneralContext } from '../state/GeneralProvider';
import CustomIcon from '../theme/CustomIcon';
import { colores } from '../theme/appTheme';
import { StackNavigationProp } from '@react-navigation/stack';


interface Props{
  label:string,
  bottom:number,
  onPress: () => void,
}

export const ButtonForgotPassword = ( { label,onPress,bottom }: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
    const { email,password } = useContext( GeneralContext )
    const { onChangePassword, setPassVisible, passwordVisible } = useLogin(); 

    
    return (
      <View style={{justifyContent:'flex-end', bottom:bottom}}>
        <Button color={colores.primary}   title={label}  onPress={onPress}  ></Button>
      </View>
    )
}
