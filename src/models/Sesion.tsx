import React from 'react'
import { MenuSistema } from './MenuSistema';
import { Usuario } from './Usuario';



export interface Sesion{
    usuario:Usuario,
    token:string,
    clienteId:number,
    tipoClientId:number,
    charter:number,
    colaboradorId:number,
    menu:MenuSistema[],
}

