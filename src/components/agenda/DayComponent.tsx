
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AgendaItem } from '../../models/AgendaItem';
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

                        if(agenda.markedDates[agenda.selectedDate] != undefined){

                              let arrAux:AgendaItem[] =agenda.markedDates[agenda.selectedDate].detailItem;
                              const payload= agenda;

                              

                              if(arrAux.length>0){
                                payload.lastUpdates=[];
                                let hora = '';
                                let horaAnterior = '';
                                let horaVisible=true;
                                let colorBoton='black';
                                arrAux.forEach(function(item,index){

                                  hora = item.horaCertame.substring(0,2)+':'+item.horaCertame.substring(2);

                                  if(hora==horaAnterior){
                                    horaVisible=false;
                                  }else{
                                    horaVisible=true;
                                  }
                                  horaAnterior=hora;


                                  if( item.parecerEstrategico=='G' && item.statusEstrategico=='F') colorBoton= '#48e879';        //GG
                                  else if( item.parecerEstrategico==null && item.statusEstrategico=='P') colorBoton= '#f4ff35';
                                  else if( item.parecerEstrategico=='N' && item.statusEstrategico=='P') colorBoton= 'red';
                                  else if( item.status=='F') colorBoton= '#b2b8b7';
                                  else  colorBoton= 'black';
                                  
                                  payload.lastUpdates.push( { 
                                      id: index.toString(),
                                      tipo:'EVENT',
                                      dia:'Hoy',
                                      hora: hora,
                                      descripcion:item.orgao,
                                      color: 'red',
                                      icon:'bx_bxs-message-alt-error',
                                      horaVisible:horaVisible,
                                      oportunidadId:item.oportunidadeId.toString(),
                                      plataforma:item.plataforma,
                                      colorBoton:colorBoton
                                      });
                                });
                              }

                              setAgenda(payload);
                        }

                    
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
