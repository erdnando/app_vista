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
import { MenuOpiniones } from '../models/MenuOpiniones';
import { Opiniones } from '../models/Opiniones';
import { SearchResultados } from '../models/SearchResultados';
import { OpportunityCustomFindById } from '../models/response/OpportunityCustomFindById';
import { OpportunityCustomListOpinionsByIdAux } from '../models/response/OpportunityCustomListOpinionsByIdAux';
import { Search } from '../models/Search';
import { Parecer } from '../models/Parecer';


interface GeneralState{
    //properties
    usuario:Usuario,
    mensaje:Mensajes,
    relatorio:Realtorio,
    flags:Flags,
    agenda:Agenda,
    sesion:Sesion,
    agendaFiltro:AgendaFiltro,
    menuOpiniones:MenuOpiniones[],
    ids:IDs,
    tabSelected:string,
    tabSelectedOld:string,
    tabModule:string,
    opiniones: Opiniones,
    search:Search,
    parecer:Parecer,
    //functions/methods
    setMensaje:(mensaje:Mensajes)=>void;
    setUsuario:(usuario:Usuario)=>void;
    setRelatorio:(relatorio:Realtorio)=>void;
    setFlags:(flags:Flags)=>void;
    setIds:(ids:IDs)=>void;
    logOut: ()=>void,
    setTabSelected: (tabSelected:string)=>void;
    setTabSelectedOld: (tabSelectedOld:string)=>void;
    setTabModule: (tabModule:string)=>void;
    setAgenda:(agenda:Agenda)=>void;
    setSesion:(sesion:Sesion)=>void;
    setAgendaFiltro:(agendaFiltro:AgendaFiltro)=>void;
    setMenuOpiniones:(menuOpiniones:MenuOpiniones[])=>void;
    setOpiniones:(opiniones:Opiniones)=>void;
    setSearch:(search:Search)=>void;
    setParecer:(parecer:Parecer)=>void;
}

const GeneralContext = React.createContext({} as GeneralState);

class GeneralProvider extends React.Component{

    state = {
        resultadosBusquedaVisible:false,
        tabSelected:'Logo',
        tabSelectedOld:'Logo',
        tabModule:'Logo',
        mensaje:{asunto:'', mensaje:''},
        usuario:{ 
                tipo: TipoUsuario.NONE,
                email:'erdnandovr@algartech.com',//'erdnando@gmail.com',
                password:'044482',//'248854',
                whatsapp:'(34) 99830-0082',
                telefono:'(34) 99830-0082',
                direccion:'Av. dos Vinhedos, no 20 - Cj. 4 anexo - Gravea Office - Uberlandia'
            },
            nuevoPassword1:'',
            nuevoPassword2:'',
        relatorio:{ 
            filtroCliente:'',
            filtroFechaInicial:'',
            filtroFechaFinal:'',
            isFilterCollapsed:false,
            isSelectorParecer:true,},
        flags:{
            isLogedIn: false,
            isAlertLoginVisible:false,
            isLoading:false,
            isNotificaciones:false,
            verDetalleAgenda:false,
            resultadosBusquedaVisible:false,
            modalFiltrosVisible:false,
            modalFechaVisible:false,
            modalFechaHorarioVisible:false,
            isPasswordReseted:false,
            isDownloadingFile:0,
        },
        ids:{
            idOpinionBusqueda: '',
            idOpinionSeleccionado:'',
            codigoBusqueda:'',
            idMenuOpinionSelected:1,
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
            clienteId:0,
            charter:0,
            colaboradorId:0,
            menu:[
                {
                    id:0,
                    descricao:'',
                    colaborador:'',
                    usuario:''
                },
            ]
        },
        opiniones:{
            parecer:{
                motivo: '',
                justificacion:'',
                estatusGO:0
            },
            exigenciasIndex:1,
            tabsContador:0,
            exigencias:[
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                },
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                },
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                },
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                },
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                }

            ],
            valores:[{
                id:0,
                go: false,
                motivo:'',
                lote:'001',
                item:'001',
                qtde:'001',
                familia:'',
                productoServicio:'',
                valorinicial:'',
                valorFinal:'',
                justificativa:'',
                colapsado:true,
            },
            {
                id:1,
                go: false,
                motivo:'',
                lote:'002',
                item:'002',
                qtde:'002',
                familia:'',
                productoServicio:'',
                valorinicial:'',
                valorFinal:'',
                justificativa:'',
                colapsado:true,
            },
            {
                id:2,
                go: false,
                motivo:'',
                lote:'003',
                item:'003',
                qtde:'003',
                familia:'',
                productoServicio:'',
                valorinicial:'',
                valorFinal:'',
                justificativa:'',
                colapsado:true,
            }],
            catTipoExigencia:[]
        },
        agendafiltro:{
            filtroHorario: 'Seleccione una horario',
            filtroFecha: 'Seleccione una fecha',
            bTodo:false,
            bParecerOK:false,
            bAguardando:false,
            bFinalizado:false,
        },
        menuOpiniones:[
            {
            id:1,
            opcion:'Exigencias',
            icon:'ic_baseline-lightbulb',
            estatus:1,
            visible:true
            },
            {
              id:2,
              opcion:'Parecer',
              icon:'icomoon-free_hammer2',
              estatus:0,
              visible:true
            },
            {
              id:3,
              opcion:'Pareceres realizados',
              icon:'ant-design_check-circle-filled',
              estatus:0,
              visible:true
            },
            {
              id:4,
              opcion:'Valores',
              icon:'ic_round-monetization-on',
              estatus:0,
              visible:true
            },
            
        ],
        search:{
          oportunidade:{
              descricaoOportunidade:'No data',
              dataCertame:'No data',
              dataCertameInicial:'No data',
              horaCertame:'No data',
              horaCertameInicial:'No data',
              statusOportunidade:'No data',
              descricaoModalidade:'No data',
              edital:'No data',
              razaoSocialCliente:'No data',
              cnpjCliente:'No data',
              localidade:'No data',
              arquivo:'No data',
              tipoArquivo:'No data',
              razaoSocialOrgao:'No data',
              cnpjOrgao:'No data',
              razaoSocialOrgaoCondutor:'No data',
              cnpjOrgaoCondutor:'No data',
              orgaoContrato:'No data',
              pendencia:'No data',
              oportunidadeGanha:'No data',
              meEpp:'No data',
              valorFaturado:0,
              saldoOportunidade:0,
              statusFaturamento:'No data',
              registroPreco:'No data',
              dataProposta:0,
              plataforma:'No data',
              dataImpugnacao:0,
              dataEsclarecimento:0,
              dataCadastro:0,
              modalidade:'No data',
              dataCaptacao:'No data',
              pregoeiroTelefone:'No data',
              compulsorio:'No data'
          },
          parecer:{
            id:0,
            responsable:'',
            tipo:'',
            parecer:'',
            fecha:''
          },
          resultados:
            [
              {
              id:0,
              lote:'No data',
              item:'No data',
              valorFechado:'No data',
              valorTotal:'No data',
              ganador:'No data',
              producto:'No data',
              participacion:'No data',
              posicion:'No data',
              collapsed:true
              },
          ],
          demandaJuridica:[
              {
                id:0,
                procedimiento:'',
                fechaProtocolo:'',
                resultado:''
              }
          ],
          planAccion:[
              {
                id:0,
                tarifa:'',
                responsable:'',
                fechaPlaneada:'',
                fechaPlaneada2:''
              }
          ],
          pendencias:[
                {id:0,
                descripcion:'',
                tipo:'',
                tipoUsuario:'',
                dias:'',
                acepto:''}
              ]
          
        },
        parecer:{
            listaParecer:[
                {
                    id:0,
                    opinion:'No data',
                    idOpinion:'No data',
                    edital:'No data',
                    oragao:'No data',
                    fechaOpinion:'No data',
                    ubicacion:'No data',
                    estatus:0,
               }
            ],
            parecerSeleccionado:{}
        }
        
        
    }

    setMensaje=(mensaje: Mensajes) => this.setState({mensaje})
    setUsuario=(usuario:Usuario)=> this.setState({usuario})
    setRelatorio=(relatorio:Realtorio)=> this.setState({relatorio})
    setFlags=(flags:Flags)=> this.setState({flags})
    setIds=(ids:IDs)=> this.setState({ids})
    setTabSelected= (tabSelected:string) => this.setState({tabSelected})
    setTabSelectedOld= (tabSelectedOld:string) => this.setState({tabSelectedOld})
    setTabModule= (tabModule:string) => this.setState({tabModule})
    setAgenda= (agenda:Agenda)=> this.setState({agenda});
    setSesion= (sesion:Sesion)=> this.setState({sesion});
    setAgendaFiltro= (agendaFiltro:AgendaFiltro)=> this.setState({agendaFiltro});
    setMenuOpiniones= (menuopiniones:MenuOpiniones[])=>this.setState({menuopiniones});
    setOpiniones= (opiniones:Opiniones)=>this.setState({opiniones});
    setSearch= (search:Search)=>this.setState({search});
    setParecer= (parecer:Parecer)=>this.setState({parecer});
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
                    tabSelected: this.state.tabSelected,
                    tabSelectedOld: this.state.tabSelectedOld,
                    tabModule: this.state.tabModule,
                    menuOpiniones:this.state.menuOpiniones,
                    opiniones:this.state.opiniones,
                    search:this.state.search,
                    parecer:this.state.parecer,
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
                    setTabSelected: this.setTabSelected,
                    setTabSelectedOld: this.setTabSelectedOld,
                    setTabModule:this.setTabModule,
                    setMenuOpiniones:this.setMenuOpiniones,
                    setOpiniones:this.setOpiniones,
                    setSearch:this.setSearch,
                    setParecer:this.setParecer,
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}

export { GeneralProvider, GeneralContext }