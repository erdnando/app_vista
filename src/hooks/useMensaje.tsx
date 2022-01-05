import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';


export const useMensaje =  () => {
    const { setMenjase} = useContext( GeneralContext );

   
        const onChangeMensaje = async (mensaje:string) =>{
            setMenjase(mensaje);
        }

       
        //exposed objets 
        return {
            onChangeMensaje
        }
}
