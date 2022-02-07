import React from 'react'

export interface Flags{
    isLogedIn: boolean,
    isLoading:boolean,
    isLoadingParecer:boolean,
    isLoadingAgenda:boolean,
    isNotificaciones:boolean,
    verDetalleAgenda:boolean,
    resultadosBusquedaVisible:boolean,
    modalFiltrosVisible:boolean,
    modalFechaVisible:boolean,
    modalFechaHorarioVisible:boolean,
    isPasswordReseted:boolean,
    isDownloadingFile:number,
}