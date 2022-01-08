import React, { useContext, useState } from 'react';
import {  Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { GeneralContext } from '../../state/GeneralProvider';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Spacer } from '../Spacer';



interface Props{
  campo:string,
  placeHolder:string,
  modo:string
  }

export const TimePicker = ({ campo,placeHolder,modo} : Props) => {


  let colorIcono = colores.primary;

  const { agendaFiltro,setAgendaFiltro} = useContext( GeneralContext );

  const [mode, setMode] = useState('date');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event:Event, selectedDate?:Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };



    return <View style={{flex:1}}>  
               <View style={{flexDirection:'row', }}>

                    <View style={{position:'absolute',}} pointerEvents="none">
                      <CustomIcon name='bi_calendar-week' size={24} color={campo===''?'black':colorIcono }  style={{left:8,top:8,}} ></CustomIcon>
                    </View>
                
                   
                     <TouchableOpacity style={{left:0, top:8,backgroundColor:'transparent', width:'100%',height:30,borderBottomWidth:1,
                                               borderColor:campo===''?'black':colorIcono  }} 
                                               onPress={() =>{  
                                                 console.log('habilitando control..')
                                                 setShow(!show)   }}>
                                                 
                                            <Text style={{color:'black', left:50,fontFamily:'Roboto-Bold',fontSize:16,}}>
                                            {campo}
                                            </Text>
                     </TouchableOpacity>
                   
               </View>
               <Spacer height={10}></Spacer>
               <View style={{flex:1}}>
                     
                     {show &&  <DateTimePicker 
                                          testID="dateTimePicker"
                                          value={date}
                                          mode={mode == 'date' ? 'date' : 'time'}
                                          is24Hour={true}
                                          display='spinner'
                                          onChange={onChange}
                                        />}
               </View>


            </View>
}
