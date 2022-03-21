
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { HeaderTitle } from '../HeaderTitle';
import { Spacer } from '../Spacer';
import { ListOportunidades } from './ListOportunidades';

interface Props{
    height:number
  }

export const OportunidadesDia = ( ) => {

  const { agenda,setAgenda } = useContext( GeneralContext )

  const armaFecha = (fecha:string) => {
    let arrFecha= fecha.split('-');
    return arrFecha[2] +' de '+ armaMes(arrFecha[1])+ ' de '+ arrFecha[0] ;//'08 de enero de 2022';
  }

  const armaMes = (month:string) => {

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

  
  
    
    return  (<View style={{flex:1, backgroundColor:'#BCC1CB', top:40,  
                        width:'100%',   alignItems:'center',alignContent:'flex-start'}}>
                    <HeaderTitle label={armaFecha(agenda.selectedDate)} top={20} fontSize={18}></HeaderTitle>
                    <Spacer height={20}></Spacer>
     
                    { 
                      (agenda.markedDates[agenda.selectedDate] != undefined) ?
                      ( 
                        <ListOportunidades></ListOportunidades>
                      )
                    : (<View style={{flex:1,justifyContent:'flex-start',alignContent:'flex-start',marginTop:50,}}>
                      {/* <Spacer height={40}></Spacer> */}
                       <Text style={{fontFamily:'Roboto-Bold', fontSize:18,color:'#838892'}}>Sin eventos</Text>
                      </View>)
                    }
                   
              </View>
           )
}
