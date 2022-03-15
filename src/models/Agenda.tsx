import React from 'react'
import { AgendaItem } from './AgendaItem';
import { LastUpdatesAgenda } from './LastUpdatesAgenda';

export interface Agenda{
    selectedDate: string,
    markedDates: any,
    lastUpdates:LastUpdatesAgenda[],
}