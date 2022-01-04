import React, { useState } from 'react';
import {  TextInput, View } from 'react-native';
import { useRelatorios } from '../../hooks/useRelatorios';
import { colores } from '../../theme/appTheme';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomIcon from '../../theme/CustomIcon';


interface Props{
  filtroFecha:string;
  setFiltroFecha: (filtroFecha:string)=>void;
  placeHolder:string
  }

export const FechaInput = ({filtroFecha,setFiltroFecha,placeHolder} : Props) => {


  let colorIcono = colores.primary;

  // const { onChangeFiltroCliente } = useRelatorios(); 
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const validaCeros = (fecha:number) => {
    if(fecha < 10) return '0' +fecha
    else return fecha
  }

  const handleConfirm = (date:Date) => {
    setFiltroFecha(validaCeros(date.getDate()) + "-"+ validaCeros(date.getMonth()+1)+ "-" +date.getFullYear())
    hideDatePicker();
  };
  



    return  <View style={{flex:1,flexDirection:'row'}}>

                    
                   <View style={{position:'absolute'}}>
                        <CustomIcon name='bi_calendar-week' size={24} color={filtroFecha===''?'black':colorIcono }  style={{left:8,top:8,}} ></CustomIcon>
                     </View>
                
                     <TextInput
                        style={{
                          // backgroundColor:'red',
                            fontFamily:'Roboto-Regular',
                            fontSize:16,
                            height: 40,
                            width:'100%',
                            margin: 2,
                            left:0,
                            paddingLeft: 45,
                            borderWidth: 1,
                            borderLeftWidth:0,
                            borderRightWidth:0,
                            borderTopWidth:0,
                            borderColor:filtroFecha===''?'black':colorIcono
                        }}
                        onPressIn={showDatePicker}
                        placeholder={placeHolder}
                        keyboardType='web-search'
                        autoCapitalize='none'
                        autoCorrect = {false}
                        maxLength={10}
                        value={filtroFecha}
                    />
                    
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        display='inline'
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                      />

                    
                   </View>

      
}
