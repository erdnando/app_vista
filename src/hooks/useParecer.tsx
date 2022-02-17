import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import { ListaParecer } from '../models/response/ListaParecer';
import { TipoExigencia } from '../models/response/TipoExigencia';
import Toast from 'react-native-toast-message';
import { ComboDescripcion } from '../models/response/ComboDescripcion';
import { TipoUsuario } from '../models/Usuario';
import { Exigencia } from '../models/Exigencia';
import { TabRouter } from '@react-navigation/native';
import { ExigenciasOportunityTerciario } from '../models/response/ExigenciasOportunityTerciario';
import { TipoUsuarioResponse } from '../models/TipoUsuarioResponse';
import { ComboMotivo } from '../models/ComboMotivo';

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

                console.log('op lista parecer:::::::::::::::::::::');
                console.log(resp.data);

                if(resp.data.length > 0){

                    let arrAux=parecer.listaParecer;//get reference
                    arrAux=[];

                      resp.data.forEach(function(item,index){
                        arrAux.push({
                                    id:index,
                                    opinion:item.descricao,
                                    idOpinion:item.oportunidadeId.toString(),
                                    parecerId:item.parecerId.toString(),
                                    edital:item.numeroEdital,
                                    oragao:item.nomeOrgao,
                                    fechaOpinion:item.dataCertame,
                                    ubicacion: (item.localidade.length>13? item.localidade.substring(0,13)+'...' :item.localidade) +' - '+ item.estado,
                                    estatus:item.realizado==='PARCIAL' ? 2 : 1,  //1 realizado, 2 no realizado
                                    clienteId:sesion.clienteId,
                                    modalidade:item.descricaoModalidade,
                                    plataforma:'NA'
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
            
                Toast.show({type: 'ok',props: { mensaje: 'Datos cargados' }});
                floading(false)
            } catch (error) {
                console.log('error al consultar listaParecer')
                console.log(error);
                Toast.show({type: 'ko',props: { mensaje: error}});
                floading(false)
            }
        }

        const getListParecerTerciario = async () =>{

            if(usuario.tipo!=TipoUsuario.USER_TERCEIRO)return;

            floading(true)

            try {
                const resp = await vistaApi.get<ListaParecer[]>('services/opportunity/findOpinionByUser/'+sesion.colaboradorId+'/'+ (ids.idOpinionBusqueda!=''?ids.idOpinionBusqueda:'0'),{
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

                console.log('op lista parecer terciario:::::::::::::::::::::');
                console.log(resp.data);

                if(resp.data.length > 0){

                    let arrAux=parecer.listaParecer;//get reference
                    arrAux=[];
                  
                    resp.data.forEach(function(item,index){
                        arrAux.push({
                                    id:index,
                                    opinion:item.descricao,
                                    idOpinion:item.oportunidadeId.toString(),
                                    parecerId:item.parecerId.toString(),
                                    edital:item.numeroEdital,
                                    oragao:item.nomeOrgao,
                                    fechaOpinion:item.dataCertame,
                                    ubicacion: (item.localidade.length>13? item.localidade.substring(0,13)+'...' :item.localidade) +' - '+ item.estado,
                                    estatus:item.realizado==='PARCIAL' ? 2 : 1,  //1 realizado, 2 no realizado
                                    clienteId:sesion.clienteId,
                                    modalidade:item.descricaoModalidade,
                                    plataforma:'NA'
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
                console.log('error al consultar listaParecer terciario')
                console.log(error);
                Toast.show({type: 'ko',props: { mensaje: error}});
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

        const cargaComoboDescripcion = async () =>{
            floading(true)
            try {
                console.log(sesion.token )
                const resp = await vistaApi.get<ComboDescripcion[]>('services/requirementType/listByClient?charter='+sesion.charter+'&colaboradorId='+sesion.colaboradorId+'&clienteId='+sesion.clienteId,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo descripcion:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length > 0){

                    let arrAux=opiniones.catTipoDescripcion;//get reference
                    arrAux=[];
                  
                      resp.data.forEach(function(item,index){
                        arrAux.push({
                                   value:item.id.toString(),
                                   label:item.descricao
                               });
                       });


                    console.log("asignando datos");
                    const payload = opiniones;
                    payload.catTipoDescripcion = arrAux;
                    setOpiniones(payload);

                }else{
                    const payload = opiniones;
                    payload.catTipoDescripcion = [];
                    setOpiniones(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar combo descripcion')
                console.log(error);
                floading(false)
            }
        }

        const cargaComboMotivo = async () =>{
            floading(true)
            try {
                console.log(sesion.token )
                const resp = await vistaApi.get<ComboMotivo[]>('services/purportMotive/listByClienteId/'+sesion.clienteId,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo motivo:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length > 0){

                    let arrAux=opiniones.catMotivo;//get reference
                    arrAux=[];
                  
                      resp.data.forEach(function(item,index){
                        arrAux.push({
                                   value:item.id.toString(),
                                   label:item.descricao
                               });
                       });


                    console.log("asignando datos");
                    const payload = opiniones;
                    payload.catMotivo = arrAux;
                    setOpiniones(payload);

                }else{
                    const payload = opiniones;
                    payload.catMotivo = [];
                    setOpiniones(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar combo motivo')
                console.log(error);
                floading(false)
            }
        }

        const cargaComoboTipoUsuario = async () =>{
            floading(true)
            try {
                console.log(sesion.token )
                const resp = await vistaApi.get<TipoUsuarioResponse[]>('services/clientUserType/listActiveByClient/'+sesion.clienteId+'?charter='+sesion.charter,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo tipo usuario:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length > 0){

                    let arrAux=opiniones.catTipoUsuario;//get reference
                    arrAux=[];
                  
                      resp.data.forEach(function(item,index){
                        arrAux.push({
                                   value:item.id.toString(),
                                   label:item.descricao
                               });
                       });


                    console.log("asignando datos");
                    const payload = opiniones;
                    payload.catTipoUsuario = arrAux;
                    setOpiniones(payload);

                }else{
                    const payload = opiniones;
                    payload.catTipoUsuario = [];
                    setOpiniones(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar combo descripcion')
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

            //arrAux[payload.exigenciasIndex-1].visible=true;
            arrAux[index] = arrAux[payload.exigenciasIndex-1];//intercambio swap
            //arrAux[index].visible=true;

            arrAux[payload.exigenciasIndex-1] = b;//intercambio swap


            console.log('borrando card::::'+index)
            console.log(arrAux)
            console.log('-----------------------')
            payload.exigencias = arrAux;
           
            payload.tabsContador--;
            payload.exigenciasIndex--;

            if(payload.tabsContador == 0){
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
                //let arrExigenciasAux= [{}];
                let arrExigenciasAux: Array<Exigencia> = [];
   
                console.log('---------------------------')
                console.log(payload.exigencias);
                console.log('---------------------------')

                payload.exigencias.forEach(function(item,index){
                    if(item.visible){
                        arrExigenciasAux.push({
                            "id": index+1, 
                            "metaDias": item.qtededias, 
                            "observacao": item.observaciones, 
                            "oportunidadeId": parseInt(parecer.parecerSeleccionado.idOpinion), 
                            "status": "1", 
                            "tipoDataMeta": 0, 
                            "tipoExigenciaId": 0, 
                            "tipoUsuarioClienteId": 0, 
                            "titulo": item.descripcion 
                        });
                    }
                  });
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

        const saveParecer = async () =>{
            try {
                floading(true)
                const payload = opiniones;
                
                let arrExigenciasAux: Array<Exigencia> = [];
   
                console.log('---------------------------')
                console.log(payload.parecer);
                console.log(parecer.parecerSeleccionado);
                console.log('---------------------------')
                      
                const resp = await vistaApi.post<any>('/services/opportunity/userOpinion/save',{ 
                        "motivoParecerId": null,
                        "justificativa": "ok",
                        "parecer":payload.parecer.estatusGO===1 ? "GO" : "NO GO",
                        "valores": [],
                        "importExportInput": null,
                        "exibeAbaValor": null,
                        "collaboratorUser": "N",
                        "oportunidadeExigencia": [],
                        "colaboradorId": sesion.colaboradorId,
                        "parecerId": parecer.parecerSeleccionado.parecerId,
                        "oportunidadeId": parecer.parecerSeleccionado.idOpinion,
                        "charter": sesion.charter
                      
                 }, {
                                    headers:{
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    "X-Auth-Token": sesion.token
                                }
                });

                console.log('parecer guardado');
                console.log(resp.data);
                Toast.show({type: 'ok', props: { mensaje: 'Parecer guardada' }});
                floading(false)

            } catch (error) {
                console.log(error);
                
                const payloadx= flags;
                payloadx.isLoading=false;
                setFlags(payloadx);
                console.log('error al guardar Parecer');
                Toast.show({type: 'ko',props: { mensaje: 'Error al guardar Parecer' }});
                floading(false)
                return false;
            }
        }
  
        const isFormParecerValid=()=>{
           
          //TODO add validation to combo opinion
           if (opiniones.parecer.justificacion.trim() ==='') {
               // console.log('saliendo por justificativa')   
                return false;
            }
           if (opiniones.parecer.estatusGO == 0) {
           // console.log('saliendo por estatusGO 0')   
              return false;
            }

           // console.log('formulario valido')   
           return true;
           
        }

        const formExigenciasValid=()=>{

             
            const payload = opiniones;
            let arrExigenciasAux: Array<Exigencia> = [];
            payload.exigenciasAllValid=true;
            
            payload.exigencias.forEach(function(item,index){
                //toma todas las exigencias abiertas o visibles
                if(item.visible){
                    //valid form
                    let refForm = {
                        "id": index+1, 
                        "metaDias": item.qtededias, //qtdias
                        "observacao": item.observaciones, //observaciones
                        "oportunidadeId": parseInt(parecer.parecerSeleccionado.idOpinion), 
                        "status": "1", 
                        "tipoDataMeta": 0, 
                        "tipoExigenciaId": parseInt(item.tipoExigencia), //tipoexigencia  ok
                        "tipoUsuarioClienteId":  parseInt(item.tipoUsuario), //tipoUsuario 
                        "titulo": payload.catTipoDescripcion.filter(elem => elem.value == item.descripcion)[0]?.label,//descripcio  ok                    });
                    }

                    item.valid=true;
                    
                    

                    if ( refForm.titulo === undefined) {
                        console.log('saliendo por descripcion '+ refForm.titulo)   
                        item.valid=false;
                        payload.exigenciasAllValid=false;
                    }else if (isNaN(refForm.tipoExigenciaId)) {
                        console.log('saliendo por tipo exigencia')   
                        item.valid=false;
                        payload.exigenciasAllValid=false;
                    }else if (refForm.metaDias === '') {
                        console.log('saliendo por meta dias')  
                        item.valid=false;
                        payload.exigenciasAllValid=false;
                    }else if (isNaN(refForm.tipoUsuarioClienteId)) {
                        console.log('saliendo por tipo usuario')   
                        item.valid=false;
                        payload.exigenciasAllValid=false;
                    }else  if (refForm.observacao === '') {
                        console.log('saliendo por observaciones')   
                        item.valid=false;
                        payload.exigenciasAllValid=false;
                    }

                    arrExigenciasAux.push(refForm)
                    setOpiniones(payload)
                }
            })

              
 

           // var arrExigenciasOpened=arrExigenciasAux.splice(1,arrExigenciasAux.length);
            //console.log(arrExigenciasAux)
           
            // arrExigenciasAux.forEach(function(item,index){
            //     console.log('looping....')
            //     console.log(item)


            //     if ( item.titulo === undefined) {
            //         console.log('saliendo por descripcion -->'+ item.titulo+'<--')   
            //         console.log(item)  

            //         setFrmExigenciaValid(false)
            //        return ;
            //     }else if (isNaN(item.tipoExigenciaId)) {
            //         console.log('saliendo por tipo exigencia')   
            //         setFrmExigenciaValid(false)
            //         return ;
            //     }else if (item.metaDias === '') {
            //         console.log('saliendo por meta dias')  
            //         setFrmExigenciaValid(false) 
            //         return ;
            //     }else if (isNaN(item.tipoUsuarioClienteId)) {
            //         console.log('saliendo por tipo usuario')   
            //         setFrmExigenciaValid(false)
            //         return ;
            //     }else  if (item.observacao === '') {
            //         console.log('saliendo por observaciones')   
            //         setFrmExigenciaValid(false)
            //         return ;
            //     }

                
               
            //    })
           
             
             //if(frmExigenciaValid==false) return;

             
             // setFrmExigenciaValid(true)
             
          }

        const cargaExigenciasTerciario= async()=>{

           if(usuario.tipo!=TipoUsuario.USER_TERCEIRO)return;
            
            floading(true)
            try {
                console.log(sesion.token )
                //TEST parecer.parecerSeleccionado.idOpinion  -->2691
                const resp = await vistaApi.get<ExigenciasOportunityTerciario[]>('services/exigencias/list/opportunity/2691/typeUserCli/'+sesion.tipoClientId,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op exigencias terciario:::::::::::::::::::::x');
                console.log(resp.data);

               
                if(resp.data.length > 0){

                    let arrAux=opiniones.exigenciasTerciario;//get reference
                    arrAux=[];
                  
                      resp.data.forEach(function(item,index){
                        arrAux.push({
                            id:index,
                            exigencia:item.titulo,
                            observacion:item.observacao,
                            tipo:item.tipoUsuarioCliente.descricao,
                            dias:item.metaDias,
                            goNoGo:item.status==='P' ? 1 : 0,
                        });
                       });



                    //TEST
                        arrAux.push({
                            id:1,
                            exigencia:'item.titulo',
                            observacion:'item.observacao',
                            tipo:'item.tipoUsuarioCliente.descricao',
                            dias:'item.metaDias',
                            goNoGo: 0 ,
                        });
                  

                        arrAux.push({
                            id:2,
                            exigencia:'item.titulo',
                            observacion:'item.observacao',
                            tipo:'item.tipoUsuarioCliente.descricao',
                            dias:'item.metaDias',
                            goNoGo: 0 ,
                        });


                    console.log("asignando datos");
                    const payload = opiniones;
                    payload.exigenciasTerciario = arrAux;
                    setOpiniones(payload);

                }else{
                    const payload = opiniones;
                    payload.exigenciasTerciario = [];
                    setOpiniones(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar exigencias terciario')
                console.log(error);
                floading(false)
            }
        }

        const isFormExigenciasTerciarioValid=()=>{

 
                    let bFlag=true;
                    opiniones.exigenciasTerciario.forEach(function(item,index){
                        if(item.goNoGo===0){
                            bFlag=false;
                        }
                        
                       });
            return bFlag;
        }

        const saveExigenciaTerciario = async()=>{

        }


        //exposed objets 
        return {
            getListParecerColaborador,getListParecerTerciario,onChangeSearch,cargaComoboTipo,ajustaBorrado,
            saveExigencias,cargaComoboDescripcion,cargaComoboTipoUsuario,isFormParecerValid,formExigenciasValid,
            saveParecer,cargaExigenciasTerciario,isFormExigenciasTerciarioValid,saveExigenciaTerciario,
            cargaComboMotivo
        }
}
        

