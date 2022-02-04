import { useContext } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import { ListaParecerAux } from '../models/response/ListaParecerAux';
import { ListaParecer } from '../models/response/ListaParecer';
import { TipoExigencia } from '../models/response/TipoExigencia';




export const useParecer =  () => {

        const { ids ,setIds, flags,setFlags, sesion, parecer,setParecer,opiniones,setOpiniones } = useContext( GeneralContext );

       

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoading= valor;
            
            setFlags(payload);
        }
        //main
        const getResultadoBusqueda = () =>{
              
                  //getOportunidadeTab();
        }

        const getListParecerColaborador = async () =>{


            try {
                console.log('services/opportunity/findOpinionByCollaborator/'+sesion.colaboradorId+'/'+ (ids.idOpinionBusqueda!=''?ids.idOpinionBusqueda:'0')  +'?collaboratorUser=N&filialId=2' )
                const resp = await vistaApi.get<ListaParecer[]>('services/opportunity/findOpinionByCollaborator/'+sesion.colaboradorId+'/'+ (ids.idOpinionBusqueda!=''?ids.idOpinionBusqueda:'0')  +'?collaboratorUser=N&filialId=2',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                   params:{ 
                       "collaboratorUser" : "N",
                       "filialId" : "2"
                    }
                }, 
                );

                console.log('op lista parecer:::::::::::::::::::::x');
                console.log(resp.data);

               

                if(resp.data.length > 0){

                    let arrAux=parecer.listaParecer;//get reference
                    arrAux=[];
                  

                      resp.data.forEach(function(item,index){
                        arrAux.push({
                                    id:index,
                                    opinion:item.descricao,
                                    idOpinion:item.oportunidadeId.toString(),
                                    edital:item.numeroEdital,
                                    oragao:item.nomeOrgao,
                                    fechaOpinion:item.dataCertame,
                                    ubicacion: (item.localidade.length>13? item.localidade.substring(0,13)+'...' :item.localidade) +' - '+ item.estado,
                                    estatus:item.realizado==='PARCIAL' ? 2 : 1,  //1 realizado, 2 no realizado
                               });

                       });


                    console.log("asignando datos");
                    const payload= parecer;
                    payload.listaParecer= arrAux;
                    setParecer(payload);

                }else{


                    const payload= parecer;
                    payload.listaParecer= [];
                    setParecer(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar listaParecer')
                console.log(error);
                floading(false)
            }
        }

        const getListParecerTerciario = async () =>{
            //TODO implement terciario call
            try {
                console.log(sesion.token )
                const resp = await vistaApi.get<ListaParecer[]>('services/opportunity/findOpinionByCollaborator/'+sesion.colaboradorId+'/'+ (ids.idOpinionBusqueda!=''?ids.idOpinionBusqueda:'0')  +'collaboratorUser=N&filialId=2',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                   params:{ 
                       "collaboratorUser" : "N",
                       "filialId" : "2"
                    }
                }, 
                );

                console.log('op lista parecer:::::::::::::::::::::x');
                console.log(resp.data);

               

                if(resp.data.length > 0){

                    let arrAux=parecer.listaParecer;//get reference
                    arrAux=[];
                  

                      resp.data.forEach(function(item,index){
                        arrAux.push({
                                    id:index,
                                    opinion:item.descricao,
                                    idOpinion:item.oportunidadeId.toString(),
                                    edital:item.numeroEdital,
                                    oragao:item.nomeOrgao,
                                    fechaOpinion:item.dataCertame,
                                    ubicacion:item.localidade+' - '+ item.estado,
                                    estatus:item.realizado==='PARCIAL' ? 2 : 1,  //1 realizado, 2 no realizado
                               });

                       });


                    console.log("asignando datos");
                    const payload= parecer;
                    payload.listaParecer= arrAux;
                    setParecer(payload);

                }else{


                    const payload= parecer;
                    payload.listaParecer= [];
                    setParecer(payload);
                }

                
           
                floading(false)
            } catch (error) {
                console.log('error al consultar listaParecer')
                console.log(error);
                floading(false)
            }
        }

        const cargaComoboTipo = async () =>{
            
            try {
                console.log(sesion.token )
                const resp = await vistaApi.get<TipoExigencia[]>('services/requirement/listAllTypeGoals?charter=2',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo tipo:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length > 0){

                    let arrAux=opiniones.catTipoExigencia;//get reference
                    arrAux=[];
                  
                      resp.data.forEach(function(item,index){
                        arrAux.push({
                                   value:item.id.toString(),
                                   label:item.descricao
                               });
                       });


                    console.log("asignando datos");
                    const payload = opiniones;
                    payload.catTipoExigencia = arrAux;
                    setOpiniones(payload);

                }else{
                    const payload = opiniones;
                    payload.catTipoExigencia = [];
                    setOpiniones(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar listaParecer')
                console.log(error);
                floading(false)
            }
        }

        const onChangeSearch = async (idParecer:string) =>{
           
            const payload= ids;
            payload.idOpinionBusqueda= idParecer;
            setIds(payload);
            console.log('searching...')
        }
 
        const ajustaBorrado=(index:number)=>{

             const payload= opiniones;
            let arrAux =payload.exigencias

            //logic to controll tabs and selectors, by swap among them
            var b = arrAux[index];
            arrAux[index] = arrAux[payload.exigenciasIndex-1];
            arrAux[payload.exigenciasIndex-1] = b;

           
            



            payload.tabsContador--;
            payload.exigenciasIndex--;

            if(payload.tabsContador ==0){
                payload.tabsContador=1;
     
            }
            if(payload.exigenciasIndex ==0){
           
                payload.exigenciasIndex=1;
            }
            setOpiniones(payload);
        }
  
        //exposed objets 
        return {
            getListParecerColaborador,getListParecerTerciario,onChangeSearch,cargaComoboTipo,ajustaBorrado
        }
}
        

