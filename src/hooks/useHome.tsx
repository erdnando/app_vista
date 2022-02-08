import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import { GraphMotiveGoNoGo } from '../models/response/GraphMotiveGoNoGo';



export const useHome =  () => {
   

        const {flags,setFlags,sesion  } = useContext( GeneralContext );
        const [graphData, setgraphData] = useState<GraphMotiveGoNoGo[]>([
            {
              "analise": 0,
              "fantasia": "string",
              "go": 0,
              "id": 0,
              "noGo": 0
            }
          ]);

        const [totalPareceres, settotalPareceres] = useState(0)

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoading= valor;
            
            setFlags(payload);
        }

        const graphMotiveGoNoGo = async () =>{

            try {
                const resp = await vistaApi.get<GraphMotiveGoNoGo[]>('/services/graphMotiveGoNoGo',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ "clienteId" : sesion.clienteId,
                    "dataCertameInicio" : "01/01/2020",
                    "dataCertameFim" : "01/01/2022",
                    "charter" : sesion.charter,
                    "colaboradorId" : sesion.colaboradorId}
                }, 
                );

                console.log('op graphMotiveGoNoGo:::::::::::::::::::::');
                console.log(resp.data);
                if(resp.data.length>0){

                    setgraphData(resp.data);
                    settotalPareceres(resp.data[0].go+resp.data[0].noGo+resp.data[0].analise)
                }
                
            } catch (error) {
                console.log(error);

            }
        }

        useEffect(() => {
            console.log('recargando home');
            floading(true)
            graphMotiveGoNoGo();
            floading(false)
           
          }, [])

       
        //exposed objets 
        return {   graphMotiveGoNoGo ,graphData,floading,totalPareceres   }
}
