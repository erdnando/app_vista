import React, { useContext } from 'react';
import { View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { InputContactanos } from './InputContactanos';
import { InputMensaje } from './InputMensaje';
import { SelectAsunto } from './SelectAsunto';
import { Spacer } from '../Spacer';
import { ButtonRounded } from './ButtonRounded';
import { useMensaje } from '../../hooks/useMensaje';



export const EnviarAsunto = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const { usuario } = useContext( GeneralContext )
 const { mensaje, setMensaje } = useMensaje(); 
 
  return (
    <View style={{height:280, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', borderWidth: 0,
            backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: { height: 1, width: 1 }}}>

              <Spacer height={10}></Spacer>
              <SelectAsunto placeholder='' campo={usuario.email}></SelectAsunto>
              <Spacer height={10}></Spacer>
              <InputMensaje placeholder='Mensagem' longitud={mensaje.mensaje.length}></InputMensaje>
              <Spacer height={30}></Spacer>
              <ButtonRounded label={'ENVIAR'} onPress={function (): void {
                  console.log(mensaje.asunto)
                  console.log(mensaje.mensaje)
                } } ></ButtonRounded>
       

        </View>
        )
      
}
