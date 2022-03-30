import React, { useContext, useEffect } from 'react';
import {  Text, View } from 'react-native';
import { useRelatorios } from '../../hooks/useRelatorios';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { BarChart } from 'react-native-gifted-charts';
import { IndicadorSimple } from './IndicadorSimple';
import { IndicadorDoble } from './IndicadorDoble';
import { TituloGrafico } from './TituloGrafico';
import { useHome } from '../../hooks/useHome';
import { Spacer } from '../Spacer';


export const Charts = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const { relatorio } = useContext( GeneralContext )
 const {  graphMotiveGoNoGo,graphData,graphDataParticipaciones,floading,totalPareceres,maxGrafica } = useHome(); 
 
 const { onChangeFiltroCliente } = useRelatorios(); 


const labelTopGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].go}</Text> ) }
const labelTopNoGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].noGo}</Text> ) }
const labelEnAnalisis = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].analise}</Text> ) }

 const labelVencidas= () =>{  return( <Text style={{textAlign:'center'}}>{ graphDataParticipaciones.reduce((n, {vencidas}) => n + vencidas, 0) }</Text> ) }
 const labelPerdidas = () =>{  return( <Text style={{textAlign:'center'}}>{ graphDataParticipaciones.reduce((n, {perdidas}) => n + perdidas, 0) }</Text> ) }
 const labelSuspensas = () =>{  return( <Text style={{textAlign:'center'}}>{ graphDataParticipaciones.reduce((n, {suspensas}) => n + suspensas, 0) }</Text> ) }
 const labelFracasadas = () =>{  return( <Text style={{textAlign:'center'}}>{ graphDataParticipaciones.reduce((n, {fracassadas}) => n + fracassadas, 0) } </Text> ) }
 const labelAndamento = () =>{  return( <Text style={{textAlign:'center'}}>{ graphDataParticipaciones.reduce((n, {andamento}) => n + andamento, 0) }</Text> ) }


  const barDataParecer = [
    {value: graphData[0].go,label: 'GO',frontColor: '#83AE69',topLabelComponent:labelTopGo },
    {value: graphData[0].noGo,label: 'NO GO',frontColor: '#B85050',topLabelComponent:labelTopNoGo },
    {value: graphData[0].analise,label: 'EM ANALISE',frontColor: '#F9A61A',topLabelComponent:labelEnAnalisis },
   
    ];

const barDataParticipaciones = [
  {value: graphDataParticipaciones.reduce((n, {vencidas}) => n + vencidas, 0),label: '',frontColor: '#28a745',topLabelComponent:labelVencidas },
  {value: graphDataParticipaciones.reduce((n, {perdidas}) => n + perdidas, 0),label: '',frontColor: '#dc3545',topLabelComponent:labelPerdidas },
  {value: graphDataParticipaciones.reduce((n, {suspensas}) => n + suspensas, 0),label: '',frontColor: '#fd7e14',topLabelComponent:labelSuspensas },
  {value: graphDataParticipaciones.reduce((n, {fracassadas}) => n + fracassadas, 0),label: '',frontColor: '#dc3545',topLabelComponent:labelFracasadas },
  {value: graphDataParticipaciones.reduce((n, {andamento}) => n + andamento, 0),label: '',frontColor: '#007bff',topLabelComponent:labelAndamento },
  ];


 

    return    <View style={{  width:'90%',marginHorizontal:17, flexGrow:1, height: !relatorio.isFilterCollapsed ? '20%' : '68%', justifyContent:'center',
                    alignItems:'flex-start', borderWidth: 0,backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
                    shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: { height: 1, width: 1}}}>   

                         <TituloGrafico></TituloGrafico>
                          
                          <BarChart barWidth={relatorio.isSelectorParecer ? 85 : 50}
                                    height={!relatorio.isFilterCollapsed ? 220 : 350}
                                    barBorderRadius={4}
                                    verticalLinesThickness={0}
                                    cappedBars={false}
                                    capThickness={3}
                                    capColor={'black'}
                                    spacing={1}
                                    initialSpacing={20}
                                    showFractionalValues={true}
                                    showLine={false}
                                    showXAxisIndices={true}                           
                                    showVerticalLines={true}
                                    showYAxisIndices={true}
                                    noOfSections={5}
                                    width={280}
                                    maxValue={0}
                                    data={relatorio.isSelectorParecer ? barDataParecer : barDataParticipaciones}
                                    isAnimated={true} />
                          
                            {/* indicadores de color */}
                            <View style={{marginBottom:0}}>
                                {relatorio.isSelectorParecer && <IndicadorSimple></IndicadorSimple>}

                                {!relatorio.isSelectorParecer && <IndicadorDoble></IndicadorDoble> }
                            </View>
                            {/* <Spacer height={5}></Spacer> */}
                </View>

      
}
