import React from 'react'
import { OpinionesParecer } from './OpinionesParecer';
import { OpinionesExigencias } from './OpinionesExigencias';
import { OpinionesValores } from './OpinionesValores';
import { TipoExigencia } from './response/TipoExigencia';
import { ComboLista } from './ComboLista';
import { ComboDescripcion } from './response/ComboDescripcion';
import { OpinionesExigenciasTerciario } from './OpinionesExigenciasTerciario';
import { ComboListaExtendido } from './ComboListaExtendido';

export interface Opiniones{
    parecer: OpinionesParecer,
    exigencias: OpinionesExigencias[],
    exigenciasTerciario: OpinionesExigenciasTerciario[],
    valores:OpinionesValores[],
    catTipoExigencia:ComboLista[],
    catTipoDescripcion:ComboLista[],
    catTipoUsuario:ComboLista[],
    catMotivo:ComboLista[],
    catFamilia:ComboLista[],
    catProductoServicio:ComboLista[],
    catProductoServicioUniverse:ComboListaExtendido[],
    exigenciasIndex:number,
    tabsContador:number,
    exigenciasAllValid:boolean,
    valoresAllValid:boolean,
    allDisabledforNoGo:boolean,
}