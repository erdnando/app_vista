import React, { useContext } from 'react';
import { View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { InputMensaje } from './InputMensaje';
import { Spacer } from '../Spacer';
import { ButtonRounded } from './ButtonRounded';
import { useMensaje } from '../../hooks/useMensaje';
import { Select } from '../Select';



export const EnviarAsunto = () => {


  let colorIcono = colores.primary;
 //invoke global state
 //const { usuario } = useContext( GeneralContext )
 const { mensaje, setMensaje, sendMessage } = useMensaje(); 

 const items=[  
              { value: "1", label: "Duvidas sobre servico" },
              { value: "2", label: "Onde estao localizados" },
              { value: "3", label: "Quero mais informações" },
              { value: "4", label: "Sugestão" },
              ];
 
  return (
    <View style={{height:280, flexDirection:'column', width:'90%', left:-1, justifyContent:'space-between', borderWidth: 0,
            backgroundColor:'white', borderRadius:7,padding:5,elevation:6,alignContent:'space-between',alignItems:'flex-start',
            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: { height: 1, width: 1 }}}>

              <Spacer height={10}></Spacer>
              <Select placeholder='Assunto' campo={mensaje.asunto} 
                 items={items}
                 onValueChange={function (value: any, index: number): void {
                    console.log(value)
                    
                    const payload= mensaje;
                    payload.asunto=value;
                    setMensaje(payload) 
                }} 
              />
             
              <Spacer height={0}></Spacer>
              <InputMensaje placeholder='Mensagem' longitud={mensaje.mensaje.length}></InputMensaje>
           
              <View style={{flex:1,width:'100%'}}></View>
              <ButtonRounded label={'ENVIAR'} onPress={function (): void {
                  // console.log(mensaje.asunto)
                  // console.log(mensaje.mensaje)
                  sendMessage();
                } } ></ButtonRounded>
                <Spacer height={10}></Spacer>
       

        </View>
        )
      
}
