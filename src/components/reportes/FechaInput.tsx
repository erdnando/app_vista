import React, { useContext, useState } from 'react';
import {  Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRelatorios } from '../../hooks/useRelatorios';
import { colores } from '../../theme/appTheme';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomIcon from '../../theme/CustomIcon';
import { GeneralContext } from '../../state/GeneralProvider';



interface Props{
  filtroFecha:string;
  setFiltroFecha: (relatorio:Relatorio)=>void;
  placeHolder:string,
  iniFini:string
  }

export const FechaInput = ({filtroFecha,setFiltroFecha,placeHolder,iniFini} : Props) => {


  let colorIcono = colores.primary;

  // const { onChangeFiltroCliente } = useRelatorios(); 
  const { relatorio,setRelatorio} = useContext( GeneralContext );
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
    //setFiltroFecha(validaCeros(date.getDate()) + "-"+ validaCeros(date.getMonth()+1)+ "-" +date.getFullYear())

    const payload= relatorio;
    iniFini=='ini' ? payload.filtroFechaInicial=validaCeros(date.getDate()) + "-"+ validaCeros(date.getMonth()+1)+ "-" +date.getFullYear()
    : payload.filtroFechaFinal=validaCeros(date.getDate()) + "-"+ validaCeros(date.getMonth()+1)+ "-" +date.getFullYear();
    setRelatorio(payload);

    hideDatePicker();
    
  };
  



    return  <View style={{flex:1,flexDirection:'row'}}>

                    
                   <View style={{position:'absolute'}} pointerEvents="none">
                        <CustomIcon name='bi_calendar-week' size={24} color={filtroFecha===''?'black':colorIcono }  style={{left:8,top:8,}} ></CustomIcon>
                     </View>
                
                   
                     <TouchableOpacity style={{left:0, top:8,backgroundColor:'transparent', width:'100%',height:30,borderBottomWidth:1,
                                               borderColor:filtroFecha===''?'black':colorIcono  }} onPress={() =>{showDatePicker()    }}>
                                            <Text style={{color:'black', left:50,fontFamily:'Roboto-Bold',fontSize:16,}}>
                                            {iniFini=='ini' ? relatorio.filtroFechaInicial : relatorio.filtroFechaFinal}
                                            </Text>
                    </TouchableOpacity>
                
                    
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        // display='inline'
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                      />

                    
                   </View>

      
}
