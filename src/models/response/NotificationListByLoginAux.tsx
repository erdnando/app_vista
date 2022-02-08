// Generated by https://quicktype.io

export interface NotificationListByLoginAux {
    id:              number;
    mensagem:        string;
    tipoMensagem:    TipoMensagem;
    dataCadastro:    string;
    status:          Status;
    login:           Login;
    dataAtualizacao: null;
    charter:         number | null;
    importante:      null;
}

export enum Login {
    EderGoncalvesGmailCOM = "eder.goncalves@gmail.com",
}

export enum Status {
    P = "P",
}

export interface TipoMensagem {
    id:        number;
    descricao: Descricao;
}

export enum Descricao {
    Outros = "OUTROS ",
    Parecer = "PARECER",
}