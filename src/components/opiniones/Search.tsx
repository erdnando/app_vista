import React, { useContext } from 'react';
import { View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { Spacer } from '../Spacer';
import { IndicadorSimple } from './IndicadorSimple';
import { InputSearch } from './InputSearch';


interface Props{
  label:string,
  iconClose:string,
  iconSearch:string,
}

export const Search = ( { label,iconSearch, iconClose}: Props ) => {

     
  
    return (
      <View style={{backgroundColor:'white', paddingBottom:18, shadowOffset:{width:0,height:5}, shadowOpacity:0.27,elevation:4, borderRadius:0  }}>
          <InputSearch label={label} iconRight={iconSearch} ></InputSearch>
          <Spacer height={5}></Spacer>
          <IndicadorSimple></IndicadorSimple>
      </View>
    )
}
