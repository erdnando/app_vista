import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';
import { Resumen } from './Resumen';
import { useHome } from '../../hooks/useHome';
import { Loading } from '../Loading';
import { Spacer } from '../Spacer';


interface Props{
  
}

export const ResumenOportunidades = ( {  }: Props ) => {

  const { flags } = useContext( GeneralContext );
  const { metrics } = useHome();

  if(flags.isLoadingResumoOportunidades){
    return   <View style={{height:210, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', 
                alignItems:'flex-end', borderWidth: 0,backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
                shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                height: 1,
                width: 1
              }}}>

                  <View style={{flex:0, width:'100%',height:40,justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                      <Text style={{fontFamily:'Roboto-Bold', fontSize:16}}>Resumo de oportunidades</Text>
                  </View>
                  {/* <Spacer height={25}></Spacer> */}
                  
                  <View style={{ flexDirection:'row', flex:0,marginTop:15,}}>
                    <Resumen loading={true} icono='bi_clock-fill' colorIcono={colores.primary} metrica={metrics.totalFila.toString()} label='Tarefas pendentes' ></Resumen>
                    <Resumen loading={true} icono='icomoon-free_hammer2' colorIcono='#83AE69' metrica={metrics.totalParecer.toString()} label='Parecer pendente' ></Resumen>
                    <Resumen loading={true} icono='ant-design_check-circle-filled' colorIcono='#68AABF' metrica={metrics.totalAgenda.toString()} label='Ceratame do dia' ></Resumen>
                  </View>
                  <Spacer height={25}></Spacer>

            </View>  
  }

    return (
      <View style={{height:190, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', 
            alignItems:'flex-start', borderWidth: 0,backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
            height: 1,
            width: 1
          }}}>

          <View style={{ width:'100%',height:50, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <Text style={{fontFamily:'Roboto-Bold', fontSize:17}}>Resumo de oportunidades</Text>
          </View>

          
          <View style={{ flexDirection:'row', flex:1}}>
            <Resumen icono='bi_clock-fill' colorIcono={colores.primary} metrica={metrics.totalFila.toString()} label='Tarefas pendentes' ></Resumen>
            <Resumen icono='icomoon-free_hammer2' colorIcono='#83AE69' metrica={metrics.totalParecer.toString()} label='Parecer pendente' ></Resumen>
            <Resumen icono='ant-design_check-circle-filled' colorIcono='#68AABF' metrica={metrics.totalAgenda.toString()} label='Ceratame do dia' ></Resumen>
          </View>

      </View>
    )
}
