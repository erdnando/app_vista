import React from 'react'
import { ListaParecerAux } from './response/ListaParecerAux';
import { ParecerRealizadoAux } from './ParecerRealizadoAux';

export interface Parecer{
    
    listaParecer:ListaParecerAux[],
    listaParecerRealizado:ParecerRealizadoAux[],
    parecerSeleccionado:ListaParecerAux,

}