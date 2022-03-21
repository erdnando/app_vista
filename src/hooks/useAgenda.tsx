import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import Toast from 'react-native-toast-message';
import { TipoUsuario } from '../models/Usuario';
import { AgendaItem } from '../models/AgendaItem';
import { OpportunityCustomFindById } from '../models/response/OpportunityCustomFindById';

export const useAgenda =  () => {

        const { ids ,flags,setFlags, sesion, agenda ,setAgenda,usuario } = useContext( GeneralContext );
   
        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoadingParecer= valor;
            payload.isLoadingAgenda=valor;
            setFlags(payload);
        }

        const floadingMonth=(valor:boolean)=>{
            const payload= flags;
            payload.isLoadingMonthAgenda= valor;
            setFlags(payload);
        }

        

      
        const lastday = (anio:number,month:number) =>{
            return  new Date(anio, month, 0).getDate();
            }

        const processCalendar = async (todayAgenda:Date) =>{

               console.log('procesando mes::::::::')
               console.log(todayAgenda)

               let mesn =  (parseInt(todayAgenda.getMonth().toString())+1 );
               let mess = mesn<10 ? '0'+mesn : mesn.toString()

               console.log('mess obtenido::::::::')
               console.log(mess)

               var yyyy = todayAgenda.getFullYear();
               let ultimodia = lastday(yyyy,mesn)
               
               let fechaIni = yyyy +'-'+mess+'-'+'01';
               let fechaFin = yyyy+'-'+mess+'-'+ultimodia;
               let urlString='';
               console.log('fecha ini-fin obtenido::::::::')
               console.log(fechaIni);
               console.log(fechaFin);




               try {
              //  floading(true)
                if(usuario.tipo==TipoUsuario.USER_TERCEIRO){//si es terciario
                    console.log('terciario')
                   urlString='services/calendar/list?dataCertameInicio='+fechaIni+'&dataCertameFim='+fechaFin+'&charter='+sesion.charter+'&colaboradorId=0'+'&clienteId='+sesion.clienteId;
                   console.log(urlString)
                }else{
                   urlString='services/calendar/list?dataCertameInicio='+fechaIni+'&dataCertameFim='+fechaFin+'&charter='+sesion.charter+'&colaboradorId='+sesion.colaboradorId;
                   console.log('colaborador')
                   console.log(urlString)
                }
               
                //           //test
                //          // urlString='services/calendar/list?colaboradorId=5&dataCertameInicio=2022-03-20&dataCertameFim=2022-03-26&charter=1'
               
                    const resp = await vistaApi.get<any>(urlString,{
                    headers:{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            "X-Auth-Token": sesion.token
                        },
                    }, 
                    );
                     console.log('op lista agenda:::::::::::::::::::::');
                     console.log(resp.data);

               
               // console.log(resp.data);
                const objx = JSON.parse(JSON.stringify(resp.data));
                
                floading(false)
                
               
            } catch (error) {
                console.log('error al consultar agenda')
               // console.log(error.response.data.message)
                //Toast.show({type: 'ko',props: { mensaje: error.response.data.message}});
                floading(false)
            }
            }
        
        const getMonthAgenda = async (todayAgenda:Date) =>{
            //floading(true)
            floadingMonth(true)

            //var today =  new Date();
            console.log('on getMonthAgenda ::::::::::::::::::::::::')
            console.log(todayAgenda)
            let mesn =  (parseInt(todayAgenda.getMonth().toString())+1 );
            let mess = mesn<10 ? '0'+mesn : mesn.toString()
           
            var yyyy = todayAgenda.getFullYear();
            let ultimodia = lastday(yyyy,mesn)
            console.log(yyyy +'-'+mess+'-'+'01');
            console.log(yyyy+'-'+mess+'-'+ultimodia);
            let fechaIni = yyyy +'-'+mess+'-'+'01';
            let fechaFin = yyyy+'-'+mess+'-'+ultimodia;
            let urlString='';
            
                             //services/calendar/list?colaboradorId=5&dataCertameInicio=2022-03-20&dataCertameFim=2022-03-26&charter=1
            try {
                if(usuario.tipo==TipoUsuario.USER_TERCEIRO){//si es terciario
                    console.log('terciario')
                   urlString='services/calendar/list?dataCertameInicio='+fechaIni+'&dataCertameFim='+fechaFin+'&charter='+sesion.charter+'&colaboradorId=0'+'&clienteId='+sesion.clienteId;
                   console.log(urlString)
                }else{
                   urlString='services/calendar/list?dataCertameInicio='+fechaIni+'&dataCertameFim='+fechaFin+'&charter='+sesion.charter+'&colaboradorId='+sesion.colaboradorId;
                   console.log('colaborador')
                   console.log(urlString)
                }
               
                          //test
                         // urlString='services/calendar/list?colaboradorId=5&dataCertameInicio=2022-03-20&dataCertameFim=2022-03-26&charter=1'
                const resp = await vistaApi.get<any>(urlString,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op lista agenda:::::::::::::::::::::');
                console.log(resp.data);
                const objx = JSON.parse(JSON.stringify(resp.data));
                
                
                let arrResponse = [{}];
                arrResponse=[];

                Object.getOwnPropertyNames(objx).forEach(function(val, idx, array) {
    
                    let arr= JSON.parse(JSON.stringify(objx[val])) as AgendaItem[];
  
                    arr.forEach(function(item,index){

                        arrResponse.push( { 
                            val,
                            "cliente":item.cliente, 
                            "dataCertame" : item.dataCertame,
                            "horaCertame" : item.horaCertame,
                            "oportunidadeId" : item.oportunidadeId,
                            "orgao" : item.orgao,
                            "parecerEstrategico" : item.parecerEstrategico,
                            "plataforma" : item.plataforma,
                            "registroPreco" : item.registroPreco,
                            "status" : item.status,
                            "statusEstrategico" : item.statusEstrategico,
                            "statusJuridico" : item.statusJuridico,
                            });
                    });
                  });

                 if(arrResponse.length > 0){

                     let arrAux=agenda.markedDates;//get reference
                     arrAux={};
   
                     var stringMarkedDates={};
                     const red = {key: 'red', color: 'red', selectedDotColor: 'red'};
                     const green = {key: 'green', color: '#48e879', selectedDotColor: '#48e879'};
                     const yellow = {key: 'yellow', color: '#f4ff35', selectedDotColor: '#f4ff35'};
                     const grey = {key: 'grey', color: '#838892', selectedDotColor: '#838892'};
                     const black = {key: 'black', color: '#454A53', selectedDotColor: '#454A53'};
                     let colorDia = {};
                     let textButton=''
                     
                     let coloresExistentes=[{}];
                     let detailItem=[{}];
                   //  coloresExistentes=[];

                     arrResponse.forEach(function(item,index){

                       // console.log(item.val);
                        
                         if( item.parecerEstrategico=='G' && item.statusEstrategico=='F') (colorDia= green , textButton='PARECER GO');        //GG
                         else if( item.parecerEstrategico==null && item.statusEstrategico=='P') (colorDia= yellow, textButton='AGUARDANDO PARECER');
                         else if( item.parecerEstrategico=='N' && item.statusEstrategico=='P') (colorDia= red,  textButton='PARECER NO GO');
                         else if( item.status=='F') (colorDia= grey, textButton='FINALIZADA');
                         else ( colorDia= black, textButton='X');

                         if( stringMarkedDates[item.val]){
                             //color existente, lo va acumulando
                            coloresExistentes.push(colorDia)
                            detailItem.push(item)
                            stringMarkedDates[item.val] = { dots: coloresExistentes,selected: true,selectedColor: 'transparent', selectedTextColor:'black',detailItem:detailItem,textButton:textButton }
                         }else{
                             //si es la 1a vez, lo agrega
                            coloresExistentes=[];
                            detailItem=[];
                            coloresExistentes.push(colorDia)
                            detailItem.push(item)
                            stringMarkedDates[item.val] = { dots: coloresExistentes,selected: true,selectedColor: 'transparent', selectedTextColor:'black',detailItem:detailItem,textButton:textButton }
                            
                        }
                         
                        });
        
                   console.log("asignando datos");
                   const payload= agenda;
                   payload.markedDates= stringMarkedDates;
                   setAgenda(payload);
                  // console.log('---------------------------------------final');
                  // console.log(agenda)
                  // floading(false)
                   floadingMonth(false)

                }else{
                    const payload= agenda;
                    payload.markedDates= [];
                    setAgenda(payload);
                }
            
               // Toast.show({type: 'ok',props: { mensaje: 'Datos cargados' }});
               floadingMonth(false)
            } catch (error) {
                console.log('error al consultar agenda')
               // console.log(error);
                console.log(error.response.data.message)
               // Toast.show({type: 'ko',props: { mensaje: error.response.data.message}});
               floadingMonth(false)
            }
        }

        const loadResumo=()=>{

            getResumoTab();
            getInformacionesTab();
            getDocumentosTab();
        }


        const getInformacionesTab = async () =>{
            try {
                    //agenda.selectedOportunidadId
                    const resp = await vistaApi.get<OpportunityCustomFindById>('/services/opportunityCustom/findById/'+agenda.selectedOportunidadId+'/'+sesion.clienteId+'?charter='+ sesion.charter+'&colaboradorId=0',{
                        headers:{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            "X-Auth-Token": sesion.token 
                        },
                    }, 
                    );

                    console.log('op resumo:::::::::::::::::::::');
                    console.log(resp.data);

                    
                    if(resp.data.razaoSocialCliente !== undefined){
                        console.log("asignando datos");
                        const payload= agenda;
                        payload.resumo= resp.data;
                        setAgenda(payload);
                    }
                    floading(false)

            }catch(error){
                console.log('error al consultar OpportunityCustomFindById')
                console.log(error);
               // floading(false)
            }
        }

        const getResumoTab = async () =>{
            try {
                    //agenda.selectedOportunidadId
                    const resp = await vistaApi.get<OpportunityCustomFindById>('/services/opportunityCustom/findById/'+agenda.selectedOportunidadId+'/'+sesion.clienteId+'?charter='+ sesion.charter+'&colaboradorId=0',{
                        headers:{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            "X-Auth-Token": sesion.token 
                        },
                    }, 
                    );

                    console.log('op resumo:::::::::::::::::::::');
                    console.log(resp.data);

                    
                    if(resp.data.razaoSocialCliente !== undefined){
                        console.log("asignando datos");
                        const payload= agenda;
                        payload.resumo= resp.data;
                        setAgenda(payload);
                    }
                    floading(false)

            }catch(error){
                console.log('error al consultar OpportunityCustomFindById')
                console.log(error);
               // floading(false)
            }
        }

        const getDocumentosTab = async () =>{
            try {
                    //agenda.selectedOportunidadId
                    const resp = await vistaApi.get<DocumentosAgenda[]>('/services/clientDocument/list/opportunity/'+agenda.selectedOportunidadId,{
                        headers:{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            "X-Auth-Token": sesion.token 
                        },
                    }, 
                    );

                    console.log('op documentos:::::::::::::::::::::');
                    console.log(resp.data);

                    
                    if(resp.data.length>0){
                        console.log("asignando datos");
                        const payload= agenda;
                        payload.documentos= resp.data;
                        setAgenda(payload);
                    }
                    floading(false)

            }catch(error){
                console.log('error al consultar OpportunityCustomFindById')
                console.log(error);
               // floading(false)
            }
        }
       


        //exposed objets 
        return {
            getMonthAgenda,loadResumo,processCalendar,floadingMonth
        }
}
        

