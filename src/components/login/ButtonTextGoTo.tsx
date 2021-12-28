import React, { useContext } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores } from '../../theme/appTheme';


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
      // <View style={{justifyContent:'flex-end', bottom:bottom}}>
      //   <Button color={colores.primary}   title={label}  onPress={onPress}  ></Button>
      // </View>
      <View style={{justifyContent:'flex-end',alignItems:'center', bottom:bottom, }}>
      <TouchableOpacity  style={{ borderRadius: 100,  }} 
        onPress= {onPress}>
         <Text  style={{ fontFamily:'Roboto-Regular',width:290,fontSize:18,fontWeight:'600', textAlign:'center',color:colores.primary }}>{label}</Text>
      </TouchableOpacity>
    </View>
    )
}
