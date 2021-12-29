import React from 'react'
import { createContext } from 'react';
import { tipoUsuario } from '../models/enums';



interface GeneralState{
    //properties
    tipoUsuario:tipoUsuario,
    email:string,
    password:string,
    isLogedIn: boolean,
    isAlertLoginVisible:boolean,
    resultadosBusquedaVisible:boolean,
    //functions/methods
    setEmail: (email:string)=>void,
    setPassword: (password:string)=>void,
    setIsLogedIn: (isLogedIn: boolean)=>void,
    logOut: ()=>void,
    setIsAlertLoginVisible: (isAlertLoginVisible:boolean) =>void;
    setTipoUsuario: (tipoUsuario: tipoUsuario) => void;
    setResultadosBusquedaVisible:(resultadosBusquedaVisible:boolean)=>void;
}


const GeneralContext = React.createContext({} as GeneralState);

class GeneralProvider extends React.Component{
    
    state = {
        tipoUsuario:tipoUsuario.NONE,
        email:'',
        password:'',
        isLogedIn: false,
        isAlertLoginVisible:false,
        resultadosBusquedaVisible:false
    }

    setTipoUsuario = (tipoUsuario: tipoUsuario) =>{
        this.setState({tipoUsuario});
    }

    setEmail = (email: string) =>{
        this.setState({email});
    }

    setPassword = (password: string) =>{
        this.setState({password});
    }

    setIsLogedIn = (isLogedIn:boolean) =>{
       this.setState({isLogedIn});
    }

    setIsAlertLoginVisible = (isAlertLoginVisible:boolean) =>{
        this.setState({isAlertLoginVisible});
     }


    logOut = () =>{
        this.setIsLogedIn(false);
        this.setEmail('');
        this.setPassword('');
        this.setIsAlertLoginVisible(false);
    
     }

     setResultadosBusquedaVisible=(resultadosBusquedaVisible:boolean) =>{
        this.setState({resultadosBusquedaVisible});
     }

     render(): React.ReactNode {
         return(
           <GeneralContext.Provider
             value={{
                    //properties
                    tipoUsuario : this.state.tipoUsuario,
                    email : this.state.email,
                    password : this.state.password,
                    isLogedIn: this.state.isLogedIn,
                    isAlertLoginVisible: this.state.isAlertLoginVisible,
                    resultadosBusquedaVisible: this.state.resultadosBusquedaVisible,
                    //functions/methods
                    setEmail: this.setEmail,
                    setPassword: this.setPassword,
                    setIsLogedIn: this.setIsLogedIn,
                    logOut: this.logOut,
                    setIsAlertLoginVisible: this.setIsAlertLoginVisible,
                    setTipoUsuario: this.setTipoUsuario,
                    setResultadosBusquedaVisible: this.setResultadosBusquedaVisible,
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}


export { GeneralProvider, GeneralContext }