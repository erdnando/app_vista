import React from 'react'
import { OpinionesParecer } from './OpinionesParecer';
import { OpinionesExigencias } from './OpinionesExigencias';
import { OpinionesValores } from './OpinionesValores';
import { TipoExigencia } from './response/TipoExigencia';
import { ComboLista } from './ComboLista';
import { ComboDescripcion } from './response/ComboDescripcion';

export interface Opiniones{
    parecer: OpinionesParecer,
    exigencias: OpinionesExigencias[],
    valores:OpinionesValores[],
    catTipoExigencia:ComboLista[],
    catTipoDescripcion:ComboLista[],
    catTipoUsuario:ComboLista[],
    exigenciasIndex:number,
    tabsContador:number,
    exigenciasAllValid:boolean
}