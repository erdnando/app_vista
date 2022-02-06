import { useContext } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import { ListaParecer } from '../models/response/ListaParecer';
import { TipoExigencia } from '../models/response/TipoExigencia';
import Toast from 'react-native-toast-message';

export const useParecer =  () => {

        const { ids ,setIds, flags,setFlags, sesion, parecer,setParecer,
            opiniones,setOpiniones,usuario } = useContext( GeneralContext );

       

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoadingParecer= valor;
            
            setFlags(payload);
        }
        //main
        const getResultadoBusqueda = () =>{
              
                  //getOportunidadeTab();
        }

        const getListParecerColaborador = async () =>{
            floading(true)
            
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
            
                Toast.show({type: 'ok',props: { mensaje: 'Datos cargados ok' }});
                floading(false)
            } catch (error) {
                console.log('error al consultar listaParecer')
                console.log(error);
                Toast.show({type: 'ko',props: { mensaje: error}});
                floading(false)
            }
        }

        const getListParecerTerciario = async () =>{
            //TODO implement terciario call
            floading(true)
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
                Toast.show({type: 'ok',props: { mensaje: 'Datos cargados ok' }});
                floading(false)
            } catch (error) {
                console.log('error al consultar listaParecer')
                console.log(error);
                floading(false)
            }
        }

        const cargaComoboTipo = async () =>{
            floading(true)
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
            floading(true)
            const payload = opiniones;
            let flagBorrado=true;
            let arrAux = payload.exigencias//todas las cards

            //logic to controll tabs and selectors, by swap among them
            arrAux[index].visible=false;
            
            var b = arrAux[index];//card q se va a eliminar

            arrAux[payload.exigenciasIndex-1].visible=true;
            arrAux[index] = arrAux[payload.exigenciasIndex-1];//intercambio swap
            //arrAux[index].visible=true;

            arrAux[payload.exigenciasIndex-1] = b;//intercambio swap


            console.log('borrando card::::'+index)
            console.log(arrAux)
            console.log('-----------------------')
            payload.exigencias=arrAux;
           
            payload.tabsContador--;
            payload.exigenciasIndex--;

            if(payload.tabsContador ==0){
                payload.tabsContador=1;
                flagBorrado=false;
     
            }
            if(payload.exigenciasIndex ==0){
           
                payload.exigenciasIndex=1;
                flagBorrado=false;
            }
            setOpiniones(payload);
            if(flagBorrado) {
                Toast.show({type: 'ko',props: { mensaje: 'Exigencia removida' }});
            }
            floading(false)
        }

        const saveExigencias = async () =>{

            try {
                floading(true)
                const payload = opiniones;
                let arrExigenciasAux= [{}];
                //arrExigenciasAux.cl
                console.log('---------------------------')
                console.log(payload.exigencias);
                console.log('---------------------------')


                payload.exigencias.forEach(function(item,index){
                    if(item.visible){
                        arrExigenciasAux.push({
                            "id": index+1, 
                            "metaDias": item.qtededias, 
                            "observacao": item.observaciones, 
                            "oportunidadeId": parecer.parecerSeleccionado.idOpinion, 
                            "status": "1", 
                            "tipoDataMeta": 0, 
                            "tipoExigenciaId": 0, 
                            "tipoUsuarioClienteId": 0, 
                            "titulo": item.descripcion 
                        });
                    }

                  })
                console.log('paquete enviando...')

                console.log('---------------------------')
                console.log(arrExigenciasAux);
                console.log('---------------------------')


                var arr=arrExigenciasAux.splice(1,arrExigenciasAux.length);
                console.log(arr);
          

                const resp = await vistaApi.post<any>('/services/exigency/saveExigency',{ arr }, {
                                    headers:{
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    "X-Auth-Token": sesion.token
                                }
                });

                console.log('exigencias guardadas');
                console.log(resp.data);
                Toast.show({type: 'ok', props: { mensaje: 'Exigencia guardada' }});
                floading(false)

            } catch (error) {
                console.log(error);

                const payloadx= flags;
                payloadx.isLoading=false;
                setFlags(payloadx);
                console.log('error al guardar exigencias');
                Toast.show({type: 'ko',props: { mensaje: error }});
                floading(false)
                return false;
            }
        }
  



        //exposed objets 
        return {
            getListParecerColaborador,getListParecerTerciario,onChangeSearch,cargaComoboTipo,ajustaBorrado,
            saveExigencias
        }
}
        

