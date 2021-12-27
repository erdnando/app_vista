import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../hooks/useLogin';
import { GeneralContext } from '../state/GeneralProvider';
import { colores } from '../theme/appTheme';
import CustomIcon from '../theme/CustomIcon';


interface Props{
  modo:string,
  label:string,
  iconLeft:string,
  iconRight:string,
  iconSee:string
  IconHide:string
}

export const InputPassword = ( { modo, label, iconLeft ,iconRight, iconSee, IconHide}: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
    const { setPassword,password } = useContext( GeneralContext )
    const { onChangePassword, setPassVisible, passwordVisible } = useLogin(); 

    
    return (
      <View style={{flexDirection: 'row',left:-8 }}>
      <View style={{flexDirection:'column', }}>
          <Text style={{ left:52,top:5, color:password===''?'transparent':colorIcono,  }}>{label}</Text>
          <CustomIcon  name={iconLeft} size={24} color={password===''?'black':colorIcono }  style={{left:58, top:5,}} ></CustomIcon>
      </View>
     
          <TextInput
              style={{
                  height: 40,
                  width:'78%',
                  margin: 12,
                  paddingLeft:45,
                  borderWidth: 1,
                  borderLeftWidth:0,
                  borderRightWidth:0,
                  borderTopWidth:0,
                  borderColor:password===''?'black':colorIcono
              }}
              secureTextEntry={passwordVisible ? true : false}
              onChangeText={ onChangePassword }
              placeholder={label}
              // keyboardType= {!passwordVisible ? 'default' : 'visible-password'}
              autoCapitalize='none'
              autoCorrect = {false}
              maxLength={27}
              value={password}
          />
          <TouchableOpacity style={{right:45, top:20}} onPress={() =>{ if(password!='')setPassVisible(!passwordVisible)  }}>
              <Text>
                  <CustomIcon  name={password==='' ? iconRight : (passwordVisible ? IconHide : iconSee) } size={24} color= {password===''? colorIcono : 'black' }  ></CustomIcon>
              </Text>
          </TouchableOpacity>
     
  </View>
    )
}
