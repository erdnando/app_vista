import React from 'react';
import { Platform, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { HeaderTitle } from '../HeaderTitle';


interface Props{
    height:number
  }

export const ResultadoParecer = ( ) => {

  const labelTopGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>455</Text> ) }
  const labelTopNoGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>210</Text> ) }
  const labelEnAnalisis = () =>{  return( <Text style={{width:70, textAlign:'right'}}>6</Text> ) }
  

  const barData = [
      {value: 455,label: 'GO',frontColor: '#83AE69',topLabelComponent:labelTopGo },
      {value: 210,label: 'NO GO',frontColor: '#B85050',topLabelComponent:labelTopNoGo },
      {value: 6,label: 'EM ANALISE',frontColor: '#F9A61A',topLabelComponent:labelEnAnalisis },
     
      ];

    return  <View style={{flex:1, flexDirection:'column',backgroundColor:'#BCC1CB', position:'absolute', bottom:0, 
                        width:'100%', height:Platform.OS=='ios' ? '73%': '78%',  alignItems:'center',}}>
                    <HeaderTitle label='Resultado do parecer' top={95+30} fontSize={17}></HeaderTitle>

                    <View style={{height:Platform.OS=='ios' ? '58%': '72%',bottom: -115, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', 
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
                              maxValue={500}
                              data={barData}
                              isAnimated/>
                    </View>
                    <HeaderTitle label='Total de Pareceres: 710' top={95+30} fontSize={17}></HeaderTitle>
            </View>
}
