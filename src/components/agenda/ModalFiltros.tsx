import React, { useContext, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Platform } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { InputLauncherModal } from './InputLauncherModal';
import { ModalFecha } from './ModalFecha';
import { gstyles } from '../../theme/appTheme';
import { ComandoFiltro } from './ComandoFiltro';
import { Spacer } from '../Spacer';
import { ModalHorario } from './ModalHorario';
import CustomIcon from '../../theme/CustomIcon';
import { CheckBoxFiltro } from './CheckBoxFiltro';
import { CheckBoxSeccion } from './CheckBoxSeccion';
import DateTimePicker from '@react-native-community/datetimepicker';


export const ModalFiltros = ( ) => {

      const [showAndroidFechaControl, setShowAndroidFechaControl] = useState(false);
      const [showAndroidTimeControl, setShowAndroidTimeControl] = useState(false);
      const [dateFecha, setDateFecha] = useState(new Date());
      const [dateTime, setDateTime] = useState(new Date());
      
      const onChangeFechaFiltro = (event:Any, selectedDate?:Date) => {
            console.log(event.type);
            setShowAndroidFechaControl(false); 
            if(event.type=='set'){
                  //acepted
                  const currentDate = selectedDate || new Date();

                  var dd = String(currentDate.getDate()).padStart(2, '0');
                  var mm = armaMes( currentDate.getMonth() + 1); //January is 0!
                  var yyyy = currentDate.getFullYear();
            
                  const payload1 =agendaFiltro;
                  payload1.filtroFecha = dd + ' de ' + mm + ' de ' + yyyy;
                  setAgendaFiltro(payload1)
            }
          };

      const onChangeTimeFiltro = (event:Any, selectedDate?:Date) => {
            console.log(event.type);
            setShowAndroidTimeControl(false); 
            if(event.type=='set'){
                  //acepted
                  // const currentDate = selectedDate || new Date();

                  // var dd = String(currentDate.getDate()).padStart(2, '0');
                  // var mm = armaMes( currentDate.getMonth() + 1); //January is 0!
                  // var yyyy = currentDate.getFullYear();
            
                  // const payload1 =agendaFiltro;
                  // payload1.filtroHorario = dd + ' de ' + mm + ' de ' + yyyy;
                  // setAgendaFiltro(payload1)
                  //---------------

                  const currentTime = selectedDate || new Date();
                  setDateTime(currentTime);

                  //setHoraAsignandaAux(currentTime.getHours().toString()+ ':' + currentTime.getMinutes().toString())
                  const payload1 =agendaFiltro;
                  payload1.filtroHorario =currentTime.getHours().toString()+ ':' + currentTime.getMinutes().toString();
                  setAgendaFiltro(payload1)
            }
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
  //call service to get data
  const { flags,setFlags,setAgendaFiltro,agendaFiltro } = useContext(GeneralContext);
                                                                             
    return  <View>
              <Modal   animationType='fade' transparent={true}   visible={ flags.modalFiltrosVisible }>

                  <View style={{ flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'flex-start', paddingTop:140, alignItems:'center' }}>

                        <View style={{ backgroundColor:'white',width:300,height:460,shadowOpacity:0.27,elevation:4, borderRadius:6, shadowOffset:{ width:0,height:10 },  }}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={gstyles.tituloModal} >Filtros</Text>

                                    <TouchableOpacity style={{right:10, top:20}} onPress={() =>{ 
                                          const payload1= flags;
                                          payload1.modalFiltrosVisible =!flags.modalFiltrosVisible;
                                          setFlags(payload1)
                                      }}>
                                            <Text style={{fontFamily:'Roboto-Bold'}}>
                                                <CustomIcon  name='ic_round-close' size={22} color='#838892'  ></CustomIcon>
                                            </Text>
                                      </TouchableOpacity>
                                </View>

                                <Spacer height={20}></Spacer>
                                <Text style={{color:'grey',fontFamily:'Roboto-Regular', fontSize:14,top:-10,paddingLeft:20}} >Filtre por estatus</Text>

                                <Spacer height={10}></Spacer>
                                <CheckBoxSeccion></CheckBoxSeccion>
                            

                                <Spacer height={20}></Spacer>
                                <Text style={{color:'grey',fontFamily:'Roboto-Regular', fontSize:14,top:-10,paddingLeft:20}} >Filtre por horario</Text>


                                {/* open modal fecha*/}
                                <InputLauncherModal campo={agendaFiltro.filtroFecha} onPress={()=>{
                                      if(Platform.OS=='ios'){
                                          console.log('modal de filtro fecha..');
                                          const payload= flags;
                                          payload.modalFechaVisible=true;//open fecha modal
                                          setFlags(payload)
                                      }else{
                                            //just android
                                            setShowAndroidFechaControl(true)
                                      }
                                }}/> 

                              {showAndroidFechaControl && (
                                                            <DateTimePicker 
                                                            testID="dateTimePicker"   
                                                            value={dateFecha}
                                                            mode={'date'}
                                                            display='spinner'
                                                            onChange={onChangeFechaFiltro}
                                                            />
                                                            )}
      
                                <Spacer height={20}></Spacer>
                                {/* open modal horario*/}
                                <InputLauncherModal campo={agendaFiltro.filtroHorario}  onPress={()=>{
                                      if(Platform.OS=='ios'){
                                          console.log('modal de filtro horario..');
                                          const payload= flags;
                                          payload.modalFechaHorarioVisible=true;//open fecha modal
                                          setFlags(payload)
                                      }else{
                                                //just android
                                                setShowAndroidTimeControl(true)
                                          }
                                }}/>   

                                {showAndroidTimeControl && (<DateTimePicker 
                                                            testID="dateTimePickerTime"
                                                            value={dateTime}
                                                            mode='time'
                                                            is24Hour={true}
                                                            display='spinner'
                                                            onChange={onChangeTimeFiltro}
                                                            />)
                                }   
                                
                                <Spacer height={50}></Spacer>
                                {/* hide modal */}
                                 <ComandoFiltro label1='LIMPIAR' label2='FILTRAR'
                                  onPressAction1={()=>{

                                    const payload =agendaFiltro;
                                    payload.filtroFecha = 'Seleccione una fecha';
                                    payload.filtroHorario= 'Seleccione un horario';
                                    setAgendaFiltro(payload)

                                  

                                  }} onPressAction2={()=>{
                                    const payload= flags;
                                    payload.modalFiltrosVisible =!flags.modalFiltrosVisible;
                                    setFlags(payload)
                                  }} />
                                <Spacer height={50}></Spacer>
                                  
                        </View>
                     

                  </View>

                  <View><ModalFecha></ModalFecha></View>
                  <View><ModalHorario></ModalHorario></View>

              </Modal>
           </View>   
}
