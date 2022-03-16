import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import { ListaParecer } from '../models/response/ListaParecer';
import { TipoExigencia } from '../models/response/TipoExigencia';
import Toast from 'react-native-toast-message';
import { ComboDescripcion } from '../models/response/ComboDescripcion';
import { TipoUsuario } from '../models/Usuario';
import { Exigencia } from '../models/Exigencia';
import { ExigenciasOportunityTerciario } from '../models/response/ExigenciasOportunityTerciario';
import { TipoUsuarioResponse } from '../models/TipoUsuarioResponse';
import { ComboMotivo } from '../models/ComboMotivo';
import { ParecerRealizado } from '../models/ParecerRealizado';
import { ComboFamilia } from '../models/ComboFamilia';
import { OpinionesValores } from '../models/OpinionesValores';
import { ValoresResponse } from '../models/response/ValoresResponse';
import { OpinionesRequest } from '../models/OpinionesRequest';
import { RNFetchBlobSession } from 'rn-fetch-blob';
import { ComboProductoServicio } from '../models/ComboProductoServicio';

export const useParecer =  () => {

        const { ids ,setIds, flags,setFlags, sesion, parecer,setParecer,
                opiniones,setOpiniones,usuario,setTabSelectedOld,setTabSelected,tabSelected,
                tabModule,menuOpiniones,setMenuOpiniones } = useContext( GeneralContext );

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
                console.log('services/opportunity/findOpinionByCollaborator/'+sesion.colaboradorId+'/'+ (ids.idOpinionBusqueda!=''?ids.idOpinionBusqueda:'0')  +'?collaboratorUser=N&filialId=1')
                const resp = await vistaApi.get<ListaParecer[]>('services/opportunity/findOpinionByCollaborator/'+sesion.colaboradorId+'/'+ (ids.idOpinionBusqueda!=''?ids.idOpinionBusqueda:'0')  +'?collaboratorUser=N&filialId=1',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                   
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
                                    opinion:item.nomeCliente,
                                    idOpinion:item.oportunidadeId.toString(),
                                    parecerId:item.parecerId.toString(),
                                    edital:item.numeroEdital,
                                    oragao:item.nomeOrgao,
                                    fechaOpinion:item.dataCertame+' '+ item.horaCertame.substring(0,2)+':'+item.horaCertame.substring(2),
                                    ubicacion: (item.localidade.length>13? item.localidade.substring(0,12)+'...' :item.localidade) +' - '+ item.estado,
                                    estatus:item.realizado==='PARCIAL' ? 2 : 1,  //1 realizado, 2 no realizado
                                    clienteId:item.clienteId,
                                    modalidade:item.descricaoModalidade,
                                    plataforma:'NA',
                                    usuarioId:item.usuarioId,
                                    arquivo:item.arquivo
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
                Toast.show({type: 'ko',props: { mensaje: 'Error al comunicarse con el servidor. [/findOpinionByCollaborator]'}});
                floading(false)
            }
        }

        const getListParecerTerciario = async () =>{

            if(usuario.tipo!=TipoUsuario.USER_TERCEIRO)return;

            floading(true)

            try {
                console.log('services/opportunity/findOpinionByUser/'+sesion.colaboradorId+'/'+ (ids.idOpinionBusqueda!=''?ids.idOpinionBusqueda:'0'))

                const resp = await vistaApi.get<ListaParecer[]>('services/opportunity/findOpinionByUser/'+sesion.colaboradorId+'/'+ (ids.idOpinionBusqueda!=''?ids.idOpinionBusqueda:'0'),{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
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
                                    opinion:item.nomeCliente,
                                    idOpinion:item.oportunidadeId.toString(),
                                    parecerId:item.parecerId.toString(),
                                    edital:item.numeroEdital,
                                    oragao:item.nomeOrgao,
                                    fechaOpinion:item.dataCertame+' - '+ item.horaCertame.substring(0,2)+':'+item.horaCertame.substring(2),
                                    ubicacion: (item.localidade.length>13? item.localidade.substring(0,13)+'...' :item.localidade) +' - '+ item.estado,
                                    estatus:item.realizado==='PARCIAL' ? 2 : 1,  //1 realizado, 2 no realizado
                                    clienteId:item.clienteId,// sesion.clienteId,
                                    modalidade:item.descricaoModalidade,
                                    plataforma:'NA',
                                    usuarioId:item.usuarioId,
                                    arquivo:item.arquivo
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
                console.log('error al consultar listaParecer terciario')
                console.log(error);
                Toast.show({type: 'ko',props: { mensaje: 'Error al comunicarse con el servidor. [/findOpinionByUser]'}});
                floading(false)
            }
        }

        const getListParecerRealizadoTerciario = async () =>{

            if(usuario.tipo!=TipoUsuario.USER_TERCEIRO)return;

            floading(true)

            try {
//bien  5173 --- mal  5210
                console.log('xxx services/opportunity/listOtherUserOpinions/'+ parecer.parecerSeleccionado.parecerId+'/0')
                const resp = await vistaApi.get<ParecerRealizado[]>('services/opportunity/listOtherUserOpinions/'+ parecer.parecerSeleccionado.parecerId+'/0',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op lista parecer realizado terciario:::::::::::::::::::::');
                console.log(resp.data);

                if(resp.data.length > 0){

                    let arrAux=parecer.listaParecerRealizado;//get reference
                    arrAux=[];
                  
                    resp.data.forEach(function(item,index){
                        arrAux.push({
                            id:index,
                            usuario:item.nomeColaborador,
                            parecer:item.parecer,
                            motivo:'',
                            justificativa:item.justificativa
                        });

                       });

                      


                    console.log("asignando datos");
                    const payload= parecer;
                    payload.listaParecerRealizado= arrAux;
                    setParecer(payload);

                }else{
                    const payload= parecer;
                    payload.listaParecerRealizado= [];
                    setParecer(payload);
                }
                Toast.show({type: 'ok',props: { mensaje: 'Datos cargados' }});
                floading(false)
            } catch (error) {
                console.log('error al consultar listaParecer realizado terciario')
                console.log(error);
                Toast.show({type: 'ko',props: { mensaje: 'Error al comunicarse con el servidor. [/listOtherUserOpinions]'}});
                floading(false)
            }
        }

        const cargaComoboTipo = async () =>{
            floading(true)
            try {
                console.log('services/requirement/listAllTypeGoals?charter='+sesion.charter )
                const resp = await vistaApi.get<TipoExigencia[]>('services/requirement/listAllTypeGoals?charter='+sesion.charter,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo tipo:::::::::::::::::::::');
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
                //console.log(sesion.token )
                const resp = await vistaApi.get<ComboDescripcion[]>('services/requirementType/listByClient?charter='+sesion.charter+'&colaboradorId='+sesion.colaboradorId+'&clienteId='+ids.clienteIdSeleccionado,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo descripcion:::::::::::::::::::::');
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
                //console.log(sesion.token )
                const resp = await vistaApi.get<ComboMotivo[]>('services/purportMotive/listByClienteId/'+ids.clienteIdSeleccionado,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo motivo:::::::::::::::::::::');
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

        const cargaComboFamilia = async () =>{
            floading(true)
            try {
                //console.log(sesion.token )
                const resp = await vistaApi.get<ComboFamilia[]>('services/productService/family/'+ids.clienteIdSeleccionado+'?filialId=1&oportunidadeId='+parecer.parecerSeleccionado.idOpinion,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo familia:::::::::::::::::::::');
                console.log(resp.data);

               
                if(resp.data.length > 0){

                    let arrAux=opiniones.catFamilia;//get reference
                    arrAux=[];
                  
                      resp.data.forEach(function(item,index){

                          if(   !arrAux.find(x => x.value === item.id.toString())) {
                                arrAux.push({
                                        value:item.id.toString(),
                                        label:item.descricao
                                    });
                         }

                       });


                    console.log("asignando datos");
                    const payload = opiniones;
                    payload.catFamilia = arrAux;
                    setOpiniones(payload);

                }else{
                    const payload = opiniones;
                    payload.catFamilia = [];
                    setOpiniones(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar combo familia')
                console.log(error);
                floading(false)
            }
        }

        const cargaComboProductoServicioUniverse = async () =>{
            floading(true)
            try {
                console.log('Peticion enviada combo producto servicio')
                console.log('services/productService/familyWithProducts/'+ids.clienteIdSeleccionado+'?filialId=2&oportunidadeId='+parecer.parecerSeleccionado.idOpinion )
                const resp = await vistaApi.get<ComboProductoServicio[]>('services/productService/familyWithProducts/'+ids.clienteIdSeleccionado+'?filialId=2&oportunidadeId='+parecer.parecerSeleccionado.idOpinion,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op ProductoServicio:::::::::::::::::::::');
                console.log(resp.data);

               
                if(resp.data.length > 0){
                   
                   let arrAux=opiniones.catProductoServicioUniverse;//get reference
                   arrAux=[];
                    //--------------------------
                    for(var i=0;i<(resp.data.length-1);i++){

                        
                        resp.data[i].produtos.forEach(function(item,index){
                           
                            arrAux.push({
                                    value:item.id.toString(),
                                    label:item.descricao,
                                    familiaId: resp.data[i].familiaId.toString()
                                    
                                });
                        });
                        
                        const payloadU = opiniones;
                        payloadU.catProductoServicioUniverse = arrAux;
                        setOpiniones(payloadU);
                    }
                    console.log("datos universe");
                    console.log(opiniones.catProductoServicioUniverse);
                    //------------------------------

                    const payload = opiniones;
                    payload.catProductoServicio = [];
                    setOpiniones(payload);

                }else{
                    const payload = opiniones;
                    payload.catProductoServicio = [];
                    setOpiniones(payload);
                }
           
                floading(false)
            } catch (error) {
                console.log('error al consultar combo producto servicio')
                console.log(error);
                floading(false)
            }
        }

        const asignaProductoServicio = async(familia:string, id:number)=>{
            console.log('Recargando producto servicio:::::::::..')
              console.log(familia)

              console.log(opiniones.catProductoServicioUniverse)
              //get family products filtered by family id
              const listProductoServicio = opiniones.catProductoServicioUniverse.filter(item => item.familiaId === familia)   //.find(element => element.familiaId = familia);
            
            
              let arrAux=opiniones.valores[id].arrProductox;//get reference

               arrAux=[];
 
               listProductoServicio.forEach(function(item,index){

                if( !arrAux.find(x => x.value === item.value)   ){
                    arrAux.push({
                        value:item.value,
                        label:item.label
                    });
                }
                 
              });
 
               const payloadU = opiniones;
               payloadU.valores[id].arrProductox = arrAux;
               setOpiniones(payloadU);

        }
        const cargaComoboTipoUsuario = async () =>{
            floading(true)
            try {
                //console.log(sesion.token )  75?
                const resp = await vistaApi.get<TipoUsuarioResponse[]>('services/clientUserType/listActiveByClient/'+ids.clienteIdSeleccionado+'?charter='+sesion.charter,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op combo tipo usuario:::::::::::::::::::::');
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

        const cargaExigenciasTerciario= async()=>{

           if(usuario.tipo!=TipoUsuario.USER_TERCEIRO)return;
            
            floading(true)
            try {
                //console.log(sesion.token )
                //TEST parecer.parecerSeleccionado.idOpinion  -->2691
                const resp = await vistaApi.get<ExigenciasOportunityTerciario[]>('services/exigencias/list/opportunity/'+parecer.parecerSeleccionado.idOpinion+'/typeUserCli/'+sesion.tipoClientId,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op exigencias terciario:::::::::::::::::::::');
                console.log(resp.data);

               
                if(resp.data.length > 0){

                    let arrAux=opiniones.exigenciasTerciario;//get reference
                    arrAux=[];
                  
                      resp.data.forEach(function(item,index){
                        arrAux.push({
                            id:index,
                            //exigencia:'',
                            exigencia: item.titulo.length>29 ? item.titulo.toString().substring(0,29)+'...': item.titulo,
                            observacion:item.observacao === null ? '' : item.observacao.toUpperCase(),
                            tipo:item.tipoUsuarioCliente.descricao,
                            dias:item.metaDias,
                            goNoGo:0,
                            idExigencia:item.id.toString()
                        });
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

        const cargaValores = async()=>{

            if(usuario.tipo!=TipoUsuario.USER_TERCEIRO)return;
             
             floading(true)
             try {
                 //console.log(sesion.token )
                 //TEST   -->2691
                 const resp = await vistaApi.get<ValoresResponse[]>('services/oportunityProductService/list/'+parecer.parecerSeleccionado.idOpinion+'/'+sesion.contratoId,{
                     headers:{
                         'Content-Type': 'application/json',
                         'Accept': 'application/json',
                         "X-Auth-Token": sesion.token
                     },
                 }, 
                 );
 
                 console.log('op valores list:::::::::::::::::::::');
                 console.log(resp.data);
 
                
                 if(resp.data.length > 0){
 
                     let arrAux=opiniones.valores;//get reference
                     arrAux=[];
                   
                       resp.data.forEach(function(item,index){


                            //get family products filtered by family id
                            const listProductoServicio = opiniones.catProductoServicioUniverse.filter(itemx => itemx.familiaId === item.familia.id.toString());
                            let arrAuxxx=opiniones.catProductoServicio;//get reference
                            arrAuxxx=[];
                
                            listProductoServicio.forEach(function(itemy,index){

                                if(   !arrAuxxx.find(x => x.value === itemy.value)   ){
                                    arrAuxxx.push({
                                        value:itemy.value,
                                        label:itemy.label
                                    });
                                }
                                
                            });






                         arrAux.push({
                            id:index,
                            idValor:item.id.toString(),
                            go: false,
                            motivo:item.motivoParecer===null ? '' : item.motivoParecer.toString(),
                            lote:item.lote.toString(),
                            item:item.item.toString(),
                            qtde:item.quantidade.toString(),
                            familia:item.familia.id.toString(),
                            productoServicio:item.produtoServico==null ? '' : item.produtoServico.id.toString(),
                            productoServicioId:item.produtoServico==null ? '' :  item.produtoServico.id.toString(),
                            valorinicial:item.valorInicial.toString(),
                            valorFinal:item.valorFinal===null ? '0' : item.valorFinal.toString(),
                            justificativa:'',
                            colapsado:true,
                            arrProductox:arrAuxxx
                         });
                        });
 

                     console.log("asignando datos");
                     const payload = opiniones;
                     payload.valores = arrAux;
                     setOpiniones(payload);
 
                 }else{
                     const payload = opiniones;
                     payload.valores = [];
                     setOpiniones(payload);
                 }
            
                 floading(false)
             } catch (error) {
                 console.log('error al consultar valores list terciario')
                 console.log(error);
                 floading(false)
             }
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
  
        const isFormExigenciasTerciarioValid=()=>{
            
                    let bFlag=true;
                    opiniones.exigenciasTerciario.forEach(function(item,index){
                        if(item.goNoGo===0){
                            bFlag=false;
                        }
                        
                       });

                      
            return bFlag;
        }

        const isAllParecerOK=()=>{
            
            return( isFormExigenciasTerciarioValid() &&  isFormParecerValid() &&  opiniones.valoresAllValid);
        }

        const isFormValoresValid = ()=>{
            console.log('validando form valores...')
            var BreakException= {};

            let bFlag=true;
            try{
            opiniones.valores.forEach(function(item:OpinionesValores,index){

                if(opiniones.allDisabledforNoGo || !opiniones.allDisabledforNoGo){
                    bFlag = true;
                }else{
                    if(item.motivo === null) bFlag = false;
                    if(item.motivo != null && item.motivo.trim() ==='') bFlag = false;
                    
                    throw BreakException;
                 
                }
                if(item.go === false && !opiniones.allDisabledforNoGo){ 

                     if(item.motivo === null){ bFlag = false; throw BreakException;}
                     if(item.motivo!= null && item.motivo.trim() ===''){ bFlag = false; throw BreakException;}
                    
                   
                }
                

                if(item.lote === null) bFlag = false;
                if(item.lote != null && item.lote.trim() ==='') {bFlag = false;throw BreakException;}
               

                if(item.item === null) bFlag = false;
                if(item.item != null && item.item.trim() ==='') {bFlag = false;throw BreakException;}
                

                if(item.familia === null) bFlag = false;
                if(item.familia != null && item.familia.trim() ==='') {bFlag = false;throw BreakException;}
                

                if(item.productoServicio === null) bFlag = false;
                if(item.productoServicio != null && item.productoServicio.trim() ==='') {bFlag = false;throw BreakException;}
                

                if(item.valorinicial === null) bFlag = false;
                if(item.valorinicial != null && item.valorinicial.trim() ==='') {bFlag = false;throw BreakException;}
               

                if(item.valorFinal === null) bFlag = false;
                if(item.valorFinal != null && item.valorFinal.trim() ==='') {bFlag = false;throw BreakException;}
                

                // if(item.justificativa === null) bFlag = false;
                // if(item.justificativa != null && item.justificativa.trim() ===''){ bFlag = false;throw BreakException;}
               
            });
            }catch(e){
                  console.log('Saliendo por catch')
            }
           
           console.log(bFlag)
            const payload= opiniones;
            payload.valoresAllValid=bFlag;
            setOpiniones(payload);

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
                            "tipoExigenciaId": parseInt(item.tipoExigencia), 
                            "tipoUsuarioClienteId":parseInt(item.tipoUsuario),
                            "titulo": item.descripcion 
                        });
                    }
                  });
                console.log('paquete enviando...saveExigencias')

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
                Toast.show({type: 'ko',props: { mensaje: 'Error al comunicarse con el servidor. [/saveExigency]' }});
                floading(false)
                return false;
            }
        }

        const saveExigenciaTerciario = async()=>{

        }

        const saveParecerTerciario = async () =>{
            try {
                floading(true)
                const payload = opiniones;
                
                console.log('payload.exigenciasTerciario---------------------------')
                console.log(payload.exigenciasTerciario);
                let oportunidadeExigencia=[];
                for (const obj of payload.exigenciasTerciario) {
                    oportunidadeExigencia.push({
                       id: obj.idExigencia==''? 0 : parseInt(obj.idExigencia),
                       status:obj.goNoGo===1 ? 'S' : 'N'
                    });
                }


                

                console.log('payload.parecer---------------------------')
                console.log(payload.parecer);


                console.log('payload.valores---------------------------')
                console.log(payload.valores);
                let valores=[];
                for (const obj of payload.valores) {

                    valores.push({
                        "id": parseInt(obj.idValor),
                        "motivoParecerId": null,//always null
                        "familiaId": parseInt(obj.familia),
                        "produtoId": parseInt(obj.productoServicio),  //parseInt(obj.productoServicioId),
                        "observacao": obj.justificativa, //go --> null
                        "valorInicial":parseFloat( obj.valorinicial),
                        "valorFinal": parseFloat(obj.valorFinal),
                        "parecerItem": null,//always null
                    });
                }
                console.log('---------------------------')
      

     
            
            let payloadParecer={
                "motivoParecerId": payload.parecer.motivo =='' ? null : payload.parecer.motivo, //go --> null
                "justificativa": payload.parecer.justificacion,
                "parecer":payload.parecer.estatusGO === 1 ? 'GO': 'NO_GO', //"NO_GO",
                "valores": valores,
                "importExportInput": null,//always null
                "exibeAbaValor": "S",
                "collaboratorUser": null,//always null
                "oportunidadeExigencia": oportunidadeExigencia,
                "usuarioId": parseInt(parecer.parecerSeleccionado.usuarioId),
                "parecerId":  parseInt(parecer.parecerSeleccionado.parecerId),
                "oportunidadesProdutosServicos": valores,
                "lote": [],
                "oportunidadeId": parseInt(parecer.parecerSeleccionado.idOpinion),
                "charter": sesion.charter
              }

             console.log('Paquete enviado parecer save');
             console.log(payloadParecer)
                      
                const resp = await vistaApi.post<any>('/services/opportunity/userOpinion/save',payloadParecer, {
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
                //go to list parecer
                goListParecer();

            } catch (error) {
                console.log(JSON.stringify(error.response.data.message));
                
                const payloadx= flags;
                payloadx.isLoading=false;
                setFlags(payloadx);
                console.log('error al guardar Parecer');
                Toast.show({type: 'ko',props: { mensaje: error.response.data.message }});
                floading(false)
                return false;
            }
        }

        const callValoresWs= async(valoresAux:OpinionesRequest)=>{
            try{
                console.log('enviando real::::');
                console.log(valoresAux)
                const resp = await vistaApi.post<OpinionesRequest>('/services/opportunity/userOpinion/save',valoresAux, {
                    headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "X-Auth-Token": sesion.token
                }
                });

                console.log('valores guardadas');
                console.log(resp.data);

                Toast.show({type: 'ok', props: { mensaje: 'Valores guardado' }});
                floading(false)

            }catch(error){
                console.log(JSON.stringify(error));

                const payloadx= flags;
                payloadx.isLoading=false;
                setFlags(payloadx);
                console.log('error al guardar valores');
                Toast.show({type: 'ko',props: { mensaje: 'Error al comunicarse con el servidor. [/userOpinion/save]' }});
                floading(false)

            }
        }

        const goListParecer= ()=>{

            ids.idOpinionSeleccionado!='' ? setTabSelectedOld('Parecer'):setTabSelectedOld(tabSelected);

            const payload= flags;
            payload.verDetalleAgenda=false;
            setFlags(payload);

            setTabSelected(tabModule)
             
            const payload1 = ids;
            payload1.idOpinionBusqueda= '';
            payload1.idOpinionSeleccionado='';
            payload1.idMenuOpinionSelected=1;
            setIds(payload1);

            const payload2 = menuOpiniones;
            payload2.forEach(function(part, index) {
                   payload2[index].estatus=0;  
            });

            payload2[0].estatus=1;
            setMenuOpiniones(payload2);

            getListParecerTerciario();
        }

       


        //exposed objets 
        return {
            getListParecerColaborador,getListParecerTerciario,onChangeSearch,cargaComoboTipo,ajustaBorrado,
            saveExigencias,cargaComoboDescripcion,cargaComoboTipoUsuario,isFormParecerValid,formExigenciasValid,
            saveParecerTerciario,cargaExigenciasTerciario,isFormExigenciasTerciarioValid,saveExigenciaTerciario,
            cargaComboMotivo,getListParecerRealizadoTerciario,isFormValoresValid,cargaComboFamilia,cargaValores,
            cargaComboProductoServicioUniverse,asignaProductoServicio,isAllParecerOK,goListParecer
        }
}
        

