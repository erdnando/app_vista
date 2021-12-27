

import { useContext, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';



export const useLogin =  () => {
    const { setEmail,email,setPassword, password,isLogedIn, setIsLogedIn ,isAlertLoginVisible, setIsAlertLoginVisible} = useContext( GeneralContext )
   // const [ passwordVisible, setPasswordVisible ] = useState<boolean>(true);
   // const [ alertVisible, setAlertVisible ] = useState<boolean>(false);

        const onChangeEmail = async (email:string) =>{
            console.log(email);
            setIsAlertLoginVisible(false);
            console.log(isAlertLoginVisible===true? 'visible': 'no visible')
            setEmail(email);
         
        }

        const onChangePassword = async (password:string) =>{
            setIsAlertLoginVisible(false);
            setPassword(password);
            
        }

        // const setPassVisible = (valor:boolean) =>{
        //   //  setAlertVisible(false);
        //     setPasswordVisible(valor);
        // }
        

        const validarLogin = async() =>{
            //add logic to validate
            if(password ==='12345' && email === 'erdnando@gmail.com'){
                setIsLogedIn(true);
                setIsAlertLoginVisible(false);
                return true;
            }
            else{
                setIsLogedIn(false);
                setIsAlertLoginVisible(true);
                return false;
            }
        }
        
        
        //exposed objets 
        return {
            onChangeEmail,onChangePassword,validarLogin,
        }
}
