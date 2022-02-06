import React, { useContext } from 'react';
import { FlatList, SectionList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { HeaderTitle } from '../HeaderTitle';
import { Spacer } from '../Spacer';
import { IconoActualizacion } from '../ultimasActualizaciones/IconoActualizacion';


export const DetalleAgenda = ( ) => {

  //call global state
  const { agenda} = useContext(GeneralContext);

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

  interface LastUpdates{
    id:string,
    tipo:string,
    dia:string;
    hora:string;
    descripcion:string;
    color:string;
    background:string;
    icon:string;
    diaVisible:boolean;
}

  const Data:LastUpdates[] = [
        {
            id:'1',
            tipo:'SIMPLE',
            dia:'Hoy',
            hora: 'Hoje. 00:00',
            descripcion:'Lorem ipsum dolor sit amet adipis',
            color: 'red',
            background:'#F8BBBB',
            icon:'bx_bxs-message-alt-error',
            diaVisible:true

        },
        {
            id:'2',
            tipo:'SIMPLE',
            dia:'Hoy',
            hora: 'Hoje. 00:00',
            descripcion:'Se ha abierto la posicion A32x. Y la opcion 45',
            color: 'red',
            background:'#F8BBBB',
            icon:'bx_bxs-message-alt-error',
            diaVisible:false
        },
        {
            id:'3',
            tipo:'EVENT',
            dia:'Ayer',
            hora: 'Hoje. 00:00',
            descripcion:'Se ha abierto la posicion 89.',
            color: 'grey',
            background:'#BCC1CB',
            icon:'ic_baseline-lightbulb',
            diaVisible:true
        },
        {
            id:'4',
            tipo:'EVENT',
            dia:'Ayer',
            hora: 'Hoje. 00:00',
            descripcion:'Se ha abierto la posicion W321.',
            color: 'grey',
            background:'#BCC1CB',
            icon:'icomoon-free_hammer2',
            diaVisible:false
        }
  ]

  const renderUpdateItem = (updateItem:LastUpdates) =>{
    return (
      
        <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end'}}>
           

           {/* alerta */}
            <View style={{height:88, flexDirection:'row', width:'100%',paddingHorizontal:0, justifyContent:'center',
            alignContent:'space-between',  
                    borderWidth: 0,backgroundColor: 'white', borderRadius:1,padding:5,elevation:6,
                    shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                    height: 1, width: 1,
                }}}>

                <View style={{width:'15%',backgroundColor:'transparent'}}>
                    <IconoActualizacion topIcon={20} rightIcon={-14} right={5}  icono={updateItem.icon} size={30} 
                                        color={ updateItem.color} background= { updateItem.background} ></IconoActualizacion>
                </View>
               

                <View style={{ flexDirection:'column', height:50,left:15,top:6,width:'65%', justifyContent:'flex-start',  alignItems:'flex-start'}}>
                    <Text style={{fontFamily:'Roboto-Bold', fontSize:14, color: 'grey'}}>{updateItem.hora}</Text>
                    <Text style={{fontFamily:'Roboto-Regular', fontSize:14, color: 'black',marginTop:8,width:'88%'}}>{updateItem.descripcion}</Text>
                </View>

                <View style={{width:'15%',backgroundColor:'transparent'}}>
                    <IconoActualizacion topIcon={15} rightIcon={-14} right={5} icono='carbon_overflow-menu-vertical' size={30} color={ 'grey'} background= { '#BCC1CB'} ></IconoActualizacion>
                </View>
                
                
            </View>
        </View>
        
    )
  }

  const renderSeparator = () =>{
    return (
        <View style={{width:3,opacity:0.2, justifyContent:'flex-end',left:10, backgroundColor:'#838892'}}>
            <Spacer height={2} ></Spacer>
        </View>
    )
  }

    return (
    //   <View style={{flexGrow:1,backgroundColor:'#BCC1CB', justifyContent:'center',alignItems:'flex-start',
    //                 alignContent:'flex-end', top:50, width:'100%',}}> 
    //     <FlatList data={Data} 
    //     renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
    //     keyExtractor={(item,index) => item.id + index} 
    //     ItemSeparatorComponent={ () => renderSeparator()}
    //     />
    // </View>
        <View style={{flex:1, backgroundColor:'#BCC1CB', top:40,  
                        width:'100%',   alignItems:'center',alignContent:'flex-start'}}>
                    <HeaderTitle label={armaFecha(agenda.selectedDate)} top={20} fontSize={18}></HeaderTitle>
                    <Spacer height={20}></Spacer>
     
                    <FlatList data={Data} 
                        renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                        keyExtractor={(item,index) => item.id + index} 
                        ItemSeparatorComponent={ () => renderSeparator()}
                    />
                   
        </View>
    )
}
