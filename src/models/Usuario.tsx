import React from 'react'


export const enum TipoUsuario{
    "NONE",
    "USER_TERCEIRO",
    "COLABORADOR"
}

export interface Usuario{
    tipo:TipoUsuario,
    email:string,
    password:string,
    nuevoPassword1:string,
    nuevoPassword2:string,
    whatsapp:string,
    telefono:string,
    direccion:string,
   
}