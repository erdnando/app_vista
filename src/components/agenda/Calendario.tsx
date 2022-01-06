import React, { useContext, useState } from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';



interface Props{
  
}

export const Calendario = ( {  }: Props ) => {

  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};

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

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = armaMes( today.getMonth() + 1); //January is 0!
var yyyy = today.getFullYear();

 const [mes, setmes] = useState(mm+' '+yyyy.toString() )

  

    return (
      <View style={{flex: 1,top: 10, bottom:70}}>

            <Calendar ref={ref=>this.calendar=ref}
                      // Initially visible month. Default = Date()
                      current={'2022-01-05'}
                      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                      minDate={'2012-05-10'}
                      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                      maxDate={'2022-05-30'}
                      // Handler which gets executed on day press. Default = undefined
                      onDayPress={day => {
                        console.log('selected day', day);
                        console.log(day.month+1);
                        var mess=armaMes(day.month);
                        var fecha = mess+' '+ day.year.toString();
                        setmes( fecha );
                      }}
                      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                      monthFormat={'MMMM yyyy'}
                      // Handler which gets executed when visible month changes in calendar. Default = undefined
                      onMonthChange={month => {
                        console.log('month changed', month);
                        // setmes( month.dateString )
                        var mess=armaMes(month.month);
                        setmes( mess+' '+ month.year );
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

                                <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}> 
                                      <TouchableOpacity style={{left:-20, top:-4}} onPress={() =>{ 
                                        this.calendar.addMonth(-1)
                                      }}>
                                            <Text style={{fontFamily:'Roboto-Bold'}}>
                                                <CustomIcon  name='ic_round-keyboard-arrow-left' size={28} color='#000000'  ></CustomIcon>
                                            </Text>
                                      </TouchableOpacity>


                                      <Text style={{fontFamily:'Roboto-Bold', fontSize:17}}>{ mes } </Text>
                                      


                                      <TouchableOpacity style={{right:-20, top:-4}} onPress={() =>{ 
                                        this.calendar.addMonth(1)
                                      }}>
                                            <Text style={{fontFamily:'Roboto-Bold'}}>
                                                <CustomIcon  name='ic_round-keyboard-arrow-right' size={28} color='#000000'  ></CustomIcon>
                                            </Text>
                                      </TouchableOpacity>
                                  </View>

                                  <TouchableOpacity style={{left:0, top:-4}} onPress={() =>{ 
                                    
                                  }}>
                                        <Text style={{fontFamily:'Roboto-Bold'}}>
                                            <CustomIcon  name='carbon_overflow-menu-vertical' size={26} color='black'  ></CustomIcon>
                                        </Text>
                                  </TouchableOpacity>

                            </View>
                          </>
                        )
                      }}
                    />
                      
                    

      </View>
    )
}
