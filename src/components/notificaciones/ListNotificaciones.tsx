import React, { useContext, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { FlatList, Text, View, Animated, StyleSheet, Image, Platform, TouchableHighlight,TouchableOpacity,StatusBar } from 'react-native';
import { NotificacionByLoginAux } from '../../models/response/NotificacionesByLoginAux';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import { Loading } from '../Loading';
import { Spacer } from '../Spacer';
import { IconoActualizacion } from '../ultimasActualizaciones/IconoActualizacion';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Notificaciones } from '../../models/Notificaciones';
import Toast from 'react-native-toast-message';
import { useNotificaciones } from '../../hooks/useNotificaciones';

export const ListNotificaciones = ( ) => {

    const {flags,notificaciones,setNotificaciones,setFlags  } = useContext( GeneralContext );
    const [checked, setchecked] = useState(false);
    const { existsNotification,deleteNotification,deleteAllNotification } = useNotificaciones(); 


    const renderUpdateItem = (updateItem:NotificacionByLoginAux) =>{

        const swipeRight = (progress,dragX) =>{
            const scale = dragX.interpolate({
              inputRange:[-200,0],
              outputRange:[1,0.5],
              extrapolate:'clamp'
            })
            return(
              <Animated.View style={{backgroundColor:'red',width:"100%",justifyContent:'center'}}>
                <Animated.Text style={{marginLeft:'auto',marginRight:50, fontSize:15, fontWeight:'bold',transform:[{scale}]}}>
                    Delete Item
                </Animated.Text>
              </Animated.View>
            )
        }

        const removeItemOnce=(arr:Notificaciones[], value:NotificacionByLoginAux) =>{
            var index = arr.indexOf(value);
            if (index > -1) {
              arr.splice(index, 1);
              console.log(value)
            }
            return arr;
          }

        const height = new Animated.Value(70)

        const animatedDelete=() => {
            Animated.timing(height,{
                toValue: 0,
                duration: 250,
                useNativeDriver:false
            }).start(() => {
                console.log('deleting..')
                const payload= notificaciones;
             
                console.log(updateItem.id)
                deleteNotification(updateItem.id);
                setNotificaciones(removeItemOnce(payload,updateItem))
            })
          }

        if(updateItem.tipo=='checkAll')
        return (
            <View>
                <Animated.View style={{flex:1,flexDirection:'row', height:updateItem.height, alignItems:'center',borderBottomWidth:1,backgroundColor:'white'}}>
                <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end'}}>
                {/* alerta check all*/}
                    <View style={{height:88, flexDirection:'row', width:'100%',paddingHorizontal:0, justifyContent:'center',
                    alignContent:'space-between',  
                            borderWidth: 0,backgroundColor: '#FF9029', borderRadius:1,padding:5,elevation:6,
                            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                            height: 1, width: 1,
                        }}}>

                        <View style={{width:'15%',backgroundColor:'transparent'}}>
                            <IconoActualizacion topIcon={20} rightIcon={-14} right={5}  icono={updateItem.icon} size={30} 
                                                color={ updateItem.color} background= { updateItem.background} ></IconoActualizacion>
                        </View>
                    

                        <View style={{ flexDirection:'column', height:50,left:15,top:6,width:'65%', justifyContent:'flex-start',  alignItems:'flex-start'}}>
                            <Text style={{fontFamily:'Roboto-Bold', fontSize:16, color: 'grey'}}>{updateItem.hora}</Text>
                            <Text style={{fontFamily:'Roboto-Regular', fontSize:14,fontWeight:'bold', color: 'black',marginTop:8,width:'88%'}}>{updateItem.descripcion}</Text>
                        </View>

                        <View style={{width:'15%',backgroundColor:'transparent', alignContent:'center',alignItems:'center',justifyContent:'center',right:3}}>
                        <CheckBox
                            style={styles.checkbox}
                        boxType='square'
                            disabled={false}
                            value={checked}
                            onValueChange={(value:boolean)=>{
                                setchecked(value)
                                deleteAllNotification()
                                console.log('deleting all..')
                                Toast.show({type: 'ko',props: { mensaje: 'Marcando todos los mensajes como leidos' }});
                                setTimeout(
                                    () => { 
                                        let payload= notificaciones;
                                        payload=[]
                                        setNotificaciones(payload)
                                        existsNotification()

                                        const payloadf = flags;
                                        payloadf.existsNotification=false;
                                        setFlags(payloadf);
                                    },
                                    1000
                                  )   
                                
                            }}
                            />
                        </View>
                        
                        
                    </View>
                </View>
                </Animated.View>
            </View>
        )
        else
        return (
            <Swipeable renderRightActions={swipeRight} rightThreshold={-200} onSwipeableOpen={animatedDelete}>
            <Animated.View style={{flex:1,flexDirection:'row', height:updateItem.height, alignItems:'center',borderBottomWidth:1,backgroundColor:'white'}}>
            <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end'}}>
            {/* alerta */}
                <View style={{height:updateItem.height, flexDirection:'row', width:'100%',paddingHorizontal:0, justifyContent:'center',
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
            </Animated.View>
            </Swipeable>
        )
        
    }

    const renderSeparator = () =>{
        return (
            <View style={{width:'100%',opacity:0.2, justifyContent:'flex-end',left:10, backgroundColor:'#838892'}}>
                <Spacer height={4} ></Spacer>
            </View>
        )
    }

 
  
    if(flags.isLoadingNotificaciones){
       return <Loading color='orange'></Loading>
    }else{
        if(notificaciones.length>0)
            return (
            <View style={{marginTop:Platform.OS==='ios' ? 51 : 5}}>
                
                <FlatList data={notificaciones} 
                renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                keyExtractor={(item,index) => item.id + index} 
                ItemSeparatorComponent={ () => renderSeparator()}
                />
               
            
            
            </View>
            )
            else
            {
                return (
                    <View style={{ flex:1, justifyContent:'center',alignContent:'center',backgroundColor:'#EDF0F5' }}>

                    <View  style={gstyles.avatarContainer} >
                      <Image style={{justifyContent:'center', alignItems:'center', width:160,height:160}} source={require('../../assets/vertical-logo.png')} ></Image>
                      <Spacer height={40}></Spacer>
                      <Text style={{fontFamily:'Roboto-Regular', fontSize:22,marginTop:8,width:'100%',textAlign:'center', color:'#838892'}}>Nenhuma notificacao</Text>
                      
                    </View>
                   
                </View>    
                )
            }
       }
}


const styles = StyleSheet.create({
    card:{
        flexGrow:1,backgroundColor:'#BCC1CB', justifyContent:'center',alignItems:'flex-start',
        alignContent:'flex-end', top:52, width:'100%',
    },
    checkbox:{
        backgroundColor : Platform.OS==='ios' ? 'white' : 'transparent',
        transform : Platform.OS==='ios' ? [{ scaleX: 1 }, { scaleY: 1 }] : [{ scaleX: 1.7 }, { scaleY: 1.7 }]
    }
});