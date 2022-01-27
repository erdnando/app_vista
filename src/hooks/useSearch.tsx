import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import { OpportunityCustomFindById } from '../models/response/OpportunityCustomFindById';
import vistaApi from '../api/vista';
import RNFetchBlob, { RNFetchBlobConfig } from 'rn-fetch-blob';
import { Platform } from 'react-native';

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

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoading= valor;
            
            setFlags(payload);
        }
    
        const getResultadoBusqueda = async (t:boolean) =>{
            if(t){ floading(false);return;}
              
            getOportunidadeTab();
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
            onChangeSearch,oportunidadesTab,getResultadoBusqueda
        }
}
        

