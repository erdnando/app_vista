import React from 'react'
import { createContext } from 'react';
import { Agenda } from '../models/Agenda';
import { Flags } from '../models/Flags';
import { Mensajes } from '../models/Mensajes';
import { Realtorio } from '../models/Relatorio';
import { Sesion } from '../models/Sesion';
import { TipoUsuario, Usuario } from '../models/Usuario';
import { AgendaFiltro } from '../models/AgendaFiltro';
import { IDs } from '../models/IDs';


interface GeneralState{
    //properties
    usuario:Usuario,
    mensaje:Mensajes,
    relatorio:Realtorio,
    flags:Flags,
    agenda:Agenda,
    sesion:Sesion,
    agendaFiltro:AgendaFiltro,
    ids:IDs,
    //codigoBusqueda:string,
    //idOpinion:string,
    tabSelected:string,
    
    //functions/methods
    setMensaje:(mensaje:Mensajes)=>void;
    setUsuario:(usuario:Usuario)=>void;
    setRelatorio:(relatorio:Realtorio)=>void;
    setFlags:(flags:Flags)=>void;
    setIds:(ids:IDs)=>void;
    logOut: ()=>void,
    //setCodigoBusqueda: (codigoBusqueda:string)=> void;
    //setIdOpinion:(idOpinion:string)=>void;
    setTabSelected: (tabSelected:string)=>void;
    setAgenda:(agenda:Agenda)=>void;
    setSesion:(sesion:Sesion)=>void;
    setAgendaFiltro:(agendaFiltro:AgendaFiltro)=>void;
}


const GeneralContext = React.createContext({} as GeneralState);

class GeneralProvider extends React.Component{

    state = {
        resultadosBusquedaVisible:false,
        //codigoBusqueda:'',
        //idOpinion:'',
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
            verDetalleAgenda:false,
            resultadosBusquedaVisible:false,
            modalFiltrosVisible:false,
            modalFechaVisible:false,
            modalFechaHorarioVisible:false,
        },
        ids:{
            idOpinionBusqueda: '',
            idOpinionSeleccionado:'',
            codigoBusqueda:'',
        },
        agenda:{
            selectedDate:'',
            markedDates:{}
        },
        sesion:{
            usuario:{
                tipo: TipoUsuario.NONE,
                email:'',
                password:'',
                whatsapp:'(34) 99830-0082',
                telefono:'(34) 99830-0082',
                direccion:'Av. dos Vinhedos, no 20 - Cj. 4 anexo - Gravea Office - Uberlandia'
            },
            token:'',
            menu:[
                {
                    id:0,
                    descricao:'',
                    colaborador:'',
                    usuario:''
                }
            ]
        },
        agendafiltro:{
            filtroHorario: 'Seleccione una horario',
            filtroFecha: 'Seleccione una fecha',
            bTodo:false,
            bParecerOK:false,
            bAguardando:false,
            bFinalizado:false,
        },
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

    setIds=(ids:IDs)=>{
        this.setState({ids})
    }

    //  setCodigoBusqueda=(codigoBusqueda:string) =>{
    //      this.setState({codigoBusqueda});
    //  }

    //  setIdOpinion=(idOpinion:string) =>{
    //     this.setState({idOpinion});
    // }

    setTabSelected= (tabSelected:string) =>{
        this.setState({tabSelected})
    }

    setAgenda= (agenda:Agenda)=>{
        this.setState({agenda});
    }

    setSesion= (sesion:Sesion)=>{
        this.setState({sesion});
    }

    setAgendaFiltro= (agendaFiltro:AgendaFiltro)=>{
        this.setState({agendaFiltro});
    }

    logOut = () =>{

        const payload0 = this.state.sesion;
            payload0.token='';
            this.setState({payload0})
        

        const payload= this.state.usuario;
            payload.tipo=TipoUsuario.NONE;
            payload.email='';
            payload.password='';
            this.setState({payload})

        const payload2= this.state.flags;
            payload2.isLogedIn=false;
            payload2.isAlertLoginVisible=false;

            this.setState({payload2})

        const payload3 = this.state.agenda;
            payload3.selectedDate ='';
            this.setState({payload3})
    
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
                    ids:this.state.ids,
                    agenda:this.state.agenda,
                    agendaFiltro:this.state.agendafiltro,
                    sesion:this.state.sesion,
                    //codigoBusqueda:this.state.codigoBusqueda,
                    //idOpinion:this.state.idOpinion,
                    tabSelected: this.state.tabSelected,
                   //////////////////functions///////////////////////////
                    setMensaje:this.setMensaje,
                    setUsuario:this.setUsuario,
                    setRelatorio:this.setRelatorio,
                    setFlags:this.setFlags,
                    setIds:this.setIds,
                    setAgenda:this.setAgenda,
                    setAgendaFiltro:this.setAgendaFiltro,
                    setSesion:this.setSesion,
                    logOut: this.logOut,
                    //setCodigoBusqueda: this.setCodigoBusqueda,
                    //setIdOpinion:this.setIdOpinion,
                    setTabSelected: this.setTabSelected,
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}


export { GeneralProvider, GeneralContext }