import React, { useContext } from 'react';
import { FlatList,  Text, TouchableOpacity, View } from 'react-native';
import { useAgenda } from '../../hooks/useAgenda';
import { GeneralContext } from '../../state/GeneralProvider';
import { Spacer } from '../Spacer';
import { LastUpdatesAgenda } from '../../models/LastUpdatesAgenda';

export const ListOportunidades = ( ) => {

  //call global state
  const { flags, setFlags,agenda,setAgenda} = useContext(GeneralContext);
  const { loadResumo, } = useAgenda();
//   const {lastUpdates } = useAgenda();
//   interface LastUpdates{
//     id:string,
//     tipo:string,
//     dia:string;
//     hora:string;
//     descripcion:string;
//     color:string;
//     icon:string;
//     horaVisible:boolean;
//     }

    // const Data:LastUpdates[] = [
    //     {
    //         id:'1',
    //         tipo:'EVENT',
    //         dia:'Hoy',
    //         hora: '8:00',
    //         descripcion:'Nombre dela empresa',
    //         color: 'red',
    //         icon:'bx_bxs-message-alt-error',
    //         horaVisible:true

    //     },
    //     {
    //         id:'2',
    //         tipo:'EVENT',
    //         dia:'Hoy',
    //         hora: '9:00',
    //         descripcion:'Nombre dela empresa',
    //         color: 'red',
    //         icon:'bx_bxs-message-alt-error',
    //         horaVisible:true
    //     },
    //     {
    //         id:'3',
    //         tipo:'EVENT',
    //         dia:'Ayer',
    //         hora: '9:00',
    //         descripcion:'Nombre dela empresa',
    //         color: 'red',
    //         icon:'icomoon-free_hammer2',
    //         horaVisible:false
    //     },
    //     {
    //         id:'4',
    //         tipo:'EVENT',
    //         dia:'Ayer',
    //         hora: '9:00',
    //         descripcion:'Nombre dela empresa',
    //         color: 'red',
    //         icon:'icomoon-free_hammer2',
    //         horaVisible:false
    //     },
    //     {
    //         id:'5',
    //         tipo:'EVENT',
    //         dia:'Ayer',
    //         hora: '9:00',
    //         descripcion:'Nombre dela empresa',
    //         color: 'red',
    //         icon:'icomoon-free_hammer2',
    //         horaVisible:false
    //     },
    //     {
    //         id:'6',
    //         tipo:'EVENT',
    //         dia:'Ayer',
    //         hora: '13:00',
    //         descripcion:'Nombre dela empresa',
    //         color: 'red',
    //         icon:'icomoon-free_hammer2',
    //         horaVisible:true
    //     },
    //     {
    //         id:'7',
    //         tipo:'EVENT',
    //         dia:'Ayer',
    //         hora: '13:00',
    //         descripcion:'Nombre dela empresa',
    //         color: 'red',
    //         icon:'icomoon-free_hammer2',
    //         horaVisible:false
    //     },
    //     {
    //     id:'8',
    //     tipo:'EVENT',
    //     dia:'Ayer',
    //     hora: '13:00',
    //     descripcion:'Nombre dela empresa',
    //     color: 'red',
    //     icon:'icomoon-free_hammer2',
    //     horaVisible:false
    // },
    // ]

    const renderUpdateItem = (updateItem:LastUpdatesAgenda) =>{
        
        
        return (
        
            <View style={{flexDirection:'row',justifyContent:'flex-end',backgroundColor:'#BCC1CB',}}>
                <View style={{width:'11%',backgroundColor:'#BCC1CB'}}>
                    {/* label hoy/ayer */}
                    <View  style={{left:-6,elevation:0, backgroundColor:'#BCC1CB',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Roboto-Bold'}}>{updateItem.horaVisible ? updateItem.hora : ''}</Text>
                    </View>
                {/* linea */}
                    <View style={{backgroundColor:'#838892',left:11, width:3,opacity:0.2,top:0, height:103,position:'absolute',}}></View>
                </View>

            {/* alerta */}
                <View style={{height:88, flexDirection:'row', width:'88%',   
                        borderWidth: 0,backgroundColor: 'white', borderRadius:7,padding:5,elevation:6,
                        shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                        height: 1, width: 1
                    }}}>

                    <View style={{ flexDirection:'column', width:'82%',height:40,left:8,top:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>
                        <Text style={{fontFamily:'Roboto-Regular', fontSize:14, color: 'black'}}>{updateItem.descripcion}</Text>
                        <Text style={{fontFamily:'Roboto-Bold', fontSize:14, color:'grey',marginTop:8,width:'89%'}}>{updateItem.oportunidadId+'/'+updateItem.plataforma}</Text>
                    </View>

                    
                {
                    (updateItem.tipo==='EVENT') ?

                        <View style={{ flex:1, alignItems:'center',justifyContent:'center', alignContent:'center' }}>
                            <TouchableOpacity  style={{alignSelf:'stretch', marginHorizontal:0 , borderRadius: 100,  backgroundColor: updateItem.colorBoton==''? 'black':updateItem.colorBoton,
                            height:33,width:100,right:60, justifyContent:'center',  }} 
                            onPress={()=>{

                                console.log('ver detalle agenda dia..');
                     
                                const payload= flags;
                               // payload.isLoading=true;
                                payload.resultadosAgendaVisible=true;//openModal agenda
                                setFlags(payload);

                                //selected oportunidad id
                                const payloadAgenda= agenda;
                                payloadAgenda.selectedOportunidadId=updateItem.oportunidadId;
                                setAgenda(payloadAgenda);

                                //load agenda tabs
                                loadResumo()

                            }} >
                                <Text style={{ fontFamily:'Roboto-Bold',fontSize:12,  textAlign:'center',color:'black'}}>{updateItem.textButton}</Text>
                            </TouchableOpacity>
                    </View>
                
                    : <View></View>
                }
                    
                </View>
            </View>
            
        )
    }

    const renderSeparator = () =>{
        return (
            <View style={{width:3,opacity:0.2, justifyContent:'flex-end',left:10, backgroundColor:'#838892'}}>
                <Spacer height={5} ></Spacer>
            </View>
        )
    }


    return (
      <View style={{flexGrow:1,backgroundColor:'#BCC1CB', justifyContent:'center',alignItems:'flex-start',
      alignContent:'flex-end', width:'90%',marginBottom:90}}>
        
        <FlatList data={agenda.lastUpdates} 
        renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
        keyExtractor={(item,index) => item.id + index} 
        ItemSeparatorComponent={ () => renderSeparator()}
        />
     
      
    </View>
    )
}
