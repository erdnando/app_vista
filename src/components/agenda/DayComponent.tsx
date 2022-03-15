
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { Dots } from './Dots';



interface Props{
  dateString:string;
  day:number ;
  dayState:string;
  }

export const DayComponent = ({ dateString,day,dayState}:Props ) => {

  const { agenda,setAgenda } = useContext( GeneralContext )

  return (

   
    <View style={{borderWidth: (agenda.selectedDate=== dateString) ? 2 : 0,borderRadius:5,borderColor:'#FF9029', padding:2}}>

           <TouchableOpacity  onPress={() =>{   
            
                        const payload= agenda;
                        payload.selectedDate = dateString;
                        setAgenda(payload)

                        console.log('day click')
                        console.log(agenda.markedDates[agenda.selectedDate] );
                    
                      }}>
                <Text style={{textAlign: 'center',fontSize:16, color: dayState === 'disabled' ? '#E2E5EA' : 'black'}}>{day}</Text>
           </TouchableOpacity>

       
        { 
          (agenda.markedDates[dateString] != undefined) ?
          ( 
           <Dots arrDots={agenda.markedDates[dateString]['dots']}></Dots>
          )
        : (<View></View>)
        }


     
    </View>
)

   
           
}
