import { useContext, useEffect, useState } from 'react';
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
        const { ids ,setIds, flags,setFlags, sesion, searchResultados, setSearchResultados} = useContext( GeneralContext );
        const [ oportunidadesTab, setOportunidadesTab ] = useState<OpportunityCustomFindById>({
                                                                        "alertaVigenciaContrato": "",
                                                                        "arquivo": "",
                                                                        "ata": "",
                                                                        "clienteId": 0,
                                                                        "cnpjCliente": "",
                                                                        "cnpjOrgao": "",
                                                                        "cnpjOrgaoCondutor": "",
                                                                        "compulsorio": "",
                                                                        "condicaoPagamento": "",
                                                                        "dataAdjudicacao": new Date(),
                                                                        "dataAssinatura": new Date(),
                                                                        "dataCadastro": new Date(),
                                                                        "dataCaptacao": "dd/MM/yyyy",
                                                                        "dataCertame": "No data",
                                                                        "dataCertameInicial": "dd/MM/yyyy",
                                                                        "dataEnvioDocumentacao": new Date(),
                                                                        "dataEsclarecimento": new Date(),
                                                                        "dataFimContrato": new Date(),
                                                                        "dataImpugnacao": new Date(),
                                                                        "dataInicioContrato": new Date(),
                                                                        "dataProposta": new Date(),
                                                                        "descricaoModalidade": "",
                                                                        "descricaoOportunidade": "",
                                                                        "diasParaVencimento": 0,
                                                                        "edital": "No data",
                                                                        "enderecoEntrega": "",
                                                                        "enderecoEnvio": "",
                                                                        "horaCertame": "",
                                                                        "horaCertameInicial": "",
                                                                        "horaProposta": "",
                                                                        "linkContrato": "",
                                                                        "linkProposta": "",
                                                                        "linkTermoReferencia": "",
                                                                        "localidade": "No data",
                                                                        "meEpp": "",
                                                                        "modalidade": "No data",
                                                                        "nomeFantasiaCliente": "",
                                                                        "nomeFantasiaOrgao": "",
                                                                        "nomeFantasiaOrgaoCondutor": "",
                                                                        "oportunidadeGanha": "",
                                                                        "oportunidadeId": 0,
                                                                        "orgaoCondutorId": 0,
                                                                        "orgaoContrato": "",
                                                                        "orgaoId": 0,
                                                                        "pendencia": "",
                                                                        "plataforma": "No data",
                                                                        "prazoEntrega": 0,
                                                                        "prazoPagamento": 0,
                                                                        "pregoeiroEmail": "",
                                                                        "pregoeiroNome": "",
                                                                        "pregoeiroTelefone": "",
                                                                        "razaoSocialCliente": "",
                                                                        "razaoSocialOrgao": "No data",
                                                                        "razaoSocialOrgaoCondutor": "",
                                                                        "registroPreco": "",
                                                                        "saldoOportunidade": 0,
                                                                        "statusFaturamento": "",
                                                                        "statusOportunidade": "--",
                                                                        "tipoArqAta": "",
                                                                        "tipoArquivo": "",
                                                                        "tipoDisputa": "",
                                                                        "uasg": "",
                                                                        "valorFaturado": 0,
                                                                        "valorTotal": 0,
                                                                        "valorTotalRecebido": 0
                                                                    })
        const [ demandaJuridicaTab, setDemandaJuridicaTab ] = useState<ListJudgeResourceByOpportunityIdAux[]>(
            [
            {
                id:0,
                procedimiento:'No data',
                fechaProtocolo:'No data',
                resultado:'No data'
            }
            ])

        const [ parecerTab, setParecerTab ] = useState<OpportunityCustomListOpinionsByIdAux[]>(
            [
            {
                id:0,
                responsable:'No data',
                tipo:'No data',
                parecer:'No data',
                fecha:'No data',
            }
            ])
    
        const [ planAccionTab, setPlanAccionTab ] = useState<ListAllTaskByOpportunityIdAux[]>(
            [
            {
                id:0,
                tarifa:"No data",
                responsable:"No data",
                fechaPlaneada:"No data",
                fechaPlaneada2:"No data"
            }
            ])

        const [ resultadoTab, setResultadoTab ] = useState<OpportunityListitemAux[]>(
           [ {
                id:0,
                lote:'No data',
                item:'No data',
                valorFechado:'No data',
                valorTotal:'No data',
                ganador:'No data',
                producto:'No data',
                participacion:'No data',
                posicion:'No data',
                collapsed:true,
              },
            ]
              
            )

        const [ pendenciasTab, setPendenciasTab ] = useState<ListAllRequirementByOpportunityAux[]>(
            [
            {
                id:0,
                descripcion:'No data',
                tipo:'No data',
                tipoUsuario:'No data',
                dias:'No data',
                acepto:'No data'//Sim
            }
            ])

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoading= valor;
            
            setFlags(payload);
        }
        //main
        const getResultadoBusqueda = async () =>{
           // if(t){ floading(false);return;}
              
                 getOportunidadeTab();
                 getParecerTab();
                 getDemandaJuridicaTab();
                 getPlanAccionTab();
                 getResultadoTab();
                 getPendenciasTab();
        }

        const getOportunidadeTab = async () =>{
            try {
                const resp = await vistaApi.get<OpportunityCustomFindById>('/services/opportunityCustom/findById/'+ids.codigoBusqueda+'/'+sesion.clienteId,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ "oportunidadeId" : ids.codigoBusqueda,
                    "clienteId" : sesion.clienteId,
                    }
                }, 
                );

                console.log('op OpportunityCustomFindById:::::::::::::::::::::x');
                console.log(resp.data);

               

                if(resp.data.clienteId !== undefined){
                    console.log("asignando datos");
                    setOportunidadesTab(resp.data);
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

                console.log('op opportunityCustom/listOpinionsById:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length>0){

                
                    let arrParecerTabAux=parecerTab;//get reference
                    arrParecerTabAux=[];
                    console.log('cleaning data...')

                    resp.data.forEach(function(item,index){
                     console.log('parecer adding...')
                        arrParecerTabAux.push({
                            id:index,
                            responsable:item.responsable,
                            tipo:item.tipo,
                            parecer:item.parecer,
                            fecha:item.fecha
                        });
                        
                      })
                      console.log('elementos::::'+arrParecerTabAux.length)
                      setParecerTab(arrParecerTabAux);
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

                console.log('op listJudgeResourceByOpportunityId:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    //setDemandaJuridicaTab([]);

                    let arrDemandaJuridicaTabAux=demandaJuridicaTab;//get reference
                    arrDemandaJuridicaTabAux=[];
                    resp.data.forEach(function(item,index){

                        arrDemandaJuridicaTabAux.push({
                            id:index,
                            procedimiento:item.procedimento,
                            fechaProtocolo:item.dataProtocolo,
                            resultado:item.resultado
                        });
                        
                      })

                      setDemandaJuridicaTab(arrDemandaJuridicaTabAux);
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
                    "charter" : 2,
                    }
                }, 
                );

                console.log('op listAllTaskByOpportunityId:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    //setDemandaJuridicaTab([]);

                    let arrPlanAccionTabAux=planAccionTab;//get reference
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

                      setPlanAccionTab(arrPlanAccionTabAux);
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

                console.log('op opportunity/listItem:::::::::::::::::::::x');
                console.log(resp.data);

                  

                if(resp.data.itensOportunidadeDto.length>0){

                   
                    
                     //let arrResultadosTabAux=resultadoTab;//get reference
                     let arrResultadosTabAux=searchResultados;//get reference
                     arrResultadosTabAux=[];
                    //  resp.data.itensOportunidadeDto.forEach(function(item,index){

                    //         arrResultadosTabAux.push({
                    //             id:index,
                    //             lote:item.lote.toString(),//detail
                    //             item:item.item.toString(),//detail
                    //             valorFechado:item.fechado,//detail
                    //             valorTotal:item.valorFinal,//detail
                    //             ganador:item.primeiroLugar,//detail
                    //             producto:item.descricaoProduto,//header
                    //             participacion:item.participa,//header
                    //             posicion:item.posicaoCliente,//header
                    //             collapsed:true,
                    //         });
                    //    })

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

                    setSearchResultados(arrResultadosTabAux)
                    //setResultadoTab(arrResultadosTabAux);
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
                    "charter" : 1,
                    }
                }, 
                );

                console.log('op listAllRequirementByOpportunity:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    

                    let arrPlanAccionTabAux=pendenciasTab;//get reference
                    arrPlanAccionTabAux=[]

                    resp.data.forEach(function(item,index){

                        arrPlanAccionTabAux.push({
                            id:0,
                            descripcion:item.descricao,
                            tipo:item.tipoMeta,
                            tipoUsuario:item.usuario,
                            dias:item.metaDias,
                            acepto:item.atende
                        });
                        
                      })

                      setPendenciasTab(arrPlanAccionTabAux);
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
            onChangeSearch,oportunidadesTab,getResultadoBusqueda,demandaJuridicaTab,
            planAccionTab,pendenciasTab,parecerTab, setParecerTab
        }
}
        

