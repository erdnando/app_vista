import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import { tipoUsuario } from '../models/enums';


export const useLogin =  () => {
    const { setEmail,email,setPassword, password,isLogedIn, 
        setIsLogedIn ,isAlertLoginVisible, setIsAlertLoginVisible,
        setTipoUsuario} = useContext( GeneralContext );

   const [ passwordVisible, setPasswordVisible ] = useState<boolean>(true);
        const onChangeEmail = async (email:string) =>{
            //console.log(email);
            setIsAlertLoginVisible(false);
           // console.log(isAlertLoginVisible===true? 'visible': 'no visible')
            setEmail(email);
         
        }

        const onChangePassword = async (password:string) =>{
            setIsAlertLoginVisible(false);
            setPassword(password);
            
        }
        
        const setPasswordAux = (password:string)=>{
            setPassword(password);
        }

        const setEmailAux = (email:string)=>{
            setEmail(email);
        }

        const validarLogin = async() =>{

            //TODO add logic to validate

            if(password ==='12345' && email === 'colaborador'){
                setIsLogedIn(true);
                setIsAlertLoginVisible(false);
                setTipoUsuario( tipoUsuario.COLABORADOR);
                return true;
            } else if(password ==='12345' && email === 'terciario'){
                setIsLogedIn(true);
                setIsAlertLoginVisible(false);
                setTipoUsuario( tipoUsuario.USER_TERCEIRO);
                return true;
            }
            else{
                setIsLogedIn(false);
                setIsAlertLoginVisible(true);
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
            setTipoUsuario(tipo);
        }
        
        
        //exposed objets 
        return {
            onChangeEmail,onChangePassword,validarLogin,resetContrasena,setPasswordAux,setEmailAux, passwordVisible, setPasswordVisible
        }
}
