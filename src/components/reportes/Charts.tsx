import React, { useContext } from 'react';
import {  Text, View } from 'react-native';
import { useRelatorios } from '../../hooks/useRelatorios';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { BarChart } from 'react-native-gifted-charts';
import { IndicadorSimple } from './IndicadorSimple';
import { IndicadorDoble } from './IndicadorDoble';
import { TituloGrafico } from './TituloGrafico';


export const Charts = () => {


  let colorIcono = colores.primary;
 //invoke global state
 const { relatorio } = useContext( GeneralContext )
 
 const { onChangeFiltroCliente } = useRelatorios(); 

 const labelTopGo = () =>{  return( <Text style={{ textAlign:'center'}}>80</Text> ) }
 const labelTopNoGo = () =>{  return( <Text style={{textAlign:'center'}}>60</Text> ) }
 const labelEnAnalisis = () =>{  return( <Text style={{textAlign:'center'}}>58</Text> ) }

 const labelVencidas= () =>{  return( <Text style={{textAlign:'center'}}>5</Text> ) }
 const labelPerdidas = () =>{  return( <Text style={{textAlign:'center'}}>25</Text> ) }
 const labelSuspensas = () =>{  return( <Text style={{textAlign:'center'}}>50</Text> ) }
 const labelFracasadas = () =>{  return( <Text style={{textAlign:'center'}}>23</Text> ) }
 const labelAndamento = () =>{  return( <Text style={{textAlign:'center'}}>85</Text> ) }

 const barDataParecer = [
  {value: 80,label: '',frontColor: '#83AE69',topLabelComponent:labelTopGo },
  {value: 60,label: '',frontColor: '#B85050',topLabelComponent:labelTopNoGo },
  {value: 58,label: '',frontColor: '#F9A61A',topLabelComponent:labelEnAnalisis },
  ];

const barDataParticipaciones = [
  {value: 5,label: '',frontColor: '#83AE69',topLabelComponent:labelVencidas },
  {value: 25,label: '',frontColor: '#B85050',topLabelComponent:labelPerdidas },
  {value: 50,label: '',frontColor: '#F9A61A',topLabelComponent:labelSuspensas },
  {value: 23,label: '',frontColor: '#B85050',topLabelComponent:labelFracasadas },
  {value: 85,label: '',frontColor: '#F9A61A',topLabelComponent:labelAndamento },
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
                                    maxValue={relatorio.isSelectorParecer ? 80 : 100}
                                    data={relatorio.isSelectorParecer ? barDataParecer : barDataParticipaciones}
                                    isAnimated />
                          
                            {/* indicadores de color */}
                            <View >
                                {relatorio.isSelectorParecer && <IndicadorSimple></IndicadorSimple>}

                                {!relatorio.isSelectorParecer && <IndicadorDoble></IndicadorDoble> }
                            </View>
                </View>

      
}
