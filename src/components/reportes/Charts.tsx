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


export const Charts = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const { relatorio } = useContext( GeneralContext )
 const {  graphMotiveGoNoGo,graphData,graphDataParticipaciones,floading,totalPareceres,maxGrafica } = useHome(); 
 
 const { onChangeFiltroCliente } = useRelatorios(); 

//  const labelTopGo = () =>{  return( <Text style={{ textAlign:'center'}}>80</Text> ) }
//  const labelTopNoGo = () =>{  return( <Text style={{textAlign:'center'}}>60</Text> ) }
//  const labelEnAnalisis = () =>{  return( <Text style={{textAlign:'center'}}>58</Text> ) }
const labelTopGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].go}</Text> ) }
const labelTopNoGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].noGo}</Text> ) }
const labelEnAnalisis = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].analise}</Text> ) }

 const labelVencidas= () =>{  return( <Text style={{textAlign:'center'}}>{graphDataParticipaciones[0].vencidas}</Text> ) }
 const labelPerdidas = () =>{  return( <Text style={{textAlign:'center'}}>{graphDataParticipaciones[0].perdidas}</Text> ) }
 const labelSuspensas = () =>{  return( <Text style={{textAlign:'center'}}>{graphDataParticipaciones[0].suspensas}</Text> ) }
 const labelFracasadas = () =>{  return( <Text style={{textAlign:'center'}}>{graphDataParticipaciones[0].fracassadas} </Text> ) }
 const labelAndamento = () =>{  return( <Text style={{textAlign:'center'}}>{graphDataParticipaciones[0].andamento}</Text> ) }

//  const barDataParecer = [
//   {value: 80,label: '',frontColor: '#83AE69',topLabelComponent:labelTopGo },
//   {value: 60,label: '',frontColor: '#B85050',topLabelComponent:labelTopNoGo },
//   {value: 58,label: '',frontColor: '#F9A61A',topLabelComponent:labelEnAnalisis },
//   ];
  const barDataParecer = [
    {value: graphData[0].go,label: 'GO',frontColor: '#83AE69',topLabelComponent:labelTopGo },
    {value: graphData[0].noGo,label: 'NO GO',frontColor: '#B85050',topLabelComponent:labelTopNoGo },
    {value: graphData[0].analise,label: 'EM ANALISE',frontColor: '#F9A61A',topLabelComponent:labelEnAnalisis },
   
    ];

const barDataParticipaciones = [
  {value: graphDataParticipaciones[0].vencidas,label: '',frontColor: '#83AE69',topLabelComponent:labelVencidas },
  {value: graphDataParticipaciones[0].perdidas,label: '',frontColor: '#B85050',topLabelComponent:labelPerdidas },
  {value: graphDataParticipaciones[0].suspensas,label: '',frontColor: '#F9A61A',topLabelComponent:labelSuspensas },
  {value: graphDataParticipaciones[0].fracassadas,label: '',frontColor: '#B85050',topLabelComponent:labelFracasadas },
  {value: graphDataParticipaciones[0].andamento,label: '',frontColor: '#F9A61A',topLabelComponent:labelAndamento },
  ];


 

    return    <View style={{  width:'90%',flexGrow:1, height: !relatorio.isFilterCollapsed ? '15%' : '68%', justifyContent:'center',
                    alignItems:'flex-start', borderWidth: 0,backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
                    shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: { height: 1, width: 1}}}>   

                         <TituloGrafico></TituloGrafico>
                          
                          <BarChart barWidth={relatorio.isSelectorParecer ? 85 : 50}
                                    height={!relatorio.isFilterCollapsed ? 200 : 350}
                                    barBorderRadius={4}
                                    verticalLinesThickness={1}
                                    cappedBars={true}
                                    capThickness={3}
                                    capColor={'black'}
                                    spacing={1}
                                    initialSpacing={20}
                                    showFractionalValues={true}
                                    showLine={true}
                                    showXAxisIndices={true}                           
                                    showVerticalLines={true}
                                    showYAxisIndices={true}
                                    noOfSections={5}
                                    width={280}
                                    maxValue={relatorio.isSelectorParecer ? maxGrafica : 100}
                                    data={relatorio.isSelectorParecer ? barDataParecer : barDataParticipaciones}
                                    isAnimated />
                          
                            {/* indicadores de color */}
                            <View >
                                {relatorio.isSelectorParecer && <IndicadorSimple></IndicadorSimple>}

                                {!relatorio.isSelectorParecer && <IndicadorDoble></IndicadorDoble> }
                            </View>
                </View>

      
}
