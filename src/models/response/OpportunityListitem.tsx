// Generated by https://quicktype.io

export interface OpportunityListitem {
    oportunidadeId:         number;
    descricaoOportunidade:  string;
    numeroEdital:           string;
    status:                 string;
    dataCertame:            number;
    horaCertame:            string;
    dataCaptacao:           number;
    nomeOrgao:              string;
    descricaoModalidade:    string;
    itensOportunidadeDto:   ItensOportunidadeDto[];
    resultadoPendenciaDtos: any[];
    modalidade:             string;
}

export interface ItensOportunidadeDto {
    idCliente:                    number;
    nomeCliente:                  string;
    idProduto:                    number | null;
    idOportunidadeProdutoServico: number;
    descricaoProduto:             null | string;
    descricaoItem:                null | string;
    modeloProduto:                null;
    numeroAnvisa:                 null;
    quantidadeProduto:            number;
    valorInicial:                 number;
    valorFinal:                   null;
    fechado:                      null;
    total:                        null;
    primeiroLugar:                null;
    tipoPrimeiroLugar:            null;
    segundoLugar:                 null;
    tipoSegundoLugar:             null;
    posicaoCliente:               null;
    ultimoLanceOfertado:          null;
    lote:                         number;
    item:                         number;
    familiaId:                    number | null;
    descricaoFamilia:             null | string;
    obsResposta:                  null;
    participa:                    null;
    observacao:                   null;
}
