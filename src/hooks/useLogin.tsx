import { useContext, useState } from 'react';
import { TipoUsuario } from '../models/Usuario';
import { GeneralContext } from '../state/GeneralProvider';
//import { tipoUsuario } from '../models/enums';
import vistaApi from '../api/vista';
import { AuthLogin } from '../models/response/AuthLogin';


export const useLogin =  () => {

  

        const { flags, usuario,setUsuario,setFlags,menuOpiniones,setMenuOpiniones,sesion,setSesion } = useContext( GeneralContext );

        const [ passwordVisible, setPasswordVisible ] = useState<boolean>(true);
        const onChangeEmail = async (email:string) =>{
            
            const payloadx= flags;
            payloadx.isAlertLoginVisible=false;
            setFlags(payloadx);

            const payload= usuario;
            payload.email=email;
            setUsuario(payload);
        }

        const onChangePassword = async (password:string) =>{
            
            const payloadx= flags;
            payloadx.isAlertLoginVisible=false;
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


                const resp = await vistaApi.post<AuthLogin>('/auth/login',{}, {
                                    headers:{
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                },auth:{
                                    username : usuario.email.trim().toLowerCase(),
                                    password : usuario.password.trim()
                                }
                });

                console.log(resp);

                setTimeout(
                    () => { 
                        const payloadx= flags;
                        payloadx.isLogedIn=true;
                        payloadx.isAlertLoginVisible=false;
                        payloadx.isLoading=false;
                        setFlags(payloadx);
                    },
                    1000
                  )   

                //TODO to map menues
                const payloads= sesion;
                payloads.token=resp.data.token;
                payloads.clienteId=112; //resp.data.info.clienteId;
                payloads.charter=resp.data.info.charter;
                payloads.colaboradorId=resp.data.info.tipoUsuarioCliente.id

                //payloads.menu=resp.data.info.menuSistema;
                setSesion(payloads);

                if(resp.data.tipoUsuario==='USUARIO_TERCEIRO'){
                   
    
                    const payload= usuario;
                    payload.tipo=TipoUsuario.USER_TERCEIRO;
                    
                    setUsuario(payload);
    
                    const payload1= menuOpiniones;
                    payload1[2].visible = true;//valores visible
                    setMenuOpiniones(payload1);
    
                    return true;
                }else if(resp.data.tipoUsuario==='COLABORADOR'){
                   
                    const payload= usuario;
                    payload.tipo=TipoUsuario.COLABORADOR;
                    setUsuario(payload);
    
                    const payload1= menuOpiniones;
                    payload1[2].visible = false;//valores hidden
                    setMenuOpiniones(payload1);
                    return true;
                }
    
                console.log(resp);
                console.log(resp.data.tipoUsuario);
            } catch (error) {
                console.log(error);

                const payloadx= flags;
                payloadx.isLogedIn=false;
                payloadx.isAlertLoginVisible=true;
                payloadx.isLoading=false;
                setFlags(payloadx);

                console.log('credenciales invalidas');

                return false;
            }
           

        //    if(resp.data !=undefined){

        //         const payload= sesion;
        //         payload.token =resp.data.token;
        //         payload.usuario.tipo =resp.data.tipoUsuario=='USUARIO_TERCEIRO' ? TipoUsuario.USER_TERCEIRO : TipoUsuario.COLABORADOR;
        //         payload.menu =resp.data.info.menuSistema;
        //         setSesion(payload)

        //    }
            

          
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
