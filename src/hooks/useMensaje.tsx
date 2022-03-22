import {  useContext, useState } from 'react';
import Toast from 'react-native-toast-message';
import vistaApi from '../api/vista';
import { GeneralContext } from '../state/GeneralProvider';


export const useMensaje =  () => {
 
    const { mensaje,setMensaje,usuario,flags,setFlags} = useContext( GeneralContext );
    

        const onChangeMensaje = (msg:string) =>{
            const payload= mensaje;
            payload.mensaje =msg;
            setMensaje(payload)
        }

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoadingContacto= valor;
            
            setFlags(payload);
        }

        const sendMessage =async ()=>{

            try {

                floading(true)
                console.log('sendMessage..')
                const resp = await vistaApi.post<any>('/contact/sendEmailContact',{
                    "emailContato": usuario.email,
                    "empresaContato": "app vista",
                    "mensagemContato": mensaje.mensaje,
                    "nomeContato": usuario.email,
                    "telContato": "0000000000"
                }, {
                                    headers:{
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                },
                });

                console.log('sendEmailContact op:::::::::::::::::::::::::::');
                console.log(resp);

                  const payloadx= mensaje;
                  payloadx.mensaje='';
                  payloadx.asunto='';
                  setMensaje(payloadx);
                  Toast.show({type: 'ok',props: {mensaje:'Mensaje enviado!'} });

                floading(false)

            } catch (error) {
                console.log('sendEmailContact error..')
                console.log(error);

                floading(false)

                Toast.show({type: 'ko',props: {mensaje:error.response.data.message} });
               
            }

        }

        
       
        //exposed objets 
        return {
            onChangeMensaje,setMensaje, mensaje,usuario,sendMessage

        }
}
