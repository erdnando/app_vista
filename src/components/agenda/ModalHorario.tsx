import React, { useContext, useState } from 'react';
import { Modal, TouchableHighlight, View, TextStyle, Text, Platform, Button } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ComandoFiltro } from './ComandoFiltro';



export const ModalHorario = ( ) => {

  //call service to get data
  const { flags,setFlags,agendaFiltro,setAgendaFiltro } = useContext(GeneralContext);
  const [date, setDate] = useState(new Date());
  const [horaAsignandaAux, setHoraAsignandaAux] = useState('');

  const onChange = (event:Event, selectedDate?:Date) => {
    const currentTime = selectedDate || date;
    setDate(currentTime);

    setHoraAsignandaAux(currentTime.getHours().toString()+ ':' + currentTime.getMinutes().toString())
  
  };


    return  <View>
             {/* fecha modal */}
              <Modal   animationType='fade' transparent={true}   visible={ flags.modalFechaHorarioVisible }>

                  <View style={{ flex:1,backgroundColor:'rgba(0,0,0,0.7)',justifyContent:'flex-start', paddingTop:190, alignItems:'center' }}>

                        <View style={{backgroundColor:'white',width:300,height:300,shadowOffset:{
                          width:0,height:10},shadowOpacity:0.27,elevation:4, borderRadius:6  }}>

                                <Text style={gstyles.tituloModal} >Escoja una horario</Text>

                                <DateTimePicker 
                                          testID="dateTimePickerx"
                                          value={date}
                                          mode='time'
                                          is24Hour={true}
                                          display='spinner'
                                          onChange={onChange}
                                        />

                                <ComandoFiltro label1='CANCEL' label2='OK'
                                  onPressAction1={()=>{
                                   //CANCEL
                                    const payload2= flags;
                                        payload2.modalFechaHorarioVisible =false;
                                        setFlags(payload2)

                                  }} onPressAction2={()=>{
                                    //OK
                                    console.log('ok sinseleccionar');
                                   
                                    if(horaAsignandaAux=== '' ){
                                      console.log('generando fecha');
                                      var hoy = new Date()
                                      // var dd = String(hoy.getDate()).padStart(2, '0');
                                      // var mm = armaMes( hoy.getMonth() + 1); //January is 0!
                                      // var yyyy = hoy.getFullYear();
                                      setHoraAsignandaAux(hoy.getHours()+ ':' + hoy.getMinutes)
                                      //setHoraAsignandaAux(dd + ' de ' + mm + ' de ' + yyyy)
                                      const payload1 =agendaFiltro;
                                      payload1.filtroHorario = hoy.getHours()+ ':' + hoy.getMinutes();
                                      setAgendaFiltro(payload1)
                                    }else{
                                      const payload1 =agendaFiltro;
                                      payload1.filtroHorario = horaAsignandaAux;
                                      setAgendaFiltro(payload1)
                                    }
                                      
                                    
                                      

                                        const payload= flags;
                                        payload.modalFechaHorarioVisible =false;
                                        setFlags(payload)
                                  }} />

                        </View>
                     

                  </View>

              </Modal>
           </View>   
}
