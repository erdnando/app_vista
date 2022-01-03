import React from 'react';
import { Text, View } from 'react-native';
import CustomIcon from '../../theme/CustomIcon';
import { TextOportunidadVertical } from './TextOportunidadVertical';

interface Props{
  producto:string,
  participacion:string,
  posicion:string,
  
}

export const Producto = ( { producto, participacion,posicion }: Props ) => {

    return  <View style={{height:55, flexDirection:'row', width:'98%', marginBottom:8,
              backgroundColor: '#EDF0F5', borderRadius:7,padding:5,elevation:6,
              shadowColor: "black", shadowOpacity: 0.3,shadowOffset: {
              height: 4, width: 1 }}}>
                <View style={{flexDirection:'row', marginBottom:10, justifyContent:'space-between'}}>
                  <TextOportunidadVertical  label='Produto' valor={producto} size={15} width='39%' alineacion='left' borderEndWidth={1} ></TextOportunidadVertical>
                  <TextOportunidadVertical  label='Participacion' valor={participacion} size={15} width='30%' alineacion='center' colorValor={participacion=='Sim' ? 'green' : 'red'} borderEndWidth={1}></TextOportunidadVertical>
                  <TextOportunidadVertical  label='Posicion' valor={posicion} size={15} width='30%' alineacion='center' borderEndWidth={0}></TextOportunidadVertical>
              </View>
          </View>
}
