import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../hooks/useLogin';
import { GeneralContext } from '../state/GeneralProvider';
import CustomIcon from '../theme/CustomIcon';
import { colores } from '../theme/appTheme';


interface Props{
  modo:string,
  label:string,
  iconLeft:string,
  iconRight:string
}

export const InputEmail = ( { modo, label, iconLeft ,iconRight}: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
    const { setEmail,email,setIsAlertLoginVisible } = useContext( GeneralContext )
    const { onChangeEmail } = useLogin(); 

    
    return (
      <View style={{flexDirection: 'row',left:-8 }}>
      <View style={{flexDirection:'column', }}>
          <Text style={{ left:52,top:5, color:email===''?'transparent':colorIcono,  }}>{label}</Text>
          <CustomIcon  name={iconLeft} size={24} color={email===''?'black':colorIcono }  style={{left:58, top:5,}} ></CustomIcon>
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
                  borderColor:email===''?'black':colorIcono
              }}
              onChangeText={ onChangeEmail }
              placeholder={label}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect = {false}
              maxLength={27}
              value={email}
          />
          <TouchableOpacity style={{right:45, top:20}} onPress={() =>{ setEmail('');setIsAlertLoginVisible(false);  }}>
              <Text>
                  <CustomIcon  name={iconRight} size={24} color='#000000'  ></CustomIcon>
              </Text>
          </TouchableOpacity>
     
  </View>
    )
}
