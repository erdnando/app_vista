import { useContext, useState } from 'react';
import { TipoUsuario } from '../models/Usuario';
import { GeneralContext } from '../state/GeneralProvider';
//import { tipoUsuario } from '../models/enums';
import vistaApi from '../api/vista';
import { AuthLogin } from '../models/response/AuthLogin';
import Toast from 'react-native-toast-message';
import { useNotificaciones } from './useNotificaciones';
import { ErrorResponse } from '../models/ErrorResponse';


export const useLogin =  () => {

  

        const { flags, usuario,setUsuario,setFlags,menuOpiniones,setMenuOpiniones,sesion,setSesion } = useContext( GeneralContext );
        const { existsNotification } = useNotificaciones(); 
        const [ passwordVisible, setPasswordVisible ] = useState<boolean>(true);

        const floading=(valor:boolean)=>{
            const payload= flags;
            payload.isLoading= valor;
            
            setFlags(payload);
        }

        const onChangeEmail = async (email:string) =>{
            
            const payloadx= flags;
            //payloadx.isAlertLoginVisible=false;
            setFlags(payloadx);

            const payload= usuario;
            payload.email=email;
            setUsuario(payload);
        }

        const onChangePassword = async (password:string) =>{
            
            const payloadx= flags;
            //payloadx.isAlertLoginVisible=false;
            setFlags(payloadx);

            const payload= usuario;
            payload.password=password;
            setUsuario(payload);
            
        }
        
        const setPasswordAux = (password:string)=>{
            const payload= usuario;
            payload.password=password;
            setUsuario(payload);
            //setPassword(password);
        }

        const setEmailAux = (email:string)=>{

            const payload= usuario;
            payload.email=email;
            setUsuario(payload);

            //setEmail(email);
        }

        const authLogin = async () =>{

            try {

                floading(true)
                console.log('login..')
                const resp = await vistaApi.post<AuthLogin>('/auth/login',{}, {
                                    headers:{
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                },auth:{
                                    username : usuario.email.trim().toLowerCase(),
                                    password : usuario.password.trim()
                                },
                });

                console.log(resp);

                setTimeout(
                    () => { 
                        const payloadx= flags;
                        payloadx.isLogedIn=true;
                        payloadx.isLoading=false;
                        setFlags(payloadx);
                    },
                    1000
                  )   

                //TODO to map menues
                console.log(resp.data.token);
          
                const payloads= sesion;
                payloads.token=resp.data.token;
                payloads.clienteId=resp.data.info.clienteId === null ? '0':resp.data.info.clienteId.toString() ,//148,//112; //resp.data.info.clienteId; //XXX
                payloads.tipoClientId=resp.data.info.tipoUsuarioCliente === null ? 105 : resp.data.info.tipoUsuarioCliente.id;
                payloads.charter=resp.data.info.charter;
                payloads.colaboradorId=resp.data.info.idInstancia;
                payloads.contratoId=resp.data.info.contratoId;
                //payloads.menu=resp.data.info.menuSistema;
                setSesion(payloads);
               
                existsNotification()
                if(resp.data.tipoUsuario==='USUARIO_TERCEIRO'){
                   
    
                    const payload= usuario;
                    payload.tipo=TipoUsuario.USER_TERCEIRO;
                    
                    setUsuario(payload);
    
                    const payload1= menuOpiniones;
                    payload1[3].visible = true;//valores visible
                    setMenuOpiniones(payload1);
                    floading(false)
                    Toast.show({type: 'ok',props: { mensaje: 'Bienvenido terciario' }});
                    return true;
                }else if(resp.data.tipoUsuario==='COLABORADOR'){
                   
                    const payload= usuario;
                    payload.tipo=TipoUsuario.COLABORADOR;
                    setUsuario(payload);
    
                    const payload1= menuOpiniones;
                    payload1[3].visible = false;//valores hidden
                    payload1[2].visible = false;//pareceres realizado hidden
                    setMenuOpiniones(payload1);
                    floading(false)
                    Toast.show({type: 'ok',props: { mensaje: 'Bienvenido colaborador' }});

                    return true;
                }else{
                    floading(false)
                }


                
                console.log(resp);
                console.log(resp.data.tipoUsuario);
            } catch (error) {
                console.log('login error..')
                console.log(error);

                const payloadx= flags;
                payloadx.isLogedIn=false;
                setFlags(payloadx);
                
                floading(false)
                //let errorx: ErrorResponse;
                //let errorx = JSON.stringify(error);
                //let obj = await JSON.parse(JSON.stringify(error));
                // console.log('------------------------')
                // console.log(obj.message);
                //  var msg = obj.message
                // console.log('------------------------')
                Toast.show({type: 'ko',props: {mensaje:'Error al comunicarse con el servidor. [/auth/login]'} });
               
               
                
                return false;
            }
            
        }

        const validarLogin = () =>{

            const payloadx= flags;
            payloadx.isLoading=true;
            setFlags(payloadx);

            //TODO add logic to validate
           
            return authLogin();

        }

        const resetContrasena = async() =>{
            
            //TODO add logic to send reset by email
            return true;
        }

        const setPassVisible = (valor:boolean) =>{
            setPasswordVisible(valor);
        }

        const asignaTipoUsuario = (tipo: TipoUsuario) =>{

            const payload= usuario;
                payload.tipo=tipo;
                setUsuario(payload);

           // setTipoUsuario(tipo);
        }
        
        
        //exposed objets 
        return {
            onChangeEmail,onChangePassword,validarLogin,resetContrasena,setPasswordAux,
            setEmailAux, passwordVisible, setPasswordVisible
        }
}
