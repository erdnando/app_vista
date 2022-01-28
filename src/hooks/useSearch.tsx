import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import { OpportunityCustomFindById } from '../models/response/OpportunityCustomFindById';
import vistaApi from '../api/vista';
import RNFetchBlob, { RNFetchBlobConfig } from 'rn-fetch-blob';
import { Platform } from 'react-native';
import { ListJudgeResourceByOpportunityId } from '../models/response/ListJudgeResourceByOpportunityId';
import { ListJudgeResourceByOpportunityIdAux } from '../models/response/ListJudgeResourceByOpportunityIdAux';
import { ListAllTaskByOpportunityId } from '../models/response/ListAllTaskByOpportunityId';
import { ListAllRequirementByOpportunity } from '../models/response/ListAllRequirementByOpportunity';
import { ListAllRequirementByOpportunityAux } from '../models/response/ListAllRequirementByOpportunityAux';
import { ListAllTaskByOpportunityIdAux } from '../models/response/ListAllTaskByOpportunityIdAux';


export const useSearch =  () => {
        const { ids ,setIds, flags,setFlags, sesion} = useContext( GeneralContext );
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
        const getResultadoBusqueda = async (t:boolean) =>{
            if(t){ floading(false);return;}
              
            getOportunidadeTab();
            getDemandaJuridicaTab();
            getPlanAccionTab();
            getPendenciasTab();
        }

        const getOportunidadeTab = async () =>{
            try {
                const resp = await vistaApi.get<OpportunityCustomFindById>('/services/opportunityCustom/findById',{
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

        const getDemandaJuridicaTab = async () =>{
            try {
                const resp = await vistaApi.get<ListJudgeResourceByOpportunityId[]>('/services/DemandJudge/listJudgeResourceByOpportunityId',{
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

                console.log('op listJudgeResourceByOpportunityId:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    setDemandaJuridicaTab([]);

                    let arrDemandaJuridicaTabAux=demandaJuridicaTab;//get reference

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

        const getPlanAccionTab = async () =>{
            try {
                const resp = await vistaApi.get<ListAllTaskByOpportunityId[]>('/services/plan/listAllTaskByOpportunityId',{
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

                console.log('op listAllTaskByOpportunityId:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    setDemandaJuridicaTab([]);

                    let arrPlanAccionTabAux=planAccionTab;//get reference

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

                    setPendenciasTab([]);

                    let arrPlanAccionTabAux=pendenciasTab;//get reference

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


        useEffect(() => {
            //console.log('recargando getResultadoBusqueda');
            floading(true)
            getResultadoBusqueda(false);
            floading(false)
           
          }, [])

  
        //exposed objets 
        return {
            onChangeSearch,oportunidadesTab,getResultadoBusqueda,demandaJuridicaTab,planAccionTab,pendenciasTab
        }
}
        

