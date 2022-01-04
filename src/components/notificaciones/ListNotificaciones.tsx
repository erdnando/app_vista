import React, { useContext } from 'react';
import { FlatList, SectionList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CustomIcon from '../../theme/CustomIcon';
import { Spacer } from '../Spacer';
import { IconoActualizacion } from '../ultimasActualizaciones/IconoActualizacion';
// import { IconoActualizacion } from './IconoActualizacion';




export const ListNotificaciones = ( ) => {

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
        descripcion:'Se ha habierto la posicion A32x. Y la opcion 45',
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
        descripcion:'Se ha habierto la posicion 89.',
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
        descripcion:'Se ha habierto la posicion W321.',
        color: 'grey',
        background:'#BCC1CB',
        icon:'icomoon-free_hammer2',
        diaVisible:false
    },
    {
        id:'5',
        tipo:'EVENT',
        dia:'Ayer',
        hora: 'Hoje. 00:00',
        descripcion:'Se ha habierto la posicion W321.',
        color: 'grey',
        background:'#BCC1CB',
        icon:'ic_baseline-lightbulb',
        diaVisible:false
    },
    {
        id:'6',
        tipo:'EVENT',
        dia:'Ayer',
        hora: 'Hoje. 00:00',
        descripcion:'Se ha habierto la posicion W321.',
        color: 'grey',
        background:'#BCC1CB',
        icon:'icomoon-free_hammer2',
        diaVisible:false
    },
    {
        id:'7',
        tipo:'EVENT',
        dia:'Ayer',
        hora: 'Hoje. 00:00',
        descripcion:'Se ha habierto la posicion W321.',
        color: 'grey',
        background:'#BCC1CB',
        icon:'icomoon-free_hammer2',
        diaVisible:false
    },
    {
      id:'8',
      tipo:'EVENT',
      dia:'Ayer',
      hora: 'Hoje. 00:00',
      descripcion:'Se ha habierto la posicion 8.',
      color: 'grey',
      background:'#BCC1CB',
      icon:'icomoon-free_hammer2',
      diaVisible:false
  },
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
      <View style={{flexGrow:1,backgroundColor:'#BCC1CB', justifyContent:'center',alignItems:'flex-start',
                    alignContent:'flex-end', top:50, width:'100%',}}>
        
        <FlatList data={Data} 
        renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
        keyExtractor={(item) => item.id} 
        ItemSeparatorComponent={ () => renderSeparator()}
        />
     
      
    </View>
    )
}
