import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { ModalSearchResultados } from './ModalSearchResultados';
import { InputSearch } from './InputSearch';



interface Props{
  label:string,
  iconClose:string,
  iconSearch:string,
}

export const Search = ( { label,iconSearch, iconClose}: Props ) => {

     const { ids } = useContext( GeneralContext )

  
    return (
          <View>
            <InputSearch label={label} iconRight={iconSearch} ></InputSearch>
            <ModalSearchResultados iconClose={iconClose} color='black' label={`Oportunidade ${ ids.codigoBusqueda }`}></ModalSearchResultados>
          </View>
    )
}
