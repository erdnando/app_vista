import React, { useContext, useEffect, useState } from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import {Calendar} from 'react-native-calendars';
import { useAgenda } from '../../hooks/useAgenda';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { Loading } from '../Loading';
import { DayComponent } from './DayComponent';


interface Props{}

export const Calendario = ( {  }: Props ) => {

  //invoke global state
  const { agenda,setAgenda,flags,setFlags } = useContext( GeneralContext )
  const { getMonthAgenda,processCalendar,floadingMonth } = useAgenda()

  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'red'};
  const massage = {key: 'massage', color: '#68AABF', selectedDotColor: '#68AABF'};
  const workout = {key: 'workout', color: '#FDBE0F', selectedDotColor: '#FDBE0F'};
  const eventox = {key: 'eventox', color: '#FF9029', selectedDotColor: '#FF9029'};

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

  const armaMesString = (month:string) => {

    switch (month) {
      case '01':
        return 'Enero'
        case '02':
        return 'Febrero'
        case  '03':
        return 'Marzo'
        case  '04':
        return 'Abril'
        case  '05':
        return 'Mayo'
        case  '06':
        return 'Junio'
        case  '07':
        return 'Julio'
        case  '08':
        return 'Agosto'
        case  '09':
        return 'Septiembre'
        case  '10':
        return 'Octubre'
        case  '11':
        return 'Noviembre'
        case  '12':
        return 'Diciembre'  
        case  '13':
        return 'Diciembre'
      default:
        return '';
        break;
    }
  }

  const add0AlMes =(messs :number) =>{
    switch (messs) {
    case 1:
      return '01'
      case 2:
      return '02'
      case  3:
      return '03'
      case  4:
      return '04'
      case  5:
      return '05'
      case  6:
      return '06'
      case  7:
      return '07'
      case  8:
      return '08'
      case  9:
      return '09'
    default:
      return messs.toString();
      break;
    }
  }
  
  // console.log('fecha del calendario:::::::::::::::::')
  // console.log(agenda.mesAnioAgenda)
  // var today =  agenda.mesAnioAgenda;//new Date();
  // var dd = String(today.getDate());
  // let mesn =  parseInt(today.getMonth().toString()) + 1;
  // var mm = armaMes( mesn); //January is 0!
  // var yyyy = today.getFullYear();

 // const [mes, setmes] = useState(mm+' '+yyyy.toString() );

  useEffect(() => {

    const payload= agenda;
    
    if(agenda.selectedDate===''){
        var today = agenda.mesAnioAgenda;//new Date();
        var dd = String(today.getDate());
        let mesn =  parseInt(today.getMonth().toString()) + 1;
        var mm =  add0AlMes(mesn); //January is 0!
        var yyyy = today.getFullYear();

       // console.log('-------------xxx----------');
        console.log(yyyy+'-'+ (armaMesString( mesn.toString()) )+'-'+dd);
        payload.selectedDate = yyyy+'-'+mm +'-'+dd;  
        setAgenda(payload)
    }
    
    
  }, [])

  let maxYear = new Date().getFullYear()+1

  

  return (
      <View style={{top: 10, backgroundColor:'red',marginBottom:-25}}>

            <Calendar ref={ref=>this.calendar=ref}
            
                      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                      minDate={maxYear-1+'-01-01'}
                      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                      maxDate={maxYear+'-12-31'}
                      dayComponent={({date, state}) => {
                        
                        const dateString = date.dateString;
                        const day = date.day;

                        if(flags.isLoadingMonthAgenda)state='disabled'

                        return (
                          <DayComponent dateString={dateString} day={day} dayState={state === 'disabled'? 'disabled':'enabled'} ></DayComponent>
                      
                        );
                      }}
                      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                      monthFormat={'MMMM yyyy'}
                      // Handler which gets executed when visible month changes in calendar. Default = undefined
                      onMonthChange= {async month => {
                        console.log('=========================================================');
                        console.log('month changed', month);
                  
                        let todayAgenda = new Date(month.dateString)

                        // var payload = agenda;
                        // payload.mesAnioAgenda= todayAgenda
                        // setAgenda(payload)

                        console.log('enviando a processCalendar:::::::');
                        console.log(todayAgenda)
                        console.log('=========================================================');
                        await getMonthAgenda(todayAgenda)
                        //await processCalendar(todayAgenda);
                      }}
                      // Hide month navigation arrows. Default = false
                      hideArrows={true}
                      // Do not show days of other months in month page. Default = false
                      hideExtraDays={false}
                      // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
                      // day from another month that is visible in calendar page. Default = false
                      disableMonthChange={true}
                      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                      firstDay={7}
                       // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                      onPressArrowLeft={subtractMonth => subtractMonth()}
                      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                      onPressArrowRight={addMonth => addMonth()}
                      // Disable left arrow. Default = false
                      disableArrowLeft={false}
                      // Disable right arrow. Default = false
                      disableArrowRight={false}
                      // Replace default month and year title with custom one. the function receive a date as parameter
                      renderHeader={(date:Date )=> {
                        /*Return JSX*/
                        return (
                          <>
                           <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}> 

                                {!flags.isLoadingMonthAgenda && <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}> 
                                        <TouchableOpacity style={{left:-20, top:-4}} onPress={() =>{ 
                                          this.calendar.addMonth(-1)
                                        }}>
                                              <Text style={{fontFamily:'Roboto-Bold'}}>
                                                  <CustomIcon  name='ic_round-keyboard-arrow-left' size={28} color='#000000'  ></CustomIcon>
                                              </Text>
                                        </TouchableOpacity>


                                        <Text style={{fontFamily:'Roboto-Bold', fontSize:17}}>{ armaMes(date.getMonth()+1) } </Text>
                                       
                           

                                        <TouchableOpacity style={{right:-20, top:-4}} onPress={() =>{ 
                                          this.calendar.addMonth(1)
                                         
                                        }}>
                                              <Text style={{fontFamily:'Roboto-Bold'}}>
                                                  <CustomIcon  name='ic_round-keyboard-arrow-right' size={28} color='#000000'  ></CustomIcon>
                                              </Text>
                                        </TouchableOpacity>
                                  </View>}
                                  
                                  {flags.isLoadingMonthAgenda && <Loading loadingSize={30} color='orange' backgroundColor='transparent' height={30} imageSize={0}></Loading>}

                                   {/* filtros agenda */}
                                  {!flags.isLoadingMonthAgenda && <TouchableOpacity style={{left:0, top:-4}} onPress={() =>{ 
                                     const payload= flags;
                                     payload.modalFiltrosVisible =true;
                                     setFlags(payload)
                                  }}>
                                        <Text style={{fontFamily:'Roboto-Bold'}}>
                                            <CustomIcon  name='carbon_overflow-menu-vertical' size={26} color='black'  ></CustomIcon>
                                        </Text>
                                  </TouchableOpacity>}

                            </View>
                          </>
                        )
                      }}
                    />

                        
      </View>
    )
}
