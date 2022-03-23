import React, { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { HeaderTitle } from '../HeaderTitle';
import { useHome } from '../../hooks/useHome';
import { GraphMotiveGoNoGo } from '../../models/response/GraphMotiveGoNoGo';
import { Spacer } from '../Spacer';


interface Props{
    height:number
  }

export const ResultadoParecer = ( ) => {

 // const [graphData, setgraphData] = useState<GraphMotiveGoNoGo[]>([]);
  const {  graphMotiveGoNoGo,graphData,floading,totalPareceres,maxGrafica } = useHome(); 

  // useEffect(() => {
  //   console.log('recargando home');
  //   floading(true)
  //   graphMotiveGoNoGo();
  //   floading(false)
   
  // }, [])

  const labelTopGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].go}</Text> ) }
  const labelTopNoGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].noGo}</Text> ) }
  const labelEnAnalisis = () =>{  return( <Text style={{width:70, textAlign:'right'}}>{graphData[0].analise}</Text> ) }
  

  const barData = [
      {value: graphData[0].go,label: 'GO',frontColor: '#83AE69',topLabelComponent:labelTopGo },
      {value: graphData[0].noGo,label: 'NO GO',frontColor: '#B85050',topLabelComponent:labelTopNoGo },
      {value: graphData[0].analise,label: 'EM ANALISE',frontColor: '#F9A61A',topLabelComponent:labelEnAnalisis },
     
      ];

    return  <View style={{flex:1, flexDirection:'column',backgroundColor:'transparent', 
                        width:'100%',  alignItems:'center',}}>
                    <HeaderTitle label='Resultado do parecer' top={10} fontSize={17}></HeaderTitle>
                    <Spacer height={10}></Spacer>
                    <View style={{flex:1, marginBottom:0, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', 
                        alignItems:'flex-start', borderWidth: 0,backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
                        shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                        height: 1,
                        width: 1}}}>         
                              <BarChart
                              barWidth={70}
                              barBorderRadius={4}
                              verticalLinesThickness={1}
                              cappedBars={true}
                              capThickness={3}
                              capColor={'black'}
                              showFractionalValues={true}
                              showLine={true}
                              showXAxisIndices={true}
                              showReferenceLine1={true}
                              showVerticalLines={true}
                              showYAxisIndices={true}
                              noOfSections={5}
                              maxValue={maxGrafica}
                              data={barData}
                              isAnimated/>
                    </View>
                    <HeaderTitle label={`Total de Pareceres: ${totalPareceres}`} top={5} fontSize={17}></HeaderTitle>
            </View>
}
