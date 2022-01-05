import { useContext, useState } from 'react';
import { TipoUsuario } from '../models/Usuario';
import { GeneralContext } from '../state/GeneralProvider';
//import { tipoUsuario } from '../models/enums';


export const useLogin =  () => {
    const { flags, usuario,setUsuario,setFlags} = useContext( GeneralContext );

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

        const validarLogin = async() =>{

            //TODO add logic to validate

            if(usuario.password ==='12345' && usuario.email === 'colaborador'){
              
                const payloadx= flags;
                payloadx.isLogedIn=true;
                payloadx.isAlertLoginVisible=false;
                setFlags(payloadx);

                const payload= usuario;
                payload.tipo=TipoUsuario.COLABORADOR;
                setUsuario(payload);
                
                return true;
            } else if(usuario.password ==='12345' && usuario.email === 'terciario'){
             
                const payloadx= flags;
                payloadx.isLogedIn=true;
                payloadx.isAlertLoginVisible=false;
                setFlags(payloadx);



                const payload= usuario;
                payload.tipo=TipoUsuario.USER_TERCEIRO;
                setUsuario(payload);

                return true;
            }
            else{
               
                const payloadx= flags;
                payloadx.isLogedIn=false;
                payloadx.isAlertLoginVisible=true;
                setFlags(payloadx);

                console.log('credenciales invalidas');

                return false;
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
        
        
        //exposed objets 
        return {
            onChangeEmail,onChangePassword,validarLogin,resetContrasena,setPasswordAux,
            setEmailAux, passwordVisible, setPasswordVisible
        }
}
