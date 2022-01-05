import React from 'react'
import { createContext } from 'react';
import { Flags } from '../models/Flags';
import { Mensajes } from '../models/Mensajes';
import { Realtorio } from '../models/Relatorio';
import { TipoUsuario, Usuario } from '../models/Usuario';


interface GeneralState{
    //properties
    usuario:Usuario,
    mensaje:Mensajes,
    relatorio:Realtorio,
    flags:Flags,
    // isLogedIn: boolean,
    // isAlertLoginVisible:boolean,
    // isLoadingSearch:boolean,
    // isNotificaciones:boolean,
    resultadosBusquedaVisible:boolean,
    codigoBusqueda:string,
    tabSelected:string,
    
    //functions/methods
    setMensaje:(mensaje:Mensajes)=>void;
    setUsuario:(usuario:Usuario)=>void;
    setRelatorio:(relatorio:Realtorio)=>void;
    setFlags:(flags:Flags)=>void;
    //setIsLogedIn: (isLogedIn: boolean)=>void,
    logOut: ()=>void,
    //setIsAlertLoginVisible: (isAlertLoginVisible:boolean) =>void;
    setResultadosBusquedaVisible:(resultadosBusquedaVisible:boolean)=>void;
    setCodigoBusqueda: (codigoBusqueda:string)=> void;
    //setIsLoadingSearch: (isLoadingSearch:boolean)=>void;
    //setIsNotificaciones: (isNotificaciones:boolean)=>void;
    setTabSelected: (tabSelected:string)=>void;

}


const GeneralContext = React.createContext({} as GeneralState);

class GeneralProvider extends React.Component{
    
    state = {
        //isLogedIn: false,
        //isAlertLoginVisible:false,
        resultadosBusquedaVisible:false,
        codigoBusqueda:'',
        //isLoadingSearch:false,
        //isNotificaciones:false,
        tabSelected:'',
        mensaje:{asunto:'', mensaje:''},
        usuario:{ 
            tipo: TipoUsuario.NONE,
            email:'',
            password:'',
            whatsapp:'(34) 99830-0082',
            telefono:'(34) 99830-0082',
            direccion:'Av. dos Vinhedos, no 20 - Cj. 4 anexo - Gravea Office - Uberlandia',},
        relatorio:{ 
            filtroCliente:'',
            filtroFechaInicial:'',
            filtroFechaFinal:'',
            isFilterCollapsed:false,
            isSelectorParecer:true,},
        flags:{
            isLogedIn: false,
            isAlertLoginVisible:false,
            isLoadingSearch:false,
            isNotificaciones:false,
        }
    }

    setMensaje=(mensaje: Mensajes)=>{
        this.setState({mensaje})
    }

    setUsuario=(usuario:Usuario)=>{
        this.setState({usuario})
    }
    setRelatorio=(relatorio:Realtorio)=>{
        this.setState({relatorio})
    }

    setFlags=(flags:Flags)=>{
        this.setState({flags})
    }
    // setIsLogedIn = (isLogedIn:boolean) =>{
    //    this.setState({isLogedIn});
    // }

    // setIsAlertLoginVisible = (isAlertLoginVisible:boolean) =>{
    //     this.setState({isAlertLoginVisible});
    //  }

     setResultadosBusquedaVisible=(resultadosBusquedaVisible:boolean) =>{
        this.setState({resultadosBusquedaVisible});
     }

     setCodigoBusqueda=(codigoBusqueda:string) =>{
         this.setState({codigoBusqueda});
     }

    //  setIsLoadingSearch=(isLoadingSearch:boolean) =>{
    //      this.setState({isLoadingSearch});
    //  }

    // setIsNotificaciones= (isNotificaciones:boolean) =>{
    //     this.setState({isNotificaciones});
    // }

    setTabSelected= (tabSelected:string) =>{
        this.setState({tabSelected})
    }

   

    logOut = () =>{
        this.setIsLogedIn(false);

        const payload= this.state.usuario;
            payload.tipo=TipoUsuario.NONE;
            payload.email='';
            payload.password='';
            this.setState({payload})


        this.setIsAlertLoginVisible(false);
    
     }

     render(): React.ReactNode {
         return(
           <GeneralContext.Provider
             value={{
                    //properties
                    usuario:this.state.usuario,
                    relatorio:this.state.relatorio,
                    mensaje:this.state.mensaje,
                    flags:this.state.flags,
                    //isLogedIn: this.state.isLogedIn,
                    //isAlertLoginVisible: this.state.isAlertLoginVisible,
                    resultadosBusquedaVisible: this.state.resultadosBusquedaVisible,
                    codigoBusqueda:this.state.codigoBusqueda,
                    //isLoadingSearch: this.state.isLoadingSearch,
                    //isNotificaciones: this.state.isNotificaciones,
                    tabSelected: this.state.tabSelected,
                   //////////////////functions///////////////////////////
                    setMensaje:this.setMensaje,
                    setUsuario:this.setUsuario,
                    setRelatorio:this.setRelatorio,
                    setFlags:this.setFlags,
                    //setIsLogedIn: this.setIsLogedIn,
                    logOut: this.logOut,
                    //setIsAlertLoginVisible: this.setIsAlertLoginVisible,
                    setResultadosBusquedaVisible: this.setResultadosBusquedaVisible,
                    setCodigoBusqueda: this.setCodigoBusqueda,
                    //setIsLoadingSearch: this.setIsLoadingSearch,
                    //setIsNotificaciones: this.setIsNotificaciones,
                    setTabSelected: this.setTabSelected,
                    
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}


export { GeneralProvider, GeneralContext }