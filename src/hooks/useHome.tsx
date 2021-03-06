import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import { GraphMotiveGoNoGo } from '../models/response/GraphMotiveGoNoGo';
import { ResumoMetricsResponse } from '../models/response/ResumoMetrics';
import { GraphParticipaciones } from '../models/response/GraphParticipaciones';



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

          const [graphDataParticipaciones, setgraphDataParticipaciones] = useState<GraphParticipaciones[]>([
            {
                "id": 0,
                "fantasia": "",
                "vencidas": 0,
                "perdidas": 0,
                "suspensas": 0,
                "fracassadas": 0,
                "andamento": 0,
                "canceladas": 0,
                "desertas": 0
            }
          ]);

          const [metrics, setMetrics] = useState<ResumoMetricsResponse>(
            {
                "totalFila":0,
                "totalParecer":0,
                "totalAgenda":0,
            }
          );

         

        const [totalPareceres, settotalPareceres] = useState(0)
        const [maxGrafica, setMaxGrafica] = useState(0)

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoadingResumoOportunidades= valor;
            
            setFlags(payload);
        }

        const graphMotiveGoNoGo = async () =>{

            try {
                const resp = await vistaApi.get<GraphMotiveGoNoGo[]>('/services/graphMotiveGoNoGo?charter=1&colaboradorId=0',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                 
                }, 
                );

                console.log('op graphMotiveGoNoGo:::::::::::::::::::::');
                console.log(resp.data);
                if(resp.data.length>0){

                    setgraphData(resp.data);
                    settotalPareceres(resp.data[0].go+resp.data[0].noGo+resp.data[0].analise)
                   // setMaxGrafica( Math.ceil( totalPareceres/3)*1.25 )
                }
                
            } catch (error) {
                console.log(error);

            }
        }

        const graphParticipaciones = async () =>{

            try {
                let urlString ='/services/graphStatusOpportunityClient?charter='+sesion.charter+'&colaboradorId='+sesion.colaboradorId;
                console.log(urlString)
                const resp = await vistaApi.get<GraphParticipaciones[]>(urlString,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                 
                }, 
                );

                console.log('op graphStatusOpportunityClient:::::::::::::::::::::');
                console.log(resp.data);
                if(resp.data.length>0){

                    setgraphDataParticipaciones(resp.data);
                   // settotalPareceres(resp.data[0].go+resp.data[0].noGo+resp.data[0].analise)
                   // setMaxGrafica( Math.ceil( totalPareceres/3)*1.25 )
                }
                
            } catch (error) {
                console.log(error);

            }
        }

        useEffect(() => {
            console.log('recargando home');
            floading(true)
            graphMotiveGoNoGo();
            loadResumoMetrics()
            graphParticipaciones()
            //floading(false)
           
          }, [])

          const loadResumoMetrics = async () =>{
            try {
                floading(true)
                    const resp = await vistaApi.get<ResumoMetricsResponse>('/services/mobile/listActivityColaborator?charter='+sesion.charter+'&colaboradorId='+sesion.colaboradorId,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                }, 
                );

                console.log('op resumo metrics:::::::::::::::::::::');
                console.log(resp.data);

               
                if(resp.data != undefined){

                      const payload= metrics;
                      payload.totalAgenda= resp.data.totalAgenda;
                      payload.totalFila= resp.data.totalFila;
                      payload.totalParecer= resp.data.totalParecer;
                      setMetrics(payload);
                }else{
                    const payload= metrics;
                    payload.totalAgenda= 0;
                    payload.totalAgenda= 0;
                    payload.totalAgenda= 0;
                    setMetrics(payload);
                }

               
                floading(false)
            } catch (error) {
                console.log(error);
                floading(false)
            }
        }
       
        //exposed objets 
        return {   graphMotiveGoNoGo ,graphData,floading,totalPareceres ,maxGrafica ,metrics,graphDataParticipaciones }
}
