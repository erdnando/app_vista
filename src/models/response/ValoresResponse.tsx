// Generated by https://quicktype.io

export interface ValoresResponse {
    id:                  number;
    produtoServico:      ProdutoServico;
    contrato:            Contrato;
    quantidade:          number;
    valorInicial:        number;
    valorFinal:          number|null;
    observacao:          null;
    fechado:             null;
    total:               null;
    primeiroLugar:       null;
    tipoPrimeiroLugar:   null;
    segundoLugar:        null;
    tipoSegundoLugar:    null;
    posicaoCliente:      null;
    ultimoLanceOfertado: null;
    prazoValidade:       number;
    manutencao:          number;
    usuario:             null;
    colaborador:         Colaborador;
    familia:             Familia;
    item:                number;
    lote:                number;
    obsResposta:         null;
    valorReferencia:     number;
    parecer:             null;
    motivoParecer:       string|null;
    participa:           null;
    itemEdital:          null;
}

export interface Colaborador {
    id:             number;
    acessoId:       number;
    nome:           string;
    cpf:            string;
    sexo:           string;
    status:         string;
    createDate:     number;
    lastUpdateDate: null;
    observacao:     null;
    contato1:       string;
    contato2:       string;
    email:          string;
    cargo:          Cargo;
    charter:        number;
}

export interface Cargo {
    id:        number;
    descricao: string;
}

export interface Contrato {
    id:             number;
    cliente:        Cliente;
    acessoId:       number;
    dataInicio:     number;
    dataVigencia:   null;
    observacao:     null;
    valorContrato:  null;
    status:         string;
    createDate:     number;
    lastUpdateDate: number;
    motivoExclusao: null;
    filialId:       number;
}

export interface Cliente {
    id:               number;
    razaoSocial:      string;
    cnpj:             string;
    nomeFantasia:     string;
    endereco:         string;
    numero:           string;
    complemento:      null;
    bairro:           string;
    cidade:           string;
    uf:               string;
    cep:              string;
    contato1:         string;
    contato2:         string;
    email:            string;
    nomeResponsavel:  string;
    createDate:       null;
    lastUpdateDate:   number;
    produtosServicos: ProdutosServico[];
    meEpp:            null;
    charter:          number;
}

export interface ProdutosServico {
    id:             number;
    produtoServico: null;
    status:         string;
    createDate:     number;
    lastUpdateDate: number;
    familia:        Familia;
}

export interface Familia {
    id:        number;
    descricao: string;
    status:    string;
    filialId:  number;
}

export interface ProdutoServico {
    id:            number;
    descricao:     string;
    descricaoItem: string;
    modelo:        null;
    anvisa:        null;
    tipoProduto:   string;
    ramoAtividade: null;
    familia:       Familia;
    codigo:        null;
    unidade:       null;
    fabricante:    null;
    garantia:      null;
    validade:      null;
    charter:       number;
}
