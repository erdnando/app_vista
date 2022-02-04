import React from 'react'
import { ListaParecer } from './response/ListaParecer';
import { ListaParecerAux } from './response/ListaParecerAux';

export interface Parecer{
    
    listaParecer:ListaParecerAux[],
    parecerSeleccionado:ListaParecerAux,

}