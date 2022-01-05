import React, { useContext } from 'react';
import { View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { InputContactanos } from './InputContactanos';
import { InputMensaje } from './InputMensaje';
import { SelectAsunto } from './SelectAsunto';



export const EnviarAsunto = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const { mensaje,email } = useContext( GeneralContext )

 
  return (
    <View style={{height:170, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', borderWidth: 0,
            backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: { height: 1, width: 1 }}}>


              <SelectAsunto placeholder='' campo={email}></SelectAsunto>
              <InputMensaje placeholder='Mensagem' campo={mensaje}></InputMensaje>
              
       

        </View>
        )
      
}
