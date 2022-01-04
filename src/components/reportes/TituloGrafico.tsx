import React, { useContext } from 'react';
import {  Text, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';


export const TituloGrafico = () => {


const { isSelectorParecer } = useContext( GeneralContext )


    return    <View style={{  height:30,width:'99%',justifyContent:'center',alignItems:'center',alignContent:'center'  }}>
                <Text style={{ flex:1, height: 16,color: 'gray', fontFamily:'Roboto-Bold', fontSize:16}}>
                  { isSelectorParecer ? 'Resultado do parecer' : 'Resultado de participaciones'}</Text>
            </View>

      
}
