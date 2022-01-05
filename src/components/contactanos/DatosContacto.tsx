import React, { useContext } from 'react';
import {  Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRelatorios } from '../../hooks/useRelatorios';
import { colores } from '../../theme/appTheme';
import { Spacer } from '../Spacer';
import { GeneralContext } from '../../state/GeneralProvider';
import { Resumen } from '../resumen/Resumen';
import CustomIcon from '../../theme/CustomIcon';
import { useLogin } from '../../hooks/useLogin';
import { InputContactanos } from './InputContactanos';



export const DatosContacto = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const { email,whatsapp,telefono,direccion } = useContext( GeneralContext )

 
  return (
    <View style={{height:280, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', borderWidth: 0,
            backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: { height: 1, width: 1 }}}>


              <InputContactanos label='E-mail' iconLeft='ic_outline-email' campo={email} multiline={false}></InputContactanos>
              <InputContactanos label='Whatsapp' iconLeft='mdi_whatsapp' campo={whatsapp} multiline={false}></InputContactanos>
              <InputContactanos label='Telefone' iconLeft='bx_bxs-phone' campo={telefono} multiline={false}></InputContactanos>
              <InputContactanos label='Endereco' iconLeft='ic_baseline-place' campo={direccion} multiline={true}></InputContactanos>

        </View>
        )
      
}
