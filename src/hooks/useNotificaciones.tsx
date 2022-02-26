import { useContext } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import vistaApi from '../api/vista';
import { NotificationListByLoginAux } from '../models/response/NotificationListByLoginaux';
import Toast from 'react-native-toast-message';


export const useNotificaciones =  () => {

        const {flags,setFlags,sesion,notificaciones,setNotificaciones  } = useContext( GeneralContext );
      

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoadingNotificaciones= valor;
            
            setFlags(payload);
        }

        const existsNotification = async () =>{

            try {
               
                const resp = await vistaApi.get<any>('/notification/existsNotification?login=eder.goncalves@gmail.com&charter=2',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                }, 
                );

                console.log('op notification/existsNotification:::::::::::::::::::::');
                console.log(resp.data);

                if(resp.data===true){
                    const payload= flags;
                    payload.existsNotification= true;
                    setFlags(payload);
                }else{
                    const payload= flags;
                    payload.existsNotification= false;
                    setFlags(payload);
                }

            } catch (error) {
                console.log(error);
                Toast.show({type: 'ko',props: { mensaje: 'Error al comunicarse con el servidor. [/existsNotification]' }});
               // floading(false)
            }
        }

        const notificationListByLogin = async () =>{

            try {
                floading(true)
                //TEST
                const resp = await vistaApi.get<NotificationListByLoginAux[]>('/notification/listByLogin',{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "X-Auth-Token": sesion.token 
                    },
                   params:{ 
                       "login" : 'eder.goncalves@gmail.com',//sesion.clienteId,
                       "charter" : sesion.charter
                    }
                }, 
                );

                console.log('op notification/listByLogin:::::::::::::::::::::');
                console.log(resp.data);

               
                if(resp.data.length>0){

                    const payload= flags;
                    payload.existsNotification= true;
                    setFlags(payload);

                    let arrNotificacionesAux=notificaciones;//get reference
                    arrNotificacionesAux=[];
                    resp.data.forEach(function(notif,index){

                        arrNotificacionesAux.push({
                            id:notif.id.toString(),
                            tipo:notif.importante != ""?'SIMPLE' : 'EVENT',
                            dia:'Hoy',
                            hora:'Fecha: '+notif.dataCadastro,
                            descripcion: notif.mensagem.length>65 ? notif.mensagem.toString().substring(0,57)+'...': notif.mensagem,
                            color: notif.tipoMensagem.id == 1 ? 'red' : '#838892',
                            background:notif.tipoMensagem.id == 1 ?'#F8BBBB' : '#EDF0F5',
                            icon:notif.tipoMensagem.id == 1 ? 'bx_bxs-message-alt-error' : 'ic_baseline-lightbulb',  //icomoon-free_hammer2
                            diaVisible:true
                        });
                        
                        
                      })

                      let lastId = Math.max.apply(Math, arrNotificacionesAux.map(function(o) { return parseInt(o.id); }))
                      arrNotificacionesAux.push({
                        id:(lastId+1).toString(),
                        tipo: "checkAll",
                        dia:'',
                        hora:'Marcar Todos los mensajes',
                        descripcion:'Desea marcar todos los mensajes como leidos?',
                        color: 'black',
                        background:'white',
                        icon:'icomoon-free_hammer2',
                        diaVisible:true
                    });

                    setNotificaciones(arrNotificacionesAux);
                    
                }else{
                    let arrNotificacionesAux=notificaciones;//get reference
                    arrNotificacionesAux=[];
                    setNotificaciones(arrNotificacionesAux);
                }

                floading(false)
                
            } catch (error) {
                console.log(error);
                Toast.show({type: 'ko',props: { mensaje: 'Error al comunicarse con el servidor. [/listByLogin]' }});
                floading(false)
            }
        }
       
        //exposed objets 
        return {  notificationListByLogin ,floading,existsNotification   }
}
