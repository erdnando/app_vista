import React from 'react'
import { ListAllRequirementByOpportunityAux } from './response/ListAllRequirementByOpportunityAux';
import { ListAllTaskByOpportunityIdAux } from './response/ListAllTaskByOpportunityIdAux';
import { ListJudgeResourceByOpportunityId } from './response/ListJudgeResourceByOpportunityId';
import { ListJudgeResourceByOpportunityIdAux } from './response/ListJudgeResourceByOpportunityIdAux';
import { OpportunityCustomFindById } from './response/OpportunityCustomFindById';
import { OpportunityCustomListOpinionsByIdAux } from './response/OpportunityCustomListOpinionsByIdAux';

import { SearchResultados } from './SearchResultados';

export interface Search{
    
    oportunidade:OpportunityCustomFindById,
    parecer:OpportunityCustomListOpinionsByIdAux[],
    resultados: SearchResultados[],
    demandaJuridica:ListJudgeResourceByOpportunityIdAux[],
    planAccion:ListAllTaskByOpportunityIdAux[],
    pendencias:ListAllRequirementByOpportunityAux[]

}