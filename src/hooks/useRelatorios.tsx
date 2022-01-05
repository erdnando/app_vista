import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
// import { tipoUsuario } from '../models/enums';


export const useRelatorios =  () => {

    const { relatorio,setRelatorio } = useContext( GeneralContext );

        const onChangeFiltroCliente = async (filtroCliente:string) =>{

          // setFiltroCliente(filtroCliente);
          const payload= relatorio;
            payload.filtroCliente=filtroCliente;
            setRelatorio(payload);
        }

        
        
        
        //exposed objets 
        return {
            onChangeFiltroCliente
        }
}
