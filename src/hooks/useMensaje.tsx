import {  useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
// import { GeneralContext } from '../state/GeneralProvider';



export const useMensaje =  () => {
    const { mensaje, setMenjase,asuntoMensaje, setAsuntoMensaje} = useContext( GeneralContext );
 

        const onChangeMensaje = (mensaje:string) =>{
                 setMenjase(mensaje);
                  console.log(asuntoMensaje)
        }

        
       
        //exposed objets 
        return {
            onChangeMensaje,mensaje,asuntoMensaje, setAsuntoMensaje,setMenjase
        }
}
