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

        const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'red'};
        const massage = {key: 'massage', color: '#68AABF', selectedDotColor: '#68AABF'};
        const workout = {key: 'workout', color: '#FDBE0F', selectedDotColor: '#FDBE0F'};
        const eventox = {key: 'eventox', color: '#FF9029', selectedDotColor: '#FF9029'};
    

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
               // console.log(resp.data);
                const objx = JSON.parse(JSON.stringify(resp.data));
                

                //const {  cliente } = objx;
               // console.log(Object.getOwnPropertyNames(objx).sort());
                //["2022-03-09", "2022-03-10", "2022-03-11", "2022-03-14", "2022-03-18"]
                let arrResponse = [{}];
                arrResponse=[];

              
                Object.getOwnPropertyNames(objx).forEach(function(val, idx, array) {
                   // console.log(val + " -> " + JSON.stringify(objx[val]));
                   // console.log("---------------")
                    let arr= JSON.parse(JSON.stringify(objx[val])) as AgendaItem[];
                    let cliente = arr
                    //console.log(arr);
                   // console.log('---------------------------------------');
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
                  console.log('---------------------------------------xxx');
                  console.log(arrResponse);


                 if(arrResponse.length > 0){

                     let arrAux=agenda.markedDates;//get reference
                     arrAux={};
                       // payload.markedDates={
                //     '2022-02-11': {dots: [vacation, eventox, massage], selected: true,selectedColor: 'transparent', selectedTextColor:'black' },
                //     '2022-02-12': {dots: [vacation, eventox], selected: true,selectedColor: 'transparent', selectedTextColor:'black'},
                //     '2022-02-21': {dots: [vacation, eventox,massage,workout], selected: true,selectedColor: 'transparent', selectedTextColor:'black'},
                //   }



                     let stringMarkedDates="";
                     arrResponse.forEach(function(item,index){
                        console.log('---------------------------------------yyy');
                        // console.log(item)
                         stringMarkedDates+= "'"+item.val+"'" + ": { dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}],"+ "selected: true,selectedColor: 'transparent', selectedTextColor:'black' }, "
                      
                        });
                        console.log('---------------------------------------armado');
                       // console.log(JSON.parse(JSON.stringify({stringMarkedDates})))


                     console.log("asignando datos");
                   //  console.log(arrAux)
                   const payload= agenda;
                   payload.markedDates= JSON.parse(JSON.stringify(stringMarkedDates));

                //       payload.markedDates={
                //     '2022-03-11': {dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}], selected: true,selectedColor: 'transparent', selectedTextColor:'black' },
                //     '2022-03-12': {dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}], selected: true,selectedColor: 'transparent', selectedTextColor:'black'},
                //     '2022-03-21': {dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}], selected: true,selectedColor: 'transparent', selectedTextColor:'black'},
                //   }

                //'2022-03-09': { dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}],selected: true,selectedColor: 'transparent', selectedTextColor:'black' }, '2022-03-09': { dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}],selected: true,selectedColor: 'transparent', selectedTextColor:'black' }, '2022-03-18': { dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}],selected: true,selectedColor: 'transparent', selectedTextColor:'black' }, '2022-03-14': { dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}],selected: true,selectedColor: 'transparent', selectedTextColor:'black' }, '2022-03-11': { dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}],selected: true,selectedColor: 'transparent', selectedTextColor:'black' }, '2022-03-10': { dots: [{key: 'vacation', color: 'red', selectedDotColor: 'red'}],selected: true,selectedColor: 'transparent', selectedTextColor:'black' },

                   setAgenda(payload);
                   console.log('---------------------------------------final');
                   console.log(agenda.markedDates)

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
        

