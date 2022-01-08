import React, { useContext, useState } from 'react';
import { Modal, TouchableHighlight, View, TextStyle, Text, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GeneralContext } from '../../state/GeneralProvider';
import { TimePicker } from './TimePicker';
import { InputLauncherModal } from './InputLauncherModal';
import { ModalFecha } from './ModalFecha';


export const ModalFiltros = ( ) => {

  //call service to get data
  const { flags,setFlags,mensaje,setMensaje,usuario,agendaFiltro } = useContext(GeneralContext);
                                                                             // opcionesAgendaVisible
    return  <View>
              <Modal   animationType='fade' transparent={true}   visible={ flags.modalFiltrosVisible }>

                  <View style={{ flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'flex-start', paddingTop:140, alignItems:'center' }}>

                        <View style={{backgroundColor:'white',width:300,height:400,shadowOpacity:0.27,elevation:4, borderRadius:6, shadowOffset:{ width:0,height:10 },  }}>
                                <Text style={{color:'black',fontFamily:'Roboto-Bold', fontSize:18,paddingTop:20,paddingLeft:20}} >Filtros</Text>
                                <Text style={{color:'grey',fontFamily:'Roboto-Regular', fontSize:14,paddingTop:10,paddingLeft:20}} >Filtre por horarios</Text>

                                {/* open modal fecha*/}
                                <View style={{flex:1,marginTop:20}}>
                                     <InputLauncherModal campo={agendaFiltro.filtroFecha} modo='date'/>      
                                </View>

                                {/* hide modal */}
                                <TouchableHighlight onPress={() => {
                                      const payload= flags;
                                      payload.modalFiltrosVisible =!flags.modalFiltrosVisible;
                                      setFlags(payload)
                                  }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                        </View>
                     

                  </View>

                  <View><ModalFecha></ModalFecha></View>

              </Modal>
           </View>   
}
