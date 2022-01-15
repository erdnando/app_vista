import React from 'react'
import { OpinionesParecer } from './OpinionesParecer';
import { OpinionesExigencias } from './OpinionesExigencias';
import { OpinionesValores } from './OpinionesValores';

export interface Opiniones{
    parecer: OpinionesParecer,
    exigencias: OpinionesExigencias,
    valores:OpinionesValores[],
}