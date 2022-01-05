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
    resultadosBusquedaVisible:boolean,
    codigoBusqueda:string,
    tabSelected:string,
    
    //functions/methods
    setMensaje:(mensaje:Mensajes)=>void;
    setUsuario:(usuario:Usuario)=>void;
    setRelatorio:(relatorio:Realtorio)=>void;
    setFlags:(flags:Flags)=>void;
    logOut: ()=>void,
    setResultadosBusquedaVisible:(resultadosBusquedaVisible:boolean)=>void;
    setCodigoBusqueda: (codigoBusqueda:string)=> void;
    setTabSelected: (tabSelected:string)=>void;

}


const GeneralContext = React.createContext({} as GeneralState);

class GeneralProvider extends React.Component{
    
    state = {
        resultadosBusquedaVisible:false,
        codigoBusqueda:'',
        tabSelected:'Logo',
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

     setResultadosBusquedaVisible=(resultadosBusquedaVisible:boolean) =>{
        this.setState({resultadosBusquedaVisible});
     }

     setCodigoBusqueda=(codigoBusqueda:string) =>{
         this.setState({codigoBusqueda});
     }

    setTabSelected= (tabSelected:string) =>{
        this.setState({tabSelected})
    }

   

    logOut = () =>{

        const payload= this.state.usuario;
            payload.tipo=TipoUsuario.NONE;
            payload.email='';
            payload.password='';
            this.setState({payload})

            const payload2= this.state.flags;
            payload2.isLogedIn=false;
            payload2.isAlertLoginVisible=false;

            this.setState({payload2})
    
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
                    resultadosBusquedaVisible: this.state.resultadosBusquedaVisible,
                    codigoBusqueda:this.state.codigoBusqueda,
                    tabSelected: this.state.tabSelected,
                   //////////////////functions///////////////////////////
                    setMensaje:this.setMensaje,
                    setUsuario:this.setUsuario,
                    setRelatorio:this.setRelatorio,
                    setFlags:this.setFlags,
                    logOut: this.logOut,
                    setResultadosBusquedaVisible: this.setResultadosBusquedaVisible,
                    setCodigoBusqueda: this.setCodigoBusqueda,
                    setTabSelected: this.setTabSelected,
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}


export { GeneralProvider, GeneralContext }