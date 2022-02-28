import React from 'react'

export interface OpinionesValores{
    id:number,
    idValor:string,
    go: boolean,
    motivo:string,
    lote:string,
    item:string,
    qtde:string,
    familia:string,
    productoServicio:string,
    productoServicioId:string
    valorinicial:string,
    valorFinal:string,
    justificativa:string
    colapsado:boolean,
    arrProductox:ComboLista[]
}