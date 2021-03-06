import React, { useContext } from 'react';
import {  Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { InputContactanos } from './InputContactanos';



export const DatosContacto = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const {usuario } = useContext( GeneralContext )

 
  return (
    <TouchableWithoutFeedback onPress={ () => { console.log('clicking');Keyboard.dismiss() } }>
    <View style={{height:280, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', borderWidth: 0,
            backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: { height: 1, width: 1 }}}>

              <InputContactanos label='E-mail' iconLeft='ic_outline-email' campo={'contato@sejavista.com.br'} multiline={false}></InputContactanos>
              <InputContactanos label='Whatsapp' iconLeft='mdi_whatsapp' campo={usuario.whatsapp} multiline={false}></InputContactanos>
              <InputContactanos label='Telefone' iconLeft='bx_bxs-phone' campo={usuario.telefono} multiline={false}></InputContactanos>
              <InputContactanos label='Endereco' iconLeft='ic_baseline-place' campo={usuario.direccion} multiline={true}></InputContactanos>

        </View>
        </TouchableWithoutFeedback>
        )
      
}
