import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import { tipoUsuario } from '../models/enums';


export const useRelatorios =  () => {

    const { setFiltroCliente } = useContext( GeneralContext );

        const onChangeFiltroCliente = async (filtroCliente:string) =>{
          setFiltroCliente(filtroCliente);
        }

        
        
        
        //exposed objets 
        return {
            onChangeFiltroCliente
        }
}
