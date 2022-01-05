import {  useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
// import { GeneralContext } from '../state/GeneralProvider';



export const useMensaje =  () => {
 
    const { mensaje,setMensaje,usuario} = useContext( GeneralContext );
 

        const onChangeMensaje = (msg:string) =>{
            const payload= mensaje;
            payload.mensaje =msg;
            setMensaje(payload)
                 //setMenjase(mensaje);
                 // console.log(asuntoMensaje)
        }

        
       
        //exposed objets 
        return {
//            onChangeMensaje,mensaje,asuntoMensaje, setAsuntoMensaje,setMenjase
            onChangeMensaje,setMensaje, mensaje,usuario

        }
}
