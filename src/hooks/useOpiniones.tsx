import {  useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
// import { GeneralContext } from '../state/GeneralProvider';



export const useOpiniones =  () => {
 
    //const { mensaje,setMensaje,} = useContext( GeneralContext );
    const  [campo, setCampo]  = useState(''); 

        const onChangeMensaje = (msg:string) =>{
            // const payload= mensaje;
            // payload.mensaje =msg;
            // setMensaje(payload)

        }

        
       
        //exposed objets 
        return {
            setCampo, campo

        }
}
