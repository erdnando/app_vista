// Generated by https://quicktype.io

export interface ComboProductoServicio {
    familiaId:        number;
    descricaoFamilia: string;
    produtos:         Produto[];
}

export interface Produto {
    id:        number;
    descricao: string;
}
