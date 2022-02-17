// Generated by https://quicktype.io

export interface ExigenciasOportunityTerciario {
    id:                 number;
    titulo:             string;
    tipoDataMeta:       number;
    metaDias:           string;
    createDate:         number;
    lastUpdateDate:     null;
    observacao:         string;
    status:             string;
    usuario:            null;
    tipoUsuarioCliente: TipoUsuarioCliente;
    statusEstrategico:  null;
}

export interface TipoUsuarioCliente {
    id:        number;
    descricao: string;
    status:    string;
    charter:   number;
}
