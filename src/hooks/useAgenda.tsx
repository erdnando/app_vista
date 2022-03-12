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
import { AgendaItem } from '../models/AgendaItem';

export const useAgenda =  () => {

        const { ids ,flags,setFlags, sesion, agenda ,setAgenda } = useContext( GeneralContext );

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoadingParecer= valor;
            
            setFlags(payload);
        }

      

        const getMonthAgenda = async () =>{
            floading(true)
            
            try {
                console.log('services/calendar/list')
                const resp = await vistaApi.get<any>('services/calendar/list?dataCertameInicio=2022-03-01&dataCertameFim=2022-03-31&clienteId=92&charter=1&colaboradorId=0',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token
                    },
                }, 
                );

                console.log('op lista agenda:::::::::::::::::::::');
    
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
                     
                     let coloresExistentes=[{}];
                   //  coloresExistentes=[];

                     arrResponse.forEach(function(item,index){

                       // console.log(item.val);
                        
                         if( item.parecerEstrategico=='G' && item.statusEstrategico=='F') colorDia= green;        //GG
                         else if( item.parecerEstrategico==null && item.statusEstrategico=='P') colorDia= yellow;
                         else if( item.parecerEstrategico=='N' && item.statusEstrategico=='P') colorDia= red;
                         else if( item.status=='F') colorDia= grey;
                         else  colorDia= black;

                         if( stringMarkedDates[item.val]){
                             //color existente, lo va acumulando
                            coloresExistentes.push(colorDia)
                            stringMarkedDates[item.val] = { dots: coloresExistentes,selected: true,selectedColor: 'transparent', selectedTextColor:'black' }
                         }else{
                             //si es la 1a vez, lo agrega
                            coloresExistentes=[];
                            coloresExistentes.push(colorDia)
                            stringMarkedDates[item.val] = { dots: coloresExistentes,selected: true,selectedColor: 'transparent', selectedTextColor:'black' }
                            
                        }
                         
                        });
        
                   console.log("asignando datos");
                   const payload= agenda;
                   payload.markedDates= stringMarkedDates;

                   setAgenda(payload);
                   console.log('---------------------------------------final');
                   console.log(agenda)

                }else{
                    const payload= agenda;
                    payload.markedDates= [];
                    setAgenda(payload);
                }
            
                Toast.show({type: 'ok',props: { mensaje: 'Datos cargados' }});
                floading(false)
            } catch (error) {
                console.log('error al consultar agenda')
                console.log(error);
                Toast.show({type: 'ko',props: { mensaje: 'Error al comunicarse con el servidor. [/agenda]'}});
                floading(false)
            }
        }


       


        //exposed objets 
        return {
            getMonthAgenda
        }
}
        

