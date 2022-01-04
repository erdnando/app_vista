import React, { useContext, useState } from 'react';
import { Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { useRelatorios } from '../../hooks/useRelatorios';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores } from '../../theme/appTheme';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Spacer } from '../Spacer';
import CustomIcon from '../../theme/CustomIcon';
import { FechaInput } from './FechaInput';
import Collapsible from 'react-native-collapsible';


interface Props{
    height:number
  }

export const Participaciones = ( ) => {

  const labelTopGo = () =>{  return( <Text style={{ textAlign:'center'}}>80</Text> ) }
  const labelTopNoGo = () =>{  return( <Text style={{textAlign:'center'}}>60</Text> ) }
  const labelEnAnalisis = () =>{  return( <Text style={{textAlign:'center'}}>58</Text> ) }

  const labelVencidas= () =>{  return( <Text style={{textAlign:'center'}}>5</Text> ) }
  const labelPerdidas = () =>{  return( <Text style={{textAlign:'center'}}>25</Text> ) }
  const labelSuspensas = () =>{  return( <Text style={{textAlign:'center'}}>50</Text> ) }
  const labelFracasadas = () =>{  return( <Text style={{textAlign:'center'}}>23</Text> ) }
  const labelAndamento = () =>{  return( <Text style={{textAlign:'center'}}>85</Text> ) }

  let colorIcono = colores.primary;
  //invoke global state
  const { filtroCliente, setFiltroCliente, filtroFechaInicial, 
          setFiltroFechaInicial,filtroFechaFinal,setFiltroFechaFinal } = useContext( GeneralContext )
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isParecer, setIsParecer] = useState(true);


  const { onChangeFiltroCliente } = useRelatorios(); 
  
  

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

    return  <View style={{flex:1,backgroundColor:'#BCC1CB',
                        width:'100%',  alignItems:'center',}}>
            {/* filtros    */}
             <View style={{flex:1, width:'100%',justifyContent:'flex-start', backgroundColor:'white'}}>
                  {/* colapsar filtro */}
                  <View style={{justifyContent:'flex-end',alignItems:'center',height:50,top:-12 ,width:'100%' }}>
                            <TouchableOpacity  style={{ borderRadius: 100,  }} 
                              onPress={() =>{ 
                                setIsCollapsed(!isCollapsed);
                              }} >
                              <View style={{flexDirection:'row'}}>
                                    <Text  style={{ fontFamily:'Roboto-Bold',fontSize:17,fontWeight:'600', textAlign:'center',color:'black' }}>Filtrar</Text>
                                    <CustomIcon name= {isCollapsed ? 'ic_round-keyboard-arrow-down': 'ic_round-keyboard-arrow-up'} size={24} color='black' style={{right:-10,top:-2,}} ></CustomIcon>
                                  </View>
                            </TouchableOpacity>
                   </View>

                  {/* filtro cliente */}
                  <Collapsible collapsed={isCollapsed} >
                   <View style={{ width:'100%',height:180, backgroundColor:'white', paddingHorizontal:18}} >
                          {/* filtro cliente */}
                          <TextInput style={{
                                      fontFamily:'Roboto-Regular',
                                      fontSize:16,
                                      height: 40,
                                      width:'100%',
                                      margin: 1,
                                      paddingLeft:1,
                                      borderWidth: 1,
                                      borderLeftWidth:0,
                                      borderRightWidth:0,
                                      borderTopWidth:0,
                                      borderColor:filtroCliente===''?'black':colorIcono
                                  }}
                                  onChangeText={ onChangeFiltroCliente }
                                  placeholder='Cliente'
                                  keyboardType='web-search'
                                  autoCapitalize='none'
                                  autoCorrect = {false}
                                  maxLength={27} value={filtroCliente} />
                            
                          <Spacer height={15}></Spacer>
                          {/* filtros fecha inicial*/}
                          <View style={{flexDirection:'row'}}>
                              <FechaInput filtroFecha={filtroFechaInicial} setFiltroFecha={setFiltroFechaInicial} placeHolder='Fecha inicial'></FechaInput>
                              <View style={{width:30}}></View>
                              <FechaInput filtroFecha={filtroFechaFinal} setFiltroFecha={setFiltroFechaFinal} placeHolder='Fecha final'></FechaInput>
                          </View>
                          {/* commands to clean and filter */}
                          <View style={{flexDirection:'row',justifyContent:'flex-end', top:35}}>
                              <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={()=>{  
                                // limpiar
                                setFiltroFechaInicial('');
                                setFiltroFechaFinal('');
                               }}>
                                <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>LIMPIAR</Text>
                              </TouchableOpacity>
                              <View style={{width:50}}></View>
                              <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={()=>{ 
                                //filtrar
                                //TODO implement api call
                                }} >
                                <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>FILTRAR</Text>
                              </TouchableOpacity>
                              <View style={{width:10}}></View>
                          </View>
                   </View>
                   </Collapsible>

                    
             </View>

              <Spacer height={20}></Spacer>
              
              {/* botones tabs rounded */}
              <View style={{backgroundColor:'#BCC1CB',width:'90%',left:-3, height:70, paddingBottom:10}}>
                      <View style={{ flex:1,flexDirection:'row', alignItems:'center',  justifyContent:'center', alignContent:'center', }}>
                        <TouchableOpacity  
                          style={{width:'50%', borderRadius: 100,borderBottomEndRadius:0,borderTopEndRadius:0,borderColor: isParecer ? 'transparent' :'grey', borderWidth: isParecer ? 0: 0.9,
                          backgroundColor: isParecer ? colores.primary : '#BCC1CB', 
                          height:48, justifyContent:'center',  }} 
                            onPress= {()=>{
                              setIsParecer(true);
                            }}>
                            <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color:'black'}}>PARECER</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  
                          style={{ width:'50%',borderRadius: 100,borderBottomStartRadius:0,borderTopStartRadius:0, 
                          backgroundColor: isParecer ? '#BCC1CB' : colores.primary, borderColor:'grey',borderWidth: isParecer ? 0.9 : 0,
                          height:48, justifyContent:'center',  }} 
                            onPress= {()=>{
                              setIsParecer(false);
                            }}>
                            <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color:'black'}}>PARTICIPACIONES</Text>
                        </TouchableOpacity>
                  </View>      
              </View>


              {/* charts */}
              <View style={{  width:'90%',flexGrow:1, height: !isCollapsed ? '15%' : '68%', justifyContent:'center',
                  alignItems:'flex-start', borderWidth: 0,backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
                  shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: { height: 1, width: 1}}}>   

                        
                    <View style={{  height:30,width:'99%',justifyContent:'center',alignItems:'center',alignContent:'center'  }}>
                          <Text style={{ flex:1, height: 16,color: 'gray', fontFamily:'Roboto-Bold', fontSize:16}}>
                            { isParecer ? 'Resultado do parecer' : 'Resultado de participaciones'}</Text>
                    </View>
                        

                        <BarChart barWidth={isParecer ? 85 : 50}
                                  height={!isCollapsed ? 200 : 350}
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
                                  maxValue={isParecer ? 80 : 100}
                                  data={isParecer ? barDataParecer : barDataParticipaciones}
                                  isAnimated />
                        
                          {/* indicadores de color */}
                          <View >
                              {isParecer && <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:0,left:25 }}>
                                
                                <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                                  <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#83AE69', marginRight: 8,}}/>
                                  <Text style={{ height: 16,color: 'gray'}}>GO</Text>
                                </View>

                                <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                                  <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#B85050',marginRight: 8, }} />
                                  <Text style={{height: 16,color: 'gray',}}>NO GO</Text>
                                </View>

                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                  <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#F9A61A',marginRight: 8, }} />
                                  <Text style={{height: 16,color: 'gray',}}>Aguardando</Text>
                                </View>

                              </View>}

                              {!isParecer && <View style={{ flexDirection:'column',justifyContent:'space-evenly',marginTop:0,left:25 }}>
                                <View style={{width:'100%', flexDirection:'row'}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                                      <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#83AE69', marginRight: 8,}}/>
                                      <Text style={{ height: 16,color: 'gray'}}>Vencidas</Text>
                                    </View>

                                    <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                                      <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#B85050',marginRight: 8, }} />
                                      <Text style={{height: 16,color: 'gray',}}>Perdidas</Text>
                                    </View>

                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                      <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#F9A61A',marginRight: 8, }} />
                                      <Text style={{height: 16,color: 'gray',}}>Suspensas</Text>
                                    </View>
                                </View>

                                <View style={{width:'100%', flexDirection:'row'}}>
                                      <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                                          <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#83AE69', marginRight: 8,}}/>
                                          <Text style={{ height: 16,color: 'gray'}}>Fracasadas</Text>
                                      </View>

                                      <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                                          <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#B85050',marginRight: 8, }} />
                                          <Text style={{height: 16,color: 'gray',}}>En andamento</Text>
                                      </View>

                                      
                                </View>
                                

                              </View>}
                          </View>
              </View>
              <Spacer height={20}></Spacer>
                  
            </View>
}
