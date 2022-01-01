import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';
import { useSearch } from '../../hooks/useSearch';
import { ModalSearchResultados } from './ModalSearchResultados';
import { InputSearch } from './InputSearch';


interface Props{
  label:string,
  iconClose:string,
  iconSearch:string,
}

export const Search = ( { label,iconSearch, iconClose}: Props ) => {

     const { codigoBusqueda, } = useContext( GeneralContext )
  
    return (
      <View>
          <InputSearch label={label} iconRight={iconSearch} ></InputSearch>
             <ModalSearchResultados iconClose={iconClose} color='black' label={`Oportunidade ${ codigoBusqueda }`}></ModalSearchResultados>
          </View>
    )
}
