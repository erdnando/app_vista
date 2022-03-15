import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import { OpportunityCustomFindById } from '../models/response/OpportunityCustomFindById';
import vistaApi from '../api/vista';
import { ListJudgeResourceByOpportunityId } from '../models/response/ListJudgeResourceByOpportunityId';
import { ListJudgeResourceByOpportunityIdAux } from '../models/response/ListJudgeResourceByOpportunityIdAux';
import { ListAllTaskByOpportunityId } from '../models/response/ListAllTaskByOpportunityId';
import { ListAllRequirementByOpportunity } from '../models/response/ListAllRequirementByOpportunity';
import { ListAllRequirementByOpportunityAux } from '../models/response/ListAllRequirementByOpportunityAux';
import { ListAllTaskByOpportunityIdAux } from '../models/response/ListAllTaskByOpportunityIdAux';
import { OpportunityListitem } from '../models/response/OpportunityListitem';
import { OpportunityListitemAux } from '../models/response/OpportunityListitemAux';
import { OpportunityCustomListOpinionsByIdAux } from '../models/response/OpportunityCustomListOpinionsByIdAux';




export const useSearch =  () => {

        const { ids ,setIds, flags,setFlags, sesion, search, setSearch} = useContext( GeneralContext );


        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoading= valor;
            
            setFlags(payload);
        }
        //main
        const getResultadoBusqueda = () =>{
           // if(t){ floading(false);return;}
              
                  getOportunidadeTab();
                  getParecerTab();
                  getDemandaJuridicaTab();
                  getResultadoTab();
                  getPlanAccionTab();
                  getPendenciasTab();
                  floading(false)

        }

        const getOportunidadeTab = async () =>{
            try {

               
                const resp = await vistaApi.get<OpportunityCustomFindById>('/services/opportunityCustom/findById/'+ids.codigoBusqueda+'/'+sesion.clienteId+'?charter='+ sesion.charter+'&colaboradorId=0',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                }, 
                );

                console.log('op oportunidade:::::::::::::::::::::');
                console.log(resp.data);

               

                if(resp.data.razaoSocialCliente !== undefined){
                    console.log("asignando datos");
                    const payload= search;
                    payload.oportunidade= resp.data;
                    setSearch(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar OpportunityCustomFindById')
                console.log(error);
                floading(false)
            }
        }

        const getParecerTab = async () =>{
            try {
                const resp = await vistaApi.get<OpportunityCustomListOpinionsByIdAux[]>('/services/opportunityCustom/listOpinionsById/'+ids.codigoBusqueda,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ 
                       "listOpinionsById" : ids.codigoBusqueda
                    }
                }, 
                );

                console.log('op parecer:::::::::::::::::::::');
                console.log(resp.data);

               
                if(resp.data.length>0){

                
                    let arrParecerTabAux=search.parecer;//get reference
                    arrParecerTabAux=[];
                    console.log('cleaning data...')

                    resp.data.forEach(function(item,index){
                     //console.log('parecer adding...')
                        arrParecerTabAux.push({
                            id:index,
                            responsable:item.responsable,
                            tipo:item.tipo,
                            parecer:item.parecer,
                            fecha:item.fecha
                        });
                        
                      })
                      console.log('elementos::::'+arrParecerTabAux.length)
                      //setParecerTab(arrParecerTabAux);
                      const payload= search;
                      payload.parecer= arrParecerTabAux;
                      setSearch(payload);
                }else{
                    const payload= search;
                    payload.parecer= [];
                    setSearch(payload);
                }

                floading(false)
            } catch (error) {
                console.log('error al consultar opportunityCustom/listOpinionsById')
                console.log(error);
                floading(false)
            }
        }

        const getDemandaJuridicaTab = async () =>{
            try {
                const resp = await vistaApi.get<ListJudgeResourceByOpportunityId[]>('/services/DemandJudge/listJudgeResourceByOpportunityId',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ 
                       "oportunidadeId" : ids.codigoBusqueda,
                    "clienteId" : sesion.clienteId,
                    }
                }, 
                );

                console.log('op demanda juridica:::::::::::::::::::::');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    //setDemandaJuridicaTab([]);
                    let arrDemandaJuridicaTabAux=search.demandaJuridica;//get reference
                    arrDemandaJuridicaTabAux=[];
                    resp.data.forEach(function(item,index){

                        arrDemandaJuridicaTabAux.push({
                            id:index,
                            procedimiento:item.procedimento,
                            fechaProtocolo:item.dataProtocolo,
                            resultado:item.resultado
                        });
                        
                      })

                      //setDemandaJuridicaTab(arrDemandaJuridicaTabAux);
                      const payload= search;
                      payload.demandaJuridica= arrDemandaJuridicaTabAux;
                      setSearch(payload);
                }else{
                    const payload= search;
                    payload.demandaJuridica= [];
                    setSearch(payload);
                }

                floading(false)
            } catch (error) {
                console.log('error al consultar listJudgeResourceByOpportunityId')
                console.log(error);
                floading(false)
            }
        }

        const getPlanAccionTab = async () =>{
            try {
                const resp = await vistaApi.get<ListAllTaskByOpportunityId[]>('/services/plan/listAllTaskByOpportunityId',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ "oportunidadeId" : ids.codigoBusqueda,
                    "charter" : sesion.charter,
                    }
                }, 
                );

                console.log('op plan accion:::::::::::::::::::::');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    //setDemandaJuridicaTab([]);

                    let arrPlanAccionTabAux=search.planAccion;//get reference
                    arrPlanAccionTabAux=[];
                    
                    resp.data.forEach(function(item,index){

                        arrPlanAccionTabAux.push({
                            id:0,
                            tarifa:item.descricaoTarefa,
                            responsable:item.responsavel,
                            fechaPlaneada:item.dataTarefaFimPlanejada,
                            fechaPlaneada2:item.dataTarefaFimRealizada
                        });
                        
                      })

                      //setPlanAccionTab(arrPlanAccionTabAux);
                      const payload= search;
                      payload.planAccion= arrPlanAccionTabAux;
                      setSearch(payload);
                }else{
                    const payload= search;
                      payload.planAccion= [];
                      setSearch(payload);
                }

                floading(false)
            } catch (error) {
                console.log('error al consultar listAllTaskByOpportunityId');
                console.log(error);
                floading(false)
            }
        }

        const getResultadoTab = async () =>{
            try {
                const resp = await vistaApi.get<OpportunityListitem>('/services/opportunity/listItem/'+ids.codigoBusqueda,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ 
                       "opportunityId" : ids.codigoBusqueda
                    }
                }, 
                );

                console.log('op resultados:::::::::::::::::::::');
                console.log(resp.data);

                  
               // if(resp.data.itensOportunidadeDto !=undefined)
                if(resp.data.itensOportunidadeDto !=undefined && resp.data.itensOportunidadeDto.length>0){

                     let arrResultadosTabAux=search.resultados;//get reference
                     arrResultadosTabAux=[];
                   

                       resp.data.itensOportunidadeDto.forEach(function(item,index){
                                arrResultadosTabAux.push({
                                    id:index,
                                    lote:item.lote.toString(),//detail
                                    item:item.item.toString(),//detail
                                    valorFechado:item.fechado!,//detail
                                    valorTotal:item.valorFinal!,//detail
                                    ganador:item.primeiroLugar!,//detail
                                    producto:item.descricaoProduto!,//header
                                    participacion:item.participa!,//header
                                    posicion:item.posicaoCliente!,//header
                                    collapsed:true,
                                });

                        });

                    //setSearchResultados(arrResultadosTabAux)
                    const payload= search;
                    payload.resultados= arrResultadosTabAux;
                    setSearch(payload);
                }else{
                    const payload= search;
                    payload.resultados= [];
                    setSearch(payload);
                }

               
                floading(false)
            } catch (error) {
                console.log(error);
                floading(false)
            }
        }

        const getPendenciasTab = async () =>{
            try {
                const resp = await vistaApi.get<ListAllRequirementByOpportunity[]>('/services/requirement/listAllRequirementByOpportunity',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ "oportunidadeId" : ids.codigoBusqueda,
                    "charter" : sesion.charter,
                    }
                }, 
                );

                console.log('op pendencias:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    
                    let arrPlanAccionTabAux=search.pendencias;//get reference
                    arrPlanAccionTabAux=[]

                    resp.data.forEach(function(item,index){

                        arrPlanAccionTabAux.push({
                            id:index,
                            descripcion:item.descricao,
                            tipo:item.tipoMeta,
                            tipoUsuario:item.usuario,
                            dias:item.metaDias,
                            acepto:item.atende
                        });
                        
                      })

                      //setPendenciasTab(arrPlanAccionTabAux);
                      const payload= search;
                      payload.pendencias= arrPlanAccionTabAux;
                      setSearch(payload);
                }else{
                    const payload= search;
                      payload.pendencias= [];
                      setSearch(payload);
                }

                 //test
                //  const payload= oportunidadesTab;
                //  payload.razaoSocialOrgao= 'xxxxxxx';
                //  setOportunidadesTab(payload); 
                floading(false)
            } catch (error) {
                console.log(error);
                floading(false)
            }
        }

        const onChangeSearch = async (codigoBusqueda:string) =>{
            const payload= ids;
            payload.codigoBusqueda= codigoBusqueda;
            setIds(payload);
        }


        // useEffect(() => {
        //     //console.log('recargando getResultadoBusqueda');
        //     floading(true)
        //     getResultadoBusqueda(false);
        //     floading(false)
           
        //   }, [])

  
        //exposed objets 
        return {
            onChangeSearch,getResultadoBusqueda
        }
}
        

