import React from 'react'
import { AgendaItem } from './AgendaItem';
import { LastUpdatesAgenda } from './LastUpdatesAgenda';
import { DocumentosAgendaType } from './response/DocumentosAgendaType';
import { OpportunityCustomFindById } from './response/OpportunityCustomFindById';
import { SearchResultados } from './SearchResultados';

export interface Agenda{
    selectedDate: string,
    markedDates: any,
    lastUpdates:LastUpdatesAgenda[],
    selectedOportunidadId:string,
    resumo:OpportunityCustomFindById,
    documentos:DocumentosAgendaType[],
}