import React, { useContext, useState } from 'react';
import { Modal, TouchableHighlight, View, TextStyle, Text, Platform, Button } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';



export const ModalFecha = ( ) => {

  //call service to get data
  const { flags,setFlags,agendaFiltro } = useContext(GeneralContext);

    return  <View>
              <Modal   animationType='fade' transparent={true}   visible={ flags.modalFechaVisible }>

                  <View style={{ flex:1,backgroundColor:'rgba(0,0,0,0.7)',justifyContent:'flex-start', paddingTop:190, alignItems:'center' }}>

                        <View style={{backgroundColor:'white',width:300,height:300, shadowOffset:{
                          width:0,height:10
                        },shadowOpacity:0.27,elevation:4, borderRadius:6  }}>
                                <Text style={{color:'black'}} >modal fecha</Text>

                                {/* <View style={{flex:1,}}>
                                     <TimePicker campo={agendaFiltro.filtroFecha}
                                     placeHolder={'seleccione un horario'} 
                                     modo='date'/>      
                                </View> */}

                                {/* hide modal */}
                                <TouchableHighlight onPress={() => {
                                  
                                    const payload= flags;
                                    payload.modalFechaVisible =!flags.modalFechaVisible;
                                    setFlags(payload)
                                }}>

                                  <Text>Hide Modal</Text>
                                </TouchableHighlight>
                        </View>
                     

                  </View>

              </Modal>
           </View>   
}
