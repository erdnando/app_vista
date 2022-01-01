import React, { useContext } from 'react';
import { FlatList, SectionList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CustomIcon from '../../theme/CustomIcon';
import { Spacer } from '../Spacer';
import { IconoActualizacion } from './IconoActualizacion';




export const ListActualizaciones = ( ) => {

  interface LastUpdates{
    id:string,
    tipo:string,
    dia:string;
    hora:string;
    descripcion:string;
    color:string;
    icon:string;
    diaVisible:boolean;
}

const Data:LastUpdates[] = [
    {
        id:'1',
        tipo:'ALERT',
        dia:'Hoy',
        hora: '13:01:45',
        descripcion:'Se ha habierto la posicion 345.',
        color: 'red',
        icon:'bx_bxs-message-alt-error',
        diaVisible:true

    },
    {
        id:'2',
        tipo:'SIMPLE',
        dia:'Hoy',
        hora: '13:11:25',
        descripcion:'Se ha habierto la posicion A32. Y la opcion 45',
        color: 'red',
        icon:'bx_bxs-message-alt-error',
        diaVisible:false
    },
    {
        id:'3',
        tipo:'EVENT',
        dia:'Ayer',
        hora: '13:23:45',
        descripcion:'Se ha habierto la posicion 89.',
        color: 'red',
        icon:'icomoon-free_hammer2',
        diaVisible:true
    },
    {
        id:'4',
        tipo:'EVENT',
        dia:'Ayer',
        hora: '13:23:45',
        descripcion:'Se ha habierto la posicion W321.',
        color: 'red',
        icon:'icomoon-free_hammer2',
        diaVisible:false
    },
    {
        id:'5',
        tipo:'EVENT',
        dia:'Ayer',
        hora: '13:23:45',
        descripcion:'Se ha habierto la posicion W321.',
        color: 'red',
        icon:'icomoon-free_hammer2',
        diaVisible:false
    },
    {
        id:'6',
        tipo:'EVENT',
        dia:'Ayer',
        hora: '13:23:45',
        descripcion:'Se ha habierto la posicion W321.',
        color: 'red',
        icon:'icomoon-free_hammer2',
        diaVisible:false
    },
    {
        id:'7',
        tipo:'EVENT',
        dia:'Ayer',
        hora: '13:23:45',
        descripcion:'Se ha habierto la posicion W321.',
        color: 'red',
        icon:'icomoon-free_hammer2',
        diaVisible:false
    },
    {
      id:'8',
      tipo:'EVENT',
      dia:'Ayer',
      hora: '13:23:45',
      descripcion:'Se ha habierto la posicion 8.',
      color: 'red',
      icon:'icomoon-free_hammer2',
      diaVisible:false
  },
]

const renderUpdateItem = (updateItem:LastUpdates) =>{
    return (
      
        <View style={{flexDirection:'row',justifyContent:'flex-end',backgroundColor:'#BCC1CB'}}>
            <View style={{width:'11%',backgroundColor:'#BCC1CB'}}>
                {/* label hoy/ayer */}
                <View  style={{left:-8,elevation:0, backgroundColor:'#BCC1CB',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                   <Text style={{fontFamily:'Roboto-Bold'}}>{updateItem.diaVisible ? updateItem.dia : ''}</Text>
                </View>
               {/* linea */}
                <View style={{backgroundColor:'#838892',left:6, width:3,opacity:0.2,top:0, height:103,position:'absolute',}}></View>
            </View>

           {/* alerta */}
            <View style={{height:88, flexDirection:'row', width:'88%',   
                    borderWidth: 0,backgroundColor: (updateItem.tipo==='ALERT') ?'#B85050' : 'white', borderRadius:7,padding:5,elevation:6,
                    shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                    height: 1, width: 1
                }}}>

                <View style={{ flexDirection:'column', width:'82%',height:50,left:8,top:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>
                <Text style={{fontFamily:'Roboto-Bold', fontSize:14, color:(updateItem.tipo==='ALERT') ?'#F8BBBB' : 'grey'}}>{updateItem.hora}</Text>
                <Text style={{fontFamily:'Roboto-Regular', fontSize:14, color:(updateItem.tipo==='ALERT') ?'#FFFFFF' : 'black',marginTop:8,width:'89%'}}>{updateItem.descripcion}</Text>
                </View>

                
              {
                (updateItem.tipo==='ALERT' || updateItem.tipo==='EVENT') ?
                <IconoActualizacion icono={updateItem.icon} color={(updateItem.tipo==='ALERT') ? 'white' : '#68AABF'} 
                background= {(updateItem.tipo==='ALERT') ? '#F8BBBB' : '#BCC1CB'} ></IconoActualizacion>
                : <View></View>
              }
                 
            </View>
        </View>
        
    )
}

const renderSeparator = () =>{
    return (
        <View style={{width:3,opacity:0.2, justifyContent:'flex-end',left:10, backgroundColor:'#838892'}}>
            <Spacer height={10} ></Spacer>
        </View>
    )
}

    return (
      <View style={{flexGrow:1,backgroundColor:'#BCC1CB', justifyContent:'center',alignItems:'flex-start',alignContent:'flex-end', top:95+30, width:'90%',}}>
        
        <FlatList data={Data} 
        renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
        keyExtractor={(item) => item.id} 
        ItemSeparatorComponent={ () => renderSeparator()}
        />
     
      
    </View>
    )
}
