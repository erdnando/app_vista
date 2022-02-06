import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View, Animated, Easing, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNotificaciones } from '../../hooks/useNotificaciones';
import { NotificacionByLoginAux } from '../../models/response/NotificacionesByLoginAux';
import { GeneralContext } from '../../state/GeneralProvider';
import { Loading } from '../Loading';
import { Spacer } from '../Spacer';
import { IconoActualizacion } from '../ultimasActualizaciones/IconoActualizacion';



export const ListNotificaciones = ( ) => {



    const { arrNotificaciones, } = useNotificaciones(); 
    const {flags  } = useContext( GeneralContext );



    const renderUpdateItem = (updateItem:NotificacionByLoginAux) =>{
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

    const [fadeValue, setfadeValue] = useState(new Animated.Value(0))
    

   let transformStyle ={...styles.card,  }

   useEffect(() => {

        Animated.timing(fadeValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver:true
        }).start()

   }, [])

  
    if(flags.isLoading){
       return <Loading color='orange'></Loading>
    }else{
            return (
            <Animated.View  style={{...transformStyle,opacity:fadeValue}}>
                
                
                <FlatList data={arrNotificaciones} 
                renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                keyExtractor={(item,index) => item.id + index} 
                ItemSeparatorComponent={ () => renderSeparator()}
                />
            
            
            </Animated.View>
            )
       }
}


const styles = StyleSheet.create({
    card:{
        flexGrow:1,backgroundColor:'#BCC1CB', justifyContent:'center',alignItems:'flex-start',
        alignContent:'flex-end', top:50, width:'100%',
    },
});