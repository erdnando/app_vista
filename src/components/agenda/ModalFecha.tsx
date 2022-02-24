import React, { useContext, useState } from 'react';
import { Modal, View, Text, Platform, Button } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ComandoFiltro } from './ComandoFiltro';



export const ModalFecha = ( ) => {

  //call service to get data
  const { flags,setFlags,agendaFiltro,setAgendaFiltro } = useContext(GeneralContext);
  const [date, setDate] = useState(new Date());
  // const [show, setShow] = useState(true);
  const [fechaAsignandaAux, setFechaAsignandaAux] = useState('');

  const onChange = (event:Event, selectedDate?:Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    // const payload =agendaFiltro;
    //set date in human view
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = armaMes( currentDate.getMonth() + 1); //January is 0!
    var yyyy = currentDate.getFullYear();

    setFechaAsignandaAux(dd + ' de ' + mm + ' de ' + yyyy)
   
  };

  const armaMes = (month:number) => {

    switch (month) {
      case 1:
        return 'Enero'
        case 2:
        return 'Febrero'
        case  3:
        return 'Marzo'
        case  4:
        return 'Abril'
        case  5:
        return 'Mayo'
        case  6:
        return 'Junio'
        case  7:
        return 'Julio'
        case  8:
        return 'Agosto'
        case  9:
        return 'Septiembre'
        case  10:
        return 'Octubre'
        case  11:
        return 'Noviembre'
        case  12:
        return 'Diciembre'  
        case  13:
        return 'Diciembre'
      default:
        return '';
        break;
    }
  }


    return  <View>
             {/* fecha modal */}
              <Modal   animationType='fade' transparent={true}   visible={ flags.modalFechaVisible }>

                  <View style={{ flex:1,backgroundColor:'rgba(0,0,0,0.7)',justifyContent:'flex-start', paddingTop:190, alignItems:'center' }}>

                        <View style={{backgroundColor:'white',width:300,height:300,shadowOffset:{
                          width:0,height:10},shadowOpacity:0.27,elevation:4, borderRadius:6  }}>

                                <Text style={gstyles.tituloModal} >Escoja una fecha</Text>

                                     <DateTimePicker 
                                          testID="dateTimePicker"
                                          value={date}
                                          mode={'date'}
                                          // is24Hour={true}
                                          display={Platform.OS=='ios' ? 'spinner': 'spinner'}
                                          onChange={onChange}
                                        />
                              

                                <ComandoFiltro label1='CANCEL' label2='OK'
                                  onPressAction1={()=>{
                                   //CANCEL
                                    const payload2= flags;
                                        payload2.modalFechaVisible =false;
                                        setFlags(payload2)

                                  }} onPressAction2={()=>{
                                    //OK
                                    console.log('ok sinseleccionar');
                                   
                                    if(fechaAsignandaAux=== '' ){
                                      console.log('generando fecha');
                                      var hoy = new Date()
                                      var dd = String(hoy.getDate()).padStart(2, '0');
                                      var mm = armaMes( hoy.getMonth() + 1); //January is 0!
                                      var yyyy = hoy.getFullYear();
                                  
                                      setFechaAsignandaAux(dd + ' de ' + mm + ' de ' + yyyy)
                                      const payload1 =agendaFiltro;
                                      payload1.filtroFecha = dd + ' de ' + mm + ' de ' + yyyy;
                                      setAgendaFiltro(payload1)
                                    }else{
                                      const payload1 =agendaFiltro;
                                      payload1.filtroFecha = fechaAsignandaAux;
                                      setAgendaFiltro(payload1)
                                    }
                                      
                                    
                                      

                                        const payload= flags;
                                        payload.modalFechaVisible =false;
                                        setFlags(payload)
                                  }} />

                        </View>
                     

                  </View>

              </Modal>
           </View>   
}
