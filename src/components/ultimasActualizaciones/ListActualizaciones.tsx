import React, { useContext } from 'react';
import { FlatList, Image, Modal, Text, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { GeneralContext } from '../../state/GeneralProvider';
import { Spacer } from '../Spacer';
import { IconoActualizacion } from './IconoActualizacion';
import { Notificaciones } from '../../models/Notificaciones';
import { gstyles } from '../../theme/appTheme';
import { Loading } from '../Loading';

export const ListActualizaciones = ( ) => {

 const { ultimasActualizaciones,flags } = useContext( GeneralContext );


const renderUpdateItem = (updateItem:Notificaciones) =>{

   if(updateItem.tipo=='checkAll')return <View></View>

    return (
        <View style={{flexDirection:'row',justifyContent:'flex-end',backgroundColor:'#BCC1CB'}}>
            <View style={{width:'12%',backgroundColor:'#BCC1CB'}}>
                {/* label hoy/ayer */}
                <View  style={{left:-19,width:52,elevation:0, backgroundColor:'#BCC1CB',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                   <Text style={{fontFamily:'Roboto-Bold'}}>{updateItem.diaVisible ? updateItem.dia : ''}</Text>
                </View>
               {/* linea */}
                <View style={{backgroundColor:'#838892',left:3, width:3,opacity:0.2,top:0, height:103,position:'absolute',}}></View>
            </View>

           {/* alerta */}
            <View style={{height:88, flexDirection:'row', width:'83%',   
                    borderWidth: 0,backgroundColor:updateItem.color=='#838892' ? 'white':updateItem.color ,opacity:1, borderRadius:7,padding:5,elevation:6,
                    shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                    height: 1, width: 1
                     }
                   }}>

                <View style={{ flexDirection:'column', width:'82%',height:50,left:8,top:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>
                    <Text style={{fontFamily:'Roboto-Bold', fontSize:14, color: updateItem.color=='red' ? 'white':'#565353'}}>{updateItem.hora}</Text>
                    <Text style={{fontFamily:'Roboto-Regular', fontSize:13, color:'black',marginTop:8,width:'80%'}}>{updateItem.descripcion}</Text>
                </View>

                
                <IconoActualizacion topIcon={25} rightIcon={10} right={26} icono={updateItem.icon} size={36} color={updateItem.background} 
                background= {updateItem.background} ></IconoActualizacion>
               
              
            </View>
            
        </View>
    )
}

const renderSeparator = () =>{
    return (
        <View style={{width:3,opacity:0, justifyContent:'flex-end',left:20, backgroundColor:'#838892'}}>
            <Spacer height={10} ></Spacer>
        </View>
    )
}

if(flags.isLoadingNotificaciones){
    return <Loading color='orange' backgroundColor='transparent' imageSize={0}></Loading>
             
  }


    if(ultimasActualizaciones.length>0)
   { return (
      <View style={{flexGrow:1,backgroundColor:'#BCC1CB', justifyContent:'center',alignItems:'flex-start',alignContent:'flex-end', top:95+30, width:'90%',}}>
        
        <FlatList data={ultimasActualizaciones} 
        renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
        keyExtractor={(item,index) => item.id + index} 
        ItemSeparatorComponent={ () => renderSeparator()}
        />
    </View>
    )}
    else{
        return (
            <View style={{ flexGrow:1, justifyContent:'center',alignContent:'center',backgroundColor:'transparent',top:80, }}>

            <View  style={gstyles.avatarContainer} >
              <Image style={{justifyContent:'center', alignItems:'center', width:100,height:100}} source={require('../../assets/vertical-logo.png')} ></Image>
              <Spacer height={40}></Spacer>
              <Text style={{fontFamily:'Roboto-Regular', fontSize:22,marginTop:8,width:'100%',textAlign:'center', color:'#838892'}}>Nenhuma actualizacoe</Text>
              
            </View>
           
        </View>    
        )
    }
}
