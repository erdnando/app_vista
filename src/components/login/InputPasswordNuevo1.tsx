import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';


interface Props{
  modo:string,
  label:string,
  placeHolder:string,
  iconLeft:string,
  iconRight:string,
  iconSee:string,
  IconHide:string,
  campo:string,
  width?:string,
}

export const InputPasswordNuevo1 = ( { modo, label,placeHolder, iconLeft ,iconRight, iconSee, IconHide,campo,width='75%'}: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
   // const { usuario } = useContext( GeneralContext )
    const { onChangePasswordN1, setPasswordVisibleN1, passwordVisibleN1 } = useLogin(); 

    
    return (
      <View style={{flexDirection: 'row',left:-8 }}>
          <View style={{flexDirection:'column', }}>
              <Text style={{ left:52,top:5, color:campo===''?'transparent':colorIcono,  }}>{label}</Text>
              <CustomIcon  name={iconLeft} size={24} color={campo===''?'black':colorIcono }  style={{left:58, top:5,}} ></CustomIcon>
          </View>
     
          <TextInput
              style={{
                fontFamily:'Roboto-Regular',
                  height: 40,
                  width:width,
                  margin: 12,
                  paddingLeft:45,
                  borderWidth: 1,
                  borderLeftWidth:0,
                  borderRightWidth:0,
                  borderTopWidth:0,
                  borderColor:campo===''?'black':colorIcono
              }}
              secureTextEntry={passwordVisibleN1 ? true : false}
              onChangeText={ onChangePasswordN1 }
              placeholder={placeHolder}
              // keyboardType= {!passwordVisible ? 'default' : 'visible-password'}
              autoCapitalize='none'
              autoCorrect = {false}
              maxLength={27}
              value={ campo }
          />
          <TouchableOpacity style={{right:45, top:20}} onPress={() =>{ if(campo!='')setPasswordVisibleN1(!passwordVisibleN1)  }}>
              <Text>
                  <CustomIcon  name={campo==='' ? iconRight : (passwordVisibleN1 ? IconHide : iconSee) } size={24} color= {campo===''? colorIcono : 'black' }  ></CustomIcon>
              </Text>
          </TouchableOpacity>
     
  </View>
    )
}
