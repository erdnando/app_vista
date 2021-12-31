import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';
import { Resumen } from './Resumen';


interface Props{
  
}

export const ResumenOportunidades = ( {  }: Props ) => {

    return (
      <View style={{height:190, flexDirection:'column', width:'83%', left:-3, justifyContent:'center', 
            alignItems:'flex-start', borderWidth: 0,backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
            height: 1,
            width: 1
          }}}>

          <View style={{ width:'100%',height:50, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Text style={{fontFamily:'Roboto-Bold', fontSize:17}}>Resumo de oportunidades</Text>
          </View>

          <View style={{ flexDirection:'row', flex:1}}>
          <Resumen icono='bi_clock-fill' colorIcono={colores.primary} metrica='000' label='Aguardando' ></Resumen>
          <Resumen icono='icomoon-free_hammer2' colorIcono='#83AE69' metrica='000' label='Parecer Ok' ></Resumen>
          <Resumen icono='ant-design_check-circle-filled' colorIcono='#68AABF' metrica='000' label='Finalizados' ></Resumen>
          </View>

      </View>
    )
}
