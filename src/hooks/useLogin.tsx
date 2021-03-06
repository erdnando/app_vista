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
        const { existsNotification,notificationListByLogin } = useNotificaciones(); 
        const [ passwordVisible, setPasswordVisible ] = useState<boolean>(true);
        const [ passwordVisibleN1, setPasswordVisibleN1 ] = useState<boolean>(true);
        const [ passwordVisibleN2, setPasswordVisibleN2 ] = useState<boolean>(true);

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
            // const payloadx= flags;
            // setFlags(payloadx);
            const payload= usuario;
            payload.password=password;
            setUsuario(payload);
        }

        const onChangePasswordN1 = async (password:string) =>{
           
            const payload= usuario;
            payload.nuevoPassword1=password;
            setUsuario(payload);
        }

        const onChangePasswordN2 = async (password:string) =>{
           
            const payload= usuario;
            payload.nuevoPassword2=password;
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
                notificationListByLogin();
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
 
                Toast.show({type: 'ko',props: {mensaje:error.response.data.message} });
               
                return false;
            }
            
        }

        const validarLogin = () =>{

            console.log('validando email');
            //TODO add logic to validate
            var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if(!usuario.email.trim().match(mailformat)){
                    console.log('email invalido');
                    Toast.show({type: 'ko',props: { mensaje: 'Email no valido' }});
                    return false;
            }else{
                console.log('valida email on ws');
                return authLogin();
            }
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

        const changePassword = async()=>{

            

            try {

                floading(true)
                console.log('changePassword..')
                console.log(usuario.email)
                console.log(usuario.password)
                console.log(usuario.nuevoPassword1)
                const resp = await vistaApi.post<any>('/services/changePassword',{  
                    "login": usuario.email,
                    "senhaAtual": usuario.password,
                    "senhaNova": usuario.nuevoPassword1 }, {
                                    headers:{
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    "X-Auth-Token": sesion.token
                                },
                });

                console.log(resp);

                const payloadx= usuario;
                payloadx.password=usuario.nuevoPassword1;
                setUsuario(payloadx);
            
    
                    floading(false)
                    Toast.show({type: 'ok',props: { mensaje: 'Contrasena actualizada' }});
                    return true;
                
            } catch (error) {
                console.log('changePassword error..')
                console.log(JSON.stringify(error));

                const payloadx= flags;
                payloadx.isLogedIn=false;
                setFlags(payloadx);
                
                floading(false)
                Toast.show({type: 'ko',props: {mensaje:'Error al actualizar contrasena. [/changePassword]'} });
               
                return false;
            }


            
        }
        
        
        //exposed objets 
        return {
            onChangeEmail,validarLogin,resetContrasena,setPasswordAux,setEmailAux, 
            onChangePassword,onChangePasswordN1,onChangePasswordN2,
            passwordVisible, setPasswordVisible,
            passwordVisibleN1, setPasswordVisibleN1,
            passwordVisibleN2, setPasswordVisibleN2,changePassword,
        }
}
