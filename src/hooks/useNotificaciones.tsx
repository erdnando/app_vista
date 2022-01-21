import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import { NotificationListByLogin } from '../models/response/NotificationListByLogin';
import { NotificacionByLoginAux } from '../models/response/NotificacionesByLoginAux';


export const useNotificaciones =  () => {

        const {flags,setFlags,sesion  } = useContext( GeneralContext );
        const [arrNotificaciones, setArrNotificaciones] = useState<NotificacionByLoginAux[]>(
            [ {
                "id": "1",
                "tipo": "VACIO",
                "dia": "",
                "hora": "",
                "descripcion": "Sin notificaciones",
                "color": "red",
                "background": "#F8BBBB",
                "icon": "bx_bxs-message-alt-error",
                "diaVisible": true   
              }]
            );

        //const [totalPareceres, settotalPareceres] = useState(0)

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoading= valor;
            
            setFlags(payload);
        }

        const notificationListByLogin = async () =>{

            try {
                const resp = await vistaApi.get<NotificationListByLogin[]>('/notification/listByLogin',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ 
                       "login" : sesion.clienteId,
                       "charter" : sesion.charter
                    }
                }, 
                );

                console.log('op notification/listByLogin:::::::::::::::::::::');
                console.log(resp.data);

                
                if(resp.data.length>0){


                    setArrNotificaciones([]);

                    let arrNotificacionesAux=arrNotificaciones;//get reference

                    resp.data.forEach(function(notif,index){

                        arrNotificacionesAux.push({
                            id:notif.id.toString(),
                            tipo:notif.importante != ""?'SIMPLE' : 'EVENT',
                            dia:'Hoy',
                            hora: 'Hoje. 00:00',
                            descripcion:notif.tipoMensagem.descricao,
                            color: notif.importante != ""? 'red' : 'grey',
                            background:'#F8BBBB',
                            icon:notif.importante != "" ? 'bx_bxs-message-alt-error' : 'ic_baseline-lightbulb',  //icomoon-free_hammer2
                            diaVisible:true
                        });
                        
                        
                      })

                    setArrNotificaciones(arrNotificacionesAux);
                    
                }
                
            } catch (error) {
                console.log(error);

            }
        }

        useEffect(() => {
            console.log('obteniendo notificaciones');
            floading(true)
            notificationListByLogin();
            floading(false)
           
          }, [])

       
        //exposed objets 
        return {  arrNotificaciones, notificationListByLogin ,floading,   }
}
