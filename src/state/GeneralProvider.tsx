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
    isNotificaciones:boolean,
    tabSelected:string,
    whatsapp:string,
    telefono:string,
    direccion:string,
    mensaje:string,
    asuntoMensaje:string,
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
    setIsNotificaciones: (isNotificaciones:boolean)=>void;
    setTabSelected: (tabSelected:string)=>void;
    setWhatsapp:(whatsapp:string)=>void;
    setTelefono:(telefono:string)=>void;
    setDireccion:(direccion:string)=>void;
    setMenjase:(mensaje:string)=>void;
    setAsuntoMensaje:(mensaje:string)=>void;
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
        isNotificaciones:false,
        tabSelected:'',
        whatsapp:'(34) 99830-0082',
        telefono:'(34) 99830-0082',
        direccion:'Av. dos Vinhedos, no 20 - Cj. 4 anexo - Gravea Office - Uberlandia',
        mensaje:'',
        asuntoMensaje:'',
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

    setIsNotificaciones= (isNotificaciones:boolean) =>{
        this.setState({isNotificaciones});
    }

    setTabSelected= (tabSelected:string) =>{
        this.setState({tabSelected})
    }

    setWhatsapp=(whatsapp:string)=>{
        this.setState({whatsapp})
    }

    setTelefono=(telefono:string)=>{
        this.setState({telefono})
    }

    setDireccion=(direccion:string)=>{
        this.setState({direccion})
    }

    setMensaje=(mensaje:string)=>{
        this.setState({mensaje})
    }

    setAsuntoMensaje=(asuntoMensaje:string)=>{
        this.setState({asuntoMensaje})
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
                    isNotificaciones: this.state.isNotificaciones,
                    tabSelected: this.state.tabSelected,
                    whatsapp:this.state.whatsapp,
                    telefono:this.state.telefono,
                    direccion:this.state.direccion,
                    mensaje:this.state.mensaje,
                    asuntoMensaje:this.state.asuntoMensaje,
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
                    setIsNotificaciones: this.setIsNotificaciones,
                    setTabSelected: this.setTabSelected,
                    setWhatsapp:this.setWhatsapp,
                    setTelefono:this.setTelefono,
                    setDireccion:this.setDireccion,
                    setMenjase:this.setMensaje,
                    setAsuntoMensaje:this.setAsuntoMensaje,
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}


export { GeneralProvider, GeneralContext }