import React from 'react'

export interface Flags{
    isLogedIn: boolean,
    isLoading:boolean,
    isLoadingParecer:boolean,
    isLoadingAgenda:boolean,
    isLoadingSearch:boolean,
    isLoadingContacto:boolean;
    isLoadingResumoOportunidades:boolean,
    isLoadingNotificaciones:boolean,
    isNotificaciones:boolean,
    verDetalleAgenda:boolean,
    resultadosBusquedaVisible:boolean,
    resultadosAgendaVisible:boolean,
    modalFiltrosVisible:boolean,
    modalFechaVisible:boolean,
    modalFechaHorarioVisible:boolean,
    isPasswordReseted:boolean,
    isDownloadingFile:number,
    existsNotification:boolean,
    isLoadingMonthAgenda:boolean,
}