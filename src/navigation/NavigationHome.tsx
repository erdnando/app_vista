import React, { useContext } from 'react';  
import {  Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colores, gstyles } from '../theme/appTheme';
import { AgendaScreen } from '../screens/home/AgendaScreen';
import { ParecerScreen } from '../screens/home/ParecerScreen';
import { RelatorioScreen } from '../screens/home/RelatorioScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DrawerScreenProps } from '@react-navigation/drawer';
import CustomIcon from '../theme/CustomIcon';
import { OpcionBottomTab } from '../components/login/OpcionBottomTab';
import { OpcionHeader } from '../components/login/OpcionHeader';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { GeneralContext } from '../state/GeneralProvider';
import { ContactoScreen } from '../screens/home/ContactoScreen';
import { TitleApp } from '../components/TitleApp';
import { useSearch } from '../hooks/useSearch';
import { ModalSearchResultados } from '../components/search/ModalSearchResultados';


const Tab = createBottomTabNavigator();
interface Props extends DrawerScreenProps<any, any>{};


export const NavigationHome = ( { navigation }:Props) => {

  const { top } = useSafeAreaInsets();
  //call global state
  const { usuario,flags,setFlags,setTabSelected,tabSelected, setCodigoBusqueda} = useContext(GeneralContext);
  const { getResultadoBusqueda } = useSearch(); 

  //terciario
  if( usuario.tipo === 1){
      return(
        <Tab.Navigator  sceneContainerStyle={{ backgroundColor:'transparent',  }}  
        screenOptions={({route}) => ({
                tabBarActiveTintColor:colores.primary,
                tabBarInactiveTintColor:'white',
                tabBarStyle:{
                    backgroundColor: colores.bottomBar,
                    borderTopColor: colores.bottomBar,
                    borderTopWidth:1,
                    borderBottomWidth:1,
                    elevation:0,
                    height:Platform.OS === 'ios' ? 72 : 60
                },
                tabBarLabelStyle:{
                fontSize:13,
                },
                headerShown:true,
                tabBarIcon: ({color, focused, size }) =>{
                    return <OpcionBottomTab routeName={route.name} color={color} ></OpcionBottomTab>
                },
                header:
                  () => {
                    return <View style={{alignSelf:'flex-start',alignContent:'center',justifyContent:'center', 
                                        flexDirection:'row',top:top,backgroundColor:colores.topBar, height:66}}>
                                
                               { flags.verDetalleAgenda ?   
                                  <OpcionHeader iconName='ic_round-arrow-back' color={colores.primary}  // back option 
                                      onPress={() =>{ 
                                        const payload= flags;
                                        payload.verDetalleAgenda=false;
                                        setFlags(payload);
                                      }} /> : 
                                    
                                    <OpcionHeader iconName='ic_baseline-menu' color={colores.primary}  //menu hamburguesa
                                      onPress={() =>{ 
                                        navigation.toggleDrawer(); 
                                      }} />
                                }
                                  

                                {/* logo app/ menu option */}
                                <View style={{flex:1, left:24,top:15 }}>
                                   <TitleApp></TitleApp>
                                </View>
                              
                              
                                <View style={{ flexDirection:'row',alignSelf:'flex-end', top:-20   }} >  
                                    {/* notificaciones */}
                                      <TouchableOpacity onPress={() =>{  
                                            setTabSelected('Notificaciones');
                                            const payload= flags;
                                            payload.isNotificaciones=!flags.isNotificaciones;
                                            payload.verDetalleAgenda=false;
                                            setFlags(payload);
                                      }}>
                                        
                                          {/* <Text><CustomIcon name='clarity_notification-solid-badged' size={30} color='white' style={{padding:150}} ></CustomIcon></Text> */}
                                          <Image style={{...gstyles.avatar,height:28,width:25, top:3,tintColor:'white'}} 
                                              source={require('../assets/clarity_notification-solid-badged.png')}  >
                                          </Image>
                                      </TouchableOpacity>


                                      {/* perfil */}
                                      <TouchableOpacity style={{ marginRight:10, marginLeft:16, marginEnd:16 }} 
                                      onPress={() =>{  navigation.toggleDrawer(); }}>
                                        <Text>
                                            <CustomIcon name='gridicons_user' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                        </Text>
                                      </TouchableOpacity>

                                      {/* search just on agenda detail */}
                                      { flags.verDetalleAgenda ?   
                                         <TouchableOpacity style={{ marginEnd:16 }} 
                                         onPress={() =>{ 

                                          
                                              setCodigoBusqueda('xxx');
                                                  //call search engine api
                                              const payload= flags;
                                              payload.isLoadingSearch=true;
                                              payload.resultadosBusquedaVisible=true;//openModal
                                              setFlags(payload);

                                              console.log('searching...')
                                              
                                              setTimeout(
                                                () => { 
                                                  getResultadoBusqueda();//consume api
                                                },
                                                3000
                                              )   


                                          }}>
                                           <Text>
                                               <CustomIcon name='gg_search' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                           </Text>
                                                                                    
                                         </TouchableOpacity> 
                                         : <View></View>
                                      }




                                </View>

                                
                          </View>
                  }
                ,

        })} >

        <Tab.Screen name="HomeScreen" options={{ title:'' }}   component={ HomeScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => {  
                      setTabSelected('Logo');   
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);

                       }, })} />
        <Tab.Screen name="AgendaScreen" options={{ title:'' }} component={ AgendaScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => {   
                      setTabSelected('Agenda');   
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);  }, })} />
        <Tab.Screen name="ParecerScreen" options={{ title:'' }} component={ ParecerScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => { 
                      setTabSelected('Parecer');  
                    const payload= flags;
                      payload.isNotificaciones=false;
                      setFlags(payload);
                        }, })} />
        <Tab.Screen  name="ContactoScreen" options={{ title:'' }} component={ ContactoScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => { 
                      setTabSelected('Contacto');  
                     const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);
                    }, })} />
        <Tab.Screen name="RelatorioScreen" options={{ title:'' }} component={ RelatorioScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => { 
                      setTabSelected('Relatorios'); 
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);
                    }, })} />

      </Tab.Navigator>
      )
  }
  else{
      //colaborador
      return (
        <Tab.Navigator  sceneContainerStyle={{ backgroundColor:'transparent',  }}  
            
            screenOptions={({route}) => ({
                    tabBarActiveTintColor:colores.primary,
                    tabBarInactiveTintColor:'white',
                    tabBarStyle:{
                        backgroundColor: colores.bottomBar,
                        borderTopColor: colores.bottomBar,
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        elevation:0,
                        height:Platform.OS === 'ios' ? 72 : 60
                    },
                    tabBarLabelStyle:{
                    fontSize:13,
                    },
                    headerShown:true,
                    tabBarIcon: ({color, focused, size }) =>{
                        return <OpcionBottomTab routeName={route.name} color={color} ></OpcionBottomTab>
                    },
                    header:
                      () => {
                        return <View style={{alignSelf:'flex-start',alignContent:'center',justifyContent:'center', 
                                            flexDirection:'row',top:top,backgroundColor:colores.topBar, height:66}}>
                                   
                                   { flags.verDetalleAgenda ?   
                                      <OpcionHeader iconName='ic_round-arrow-back' color={colores.primary}  // back option 
                                          onPress={() =>{ 
                                            const payload= flags;
                                            payload.verDetalleAgenda=false;
                                            setFlags(payload);
                                          }} /> : 
                                        
                                        <OpcionHeader iconName='ic_baseline-menu' color={colores.primary}  //menu hamburguesa
                                          onPress={() =>{ 
                                            navigation.toggleDrawer(); 
                                          }} />
                                   }

                                    {/* logo app */}
                                    <View style={{flex:1, left:24,top:15 }}>
                                          <TitleApp></TitleApp>
                                            {/* <Image style={{...gstyles.avatar,height:24*1.15,width:79.89*1.15, top:3}} 
                                               source={require('../assets/horizontal-logo.png')}  >
                                            </Image> */}
                                        
                                    </View>
                                  
                                  
                                    <View style={{ flexDirection:'row',alignSelf:'flex-end', top:-20   }} >  
                                        {/* notificaciones */}
                                        <TouchableOpacity onPress={() =>{  
                                              setTabSelected('Notificaciones');
                                              const payload= flags;
                                              payload.isNotificaciones=!flags.isNotificaciones;
                                              payload.verDetalleAgenda=false;
                                              setFlags(payload);
                                        }}>
                                          {/* <Text><CustomIcon name='clarity_tasks-solid' size={30} color='white' style={{padding:150}} ></CustomIcon></Text> */}
                                          <Image style={{...gstyles.avatar,height:28,width:25, top:3,tintColor:'white'}} 
                                              source={require('../assets/clarity_notification-solid-badged.png')}  >
                                          </Image>
                                        </TouchableOpacity>

                                        {/* perfil */}
                                        <TouchableOpacity style={{ marginRight:10, marginLeft:16, marginEnd:16 }} 
                                        onPress={() =>{  navigation.toggleDrawer(); }}>
                                          <Text>
                                              <CustomIcon name='gridicons_user' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                          </Text>
                                        </TouchableOpacity>


                                      {/* search just on agenda detail */}
                                      { flags.verDetalleAgenda ?   
                                         <TouchableOpacity style={{ marginEnd:16 }} 
                                         onPress={() =>{ 

                                          setCodigoBusqueda('xxx');
                                                  //call search engine api
                                              const payload= flags;
                                              payload.isLoadingSearch=true;
                                              payload.resultadosBusquedaVisible=true;//openModal
                                              setFlags(payload);

                                              console.log('searching...')
                                              
                                              setTimeout(
                                                () => { 
                                                  getResultadoBusqueda();//consume api
                                                },
                                                3000
                                              ) 

                                              
                                          }}>
                                           <Text>
                                               <CustomIcon name='gg_search' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                           </Text>
                                         </TouchableOpacity> 
                                         : <View></View>
                                      }


                                      </View>
                              </View>
                      }
                    ,
            })} >

          <Tab.Screen name="HomeScreen" options={{ title:'' }}  component={ HomeScreen } listeners={({ navigation, route }) => ({
                      tabPress: e => {   
                        setTabSelected('Logo');   
                        const payload= flags;
                        payload.isNotificaciones=false;
                        payload.verDetalleAgenda=false;
                        setFlags(payload);
                        }, })} />
          <Tab.Screen name="AgendaScreen" options={{ title:'' }} component={ AgendaScreen } listeners={({ navigation, route }) => ({
                      
                      tabPress: e => {   
                        setTabSelected('Agenda');   
                        const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);
                         }, })} />
          <Tab.Screen name="ParecerScreen" options={{ title:'' }} component={ ParecerScreen } listeners={({ navigation, route }) => ({
                      tabPress: e => { setTabSelected('Parecer');  
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);
                      }, })} />
          <Tab.Screen name="RelatorioScreen" options={{ title:'' }} component={ RelatorioScreen } listeners={({ navigation, route }) => ({
                      tabPress: e => { setTabSelected('Relatorios'); 
                      
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);
                      }, })} />
        </Tab.Navigator>
      );
}
}


