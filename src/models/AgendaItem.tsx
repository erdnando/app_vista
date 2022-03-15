import React from 'react'

export interface AgendaItem {
    dataCertame:        Date;
    horaCertame:        string;
    oportunidadeId:     number;
    cliente:            string;
    orgao:              string;
    plataforma:         string;
    registroPreco:      string;
    status:             string;
    statusJuridico:     string;
    statusEstrategico:  string;
    parecerEstrategico: null | string;
}

