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
import { Search } from '../models/Search';
import { Parecer } from '../models/Parecer';
import { Notificaciones } from '../models/Notificaciones';
import { UltimasActualizaciones } from '../components/ultimasActualizaciones/UltimasActualizaciones';


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
    menuOpinionesTerciario:MenuOpiniones[],
    notificaciones:Notificaciones[],
    ultimasActualizaciones:Notificaciones[],
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
    setMenuOpinionesTerciario:(menuOpinionesTerciario:MenuOpiniones[])=>void;
    setOpiniones:(opiniones:Opiniones)=>void;
    setSearch:(search:Search)=>void;
    setParecer:(parecer:Parecer)=>void;
    setNotificaciones:(notificaciones:Notificaciones[])=>void;
    setUltimasActualizaciones:(ultimasActualizaciones:Notificaciones[])=>void;
}

const GeneralContext = React.createContext({} as GeneralState);

class GeneralProvider extends React.Component{

// erdnando@gmail.com       <---terciario.      111111
// erdnandovr@algartech.com <----colaborador    044482
//livia.paula@sejavista.com.br <----colaborador 11111 
//proper@gmail.com           <---terciario.     11111

    state = {
        resultadosBusquedaVisible:false,
        resultadosAgendaVisible:false,
        tabSelected:'Logo',
        tabSelectedOld:'Logo',
        tabModule:'Logo',
        mensaje:{asunto:'', mensaje:''},
        usuario:{ 
                tipo: TipoUsuario.NONE,
                email:'proper@gmail.com ',
                password:'11111',
                nuevoPassword1:'',
                nuevoPassword2:'',
                whatsapp:'(34) 99830-0082',
                telefono:'(34) 99830-0082',
                direccion:'Av. dos Vinhedos, no 20 - Cj. 4 anexo - Gravea Office - Uberlandia'
            },
        relatorio:{ 
            filtroCliente:'',
            filtroFechaInicial:'',
            filtroFechaFinal:'',
            isFilterCollapsed:false,
            isSelectorParecer:true,},
        flags:{
            isLogedIn: false,
            isLoading:false,
            isLoadingParecer:false,
            isLoadingAgenda:false,
            isLoadingSearch:false,
            isLoadingContacto:false,
            isLoadingNotificaciones:false,
            isLoadingResumoOportunidades:false,
            isNotificaciones:false,
            verDetalleAgenda:false,
            resultadosBusquedaVisible:false,
            modalFiltrosVisible:false,
            modalFechaVisible:false,
            modalFechaHorarioVisible:false,
            isPasswordReseted:false,
            isDownloadingFile:0,
            existsNotification:false,
            isLoadingMonthAgenda:false,
        },
        ids:{
            idOpinionBusqueda: '',
            idOpinionSeleccionado:'',
            codigoBusqueda:'',
            idMenuOpinionSelected:1,
            clienteIdSeleccionado:'',
        },
        agenda:{
            selectedDate:'',
            markedDates:{},
            lastUpdates:[],
            selectedOportunidadId:'',
            resumo:{
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
            documentos:[],
            mesAnioAgenda:new Date()
        },
        sesion:{
            usuario:{
                tipo: TipoUsuario.NONE,
                tipoClientId:0,
                email:'',
                password:'',
                whatsapp:'(34) 99830-0082',
                telefono:'(34) 99830-0082',
                direccion:'Av. dos Vinhedos, no 20 - Cj. 4 anexo - Gravea Office - Uberlandia',
            },
            token:'',
            charter:0,
            colaboradorId:0,
            contratoId:0,
            clienteId:'',
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
            tabsContador:1,
            exigenciasAllValid:false,
            exigencias:[
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                visible:true,
                valid:false,
                tipoExigencia:''
                },
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                visible:false,
                valid:false,
                tipoExigencia:''
                },
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                visible:false,
                valid:false,
                tipoExigencia:''
                },
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                visible:false,
                valid:false,
                tipoExigencia:''
                },
                {
                descripcion: '',
                oportunidad:'',
                qtededias:'',
                tipoUsuario:'',
                observaciones:'',
                visible:false,
                valid:false,
                tipoExigencia:''
                }

            ],
            exigenciasTerciario:[{
                id:0,
                exigencia:'',
                observacion:'',
                tipo:'',
                dias:'',
                goNoGo:0,
                idExigencia:''
            }],
            valores:[
                {
                id:0,
                idValor:'0',
                go: false,
                motivo:'',
                lote:'001',
                item:'001',
                qtde:'001',
                familia:'',
                productoServicio:'',
                productoServicioId:'',
                valorinicial:'',
                valorFinal:'',
                justificativa:'',
                colapsado:true,
                arrProductox:[]
            }],
            valoresAllValid:false,
            allDisabledforNoGo:false,
            catTipoExigencia:[],
            catTipoDescripcion:[],
            catTipoUsuario:[],
            catMotivo:[],
            catFamilia:[],
            catProductoServicio:[],
            catProductoServicioUniverse:[]
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
        menuOpinionesTerciario:[
            {
                id:1,
                opcion:'Pareceres realizados',
                icon:'ant-design_check-circle-filled',
                estatus:1,
                visible:true
            },
            {
                id:2,
                opcion:'Exigencias',
                icon:'ic_baseline-lightbulb',
                estatus:0,
                visible:true
            },
            {
                id:3,
                opcion:'Parecer',
                icon:'icomoon-free_hammer2',
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
                    parecerId:'No data',
                    edital:'No data',
                    oragao:'No data',
                    fechaOpinion:'No data',
                    ubicacion:'No data',
                    estatus:0,
                    clienteId:0,
                    modalidade:'',
                    plataforma:''
               }
            ],
            listaParecerRealizado:[{
                id:0,
                usuario:'',
                parecer:'',
                motivo:'',
                justificativa:''
            }],
            parecerSeleccionado:{}
        },
        notificaciones:[
            {
                "id": "1",
                "tipo": "VACIO",
                "dia": "",
                "hora": "",
                "descripcion": "Sin notificaciones",
                "color": "red",
                "background": "#F8BBBB",
                "icon": "bx_bxs-message-alt-error",
                "diaVisible": true   
            }
        ],
        ultimasActualizaciones:[
            {
                "id": "1",
                "tipo": "VACIO",
                "dia": "",
                "hora": "",
                "descripcion": "Sin notificaciones",
                "color": "red",
                "background": "#F8BBBB",
                "icon": "bx_bxs-message-alt-error",
                "diaVisible": true   
            }
        ]
        
        
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
    setMenuOpiniones= (menuOpiniones:MenuOpiniones[])=>this.setState({menuOpiniones});
    setMenuOpinionesTerciario= (menuopinionesTerciario:MenuOpiniones[])=>this.setState({menuopinionesTerciario});
    setOpiniones= (opiniones:Opiniones)=>this.setState({opiniones});
    setSearch= (search:Search)=>this.setState({search});
    setParecer= (parecer:Parecer)=>this.setState({parecer});
    setNotificaciones= (notificaciones:Notificaciones[])=>this.setState({notificaciones});
    setUltimasActualizaciones= (ultimasActualizaciones:Notificaciones[])=>this.setState({ultimasActualizaciones});
    logOut = () =>{

        const payload0 = this.state.sesion;
            payload0.token='';
            this.setState({payload0})
        

        const payload= this.state.usuario;
            payload.tipo=TipoUsuario.NONE;
            payload.email='';
            payload.password='';
            payload.nuevoPassword1='',
            payload.nuevoPassword2='',
            this.setState({payload})

        const payload2= this.state.flags;
            payload2.isLogedIn=false;
            //payload2.isAlertLoginVisible=false;

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
                    menuOpinionesTerciario:this.state.menuOpinionesTerciario,
                    opiniones:this.state.opiniones,
                    search:this.state.search,
                    parecer:this.state.parecer,
                    notificaciones:this.state.notificaciones,
                    ultimasActualizaciones:this.state.ultimasActualizaciones,
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
                    setMenuOpinionesTerciario:this.setMenuOpinionesTerciario,
                    setOpiniones:this.setOpiniones,
                    setSearch:this.setSearch,
                    setParecer:this.setParecer,
                    setNotificaciones:this.setNotificaciones,
                    setUltimasActualizaciones:this.setUltimasActualizaciones,
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}

export { GeneralProvider, GeneralContext }