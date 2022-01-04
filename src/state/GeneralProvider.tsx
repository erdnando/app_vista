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
    codigoBusqueda:string,
    isLoadingSearch:boolean,
    filtroCliente:string,
    filtroFechaInicial:string,
    filtroFechaFinal:string,
    isFilterCollapsed:boolean,
    isSelectorParecer:boolean,
    //functions/methods
    setEmail: (email:string)=>void,
    setPassword: (password:string)=>void,
    setIsLogedIn: (isLogedIn: boolean)=>void,
    logOut: ()=>void,
    setIsAlertLoginVisible: (isAlertLoginVisible:boolean) =>void;
    setTipoUsuario: (tipoUsuario: tipoUsuario) => void;
    setResultadosBusquedaVisible:(resultadosBusquedaVisible:boolean)=>void;
    setCodigoBusqueda: (codigoBusqueda:string)=> void;
    setIsLoadingSearch: (isLoadingSearch:boolean)=>void;
    setFiltroCliente: (filtroCliente:string)=>void;
    setFiltroFechaInicial: (filtroFechaInicial:string)=>void;
    setFiltroFechaFinal: (filtroFechaFinal:string)=>void;
    setIsFilterCollapsed: (isFilterCollapsed:boolean) =>void;
    setIsSelectorParecer: (isSelectorParecer:boolean)=>void;
}


const GeneralContext = React.createContext({} as GeneralState);

class GeneralProvider extends React.Component{
    
    state = {
        tipoUsuario:tipoUsuario.NONE,
        email:'',
        password:'',
        isLogedIn: false,
        isAlertLoginVisible:false,
        resultadosBusquedaVisible:false,
        codigoBusqueda:'',
        isLoadingSearch:false,
        filtroCliente:'',
        filtroFechaInicial:'',
        filtroFechaFinal:'',
        isFilterCollapsed:false,
        isSelectorParecer:true,
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

     setCodigoBusqueda=(codigoBusqueda:string) =>{
         this.setState({codigoBusqueda});
     }

     setIsLoadingSearch=(isLoadingSearch:boolean) =>{
         this.setState({isLoadingSearch});
     }

     setFiltroCliente=(filtroCliente:string) =>{
        this.setState({filtroCliente});
    }

    setFiltroFechaInicial= (filtroFechaInicial:string) =>{
        this.setState({filtroFechaInicial});
    }

    setFiltroFechaFinal= (filtroFechaFinal:string) =>{
        this.setState({filtroFechaFinal});
    }

    setIsFilterCollapsed= (isFilterCollapsed:boolean) =>{
        this.setState({isFilterCollapsed});
    }
    setIsSelectorParecer= (isSelectorParecer:boolean) =>{
        this.setState({isSelectorParecer});
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
                    codigoBusqueda:this.state.codigoBusqueda,
                    isLoadingSearch: this.state.isLoadingSearch,
                    filtroCliente: this.state.filtroCliente,
                    filtroFechaInicial: this.state.filtroFechaInicial,
                    filtroFechaFinal: this.state.filtroFechaFinal,
                    isFilterCollapsed: this.state.isFilterCollapsed,
                    isSelectorParecer: this.state.isSelectorParecer,
                    //functions/methods
                    setEmail: this.setEmail,
                    setPassword: this.setPassword,
                    setIsLogedIn: this.setIsLogedIn,
                    logOut: this.logOut,
                    setIsAlertLoginVisible: this.setIsAlertLoginVisible,
                    setTipoUsuario: this.setTipoUsuario,
                    setResultadosBusquedaVisible: this.setResultadosBusquedaVisible,
                    setCodigoBusqueda: this.setCodigoBusqueda,
                    setIsLoadingSearch: this.setIsLoadingSearch,
                    setFiltroCliente: this.setFiltroCliente,
                    setFiltroFechaInicial: this.setFiltroFechaInicial,
                    setFiltroFechaFinal: this.setFiltroFechaFinal,
                    setIsFilterCollapsed: this.setIsFilterCollapsed,
                    setIsSelectorParecer: this.setIsSelectorParecer,
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}


export { GeneralProvider, GeneralContext }